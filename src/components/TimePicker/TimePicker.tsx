import React, { useMemo, useState } from "react";
import "./TimePicker.css";

export type TimePickerMode = "24h" | "12h";

export type TimePickerProps = {
  value?: string;
  defaultValue?: string;
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  mode?: TimePickerMode;
  minuteStep?: number;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  className?: string;
};

function parseTime(value?: string) {
  if (!value || !/^\d{2}:\d{2}$/.test(value)) return { hour: 9, minute: 0 };
  const [hour, minute] = value.split(":").map(Number);
  return {
    hour: Number.isFinite(hour) ? Math.min(Math.max(hour, 0), 23) : 9,
    minute: Number.isFinite(minute) ? Math.min(Math.max(minute, 0), 59) : 0,
  };
}

function formatTime(hour: number, minute: number) {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatFaNumber(value: number) {
  return value.toLocaleString("fa-IR", { minimumIntegerDigits: 2 });
}

/**
 * Persian Material TimePicker
 *
 * System target:
 * - Use for choosing hour and minute.
 * - Supports 24h and 12h display modes.
 * - Native select controls are used for accessibility.
 * - RTL-friendly.
 */
export function TimePicker({
  value,
  defaultValue = "09:00",
  label = "انتخاب زمان",
  supportingText,
  mode = "24h",
  minuteStep = 5,
  disabled = false,
  onValueChange,
  className = "",
}: TimePickerProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const actualValue = value ?? internalValue;
  const parsed = parseTime(actualValue);

  const hourOptions = useMemo(() => {
    if (mode === "12h") return Array.from({ length: 12 }, (_, index) => index + 1);
    return Array.from({ length: 24 }, (_, index) => index);
  }, [mode]);

  const minuteOptions = useMemo(() => {
    const safeStep = Math.max(1, Math.min(30, minuteStep));
    return Array.from({ length: Math.ceil(60 / safeStep) }, (_, index) => index * safeStep).filter((minute) => minute < 60);
  }, [minuteStep]);

  const period = parsed.hour >= 12 ? "PM" : "AM";
  const displayHour = mode === "12h"
    ? (parsed.hour % 12 === 0 ? 12 : parsed.hour % 12)
    : parsed.hour;

  function commit(nextHour: number, nextMinute: number, nextPeriod = period) {
    let finalHour = nextHour;

    if (mode === "12h") {
      if (nextPeriod === "PM" && nextHour < 12) finalHour = nextHour + 12;
      if (nextPeriod === "AM" && nextHour === 12) finalHour = 0;
      if (nextPeriod === "AM" && nextHour < 12) finalHour = nextHour;
      if (nextPeriod === "PM" && nextHour === 12) finalHour = 12;
    }

    const next = formatTime(finalHour, nextMinute);
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  }

  return (
    <div
      className={[
        "pm-time-picker",
        disabled ? "pm-time-picker--disabled" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="TimePicker"
      data-mode={mode}
    >
      <div className="pm-time-picker__header">
        <span className="pm-time-picker__label">{label}</span>
        <strong className="pm-time-picker__value">
          {formatFaNumber(parsed.hour)}:{formatFaNumber(parsed.minute)}
        </strong>
      </div>

      <div className="pm-time-picker__controls">
        <label className="pm-time-picker__field">
          <span>ساعت</span>
          <select
            disabled={disabled}
            value={displayHour}
            onChange={(event) => commit(Number(event.target.value), parsed.minute)}
          >
            {hourOptions.map((hour) => (
              <option key={hour} value={hour}>
                {formatFaNumber(hour)}
              </option>
            ))}
          </select>
        </label>

        <span className="pm-time-picker__separator" aria-hidden="true">:</span>

        <label className="pm-time-picker__field">
          <span>دقیقه</span>
          <select
            disabled={disabled}
            value={minuteOptions.includes(parsed.minute) ? parsed.minute : minuteOptions[0]}
            onChange={(event) => commit(displayHour, Number(event.target.value))}
          >
            {minuteOptions.map((minute) => (
              <option key={minute} value={minute}>
                {formatFaNumber(minute)}
              </option>
            ))}
          </select>
        </label>

        {mode === "12h" ? (
          <div className="pm-time-picker__period" role="group" aria-label="صبح یا بعدازظهر">
            <button
              type="button"
              disabled={disabled}
              className={period === "AM" ? "pm-time-picker__period-button pm-time-picker__period-button--selected" : "pm-time-picker__period-button"}
              onClick={() => commit(displayHour, parsed.minute, "AM")}
            >
              ق.ظ
            </button>
            <button
              type="button"
              disabled={disabled}
              className={period === "PM" ? "pm-time-picker__period-button pm-time-picker__period-button--selected" : "pm-time-picker__period-button"}
              onClick={() => commit(displayHour, parsed.minute, "PM")}
            >
              ب.ظ
            </button>
          </div>
        ) : null}
      </div>

      {supportingText ? <p className="pm-time-picker__supporting-text">{supportingText}</p> : null}
    </div>
  );
}
