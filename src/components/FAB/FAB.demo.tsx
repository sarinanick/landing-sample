import { FAB } from "./FAB";

export function FABDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>FAB</h2>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
        <FAB icon="＋" ariaLabel="افزودن" size="small" />
        <FAB icon="＋" ariaLabel="افزودن" size="medium" />
        <FAB icon="＋" ariaLabel="افزودن" size="large" />
        <FAB icon="＋" label="افزودن" size="extended" />
      </div>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
        <FAB icon="＋" ariaLabel="اصلی" variant="primary" />
        <FAB icon="✎" ariaLabel="ثانویه" variant="secondary" />
        <FAB icon="☆" ariaLabel="سوم" variant="tertiary" />
        <FAB icon="🔎" ariaLabel="سطح" variant="surface" />
        <FAB icon="⛔" ariaLabel="غیرفعال" disabled />
      </div>
    </section>
  );
}
