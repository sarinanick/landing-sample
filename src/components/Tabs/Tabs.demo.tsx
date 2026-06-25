import React, { useState } from "react";
import { Card } from "../Card";
import { Tabs, Tab, TabPanel } from "./Tabs";

export function TabsDemo() {
  const [value, setValue] = useState("overview");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 20 }}>
      <h2>Tabs</h2>

      <Tabs value={value} onValueChange={setValue} variant="primary">
        <Tab value="overview" icon="🏠">نمای کلی</Tab>
        <Tab value="reports" icon="📊">گزارش‌ها</Tab>
        <Tab value="settings" icon="⚙️">تنظیمات</Tab>
        <Tab value="disabled" disabled>غیرفعال</Tab>
      </Tabs>

      <TabPanel value="overview">
        <Card variant="filled" title="نمای کلی">محتوای تب نمای کلی</Card>
      </TabPanel>

      <TabPanel value="reports">
        <Card variant="outlined" title="گزارش‌ها">محتوای تب گزارش‌ها</Card>
      </TabPanel>

      <TabPanel value="settings">
        <Card variant="elevated" title="تنظیمات">محتوای تب تنظیمات</Card>
      </TabPanel>
    </section>
  );
}
