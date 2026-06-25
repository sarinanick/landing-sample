import React from "react";
import "./Button.css";

export type ButtonVariant = "filled" | "outlined" | "text" | "elevated" | "tonal";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  "aria-label"?: string;
};

/**
 * Persian Material Button
 *
 * Figma source:
 * - Height: 40px
 * - Radius: 100px
 * - Horizontal padding: 24px without icon
 * - Label Large: IRANSansX Medium, 14px
 * - Variants: Filled, Outlined, Text, Elevated, Tonal
 * - States: Enabled, Hovered, Focused, Pressed, Disabled
 */
export function Button({
  children,
  variant = "filled",
  disabled = false,
  leadingIcon,
  trailingIcon,
  type = "button",
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const hasIcon = Boolean(leadingIcon || trailingIcon);

  return (
    <button
      type={type}
      className={[
        "pm-button",
        `pm-button--${variant}`,
        hasIcon ? "pm-button--with-icon" : "",
        className,
      ].filter(Boolean).join(" ")}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      data-component="Button"
      data-variant={variant}
    >
      <span className="pm-button__state-layer">
        {leadingIcon ? <span className="pm-button__icon pm-button__icon--leading">{leadingIcon}</span> : null}
        <span className="pm-button__label">{children}</span>
        {trailingIcon ? <span className="pm-button__icon pm-button__icon--trailing">{trailingIcon}</span> : null}
      </span>
    </button>
  );
}
