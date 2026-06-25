import React from "react";
import "./Card.css";

export type CardVariant = "filled" | "outlined" | "elevated";
export type CardInteractiveState = "enabled" | "hovered" | "focused" | "pressed" | "dragged";

export type CardProps = React.HTMLAttributes<HTMLElement> & {
  variant?: CardVariant;
  interactive?: boolean;
  state?: CardInteractiveState;
  as?: "article" | "section" | "div";
  media?: React.ReactNode;
  overline?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
};

/**
 * Persian Material Card
 *
 * Figma source:
 * - Section: Cards
 * - Variants: Outlined, Elevated, Filled
 * - Examples: Stacked card, Horizontal card
 * - States: Enabled, Hovered, Focused, Pressed, Dragged
 */
export function Card({
  variant = "filled",
  interactive = false,
  state = "enabled",
  as = "article",
  media,
  overline,
  title,
  subtitle,
  actions,
  children,
  className = "",
  ...props
}: CardProps) {
  const Component = as;

  return (
    <Component
      {...props}
      className={[
        "pm-card",
        `pm-card--${variant}`,
        interactive ? "pm-card--interactive" : "",
        state !== "enabled" ? `pm-card--state-${state}` : "",
        className,
      ].filter(Boolean).join(" ")}
      data-component="Card"
      data-variant={variant}
      data-state={state}
      tabIndex={interactive && props.tabIndex === undefined ? 0 : props.tabIndex}
    >
      {media ? <div className="pm-card__media">{media}</div> : null}

      <div className="pm-card__content">
        {overline ? <div className="pm-card__overline">{overline}</div> : null}
        {title ? <h3 className="pm-card__title">{title}</h3> : null}
        {subtitle ? <p className="pm-card__subtitle">{subtitle}</p> : null}
        {children ? <div className="pm-card__body">{children}</div> : null}
      </div>

      {actions ? <div className="pm-card__actions">{actions}</div> : null}
    </Component>
  );
}
