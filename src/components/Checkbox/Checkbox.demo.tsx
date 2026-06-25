import { Checkbox } from "./Checkbox";

export function CheckboxDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 16 }}>
      <h2>Checkbox States</h2>

      <Checkbox label="گزینه انتخاب‌نشده" supportingText="برای انتخاب چند گزینه‌ای" />
      <Checkbox label="گزینه انتخاب‌شده" defaultChecked />
      <Checkbox label="حالت میانی" indeterminate supportingText="برای انتخاب بخشی از زیرمجموعه‌ها" />
      <Checkbox label="خطا" errorText="انتخاب این گزینه الزامی است" />
      <Checkbox label="غیرفعال" disabled />
      <Checkbox label="غیرفعال انتخاب‌شده" defaultChecked disabled />
    </section>
  );
}
