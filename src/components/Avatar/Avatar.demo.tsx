import { Avatar } from "./Avatar";

export function AvatarDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Avatar</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <Avatar name="علی تابعی" size="xsmall" />
        <Avatar name="سارا محمدی" size="small" tone="secondary" />
        <Avatar name="رضا کریمی" size="medium" tone="tertiary" />
        <Avatar name="مینا احمدی" size="large" tone="neutral" />
        <Avatar name="پشتیبانی" size="xlarge" icon="👤" />
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <Avatar name="کاربر آنلاین" status="online" />
        <Avatar name="کاربر مشغول" status="busy" tone="secondary" />
        <Avatar name="کاربر دور" status="away" tone="tertiary" />
        <Avatar name="کاربر آفلاین" status="offline" tone="neutral" />
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <Avatar name="مربع" shape="square" />
        <Avatar name="گردگوشه" shape="rounded" tone="secondary" />
        <Avatar name="دایره" shape="circle" tone="tertiary" />
      </div>
    </section>
  );
}
