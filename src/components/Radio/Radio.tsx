import React, { createContext, forwardRef, useContext, useId } from "react";
import "./Radio.css";

type RadioGroupContextValue = {
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  onValueChange?: (value: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  errorText?: React.ReactNode;
  value: string;
  labelPosition?: "start" | "end";
};

export type RadioGroupProps = {
  name?: string;
  value?: string;
  defaultValue?: string;
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  errorText?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
  className?: string;
};

/**
 * Persian Material Radio
 *
 * System target:
 * - Use when the user must select one option from a set.
 * - States: selected, unselected, enabled, disabled, error, hover, focus, pressed.
 * - Native radio input is preserved for accessibility.
 * - RTL-friendly.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    label,
    supportingText,
    errorText,
    labelPosition = "start",
    id,
    className = "",
    disabled,
    checked,
    defaultChecked,
    name,
    value,
    onChange,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const group = useContext(RadioGroupContext);

  const finalName = name ?? group?.name;
  const finalDisabled = disabled ?? group?.disabled;
  const isError = Boolean(errorText) || Boolean(group?.error);

  const controlledChecked = group?.value !== undefined ? group.value === value : checked;
  const uncontrolledDefaultChecked =
    group?.defaultValue !== undefined ? group.defaultValue === value : defaultChecked;

  return (
    <label
      className={[
        "pm-radio-field",
        `pm-radio-field--label-${labelPosition}`,
        finalDisabled ? "pm-radio-field--disabled" : "",
        isError ? "pm-radio-field--error" : "",
        className,
      ].filter(Boolean).join(" ")}
      htmlFor={radioId}
      data-component="Radio"
      data-error={isError ? "true" : "false"}
    >
      <span className="pm-radio">
        <input
          {...props}
          ref={ref}
          id={radioId}
          type="radio"
          className="pm-radio__input"
          name={finalName}
          value={value}
          disabled={finalDisabled}
          checked={controlledChecked}
          defaultChecked={controlledChecked === undefined ? uncontrolledDefaultChecked : undefined}
          aria-invalid={isError ? "true" : undefined}
          aria-describedby={supportingText || errorText ? `${radioId}-support` : undefined}
          onChange={(event) => {
            onChange?.(event);
            if (event.target.checked) {
              group?.onValueChange?.(value);
            }
          }}
        />
        <span className="pm-radio__state-layer" aria-hidden="true">
          <span className="pm-radio__outer">
            <span className="pm-radio__inner" />
          </span>
        </span>
      </span>

      <span className="pm-radio-field__text">
        {label ? <span className="pm-radio-field__label">{label}</span> : null}
        {(supportingText || errorText) ? (
          <span id={`${radioId}-support`} className="pm-radio-field__supporting-text">
            {errorText || supportingText}
          </span>
        ) : null}
      </span>
    </label>
  );
});

export function RadioGroup({
  name,
  value,
  defaultValue,
  label,
  supportingText,
  errorText,
  disabled,
  children,
  onValueChange,
  className = "",
}: RadioGroupProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const isError = Boolean(errorText);

  return (
    <fieldset
      className={[
        "pm-radio-group",
        disabled ? "pm-radio-group--disabled" : "",
        isError ? "pm-radio-group--error" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="RadioGroup"
      data-error={isError ? "true" : "false"}
    >
      {label ? <legend className="pm-radio-group__legend">{label}</legend> : null}
      {supportingText ? <p className="pm-radio-group__supporting-text">{supportingText}</p> : null}

      <RadioGroupContext.Provider
        value={{
          name: groupName,
          value,
          defaultValue,
          disabled,
          error: isError,
          onValueChange,
        }}
      >
        <div className="pm-radio-group__items">{children}</div>
      </RadioGroupContext.Provider>

      {errorText ? <p className="pm-radio-group__error-text">{errorText}</p> : null}
    </fieldset>
  );
}
