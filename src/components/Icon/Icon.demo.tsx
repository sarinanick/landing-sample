import { Icon } from "./Icon";

export function IconDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Icon</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <Icon size="small">🔎</Icon>
        <Icon size="medium">👤</Icon>
        <Icon size="large">⚙️</Icon>
        <Icon size="xlarge">📊</Icon>
      </div>
    </section>
  );
}
