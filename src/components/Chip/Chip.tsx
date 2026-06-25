import React from "react";
import "./Chip.css";

export type ChipVariant = "assist" | "filter" | "input" | "suggestion";

export type ChipProps = {
  children: React.ReactNode;
  variant?: ChipVariant;
  selected?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onRemove?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  ariaLabel?: string;
};

/**
 * Persian Material Chip
 *
 * System target:
 * - Assist chips: smart/contextual helper actions.
 * - Filter chips: select one or more filters.
 * - Input chips: represent entered information, removable.
 * - Suggestion chips: suggested actions/options.
 * - States: enabled, hovered, focused, pressed, selected, disabled.
 */
export function Chip({
  children,
  variant = "assist",
  selected = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  onRemove,
  className = "",
  ariaLabel,
}: ChipProps) {
  const removable = variant === "input" && Boolean(onRemove);

  return (
    <span
      className={[
        "pm-chip",
        `pm-chip--${variant}`,
        selected ? "pm-chip--selected" : "",
        disabled ? "pm-chip--disabled" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="Chip"
      data-variant={variant}
      data-selected={selected ? "true" : "false"}
    >
      <button
        type="button"
        className="pm-chip__button"
        disabled={disabled}
        onClick={onClick}
        aria-pressed={variant === "filter" ? selected : undefined}
        aria-label={ariaLabel}
      >
        {selected && variant === "filter" ? (
          <span className="pm-chip__icon pm-chip__icon--selected" aria-hidden="true">✓</span>
        ) : leadingIcon ? (
          <span className="pm-chip__icon pm-chip__icon--leading" aria-hidden="true">{leadingIcon}</span>
        ) : null}

        <span className="pm-chip__label">{children}</span>

        {!removable && trailingIcon ? (
          <span className="pm-chip__icon pm-chip__icon--trailing" aria-hidden="true">{trailingIcon}</span>
        ) : null}
      </button>

      {removable ? (
        <button
          type="button"
          className="pm-chip__remove"
          disabled={disabled}
          onClick={onRemove}
          aria-label={`حذف ${typeof children === "string" ? children : "گزینه"}`}
        >
          ×
        </button>
      ) : null}
    </span>
  );
}
