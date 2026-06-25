import React, { forwardRef, useEffect, useId, useRef } from "react";
import "./Checkbox.css";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  errorText?: React.ReactNode;
  indeterminate?: boolean;
  labelPosition?: "start" | "end";
};

/**
 * Persian Material Checkbox
 *
 * System target:
 * - Use for selecting one or more items from a set.
 * - States: checked, unchecked, indeterminate, enabled, disabled, error, hover, focus, pressed.
 * - Native checkbox input is preserved for accessibility.
 * - RTL-friendly.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    label,
    supportingText,
    errorText,
    indeterminate = false,
    labelPosition = "start",
    id,
    className = "",
    disabled,
    checked,
    defaultChecked,
    ...props
  },
  forwardedRef
) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const internalRef = useRef<HTMLInputElement | null>(null);
  const isError = Boolean(errorText);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  function setRefs(node: HTMLInputElement | null) {
    internalRef.current = node;

    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  }

  return (
    <label
      className={[
        "pm-checkbox-field",
        `pm-checkbox-field--label-${labelPosition}`,
        disabled ? "pm-checkbox-field--disabled" : "",
        isError ? "pm-checkbox-field--error" : "",
        className,
      ].filter(Boolean).join(" ")}
      htmlFor={checkboxId}
      data-component="Checkbox"
      data-error={isError ? "true" : "false"}
      data-indeterminate={indeterminate ? "true" : "false"}
    >
      <span className="pm-checkbox">
        <input
          {...props}
          ref={setRefs}
          id={checkboxId}
          type="checkbox"
          className="pm-checkbox__input"
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          aria-invalid={isError ? "true" : undefined}
          aria-describedby={supportingText || errorText ? `${checkboxId}-support` : undefined}
          data-indeterminate={indeterminate ? "true" : "false"}
        />
        <span className="pm-checkbox__state-layer" aria-hidden="true">
          <span className="pm-checkbox__box">
            <span className="pm-checkbox__mark pm-checkbox__mark--checked">✓</span>
            <span className="pm-checkbox__mark pm-checkbox__mark--indeterminate">−</span>
          </span>
        </span>
      </span>

      <span className="pm-checkbox-field__text">
        {label ? <span className="pm-checkbox-field__label">{label}</span> : null}
        {(supportingText || errorText) ? (
          <span id={`${checkboxId}-support`} className="pm-checkbox-field__supporting-text">
            {errorText || supportingText}
          </span>
        ) : null}
      </span>
    </label>
  );
});
