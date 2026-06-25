import React, { forwardRef } from "react";
import "./FAB.css";

export type FABVariant = "primary" | "secondary" | "tertiary" | "surface";
export type FABSize = "small" | "medium" | "large" | "extended";

export type FABProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  label?: React.ReactNode;
  ariaLabel?: string;
  variant?: FABVariant;
  size?: FABSize;
  lowered?: boolean;
};

/**
 * Persian Material FAB
 *
 * System target:
 * - Use for the primary action of a screen.
 * - Sizes: small, medium, large, extended.
 * - Variants: primary, secondary, tertiary, surface.
 * - States: enabled, hover, focus, pressed, disabled.
 * - RTL-friendly.
 */
export const FAB = forwardRef<HTMLButtonElement, FABProps>(function FAB(
  {
    icon,
    label,
    ariaLabel,
    variant = "primary",
    size = "medium",
    lowered = false,
    disabled,
    className = "",
    ...props
  },
  ref
) {
  const isExtended = size === "extended" || Boolean(label);

  return (
    <button
      {...props}
      ref={ref}
      type={props.type ?? "button"}
      aria-label={ariaLabel ?? (typeof label === "string" ? label : undefined)}
      disabled={disabled}
      className={[
        "pm-fab",
        `pm-fab--${variant}`,
        `pm-fab--${isExtended ? "extended" : size}`,
        lowered ? "pm-fab--lowered" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="FAB"
      data-variant={variant}
      data-size={isExtended ? "extended" : size}
    >
      <span className="pm-fab__state-layer">
        <span className="pm-fab__icon" aria-hidden="true">
          {icon}
        </span>
        {isExtended && label ? <span className="pm-fab__label">{label}</span> : null}
      </span>
    </button>
  );
});
