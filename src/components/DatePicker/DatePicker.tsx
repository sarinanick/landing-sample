import React, { useMemo, useState } from "react";
import "./DatePicker.css";

export type DatePickerProps = {
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  disabled?: boolean;
  locale?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

function toISODate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function parseISODate(value?: string) {
  if (!value) return null;
  const date = new Date(value + "T00:00:00");
  return Number.isNaN(date.getTime()) ? null : date;
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function buildMonthDays(monthDate: Date) {
  const first = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const startWeekDay = first.getDay();
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - startWeekDay);
  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setDate(gridStart.getDate() + index);
    return day;
  });
}

/**
 * Persian Material DatePicker
 * Current version uses Gregorian dates. Jalali adapter is planned.
 */
export function DatePicker({
  value,
  defaultValue,
  min,
  max,
  label = "انتخاب تاریخ",
  supportingText,
  disabled = false,
  locale = "fa-IR",
  onValueChange,
  className = "",
}: DatePickerProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const actualValue = value ?? internalValue;
  const selectedDate = parseISODate(actualValue);
  const [visibleMonth, setVisibleMonth] = useState<Date>(() => selectedDate ?? new Date());

  const monthDays = useMemo(() => buildMonthDays(visibleMonth), [visibleMonth]);
  const monthFormatter = useMemo(() => new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }), [locale]);
  const dayFormatter = useMemo(() => new Intl.DateTimeFormat(locale, { day: "numeric" }), [locale]);
  const weekdayFormatter = useMemo(() => new Intl.DateTimeFormat(locale, { weekday: "short" }), [locale]);

  const weekdays = useMemo(() => {
    const base = new Date(2024, 0, 7);
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(base);
      date.setDate(base.getDate() + index);
      return weekdayFormatter.format(date);
    });
  }, [weekdayFormatter]);

  const minDate = parseISODate(min);
  const maxDate = parseISODate(max);

  function isDisabled(day: Date) {
    if (disabled) return true;
    if (minDate && day < minDate) return true;
    if (maxDate && day > maxDate) return true;
    return false;
  }

  function setSelected(day: Date) {
    if (isDisabled(day)) return;
    const next = toISODate(day);
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  }

  return (
    <div className={["pm-date-picker", disabled ? "pm-date-picker--disabled" : "", className].filter(Boolean).join(" ")} data-component="DatePicker">
      <div className="pm-date-picker__top">
        <span className="pm-date-picker__label">{label}</span>
        <span className="pm-date-picker__selected">
          {selectedDate ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(selectedDate) : "تاریخی انتخاب نشده"}
        </span>
      </div>

      <div className="pm-date-picker__header">
        <button type="button" className="pm-date-picker__nav" onClick={() => setVisibleMonth(addMonths(visibleMonth, -1))} disabled={disabled} aria-label="ماه قبل">‹</button>
        <strong className="pm-date-picker__month">{monthFormatter.format(visibleMonth)}</strong>
        <button type="button" className="pm-date-picker__nav" onClick={() => setVisibleMonth(addMonths(visibleMonth, 1))} disabled={disabled} aria-label="ماه بعد">›</button>
      </div>

      <div className="pm-date-picker__weekdays" aria-hidden="true">
        {weekdays.map((weekday) => <span key={weekday}>{weekday}</span>)}
      </div>

      <div className="pm-date-picker__grid" role="grid" aria-label="تقویم">
        {monthDays.map((day) => {
          const outside = day.getMonth() !== visibleMonth.getMonth();
          const selected = selectedDate ? sameDay(day, selectedDate) : false;
          const today = sameDay(day, new Date());
          return (
            <button
              key={toISODate(day)}
              type="button"
              className={["pm-date-picker__day", outside ? "pm-date-picker__day--outside" : "", selected ? "pm-date-picker__day--selected" : "", today ? "pm-date-picker__day--today" : ""].filter(Boolean).join(" ")}
              disabled={isDisabled(day)}
              role="gridcell"
              aria-selected={selected}
              onClick={() => setSelected(day)}
            >
              {dayFormatter.format(day)}
            </button>
          );
        })}
      </div>

      {supportingText ? <p className="pm-date-picker__supporting-text">{supportingText}</p> : null}
    </div>
  );
}
