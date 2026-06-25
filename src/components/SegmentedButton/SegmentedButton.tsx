import React, { createContext, useContext, useMemo } from "react";
import "./SegmentedButton.css";

export type SegmentedButtonDensity = "regular" | "compact";

type SegmentedButtonContextValue = {
  value: string | string[];
  multiple: boolean;
  onValueChange?: (value: string | string[]) => void;
  density: SegmentedButtonDensity;
};

const SegmentedButtonContext = createContext<SegmentedButtonContextValue | null>(null);

export type SegmentedButtonGroupProps = {
  value: string | string[];
  onValueChange?: (value: string | string[]) => void;
  multiple?: boolean;
  density?: SegmentedButtonDensity;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export type SegmentedButtonItemProps = {
  value: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

/**
 * Persian Material SegmentedButton
 *
 * System target:
 * - Use for choosing one or more related options.
 * - Supports single-select and multi-select.
 * - Supports icon + label.
 * - RTL-friendly.
 */
export function SegmentedButtonGroup({
  value,
  onValueChange,
  multiple = false,
  density = "regular",
  children,
  className = "",
  ariaLabel = "انتخاب گزینه",
}: SegmentedButtonGroupProps) {
  const contextValue = useMemo(() => ({ value, multiple, onValueChange, density }), [value, multiple, onValueChange, density]);

  return (
    <SegmentedButtonContext.Provider value={contextValue}>
      <div className={["pm-segmented-button-group", `pm-segmented-button-group--${density}`, className].filter(Boolean).join(" ")} role="group" aria-label={ariaLabel} data-component="SegmentedButtonGroup">
        {children}
      </div>
    </SegmentedButtonContext.Provider>
  );
}

export function SegmentedButtonItem({ value, children, icon, disabled = false, className = "" }: SegmentedButtonItemProps) {
  const context = useContext(SegmentedButtonContext);

  if (!context) {
    throw new Error("SegmentedButtonItem must be used inside SegmentedButtonGroup.");
  }

  const selected = Array.isArray(context.value) ? context.value.includes(value) : context.value === value;

  function toggle() {
    if (disabled) return;

    if (context.multiple) {
      const current = Array.isArray(context.value) ? context.value : [];
      const next = selected ? current.filter((item) => item !== value) : [...current, value];
      context.onValueChange?.(next);
    } else {
      context.onValueChange?.(value);
    }
  }

  return (
    <button
      type="button"
      className={["pm-segmented-button", selected ? "pm-segmented-button--selected" : "", disabled ? "pm-segmented-button--disabled" : "", className].filter(Boolean).join(" ")}
      aria-pressed={selected}
      disabled={disabled}
      onClick={toggle}
      data-component="SegmentedButtonItem"
      data-value={value}
      data-selected={selected ? "true" : "false"}
    >
      <span className="pm-segmented-button__state-layer">
        {selected ? <span className="pm-segmented-button__check" aria-hidden="true">✓</span> : icon ? <span className="pm-segmented-button__icon" aria-hidden="true">{icon}</span> : null}
        <span className="pm-segmented-button__label">{children}</span>
      </span>
    </button>
  );
}
