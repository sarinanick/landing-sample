import React, { useState } from "react";
import { NavigationBar } from "./NavigationBar";

export function NavigationBarDemo() {
  const [value, setValue] = useState("home");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Navigation Bar</h2>

      <NavigationBar
        value={value}
        onValueChange={setValue}
        items={[
          { value: "home", label: "خانه", icon: "⌂", activeIcon: "🏠" },
          { value: "search", label: "جستجو", icon: "🔎" },
          { value: "messages", label: "پیام‌ها", icon: "✉️", badge: 3 },
          { value: "profile", label: "پروفایل", icon: "👤" },
          { value: "settings", label: "تنظیمات", icon: "⚙️", disabled: true },
        ]}
      />
    </section>
  );
}
