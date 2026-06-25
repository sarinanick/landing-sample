import React from "react";
import "./Progress.css";

export type ProgressTone = "primary" | "secondary" | "error";
export type ProgressSize = "small" | "medium" | "large";

export type LinearProgressProps = {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  tone?: ProgressTone;
  label?: React.ReactNode;
  className?: string;
};

export type CircularProgressProps = {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  tone?: ProgressTone;
  size?: ProgressSize;
  label?: React.ReactNode;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function LinearProgress({
  value = 0,
  max = 100,
  indeterminate = false,
  tone = "primary",
  label,
  className = "",
}: LinearProgressProps) {
  const percent = max > 0 ? clamp((value / max) * 100, 0, 100) : 0;

  return (
    <div className={["pm-progress-field", className].filter(Boolean).join(" ")} data-component="LinearProgress">
      {label ? <div className="pm-progress-field__label">{label}</div> : null}
      <div
        className={["pm-linear-progress", `pm-linear-progress--${tone}`, indeterminate ? "pm-linear-progress--indeterminate" : ""].filter(Boolean).join(" ")}
        role="progressbar"
        aria-valuemin={indeterminate ? undefined : 0}
        aria-valuemax={indeterminate ? undefined : max}
        aria-valuenow={indeterminate ? undefined : value}
      >
        <span className="pm-linear-progress__track" />
        <span className="pm-linear-progress__indicator" style={indeterminate ? undefined : { inlineSize: `${percent}%` }} />
      </div>
    </div>
  );
}

export function CircularProgress({
  value = 0,
  max = 100,
  indeterminate = false,
  tone = "primary",
  size = "medium",
  label,
  className = "",
}: CircularProgressProps) {
  const percent = max > 0 ? clamp((value / max) * 100, 0, 100) : 0;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <div className={["pm-circular-progress-field", className].filter(Boolean).join(" ")} data-component="CircularProgress">
      <div
        className={["pm-circular-progress", `pm-circular-progress--${tone}`, `pm-circular-progress--${size}`, indeterminate ? "pm-circular-progress--indeterminate" : ""].filter(Boolean).join(" ")}
        role="progressbar"
        aria-valuemin={indeterminate ? undefined : 0}
        aria-valuemax={indeterminate ? undefined : max}
        aria-valuenow={indeterminate ? undefined : value}
      >
        <svg className="pm-circular-progress__svg" viewBox="0 0 48 48" aria-hidden="true">
          <circle className="pm-circular-progress__track" cx="24" cy="24" r={radius} />
          <circle
            className="pm-circular-progress__indicator"
            cx="24"
            cy="24"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? undefined : dashOffset}
          />
        </svg>
      </div>
      {label ? <div className="pm-circular-progress-field__label">{label}</div> : null}
    </div>
  );
}
