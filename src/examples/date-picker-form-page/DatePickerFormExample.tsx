import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { DatePicker } from "../../components/DatePicker";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function DatePickerFormExample() {
  const [date, setDate] = useState("2026-06-25");

  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="برنامه‌ریزی جلسه" navigationIcon="←" actions={[{ icon: "⋮", label: "بیشتر" }]} elevated />
      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-4)", maxWidth: 860, marginInline: "auto" }}>
        <Card variant="filled" title="جزئیات جلسه" subtitle="نمونه استفاده از DatePicker در فرم">
          <div style={{ display: "grid", gap: 20, marginBlockStart: 16 }}>
            <TextField fullWidth variant="outlined" label="عنوان جلسه" placeholder="مثلاً جلسه بررسی محصول" />
            <DatePicker value={date} onValueChange={setDate} supportingText="در نسخه بعدی می‌توان این بخش را به تقویم شمسی متصل کرد." />
            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="filled">ذخیره</Button>
              <Button variant="text">انصراف</Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
