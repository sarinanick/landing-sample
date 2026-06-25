import React from "react";
import "./Divider.css";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "full" | "inset" | "middle";
export type DividerTone = "default" | "strong";

export type DividerProps = React.HTMLAttributes<HTMLHRElement | HTMLDivElement> & {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  tone?: DividerTone;
  decorative?: boolean;
};

/**
 * Persian Material Divider
 *
 * System target:
 * - Use for separating related groups of content.
 * - Orientations: horizontal, vertical.
 * - Variants: full, inset, middle.
 * - Tones: default, strong.
 * - RTL-friendly inset behavior.
 */
export function Divider({
  orientation = "horizontal",
  variant = "full",
  tone = "default",
  decorative = true,
  className = "",
  ...props
}: DividerProps) {
  const Component = orientation === "horizontal" ? "hr" : "div";

  return (
    <Component
      {...props}
      className={[
        "pm-divider",
        `pm-divider--${orientation}`,
        `pm-divider--${variant}`,
        `pm-divider--${tone}`,
        className,
      ].filter(Boolean).join(" ")}
      role={decorative ? "presentation" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      data-component="Divider"
      data-orientation={orientation}
      data-variant={variant}
      data-tone={tone}
    />
  );
}
