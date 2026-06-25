import React, { forwardRef } from "react";
import "./IconButton.css";

export type IconButtonVariant = "standard" | "filled" | "tonal" | "outlined";
export type IconButtonSize = "small" | "medium" | "large";

export type IconButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: React.ReactNode;
  selectedIcon?: React.ReactNode;
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  selected?: boolean;
};

/**
 * Persian Material IconButton
 *
 * System target:
 * - Use for compact icon-only actions.
 * - Variants: standard, filled, tonal, outlined.
 * - States: enabled, hover, focus, pressed, selected, disabled.
 * - Requires accessible label.
 * - RTL-friendly.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  {
    icon,
    selectedIcon,
    label,
    variant = "standard",
    size = "medium",
    selected = false,
    disabled,
    className = "",
    ...props
  },
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      type={props.type ?? "button"}
      aria-label={label}
      aria-pressed={selected ? "true" : undefined}
      disabled={disabled}
      className={[
        "pm-icon-button",
        `pm-icon-button--${variant}`,
        `pm-icon-button--${size}`,
        selected ? "pm-icon-button--selected" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="IconButton"
      data-variant={variant}
      data-size={size}
      data-selected={selected ? "true" : "false"}
    >
      <span className="pm-icon-button__state-layer">
        <span className="pm-icon-button__icon" aria-hidden="true">
          {selected && selectedIcon ? selectedIcon : icon}
        </span>
      </span>
    </button>
  );
});
