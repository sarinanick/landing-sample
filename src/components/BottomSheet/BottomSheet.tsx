import React, { useEffect, useId, useRef } from "react";
import "./BottomSheet.css";

export type BottomSheetVariant = "modal" | "standard";
export type BottomSheetHeight = "content" | "half" | "full";

export type BottomSheetAction = {
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type BottomSheetProps = {
  open: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  actions?: BottomSheetAction[];
  variant?: BottomSheetVariant;
  height?: BottomSheetHeight;
  showDragHandle?: boolean;
  closeOnScrimClick?: boolean;
  onClose?: () => void;
  className?: string;
};

/**
 * Persian Material BottomSheet
 *
 * System target:
 * - Use for mobile-first contextual actions, filters and temporary surfaces.
 * - Supports modal and standard variants.
 * - Supports drag handle, title, description, content and actions.
 * - RTL-friendly.
 */
export function BottomSheet({
  open,
  title,
  description,
  children,
  actions = [],
  variant = "modal",
  height = "content",
  showDragHandle = true,
  closeOnScrimClick = true,
  onClose,
  className = "",
}: BottomSheetProps) {
  const titleId = useId();
  const descriptionId = useId();
  const sheetRef = useRef<HTMLDivElement | null>(null);
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
        "pm-bottom-sheet-layer",
        `pm-bottom-sheet-layer--${variant}`,
        open ? "pm-bottom-sheet-layer--open" : "pm-bottom-sheet-layer--closed",
      ].filter(Boolean).join(" ")}
      data-component="BottomSheetLayer"
      data-variant={variant}
    >
      {isModal && open ? (
        <button
          type="button"
          className="pm-bottom-sheet__scrim"
          aria-label="بستن"
          onClick={() => {
            if (closeOnScrimClick) onClose?.();
          }}
        />
      ) : null}

      <section
        ref={sheetRef}
        className={[
          "pm-bottom-sheet",
          `pm-bottom-sheet--${variant}`,
          `pm-bottom-sheet--${height}`,
          className,
        ].filter(Boolean).join(" ")}
        role={isModal ? "dialog" : "region"}
        aria-modal={isModal ? "true" : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        data-component="BottomSheet"
        data-height={height}
      >
        {showDragHandle ? (
          <div className="pm-bottom-sheet__handle-wrap" aria-hidden="true">
            <span className="pm-bottom-sheet__handle" />
          </div>
        ) : null}

        {(title || description) ? (
          <header className="pm-bottom-sheet__header">
            {title ? <h2 id={titleId} className="pm-bottom-sheet__title">{title}</h2> : null}
            {description ? <p id={descriptionId} className="pm-bottom-sheet__description">{description}</p> : null}
          </header>
        ) : null}

        {children ? <div className="pm-bottom-sheet__content">{children}</div> : null}

        {actions.length > 0 ? (
          <footer className="pm-bottom-sheet__actions">
            {actions.map((action, index) => (
              <button
                key={index}
                type="button"
                className="pm-bottom-sheet__action"
                disabled={action.disabled}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </footer>
        ) : null}
      </section>
    </div>
  );
}
