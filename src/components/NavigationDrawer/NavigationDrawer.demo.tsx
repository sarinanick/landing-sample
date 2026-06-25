import React, { useState } from "react";
import { NavigationDrawer } from "./NavigationDrawer";

export function NavigationDrawerDemo() {
  const [value, setValue] = useState("dashboard");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Navigation Drawer</h2>

      <div style={{ height: 520 }}>
        <NavigationDrawer
          value={value}
          onValueChange={setValue}
          headline="پنل مدیریت"
          footer="نسخه آزمایشی"
          sections={[
            {
              items: [
                { value: "dashboard", label: "داشبورد", icon: "📊" },
                { value: "orders", label: "سفارش‌ها", icon: "🧾", badge: 8 },
                { value: "customers", label: "مشتریان", icon: "👥" },
              ],
            },
            {
              title: "تنظیمات",
              items: [
                { value: "profile", label: "پروفایل", icon: "👤" },
                { value: "settings", label: "تنظیمات", icon: "⚙️" },
                { value: "disabled", label: "غیرفعال", icon: "⛔", disabled: true },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
