import { Chip } from "./Chip";

export function ChipDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 20 }}>
      <h2>Chip Variants</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <Chip variant="assist" leadingIcon="✨">پیشنهاد هوشمند</Chip>
        <Chip variant="suggestion">محبوب‌ترین‌ها</Chip>
        <Chip variant="filter">ارسال رایگان</Chip>
        <Chip variant="filter" selected>موجود در انبار</Chip>
        <Chip variant="input" leadingIcon="🏷" onRemove={() => {}}>کفش ورزشی</Chip>
        <Chip variant="assist" disabled>غیرفعال</Chip>
      </div>
    </section>
  );
}
