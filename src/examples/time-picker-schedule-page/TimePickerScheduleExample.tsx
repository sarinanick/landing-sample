import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { DatePicker } from "../../components/DatePicker";
import { TextField } from "../../components/TextField";
import { TimePicker } from "../../components/TimePicker";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function TimePickerScheduleExample() {
  const [date, setDate] = useState("2026-06-25");
  const [time, setTime] = useState("10:30");

  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="زمان‌بندی جلسه" navigationIcon="←" actions={[{ icon: "⋮", label: "بیشتر" }]} elevated />

      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-4)", maxWidth: 920, marginInline: "auto" }}>
        <Card variant="filled" title="تنظیم زمان جلسه" subtitle="نمونه ترکیب DatePicker و TimePicker">
          <div style={{ display: "grid", gap: 20, marginBlockStart: 16 }}>
            <TextField fullWidth variant="outlined" label="عنوان جلسه" placeholder="مثلاً جلسه طراحی محصول" />
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "start" }}>
              <DatePicker value={date} onValueChange={setDate} supportingText="تاریخ جلسه" />
              <TimePicker value={time} onValueChange={setTime} supportingText="زمان شروع جلسه" />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="filled">ثبت جلسه</Button>
              <Button variant="text">انصراف</Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
