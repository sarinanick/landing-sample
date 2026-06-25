import React, { useEffect, useId, useRef } from "react";
import "./SideSheet.css";

export type SideSheetVariant = "modal" | "standard";
export type SideSheetPosition = "start" | "end";
export type SideSheetWidth = "compact" | "medium" | "expanded";

export type SideSheetAction = {
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type SideSheetProps = {
  open: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  actions?: SideSheetAction[];
  variant?: SideSheetVariant;
  position?: SideSheetPosition;
  width?: SideSheetWidth;
  closeOnScrimClick?: boolean;
  onClose?: () => void;
  className?: string;
};

/**
 * Persian Material SideSheet
 *
 * System target:
 * - Use for desktop/tablet filters, item details and secondary panels.
 * - Supports modal and standard variants.
 * - Supports start/end positions in RTL.
 * - Supports title, description, content and actions.
 */
export function SideSheet({
  open,
  title,
  description,
  children,
  actions = [],
  variant = "modal",
  position = "end",
  width = "medium",
  closeOnScrimClick = true,
  onClose,
  className = "",
}: SideSheetProps) {
  const titleId = useId();
  const descriptionId = useId();
  const sheetRef = useRef<HTMLElement | null>(null);
  const isModal = variant === "modal";

  useEffect(() => {
    if (!open || !isModal) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const firstButton = sheetRef.current?.querySelector<HTMLButtonElement>("button:not(:disabled)");
    firstButton?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose?.();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [open, isModal, onClose]);

  if (!open && isModal) return null;

  return (
    <div
      className={[
        "pm-side-sheet-layer",
        `pm-side-sheet-layer--${variant}`,
        `pm-side-sheet-layer--${position}`,
        open ? "pm-side-sheet-layer--open" : "pm-side-sheet-layer--closed",
      ].filter(Boolean).join(" ")}
      data-component="SideSheetLayer"
      data-variant={variant}
      data-position={position}
    >
      {isModal && open ? (
        <button
          type="button"
          className="pm-side-sheet__scrim"
          aria-label="بستن پنل"
          onClick={() => {
            if (closeOnScrimClick) onClose?.();
          }}
        />
      ) : null}

      <aside
        ref={sheetRef}
        className={[
          "pm-side-sheet",
          `pm-side-sheet--${variant}`,
          `pm-side-sheet--${position}`,
          `pm-side-sheet--${width}`,
          className,
        ].filter(Boolean).join(" ")}
        role={isModal ? "dialog" : "complementary"}
        aria-modal={isModal ? "true" : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        data-component="SideSheet"
        data-width={width}
      >
        {(title || description || onClose) ? (
          <header className="pm-side-sheet__header">
            <div className="pm-side-sheet__header-text">
              {title ? <h2 id={titleId} className="pm-side-sheet__title">{title}</h2> : null}
              {description ? <p id={descriptionId} className="pm-side-sheet__description">{description}</p> : null}
            </div>

            {onClose ? (
              <button type="button" className="pm-side-sheet__close" aria-label="بستن" onClick={onClose}>
                ×
              </button>
            ) : null}
          </header>
        ) : null}

        {children ? <div className="pm-side-sheet__content">{children}</div> : null}

        {actions.length > 0 ? (
          <footer className="pm-side-sheet__actions">
            {actions.map((action, index) => (
              <button
                key={index}
                type="button"
                className="pm-side-sheet__action"
                disabled={action.disabled}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </footer>
        ) : null}
      </aside>
    </div>
  );
}
