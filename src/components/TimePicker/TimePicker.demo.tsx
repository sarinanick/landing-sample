import React, { useState } from "react";
import { TimePicker } from "./TimePicker";

export function TimePickerDemo() {
  const [time, setTime] = useState("09:30");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>TimePicker</h2>
      <TimePicker value={time} onValueChange={setTime} supportingText="انتخاب زمان با فرمت ۲۴ ساعته" />
      <TimePicker defaultValue="14:15" mode="12h" supportingText="نمایش ۱۲ ساعته با ق.ظ / ب.ظ" />
      <TimePicker defaultValue="18:00" disabled label="زمان غیرفعال" />
    </section>
  );
}
