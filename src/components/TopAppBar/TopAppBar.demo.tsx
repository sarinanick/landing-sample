import { TopAppBar } from "./TopAppBar";

export function TopAppBarDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Top App Bar Variants</h2>

      <TopAppBar
        variant="small"
        title="عنوان صفحه"
        navigationIcon="☰"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "⋮", label: "بیشتر" },
        ]}
      />

      <TopAppBar
        variant="center"
        title="عنوان وسط‌چین"
        navigationIcon="←"
        actions={[{ icon: "✓", label: "تأیید" }]}
      />

      <TopAppBar
        variant="medium"
        title="عنوان متوسط"
        subtitle="توضیح کوتاه زیر عنوان"
        navigationIcon="☰"
        actions={[{ icon: "🔔", label: "اعلان‌ها" }]}
        elevated
      />

      <TopAppBar
        variant="large"
        title="عنوان بزرگ صفحه"
        subtitle="برای صفحات اصلی یا بخش‌های مهم"
        navigationIcon="☰"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "⚙️", label: "تنظیمات" },
        ]}
      />
    </section>
  );
}
