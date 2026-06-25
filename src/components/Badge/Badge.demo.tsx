import { Badge, BadgeAnchor } from "./Badge";
import { IconButton } from "../IconButton";

export function BadgeDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Badge</h2>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        <Badge />
        <Badge content={3} />
        <Badge content={120} max={99} />
        <Badge content={0} showZero />
        <Badge content={8} tone="primary" />
        <Badge content={12} tone="secondary" />
      </div>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        <BadgeAnchor badgeContent={3}>
          <IconButton label="پیام‌ها" icon="✉️" />
        </BadgeAnchor>

        <BadgeAnchor badgeContent={12} tone="primary">
          <IconButton label="اعلان‌ها" icon="🔔" variant="tonal" />
        </BadgeAnchor>

        <BadgeAnchor variant="small">
          <IconButton label="وضعیت" icon="👤" variant="outlined" />
        </BadgeAnchor>
      </div>
    </section>
  );
}
