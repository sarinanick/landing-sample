import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { NavigationBar } from "../../components/NavigationBar";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function MobileShellExample() {
  const [page, setPage] = useState("home");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)",
      paddingBlockEnd: 96
    }}>
      <TopAppBar
        variant="small"
        title={
          page === "home" ? "خانه" :
          page === "search" ? "جستجو" :
          page === "messages" ? "پیام‌ها" :
          "پروفایل"
        }
        navigationIcon="☰"
        actions={[
          { icon: "🔔", label: "اعلان‌ها" },
          { icon: "⋮", label: "بیشتر" },
        ]}
        elevated
      />

      <section style={{
        padding: "var(--md-sys-spacing-4)",
        display: "grid",
        gap: "var(--md-sys-spacing-4)"
      }}>
        {page === "home" ? (
          <>
            <Card
              variant="filled"
              title="خوش آمدید"
              subtitle="نمونه shell موبایلی"
              actions={<Button variant="filled">شروع</Button>}
            >
              این صفحه نشان می‌دهد Top App Bar و Navigation Bar چطور کنار هم کار می‌کنند.
            </Card>

            <Card variant="outlined" title="وضعیت امروز" subtitle="گزارش کوتاه">
              ۱۲ مورد جدید ثبت شده است.
            </Card>
          </>
        ) : null}

        {page === "search" ? (
          <>
            <TextField fullWidth variant="filled" label="جستجو" placeholder="عبارت جستجو" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Chip variant="filter" selected>همه</Chip>
              <Chip variant="filter">محبوب</Chip>
              <Chip variant="suggestion">پیشنهادی</Chip>
            </div>
          </>
        ) : null}

        {page === "messages" ? (
          <Card variant="filled" title="پیام‌ها" subtitle="۳ پیام خوانده‌نشده">
            پیام‌های جدید شما اینجا نمایش داده می‌شوند.
          </Card>
        ) : null}

        {page === "profile" ? (
          <Card variant="elevated" title="پروفایل" subtitle="اطلاعات حساب">
            اطلاعات کاربر و تنظیمات حساب در این بخش قرار می‌گیرد.
          </Card>
        ) : null}
      </section>

      <NavigationBar
        className="pm-navigation-bar--fixed"
        value={page}
        onValueChange={setPage}
        items={[
          { value: "home", label: "خانه", icon: "⌂", activeIcon: "🏠" },
          { value: "search", label: "جستجو", icon: "🔎" },
          { value: "messages", label: "پیام‌ها", icon: "✉️", badge: 3 },
          { value: "profile", label: "پروفایل", icon: "👤" },
        ]}
      />
    </main>
  );
}
