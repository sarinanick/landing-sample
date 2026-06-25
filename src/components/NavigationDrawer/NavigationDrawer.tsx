import React from "react";
import "./NavigationDrawer.css";

export type NavigationDrawerVariant = "standard" | "modal";

export type NavigationDrawerItem = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
};

export type NavigationDrawerSection = {
  title?: string;
  items: NavigationDrawerItem[];
};

export type NavigationDrawerProps = {
  value: string;
  sections: NavigationDrawerSection[];
  onValueChange?: (value: string) => void;
  variant?: NavigationDrawerVariant;
  open?: boolean;
  onClose?: () => void;
  headline?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

/**
 * Persian Material Navigation Drawer
 *
 * System target:
 * - Standard drawer for desktop/tablet layouts.
 * - Modal drawer for temporary mobile/tablet overlay navigation.
 * - Supports sections, icons, labels, badges, active and disabled states.
 * - RTL-friendly.
 */
export function NavigationDrawer({
  value,
  sections,
  onValueChange,
  variant = "standard",
  open = true,
  onClose,
  headline,
  footer,
  className = "",
  ariaLabel = "منوی ناوبری",
}: NavigationDrawerProps) {
  const isModal = variant === "modal";

  return (
    <>
      {isModal && open ? (
        <button
          type="button"
          className="pm-navigation-drawer__scrim"
          aria-label="بستن منو"
          onClick={onClose}
        />
      ) : null}

      <aside
        className={[
          "pm-navigation-drawer",
          `pm-navigation-drawer--${variant}`,
          open ? "pm-navigation-drawer--open" : "pm-navigation-drawer--closed",
          className,
        ].filter(Boolean).join(" ")}
        data-component="NavigationDrawer"
        data-variant={variant}
        aria-label={ariaLabel}
      >
        {headline ? (
          <div className="pm-navigation-drawer__headline">
            {headline}
          </div>
        ) : null}

        <nav className="pm-navigation-drawer__nav">
          {sections.map((section, sectionIndex) => (
            <div className="pm-navigation-drawer__section" key={`section-${sectionIndex}`}>
              {section.title ? (
                <div className="pm-navigation-drawer__section-title">{section.title}</div>
              ) : null}

              <div className="pm-navigation-drawer__items">
                {section.items.map((item) => {
                  const selected = item.value === value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      className={[
                        "pm-navigation-drawer__item",
                        selected ? "pm-navigation-drawer__item--active" : "",
                        item.disabled ? "pm-navigation-drawer__item--disabled" : "",
                      ].filter(Boolean).join(" ")}
                      disabled={item.disabled}
                      aria-current={selected ? "page" : undefined}
                      onClick={() => {
                        if (!item.disabled) {
                          onValueChange?.(item.value);
                          if (isModal) onClose?.();
                        }
                      }}
                    >
                      {item.icon ? (
                        <span className="pm-navigation-drawer__item-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                      ) : null}

                      <span className="pm-navigation-drawer__item-label">
                        {item.label}
                      </span>

                      {item.badge !== undefined ? (
                        <span className="pm-navigation-drawer__item-badge" aria-label={`${item.badge} مورد`}>
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {footer ? (
          <div className="pm-navigation-drawer__footer">
            {footer}
          </div>
        ) : null}
      </aside>
    </>
  );
}
