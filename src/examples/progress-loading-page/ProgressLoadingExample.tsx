import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CircularProgress, LinearProgress } from "../../components/Progress";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function ProgressLoadingExample() {
  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="وضعیت پردازش" navigationIcon="←" actions={[{ icon: "🔎", label: "جستجو" }, { icon: "⋮", label: "بیشتر" }]} elevated />
      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-4)", maxWidth: 760, marginInline: "auto" }}>
        <Card variant="filled" title="آپلود فایل" subtitle="نمونه استفاده از LinearProgress" actions={<Button variant="filled">توقف</Button>}>
          <div style={{ display: "grid", gap: 16, marginBlockStart: 16 }}>
            <LinearProgress value={68} label="۶۸٪ آپلود شده" />
            <LinearProgress indeterminate label="در حال بررسی فایل..." />
          </div>
        </Card>
        <Card variant="outlined" title="پردازش گزارش" subtitle="نمونه استفاده از CircularProgress">
          <div style={{ display: "flex", gap: 24, alignItems: "center", marginBlockStart: 16 }}>
            <CircularProgress indeterminate size="large" />
            <div>
              <p style={{ margin: 0 }}>گزارش در حال آماده‌سازی است.</p>
              <p style={{ margin: 0, color: "var(--md-sys-color-on-surface-variant)" }}>این عملیات ممکن است چند ثانیه طول بکشد.</p>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
