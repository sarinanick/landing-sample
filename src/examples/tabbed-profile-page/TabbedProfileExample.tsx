import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { Switch } from "../../components/Switch";
import { Tabs, Tab, TabPanel } from "../../components/Tabs";
import { TextField } from "../../components/TextField";
import "../../styles/base.css";

export function TabbedProfileExample() {
  const [tab, setTab] = useState("info");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      padding: "var(--md-sys-spacing-6)",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <header style={{ marginBlockEnd: "var(--md-sys-spacing-6)" }}>
        <h1 style={{
          margin: 0,
          fontSize: "var(--md-sys-typescale-headline-medium-size)",
          lineHeight: "var(--md-sys-typescale-headline-medium-line-height)"
        }}>
          پروفایل کاربر
        </h1>
        <p style={{
          margin: 0,
          color: "var(--md-sys-color-on-surface-variant)"
        }}>
          نمونه صفحه چندبخشی با Tabs و کامپوننت‌های قبلی
        </p>
      </header>

      <Card variant="filled">
        <Tabs value={tab} onValueChange={setTab} variant="primary" ariaLabel="بخش‌های پروفایل">
          <Tab value="info" icon="👤">اطلاعات</Tab>
          <Tab value="activity" icon="📌">فعالیت‌ها</Tab>
          <Tab value="settings" icon="⚙️">تنظیمات</Tab>
        </Tabs>

        <div style={{ paddingInline: 16 }}>
          <TabPanel value="info">
            <form style={{ display: "grid", gap: 20, maxWidth: 520 }}>
              <TextField fullWidth variant="filled" label="نام" placeholder="نام و نام خانوادگی" />
              <TextField fullWidth variant="outlined" label="ایمیل" placeholder="example@email.com" />
              <div style={{ display: "flex", gap: 12 }}>
                <Button variant="filled">ذخیره</Button>
                <Button variant="text">لغو</Button>
              </div>
            </form>
          </TabPanel>

          <TabPanel value="activity">
            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Chip variant="filter" selected>همه</Chip>
                <Chip variant="filter">سفارش‌ها</Chip>
                <Chip variant="filter">پیام‌ها</Chip>
              </div>
              <Card variant="outlined" title="فعالیت اخیر" subtitle="امروز">
                کاربر یک سفارش جدید ثبت کرده است.
              </Card>
            </div>
          </TabPanel>

          <TabPanel value="settings">
            <div style={{ display: "grid", gap: 20, maxWidth: 520 }}>
              <Switch label="اعلان‌ها" supportingText="پیام‌های مهم را دریافت کن" defaultChecked />
              <Switch label="حالت تاریک" supportingText="رابط کاربری تیره شود" />
            </div>
          </TabPanel>
        </div>
      </Card>
    </main>
  );
}
