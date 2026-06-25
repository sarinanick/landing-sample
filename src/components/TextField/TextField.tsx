import React, { forwardRef, useId } from "react";
import "./TextField.css";

export type TextFieldVariant = "filled" | "outlined";

export type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: TextFieldVariant;
  label?: string;
  supportingText?: string;
  errorText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
};

/**
 * Persian Material TextField
 *
 * Figma source:
 * - Section: Text Input
 * - Variants: Filled, Outlined
 * - States: Enabled, Focused, Hovered, Error, Disabled
 * - Text configurations: Input text, Label text, Placeholder text
 * - Leading icon: true/false
 * - Trailing icon: true/false
 * - Height: 56px
 * - Label: Body Small, 12px
 * - Input: Body Large, 16px
 * - Supporting text: optional below field
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  {
    variant = "filled",
    label,
    supportingText,
    errorText,
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    disabled,
    id,
    className = "",
    placeholder,
    value,
    defaultValue,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isError = Boolean(errorText);
  const hasLeading = Boolean(leadingIcon);
  const hasTrailing = Boolean(trailingIcon);

  return (
    <div
      className={[
        "pm-text-field",
        `pm-text-field--${variant}`,
        isError ? "pm-text-field--error" : "",
        disabled ? "pm-text-field--disabled" : "",
        fullWidth ? "pm-text-field--full-width" : "",
        hasLeading ? "pm-text-field--has-leading" : "",
        hasTrailing ? "pm-text-field--has-trailing" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="TextField"
      data-variant={variant}
      data-error={isError ? "true" : "false"}
    >
      <div className="pm-text-field__container">
        {leadingIcon ? (
          <span className="pm-text-field__icon pm-text-field__icon--leading" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}

        <div className="pm-text-field__content">
          {label ? (
            <label className="pm-text-field__label" htmlFor={inputId}>
              {label}
            </label>
          ) : null}

          <input
            {...props}
            ref={ref}
            id={inputId}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            aria-invalid={isError ? "true" : undefined}
            aria-describedby={supportingText || errorText ? `${inputId}-support` : undefined}
            className="pm-text-field__input"
          />
        </div>

        {trailingIcon ? (
          <span className="pm-text-field__icon pm-text-field__icon--trailing" aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </div>

      <div className="pm-text-field__indicator" />

      {(supportingText || errorText) ? (
        <p id={`${inputId}-support`} className="pm-text-field__supporting-text">
          {errorText || supportingText}
        </p>
      ) : null}
    </div>
  );
});
