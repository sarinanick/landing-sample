import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { NavigationDrawer } from "../../components/NavigationDrawer";
import { Tabs, Tab, TabPanel } from "../../components/Tabs";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function DesktopShellExample() {
  const [destination, setDestination] = useState("dashboard");
  const [tab, setTab] = useState("overview");

  return (
    <main dir="rtl" className="pm-navigation-drawer-layout" style={{
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <NavigationDrawer
        value={destination}
        onValueChange={setDestination}
        headline="سیستم فارسی"
        footer="Persian Material System v0.11"
        sections={[
          {
            items: [
              { value: "dashboard", label: "داشبورد", icon: "📊" },
              { value: "orders", label: "سفارش‌ها", icon: "🧾", badge: 12 },
              { value: "messages", label: "پیام‌ها", icon: "✉️", badge: 3 },
            ],
          },
          {
            title: "مدیریت",
            items: [
              { value: "users", label: "کاربران", icon: "👥" },
              { value: "reports", label: "گزارش‌ها", icon: "📈" },
              { value: "settings", label: "تنظیمات", icon: "⚙️" },
            ],
          },
        ]}
      />

      <section style={{ minWidth: 0 }}>
        <TopAppBar
          variant="small"
          title={
            destination === "dashboard" ? "داشبورد" :
            destination === "orders" ? "سفارش‌ها" :
            destination === "messages" ? "پیام‌ها" :
            destination === "users" ? "کاربران" :
            destination === "reports" ? "گزارش‌ها" :
            "تنظیمات"
          }
          actions={[
            { icon: "🔎", label: "جستجو" },
            { icon: "🔔", label: "اعلان‌ها" },
            { icon: "⋮", label: "بیشتر" },
          ]}
          elevated
        />

        <div style={{
          padding: "var(--md-sys-spacing-6)",
          display: "grid",
          gap: "var(--md-sys-spacing-6)"
        }}>
          <Card variant="filled">
            <Tabs value={tab} onValueChange={setTab} variant="secondary">
              <Tab value="overview">نمای کلی</Tab>
              <Tab value="activity">فعالیت</Tab>
              <Tab value="filters">فیلترها</Tab>
            </Tabs>

            <div style={{ paddingInline: 16 }}>
              <TabPanel value="overview">
                <section style={{ display: "grid", gap: 16 }}>
                  <h2 style={{
                    margin: 0,
                    fontSize: "var(--md-sys-typescale-headline-small-size)",
                    lineHeight: "var(--md-sys-typescale-headline-small-line-height)"
                  }}>
                    نمای کلی
                  </h2>
                  <p style={{ margin: 0, color: "var(--md-sys-color-on-surface-variant)" }}>
                    این صفحه نمونه shell دسکتاپ با Navigation Drawer، Top App Bar و Tabs است.
                  </p>
                  <Button variant="filled">افزودن مورد جدید</Button>
                </section>
              </TabPanel>

              <TabPanel value="activity">
                <Card variant="outlined" title="فعالیت اخیر" subtitle="امروز">
                  ۱۲ رویداد جدید در سیستم ثبت شده است.
                </Card>
              </TabPanel>

              <TabPanel value="filters">
                <section style={{ display: "grid", gap: 16, maxWidth: 520 }}>
                  <TextField fullWidth variant="outlined" label="جستجو" placeholder="عبارت جستجو" />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    <Chip variant="filter" selected>همه</Chip>
                    <Chip variant="filter">فعال</Chip>
                    <Chip variant="filter">جدید</Chip>
                  </div>
                </section>
              </TabPanel>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
