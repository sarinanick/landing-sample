import React, { cloneElement, isValidElement, useId, useState } from "react";
import "./Tooltip.css";

export type TooltipPlacement = "top" | "bottom" | "start" | "end";
export type TooltipVariant = "plain" | "rich";

export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: TooltipPlacement;
  variant?: TooltipVariant;
  title?: React.ReactNode;
  action?: React.ReactNode;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  className?: string;
};

/**
 * Persian Material Tooltip
 *
 * System target:
 * - Use for short contextual explanations.
 * - Plain tooltip: short text.
 * - Rich tooltip: title, supporting content and optional action.
 * - Triggers: hover and focus.
 * - RTL-friendly placements: top, bottom, start, end.
 */
export function Tooltip({
  content,
  children,
  placement = "top",
  variant = "plain",
  title,
  action,
  disabled = false,
  open,
  defaultOpen = false,
  className = "",
}: TooltipProps) {
  const tooltipId = useId();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const visible = !disabled && (open ?? internalOpen);

  if (!isValidElement(children)) {
    throw new Error("Tooltip children must be a single valid React element.");
  }

  const trigger = cloneElement(children, {
    "aria-describedby": visible ? tooltipId : undefined,
    onMouseEnter: (event: React.MouseEvent) => {
      children.props.onMouseEnter?.(event);
      setInternalOpen(true);
    },
    onMouseLeave: (event: React.MouseEvent) => {
      children.props.onMouseLeave?.(event);
      setInternalOpen(false);
    },
    onFocus: (event: React.FocusEvent) => {
      children.props.onFocus?.(event);
      setInternalOpen(true);
    },
    onBlur: (event: React.FocusEvent) => {
      children.props.onBlur?.(event);
      setInternalOpen(false);
    },
    onKeyDown: (event: React.KeyboardEvent) => {
      children.props.onKeyDown?.(event);
      if (event.key === "Escape") {
        setInternalOpen(false);
      }
    },
  });

  return (
    <span
      className={[
        "pm-tooltip-root",
        `pm-tooltip-root--${placement}`,
        className,
      ].filter(Boolean).join(" ")}
      data-component="Tooltip"
      data-placement={placement}
      data-variant={variant}
    >
      {trigger}

      {visible ? (
        <span
          id={tooltipId}
          role="tooltip"
          className={[
            "pm-tooltip",
            `pm-tooltip--${variant}`,
            `pm-tooltip--${placement}`,
          ].join(" ")}
        >
          {variant === "rich" ? (
            <>
              {title ? <span className="pm-tooltip__title">{title}</span> : null}
              <span className="pm-tooltip__content">{content}</span>
              {action ? <span className="pm-tooltip__action">{action}</span> : null}
            </>
          ) : (
            <span className="pm-tooltip__content">{content}</span>
          )}
        </span>
      ) : null}
    </span>
  );
}
