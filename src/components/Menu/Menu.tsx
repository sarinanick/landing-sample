import React, { cloneElement, isValidElement, useEffect, useId, useRef, useState } from "react";
import "./Menu.css";

export type MenuPlacement = "bottom-start" | "bottom-end" | "top-start" | "top-end";

export type MenuItem = {
  value: string;
  label: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingText?: React.ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  dividerAfter?: boolean;
};

export type MenuProps = {
  trigger: React.ReactElement;
  items: MenuItem[];
  onSelect?: (value: string, item: MenuItem) => void;
  placement?: MenuPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  ariaLabel?: string;
  className?: string;
};

export function Menu({
  trigger,
  items,
  onSelect,
  placement = "bottom-start",
  open,
  defaultOpen = false,
  onOpenChange,
  ariaLabel = "منو",
  className = "",
}: MenuProps) {
  const menuId = useId();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const menuRef = useRef<HTMLSpanElement | null>(null);
  const isOpen = open ?? internalOpen;

  function setOpen(next: boolean) {
    setInternalOpen(next);
    onOpenChange?.(next);
  }

  useEffect(() => {
    if (!isOpen) return;

    function onDocumentClick(event: MouseEvent) {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target)) setOpen(false);
    }

    function onDocumentKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onDocumentKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onDocumentKeyDown);
    };
  }, [isOpen]);

  if (!isValidElement(trigger)) {
    throw new Error("Menu trigger must be a valid React element.");
  }

  const triggerElement = cloneElement(trigger, {
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    "aria-controls": isOpen ? menuId : undefined,
    onClick: (event: React.MouseEvent) => {
      trigger.props.onClick?.(event);
      setOpen(!isOpen);
    },
  });

  function focusItem(direction: 1 | -1) {
    const focusableItems = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>(".pm-menu__item:not(:disabled)") ?? []
    );
    if (focusableItems.length === 0) return;

    const currentIndex = focusableItems.findIndex((item) => item === document.activeElement);
    const nextIndex = currentIndex === -1
      ? 0
      : (currentIndex + direction + focusableItems.length) % focusableItems.length;

    focusableItems[nextIndex]?.focus();
  }

  return (
    <span
      ref={menuRef}
      className={["pm-menu-root", `pm-menu-root--${placement}`, className].filter(Boolean).join(" ")}
      data-component="Menu"
      data-placement={placement}
    >
      {triggerElement}

      {isOpen ? (
        <div
          id={menuId}
          className={["pm-menu", `pm-menu--${placement}`].join(" ")}
          role="menu"
          aria-label={ariaLabel}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              focusItem(1);
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              focusItem(-1);
            }
          }}
        >
          {items.map((item) => (
            <React.Fragment key={item.value}>
              <button
                type="button"
                className={["pm-menu__item", item.destructive ? "pm-menu__item--destructive" : ""].filter(Boolean).join(" ")}
                role="menuitem"
                disabled={item.disabled}
                onClick={() => {
                  if (!item.disabled) {
                    onSelect?.(item.value, item);
                    setOpen(false);
                  }
                }}
              >
                {item.leadingIcon ? (
                  <span className="pm-menu__item-leading" aria-hidden="true">{item.leadingIcon}</span>
                ) : (
                  <span className="pm-menu__item-leading pm-menu__item-leading--empty" />
                )}

                <span className="pm-menu__item-label">{item.label}</span>

                {item.trailingText ? (
                  <span className="pm-menu__item-trailing">{item.trailingText}</span>
                ) : null}
              </button>

              {item.dividerAfter ? <span className="pm-menu__divider" role="separator" /> : null}
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </span>
  );
}
