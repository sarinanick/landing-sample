import React from "react";
import "./Icon.css";

export type IconSize = "small" | "medium" | "large" | "xlarge";

export type IconProps = {
  name?: string;
  children?: React.ReactNode;
  size?: IconSize;
  label?: string;
  decorative?: boolean;
  className?: string;
};

/**
 * Persian Material Icon
 *
 * System target:
 * - Temporary icon wrapper until official SVG/Material Symbols are added.
 * - Keeps icon sizing consistent across components.
 * - Supports decorative and labeled icons.
 */
export function Icon({
  name,
  children,
  size = "medium",
  label,
  decorative = true,
  className = "",
}: IconProps) {
  return (
    <span
      className={["pm-icon", `pm-icon--${size}`, className].filter(Boolean).join(" ")}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={!decorative ? label ?? name : undefined}
      data-component="Icon"
      data-icon-name={name}
    >
      {children ?? name ?? "•"}
    </span>
  );
}
