import React, { useEffect, useId, useRef } from "react";
import "./Dialog.css";

export type DialogSize = "small" | "medium" | "large";

export type DialogAction = {
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "filled" | "outlined";
  disabled?: boolean;
};

export type DialogProps = {
  open: boolean;
  title?: React.ReactNode;
  supportingText?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  actions?: DialogAction[];
  size?: DialogSize;
  modal?: boolean;
  closeOnScrimClick?: boolean;
  onClose?: () => void;
  className?: string;
};

/**
 * Persian Material Dialog
 *
 * System target:
 * - Use for critical confirmations, alerts, short forms and blocking decisions.
 * - Supports icon, title, supporting text, custom content and actions.
 * - States: open/closed, modal scrim, focus-visible action buttons.
 * - RTL-friendly.
 */
export function Dialog({
  open,
  title,
  supportingText,
  icon,
  children,
  actions = [],
  size = "small",
  modal = true,
  closeOnScrimClick = true,
  onClose,
  className = "",
}: DialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const firstButton = dialogRef.current?.querySelector<HTMLButtonElement>("button:not(:disabled)");
    firstButton?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={[
        "pm-dialog-layer",
        modal ? "pm-dialog-layer--modal" : "",
      ].filter(Boolean).join(" ")}
      data-component="DialogLayer"
    >
      {modal ? (
        <button
          type="button"
          className="pm-dialog__scrim"
          aria-label="بستن پنجره"
          onClick={() => {
            if (closeOnScrimClick) onClose?.();
          }}
        />
      ) : null}

      <div
        ref={dialogRef}
        className={[
          "pm-dialog",
          `pm-dialog--${size}`,
          className,
        ].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal={modal ? "true" : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={supportingText ? descriptionId : undefined}
        data-component="Dialog"
        data-size={size}
      >
        {icon ? <div className="pm-dialog__icon" aria-hidden="true">{icon}</div> : null}

        {title ? (
          <h2 id={titleId} className="pm-dialog__title">
            {title}
          </h2>
        ) : null}

        {supportingText ? (
          <p id={descriptionId} className="pm-dialog__supporting-text">
            {supportingText}
          </p>
        ) : null}

        {children ? (
          <div className="pm-dialog__content">
            {children}
          </div>
        ) : null}

        {actions.length > 0 ? (
          <div className="pm-dialog__actions">
            {actions.map((action, index) => (
              <button
                key={index}
                type="button"
                className={[
                  "pm-dialog__action",
                  `pm-dialog__action--${action.variant ?? "text"}`,
                ].join(" ")}
                disabled={action.disabled}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
