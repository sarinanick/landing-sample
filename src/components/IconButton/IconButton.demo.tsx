import { IconButton } from "./IconButton";

export function IconButtonDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>IconButton</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <IconButton label="جستجو" icon="🔎" variant="standard" />
        <IconButton label="افزودن" icon="＋" variant="filled" />
        <IconButton label="اعلان‌ها" icon="🔔" variant="tonal" />
        <IconButton label="تنظیمات" icon="⚙️" variant="outlined" />
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <IconButton label="پسندیدن" icon="♡" selectedIcon="♥" selected />
        <IconButton label="نشان‌کردن" icon="☆" selectedIcon="★" variant="outlined" selected />
        <IconButton label="غیرفعال" icon="⛔" variant="filled" disabled />
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <IconButton label="کوچک" icon="🔎" size="small" />
        <IconButton label="متوسط" icon="🔎" size="medium" />
        <IconButton label="بزرگ" icon="🔎" size="large" />
      </div>
    </section>
  );
}
