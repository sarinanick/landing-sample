import { Slider } from "./Slider";

export function SliderDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24, maxWidth: 560 }}>
      <h2>Slider</h2>

      <Slider label="شدت صدا" defaultValue={45} supportingText="مقدار را با کشیدن دستگیره تغییر دهید" />
      <Slider label="قیمت" min={0} max={1000000} step={50000} defaultValue={350000} valueFormatter={(v) => `${v.toLocaleString("fa-IR")} تومان`} />
      <Slider label="کیفیت" defaultValue={70} tone="secondary" />
      <Slider label="خطا" defaultValue={20} tone="error" supportingText="مقدار انتخاب‌شده کمتر از حد مجاز است" />
      <Slider label="غیرفعال" defaultValue={60} disabled />
    </section>
  );
}
