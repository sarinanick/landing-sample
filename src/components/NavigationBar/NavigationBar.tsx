import React from "react";
import "./NavigationBar.css";

export type NavigationBarItem = {
  value: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
};

export type NavigationBarProps = {
  items: NavigationBarItem[];
  value: string;
  onValueChange?: (value: string) => void;
  className?: string;
  ariaLabel?: string;
};

/**
 * Persian Material Navigation Bar
 *
 * System target:
 * - Use for primary navigation on mobile/tablet bottom app layout.
 * - Typically 3 to 5 destinations.
 * - States: active, inactive, hover, focus, pressed, disabled.
 * - Supports icons, labels and badges.
 * - RTL-friendly.
 */
export function NavigationBar({
  items,
  value,
  onValueChange,
  className = "",
  ariaLabel = "ناوبری اصلی",
}: NavigationBarProps) {
  return (
    <nav
      className={[
        "pm-navigation-bar",
        className,
      ].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      data-component="NavigationBar"
    >
      <div className="pm-navigation-bar__items">
        {items.map((item) => {
          const selected = item.value === value;

          return (
            <button
              key={item.value}
              type="button"
              className={[
                "pm-navigation-bar__item",
                selected ? "pm-navigation-bar__item--active" : "",
                item.disabled ? "pm-navigation-bar__item--disabled" : "",
              ].filter(Boolean).join(" ")}
              aria-current={selected ? "page" : undefined}
              aria-label={item.label}
              disabled={item.disabled}
              data-value={item.value}
              onClick={() => {
                if (!item.disabled) {
                  onValueChange?.(item.value);
                }
              }}
            >
              <span className="pm-navigation-bar__icon-container">
                <span className="pm-navigation-bar__state-layer">
                  <span className="pm-navigation-bar__icon" aria-hidden="true">
                    {selected && item.activeIcon ? item.activeIcon : item.icon}
                  </span>
                  {item.badge !== undefined ? (
                    <span className="pm-navigation-bar__badge" aria-label={`${item.badge} مورد`}>
                      {item.badge}
                    </span>
                  ) : null}
                </span>
              </span>

              <span className="pm-navigation-bar__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
