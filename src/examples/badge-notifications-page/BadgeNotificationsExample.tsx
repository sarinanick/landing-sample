import React, { useState } from "react";
import { BadgeAnchor } from "../../components/Badge";
import { Card } from "../../components/Card";
import { IconButton } from "../../components/IconButton";
import { List, ListItem } from "../../components/List";
import { NavigationBar } from "../../components/NavigationBar";
import { Snackbar } from "../../components/Snackbar";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function BadgeNotificationsExample() {
  const [page, setPage] = useState("notifications");
  const [snackbar, setSnackbar] = useState("");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)",
      paddingBlockEnd: 96
    }}>
      <TopAppBar
        variant="small"
        title="اعلان‌ها"
        navigationIcon="←"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "⋮", label: "بیشتر" },
        ]}
        elevated
      />

      <section style={{
        padding: "var(--md-sys-spacing-6)",
        display: "grid",
        gap: "var(--md-sys-spacing-4)",
        maxWidth: 760,
        marginInline: "auto"
      }}>
        <Card
          variant="filled"
          title="مرکز اعلان‌ها"
          subtitle="نمونه استفاده از Badge کنار اکشن‌ها و آیتم‌ها"
          actions={
            <>
              <BadgeAnchor badgeContent={4}>
                <IconButton
                  label="پیام‌ها"
                  icon="✉️"
                  onClick={() => setSnackbar("۴ پیام خوانده‌نشده دارید.")}
                />
              </BadgeAnchor>

              <BadgeAnchor variant="small" tone="primary">
                <IconButton
                  label="وضعیت آنلاین"
                  icon="👤"
                  variant="outlined"
                  onClick={() => setSnackbar("کاربر آنلاین است.")}
                />
              </BadgeAnchor>
            </>
          }
        >
          <List density="two-line" dividers>
            <ListItem
              headline="پیام جدید"
              supportingText="یک پیام جدید از پشتیبانی دریافت شد."
              leading="✉️"
              trailing={
                <BadgeAnchor badgeContent={1}>
                  <span style={{ display: "inline-block", width: 24, height: 24 }}>📌</span>
                </BadgeAnchor>
              }
              interactive
            />
            <ListItem
              headline="سفارش ارسال شد"
              supportingText="سفارش شماره ۱۲۳۴۵ ارسال شد."
              leading="📦"
              trailing="امروز"
              interactive
            />
            <ListItem
              headline="هشدار امنیتی"
              supportingText="یک ورود جدید به حساب ثبت شد."
              leading="🔐"
              trailing={
                <BadgeAnchor variant="small">
                  <span style={{ display: "inline-block", width: 24, height: 24 }}>!</span>
                </BadgeAnchor>
              }
              interactive
            />
          </List>
        </Card>
      </section>

      <NavigationBar
        className="pm-navigation-bar--fixed"
        value={page}
        onValueChange={setPage}
        items={[
          { value: "home", label: "خانه", icon: "⌂" },
          { value: "notifications", label: "اعلان‌ها", icon: "🔔", badge: 4 },
          { value: "messages", label: "پیام‌ها", icon: "✉️", badge: 12 },
          { value: "profile", label: "پروفایل", icon: "👤" },
        ]}
      />

      <Snackbar open={Boolean(snackbar)} message={snackbar} onClose={() => setSnackbar("")} />
    </main>
  );
}
