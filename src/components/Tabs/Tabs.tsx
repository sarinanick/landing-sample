import React, { createContext, useContext, useId, useMemo } from "react";
import "./Tabs.css";

export type TabsVariant = "primary" | "secondary";

type TabsContextValue = {
  value: string;
  onValueChange?: (value: string) => void;
  variant: TabsVariant;
  name: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export type TabsProps = {
  value: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariant;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export type TabProps = {
  value: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export type TabPanelProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Persian Material Tabs
 *
 * System target:
 * - Use for switching between related content sections.
 * - Variants: primary, secondary.
 * - States: active, inactive, hover, focus, pressed, disabled.
 * - RTL-friendly.
 */
export function Tabs({
  value,
  onValueChange,
  variant = "primary",
  children,
  className = "",
  ariaLabel = "تب‌ها",
}: TabsProps) {
  const generatedName = useId();

  const contextValue = useMemo(
    () => ({
      value,
      onValueChange,
      variant,
      name: generatedName,
    }),
    [value, onValueChange, variant, generatedName]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={[
          "pm-tabs",
          `pm-tabs--${variant}`,
          className,
        ].filter(Boolean).join(" ")}
        data-component="Tabs"
        data-variant={variant}
      >
        <div className="pm-tabs__list" role="tablist" aria-label={ariaLabel}>
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

export function Tab({
  value,
  children,
  icon,
  disabled = false,
  className = "",
}: TabProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tab must be used inside Tabs.");
  }

  const selected = context.value === value;
  const tabId = `${context.name}-tab-${value}`;
  const panelId = `${context.name}-panel-${value}`;

  return (
    <button
      type="button"
      id={tabId}
      role="tab"
      aria-selected={selected}
      aria-controls={panelId}
      disabled={disabled}
      className={[
        "pm-tab",
        selected ? "pm-tab--active" : "",
        disabled ? "pm-tab--disabled" : "",
        icon ? "pm-tab--with-icon" : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="Tab"
      data-value={value}
      onClick={() => {
        if (!disabled) {
          context.onValueChange?.(value);
        }
      }}
    >
      <span className="pm-tab__state-layer">
        {icon ? <span className="pm-tab__icon" aria-hidden="true">{icon}</span> : null}
        <span className="pm-tab__label">{children}</span>
        <span className="pm-tab__indicator" aria-hidden="true" />
      </span>
    </button>
  );
}

export function TabPanel({
  value,
  children,
  className = "",
}: TabPanelProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabPanel must be used inside Tabs.");
  }

  const selected = context.value === value;
  const tabId = `${context.name}-tab-${value}`;
  const panelId = `${context.name}-panel-${value}`;

  if (!selected) return null;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      className={[
        "pm-tab-panel",
        className,
      ].filter(Boolean).join(" ")}
      data-component="TabPanel"
      data-value={value}
    >
      {children}
    </div>
  );
}
