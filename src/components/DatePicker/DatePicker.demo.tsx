import React, { useState } from "react";
import { DatePicker } from "./DatePicker";

export function DatePickerDemo() {
  const [date, setDate] = useState("2026-06-25");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>DatePicker</h2>
      <DatePicker value={date} onValueChange={setDate} supportingText="نسخه فعلی میلادی است؛ تقویم شمسی در فاز بعدی اضافه می‌شود." />
      <DatePicker label="تاریخ غیرفعال" defaultValue="2026-06-25" disabled />
    </section>
  );
}
