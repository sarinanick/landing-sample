import React from "react";
import "./List.css";

export type ListDensity = "one-line" | "two-line" | "three-line";

export type ListProps = {
  children: React.ReactNode;
  density?: ListDensity;
  dividers?: boolean;
  className?: string;
  ariaLabel?: string;
};

export type ListItemProps = {
  headline: React.ReactNode;
  supportingText?: React.ReactNode;
  overline?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  interactive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

/**
 * Persian Material List / ListItem
 *
 * System target:
 * - Use for vertical groups of related content.
 * - Densities: one-line, two-line, three-line.
 * - Slots: leading, overline, headline, supporting text, trailing.
 * - States: enabled, hover, focus, pressed, selected, disabled.
 * - RTL-friendly.
 */
export function List({
  children,
  density = "two-line",
  dividers = false,
  className = "",
  ariaLabel = "لیست",
}: ListProps) {
  return (
    <div
      className={[
        "pm-list",
        `pm-list--${density}`,
        dividers ? "pm-list--dividers" : "",
        className,
      ].filter(Boolean).join(" ")}
      role="list"
      aria-label={ariaLabel}
      data-component="List"
      data-density={density}
    >
      {children}
    </div>
  );
}

export function ListItem({
  headline,
  supportingText,
  overline,
  leading,
  trailing,
  selected = false,
  disabled = false,
  interactive = false,
  onClick,
  className = "",
}: ListItemProps) {
  const clickable = interactive || Boolean(onClick);
  const Component = clickable ? "button" : "div";

  return (
    <Component
      type={clickable ? "button" : undefined}
      className={[
        "pm-list-item",
        clickable ? "pm-list-item--interactive" : "",
        selected ? "pm-list-item--selected" : "",
        disabled ? "pm-list-item--disabled" : "",
        className,
      ].filter(Boolean).join(" ")}
      role="listitem"
      disabled={clickable ? disabled : undefined}
      aria-current={selected ? "true" : undefined}
      onClick={clickable && !disabled ? onClick : undefined}
      data-component="ListItem"
      data-selected={selected ? "true" : "false"}
    >
      {leading ? (
        <span className="pm-list-item__leading" aria-hidden="true">
          {leading}
        </span>
      ) : null}

      <span className="pm-list-item__content">
        {overline ? <span className="pm-list-item__overline">{overline}</span> : null}
        <span className="pm-list-item__headline">{headline}</span>
        {supportingText ? <span className="pm-list-item__supporting-text">{supportingText}</span> : null}
      </span>

      {trailing ? (
        <span className="pm-list-item__trailing">
          {trailing}
        </span>
      ) : null}
    </Component>
  );
}
