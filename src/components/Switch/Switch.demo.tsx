import { Switch } from "./Switch";

export function SwitchDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 20 }}>
      <h2>Switch States</h2>

      <Switch label="اعلان‌ها" supportingText="دریافت پیام‌های مهم" defaultChecked />
      <Switch label="حالت تاریک" supportingText="فعال‌سازی ظاهر تیره" />
      <Switch label="ذخیره خودکار" defaultChecked disabled />
      <Switch label="موقعیت مکانی" disabled />
    </section>
  );
}
