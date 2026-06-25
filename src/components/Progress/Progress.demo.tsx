import { LinearProgress, CircularProgress } from "./Progress";

export function ProgressDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Progress</h2>
      <LinearProgress value={45} label="بارگذاری ۴۵٪" />
      <LinearProgress indeterminate label="در حال ارسال..." />
      <LinearProgress value={70} tone="secondary" label="پردازش ثانویه" />
      <LinearProgress value={25} tone="error" label="خطا در آپلود" />
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        <CircularProgress value={30} size="small" label="کوچک" />
        <CircularProgress value={65} size="medium" label="متوسط" />
        <CircularProgress indeterminate size="large" label="در حال بارگذاری" />
      </div>
    </section>
  );
}
