import { Card } from "../Card";
import { Divider } from "./Divider";

export function DividerDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Divider</h2>

      <Card variant="filled" title="Horizontal Divider">
        <div style={{ display: "grid", gap: 12 }}>
          <p style={{ margin: 0 }}>بخش اول</p>
          <Divider />
          <p style={{ margin: 0 }}>بخش دوم</p>
          <Divider variant="inset" />
          <p style={{ margin: 0 }}>بخش سوم با divider inset</p>
          <Divider variant="middle" tone="strong" />
          <p style={{ margin: 0 }}>بخش چهارم با divider middle و strong</p>
        </div>
      </Card>

      <Card variant="outlined" title="Vertical Divider">
        <div style={{ display: "flex", gap: 16, alignItems: "stretch", minHeight: 72 }}>
          <span>اکشن اول</span>
          <Divider orientation="vertical" />
          <span>اکشن دوم</span>
          <Divider orientation="vertical" tone="strong" />
          <span>اکشن سوم</span>
        </div>
      </Card>
    </section>
  );
}
