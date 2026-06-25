import { Avatar } from "../../components/Avatar";
import { BadgeAnchor } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { List, ListItem } from "../../components/List";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function AvatarProfileExample() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="پروفایل کاربران"
        navigationIcon="←"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "⋮", label: "بیشتر" },
        ]}
        elevated
      />

      <section style={{
        padding: "var(--md-sys-spacing-6)",
        display: "grid",
        gap: "var(--md-sys-spacing-4)",
        maxWidth: 860,
        marginInline: "auto"
      }}>
        <Card
          variant="filled"
          title="حساب کاربری"
          subtitle="نمونه استفاده از Avatar در پروفایل"
          media={
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: 24 }}>
              <BadgeAnchor variant="small" tone="primary">
                <Avatar name="علی تابعی" size="xlarge" status="online" />
              </BadgeAnchor>
              <div>
                <h2 style={{ margin: 0 }}>علی تابعی</h2>
                <p style={{ margin: 0, color: "var(--md-sys-color-on-surface-variant)" }}>
                  مدیر محصول
                </p>
              </div>
            </div>
          }
          actions={<Button variant="filled">ویرایش پروفایل</Button>}
        >
          اطلاعات نمایشی، وضعیت و نقش کاربر در این بخش قابل مشاهده است.
        </Card>

        <Card variant="outlined" title="اعضای تیم">
          <List density="two-line" dividers>
            <ListItem
              headline="سارا محمدی"
              supportingText="طراح محصول — آنلاین"
              leading={<Avatar name="سارا محمدی" status="online" tone="secondary" />}
              trailing="مشاهده"
              interactive
            />
            <ListItem
              headline="رضا کریمی"
              supportingText="توسعه‌دهنده فرانت‌اند — مشغول"
              leading={<Avatar name="رضا کریمی" status="busy" tone="tertiary" />}
              trailing="مشاهده"
              interactive
            />
            <ListItem
              headline="مینا احمدی"
              supportingText="تحلیل‌گر داده — آفلاین"
              leading={<Avatar name="مینا احمدی" status="offline" tone="neutral" />}
              trailing="مشاهده"
              interactive
            />
          </List>
        </Card>
      </section>
    </main>
  );
}
