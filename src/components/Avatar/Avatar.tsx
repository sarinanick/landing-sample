import React from "react";
import "./Avatar.css";

export type AvatarSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type AvatarShape = "circle" | "rounded" | "square";
export type AvatarTone = "primary" | "secondary" | "tertiary" | "neutral";
export type AvatarStatus = "online" | "offline" | "busy" | "away";

export type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  initials?: string;
  icon?: React.ReactNode;
  size?: AvatarSize;
  shape?: AvatarShape;
  tone?: AvatarTone;
  status?: AvatarStatus;
  className?: string;
};

function getInitials(name?: string, initials?: string) {
  if (initials) return initials.slice(0, 2);
  if (!name) return "";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

/**
 * Persian Material Avatar
 *
 * System target:
 * - Use for users, profiles, comments, messages and account menus.
 * - Supports image, initials and icon fallback.
 * - Supports size, shape, tone and status indicator.
 * - RTL-friendly.
 */
export function Avatar({
  src,
  alt,
  name,
  initials,
  icon,
  size = "medium",
  shape = "circle",
  tone = "primary",
  status,
  className = "",
}: AvatarProps) {
  const fallback = getInitials(name, initials);

  return (
    <span
      className={[
        "pm-avatar",
        `pm-avatar--${size}`,
        `pm-avatar--${shape}`,
        `pm-avatar--${tone}`,
        className,
      ].filter(Boolean).join(" ")}
      data-component="Avatar"
      data-size={size}
      data-shape={shape}
      data-tone={tone}
      title={name}
    >
      {src ? (
        <img className="pm-avatar__image" src={src} alt={alt ?? name ?? "تصویر کاربر"} />
      ) : icon ? (
        <span className="pm-avatar__icon" aria-hidden="true">{icon}</span>
      ) : (
        <span className="pm-avatar__initials" aria-hidden={name ? "false" : "true"}>
          {fallback || "؟"}
        </span>
      )}

      {status ? (
        <span
          className={["pm-avatar__status", `pm-avatar__status--${status}`].join(" ")}
          aria-label={
            status === "online" ? "آنلاین" :
            status === "busy" ? "مشغول" :
            status === "away" ? "دور از دسترس" :
            "آفلاین"
          }
        />
      ) : null}
    </span>
  );
}
