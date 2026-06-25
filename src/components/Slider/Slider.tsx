import React, { forwardRef, useId } from "react";
import "./Slider.css";

export type SliderTone = "primary" | "secondary" | "error";

export type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  tone?: SliderTone;
  showValue?: boolean;
  valueFormatter?: (value: number) => React.ReactNode;
};

/**
 * Persian Material Slider
 *
 * System target:
 * - Use for selecting a numeric value from a range.
 * - Supports label, supporting text, visible value, disabled and error tone.
 * - Native range input is preserved for accessibility.
 * - RTL-friendly.
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  {
    label,
    supportingText,
    tone = "primary",
    showValue = true,
    valueFormatter,
    min = 0,
    max = 100,
    step = 1,
    value,
    defaultValue,
    disabled,
    id,
    className = "",
    onChange,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const sliderId = id ?? generatedId;

  const numericValue =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : typeof defaultValue === "number"
          ? defaultValue
          : typeof defaultValue === "string"
            ? Number(defaultValue)
            : Number(min);

  const minNumber = Number(min);
  const maxNumber = Number(max);
  const percent =
    maxNumber > minNumber
      ? ((numericValue - minNumber) / (maxNumber - minNumber)) * 100
      : 0;

  const displayValue = valueFormatter ? valueFormatter(numericValue) : numericValue;

  return (
    <div
      className={[
        "pm-slider-field",
        `pm-slider-field--${tone}`,
        disabled ? "pm-slider-field--disabled" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="Slider"
      data-tone={tone}
    >
      {(label || showValue) ? (
        <div className="pm-slider-field__header">
          {label ? (
            <label className="pm-slider-field__label" htmlFor={sliderId}>
              {label}
            </label>
          ) : <span />}
          {showValue ? <span className="pm-slider-field__value">{displayValue}</span> : null}
        </div>
      ) : null}

      <div className="pm-slider">
        <span className="pm-slider__track" />
        <span className="pm-slider__active-track" style={{ inlineSize: `${percent}%` }} />
        <input
          {...props}
          ref={ref}
          id={sliderId}
          type="range"
          className="pm-slider__input"
          min={min}
          max={max}
          step={step}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
        />
      </div>

      {supportingText ? <p className="pm-slider-field__supporting-text">{supportingText}</p> : null}
    </div>
  );
});
