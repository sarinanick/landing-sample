import React from "react";
import "./Badge.css";

export type BadgeVariant = "small" | "large";
export type BadgeTone = "error" | "primary" | "secondary";

export type BadgeProps = {
  content?: React.ReactNode;
  max?: number;
  showZero?: boolean;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  className?: string;
};

export type BadgeAnchorProps = {
  children: React.ReactNode;
  badgeContent?: React.ReactNode;
  max?: number;
  showZero?: boolean;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  className?: string;
};

/**
 * Persian Material Badge
 *
 * System target:
 * - Use for notification counts and small status indicators.
 * - Variants: small dot, large numeric.
 * - Tones: error, primary, secondary.
 * - Can be used standalone or anchored to IconButton / Navigation item.
 * - RTL-friendly.
 */
export function Badge({
  content,
  max = 99,
  showZero = false,
  variant = content === undefined ? "small" : "large",
  tone = "error",
  className = "",
}: BadgeProps) {
  const isNumber = typeof content === "number";
  const isZero = content === 0;
  const hidden = isZero && !showZero;

  if (hidden) return null;

  const displayContent = isNumber && content > max ? `${max}+` : content;

  return (
    <span
      className={[
        "pm-badge",
        `pm-badge--${variant}`,
        `pm-badge--${tone}`,
        className,
      ].filter(Boolean).join(" ")}
      data-component="Badge"
      data-variant={variant}
      data-tone={tone}
    >
      {variant === "large" ? <span className="pm-badge__content">{displayContent}</span> : null}
    </span>
  );
}

export function BadgeAnchor({
  children,
  badgeContent,
  max = 99,
  showZero = false,
  variant,
  tone = "error",
  className = "",
}: BadgeAnchorProps) {
  return (
    <span
      className={[
        "pm-badge-anchor",
        className,
      ].filter(Boolean).join(" ")}
      data-component="BadgeAnchor"
    >
      {children}
      <Badge
        content={badgeContent}
        max={max}
        showZero={showZero}
        variant={variant}
        tone={tone}
        className="pm-badge-anchor__badge"
      />
    </span>
  );
}
