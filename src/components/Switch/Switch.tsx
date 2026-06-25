import React, { forwardRef, useId } from "react";
import "./Switch.css";

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  labelPosition?: "start" | "end";
};

/**
 * Persian Material Switch
 *
 * Figma/System target:
 * - Use for binary on/off choices.
 * - States: selected, unselected, enabled, disabled, hover, focus, pressed.
 * - RTL-friendly layout.
 * - Native checkbox input is preserved for accessibility.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    label,
    supportingText,
    labelPosition = "start",
    id,
    className = "",
    disabled,
    checked,
    defaultChecked,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  return (
    <label
      className={[
        "pm-switch-field",
        `pm-switch-field--label-${labelPosition}`,
        disabled ? "pm-switch-field--disabled" : "",
        className,
      ].filter(Boolean).join(" ")}
      htmlFor={switchId}
      data-component="Switch"
    >
      <span className="pm-switch-field__text">
        {label ? <span className="pm-switch-field__label">{label}</span> : null}
        {supportingText ? <span className="pm-switch-field__supporting-text">{supportingText}</span> : null}
      </span>

      <span className="pm-switch">
        <input
          {...props}
          ref={ref}
          id={switchId}
          type="checkbox"
          className="pm-switch__input"
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
        />
        <span className="pm-switch__track" aria-hidden="true">
          <span className="pm-switch__state-layer">
            <span className="pm-switch__handle">
              <span className="pm-switch__icon pm-switch__icon--selected">✓</span>
              <span className="pm-switch__icon pm-switch__icon--unselected">×</span>
            </span>
          </span>
        </span>
      </span>
    </label>
  );
});
