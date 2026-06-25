import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { Tabs, Tab, TabPanel } from "../../components/Tabs";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function AppShellExample() {
  const [tab, setTab] = useState("home");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="اپلیکیشن نمونه"
        navigationIcon="☰"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "🔔", label: "اعلان‌ها" },
          { icon: "⋮", label: "بیشتر" },
        ]}
        elevated
      />

      <section style={{
        padding: "var(--md-sys-spacing-6)",
        display: "grid",
        gap: "var(--md-sys-spacing-6)"
      }}>
        <Card variant="filled">
          <Tabs value={tab} onValueChange={setTab} variant="secondary">
            <Tab value="home">خانه</Tab>
            <Tab value="search">جستجو</Tab>
            <Tab value="reports">گزارش‌ها</Tab>
          </Tabs>

          <div style={{ paddingInline: 16 }}>
            <TabPanel value="home">
              <section style={{ display: "grid", gap: 16 }}>
                <h2 style={{
                  margin: 0,
                  fontSize: "var(--md-sys-typescale-headline-small-size)",
                  lineHeight: "var(--md-sys-typescale-headline-small-line-height)"
                }}>
                  خانه
                </h2>
                <p style={{ margin: 0, color: "var(--md-sys-color-on-surface-variant)" }}>
                  این صفحه نشان می‌دهد چطور Top App Bar با Tabs و Card ترکیب می‌شود.
                </p>
                <Button variant="filled">شروع</Button>
              </section>
            </TabPanel>

            <TabPanel value="search">
              <section style={{ display: "grid", gap: 16 }}>
                <TextField fullWidth variant="filled" label="جستجو" placeholder="عبارت جستجو" />
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Chip variant="filter" selected>همه</Chip>
                  <Chip variant="filter">محبوب</Chip>
                  <Chip variant="suggestion">پیشنهادی</Chip>
                </div>
              </section>
            </TabPanel>

            <TabPanel value="reports">
              <Card variant="outlined" title="گزارش روزانه" subtitle="نمونه کارت گزارش">
                امروز ۱۲ مورد جدید ثبت شده است.
              </Card>
            </TabPanel>
          </div>
        </Card>
      </section>
    </main>
  );
}
