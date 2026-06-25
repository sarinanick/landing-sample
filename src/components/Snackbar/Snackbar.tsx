import React, { useEffect } from "react";
import "./Snackbar.css";

export type SnackbarPosition = "bottom" | "top";
export type SnackbarTone = "neutral" | "success" | "error" | "warning";

export type SnackbarAction = {
  label: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type SnackbarProps = {
  open: boolean;
  message: React.ReactNode;
  action?: SnackbarAction;
  onClose?: () => void;
  duration?: number;
  position?: SnackbarPosition;
  tone?: SnackbarTone;
  multiline?: boolean;
  closeLabel?: string;
  className?: string;
};

/**
 * Persian Material Snackbar
 *
 * System target:
 * - Use for short, non-blocking feedback.
 * - Supports optional action, close button, auto-dismiss and tones.
 * - Positions: bottom, top.
 * - RTL-friendly.
 */
export function Snackbar({
  open,
  message,
  action,
  onClose,
  duration = 5000,
  position = "bottom",
  tone = "neutral",
  multiline = false,
  closeLabel = "بستن",
  className = "",
}: SnackbarProps) {
  useEffect(() => {
    if (!open || duration <= 0) return;

    const timer = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div
      className={[
        "pm-snackbar-layer",
        `pm-snackbar-layer--${position}`,
      ].filter(Boolean).join(" ")}
      data-component="SnackbarLayer"
    >
      <div
        className={[
          "pm-snackbar",
          `pm-snackbar--${tone}`,
          multiline ? "pm-snackbar--multiline" : "",
          className,
        ].filter(Boolean).join(" ")}
        role={tone === "error" ? "alert" : "status"}
        aria-live={tone === "error" ? "assertive" : "polite"}
        data-component="Snackbar"
        data-tone={tone}
      >
        <div className="pm-snackbar__message">
          {message}
        </div>

        <div className="pm-snackbar__actions">
          {action ? (
            <button
              type="button"
              className="pm-snackbar__action"
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ) : null}

          {onClose ? (
            <button
              type="button"
              className="pm-snackbar__close"
              aria-label={closeLabel}
              onClick={onClose}
            >
              ×
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
