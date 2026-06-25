import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Switch } from "../../components/Switch";
import "../../styles/base.css";

export function SettingsExample() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      padding: "var(--md-sys-spacing-6)",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <header style={{ marginBlockEnd: "var(--md-sys-spacing-6)" }}>
        <h1 style={{
          margin: 0,
          fontSize: "var(--md-sys-typescale-headline-medium-size)",
          lineHeight: "var(--md-sys-typescale-headline-medium-line-height)"
        }}>
          تنظیمات
        </h1>
        <p style={{
          margin: 0,
          color: "var(--md-sys-color-on-surface-variant)"
        }}>
          نمونه صفحه تنظیمات با Card، Switch و Button
        </p>
      </header>

      <section style={{
        display: "grid",
        gap: "var(--md-sys-spacing-4)",
        maxWidth: 640
      }}>
        <Card
          variant="filled"
          title="اعلان‌ها"
          subtitle="کنترل پیام‌ها و هشدارها"
        >
          <div style={{ display: "grid", gap: 20, marginBlockStart: 12 }}>
            <Switch label="اعلان‌های فوری" supportingText="برای پیام‌های مهم و فوری" defaultChecked />
            <Switch label="ایمیل هفتگی" supportingText="خلاصه فعالیت‌ها در پایان هفته" />
            <Switch label="پیامک امنیتی" supportingText="برای ورودهای جدید و تغییر رمز" defaultChecked />
          </div>
        </Card>

        <Card
          variant="outlined"
          title="ظاهر"
          subtitle="شخصی‌سازی تجربه کاربری"
          actions={<Button variant="filled">ذخیره تغییرات</Button>}
        >
          <div style={{ display: "grid", gap: 20, marginBlockStart: 12 }}>
            <Switch label="حالت تاریک" supportingText="نمایش رابط کاربری با رنگ‌های تیره" />
            <Switch label="کاهش انیمیشن‌ها" supportingText="برای تمرکز بیشتر و حرکت کمتر در رابط کاربری" />
          </div>
        </Card>
      </section>
    </main>
  );
}
