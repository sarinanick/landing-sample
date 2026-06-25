import React from "react";
import "./TopAppBar.css";

export type TopAppBarVariant = "center" | "small" | "medium" | "large";

export type TopAppBarAction = {
  icon: React.ReactNode;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export type TopAppBarProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: TopAppBarVariant;
  navigationIcon?: React.ReactNode;
  navigationLabel?: string;
  onNavigationClick?: React.MouseEventHandler<HTMLButtonElement>;
  actions?: TopAppBarAction[];
  elevated?: boolean;
  className?: string;
};

/**
 * Persian Material Top App Bar
 *
 * System target:
 * - Use as the page/application top header.
 * - Variants: center, small, medium, large.
 * - Slots: navigation icon, title, subtitle, actions.
 * - State: elevated/scrolled.
 * - RTL-friendly.
 */
export function TopAppBar({
  title,
  subtitle,
  variant = "small",
  navigationIcon,
  navigationLabel = "باز کردن منو",
  onNavigationClick,
  actions = [],
  elevated = false,
  className = "",
}: TopAppBarProps) {
  return (
    <header
      className={[
        "pm-top-app-bar",
        `pm-top-app-bar--${variant}`,
        elevated ? "pm-top-app-bar--elevated" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="TopAppBar"
      data-variant={variant}
      data-elevated={elevated ? "true" : "false"}
    >
      <div className="pm-top-app-bar__row">
        <div className="pm-top-app-bar__leading">
          {navigationIcon ? (
            <button
              type="button"
              className="pm-top-app-bar__icon-button"
              aria-label={navigationLabel}
              onClick={onNavigationClick}
            >
              <span className="pm-top-app-bar__state-layer">
                <span className="pm-top-app-bar__icon" aria-hidden="true">
                  {navigationIcon}
                </span>
              </span>
            </button>
          ) : null}
        </div>

        <div className="pm-top-app-bar__headline">
          <h1 className="pm-top-app-bar__title">{title}</h1>
          {subtitle ? <p className="pm-top-app-bar__subtitle">{subtitle}</p> : null}
        </div>

        <div className="pm-top-app-bar__actions" aria-label="اکشن‌های صفحه">
          {actions.map((action, index) => (
            <button
              key={`${action.label}-${index}`}
              type="button"
              className="pm-top-app-bar__icon-button"
              aria-label={action.label}
              onClick={action.onClick}
              disabled={action.disabled}
            >
              <span className="pm-top-app-bar__state-layer">
                <span className="pm-top-app-bar__icon" aria-hidden="true">
                  {action.icon}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
