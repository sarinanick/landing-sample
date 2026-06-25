import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { TextField } from "../../components/TextField";
import "../../styles/base.css";

export function DashboardExample() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      padding: "var(--md-sys-spacing-6)",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        alignItems: "center",
        marginBlockEnd: "var(--md-sys-spacing-6)"
      }}>
        <div>
          <h1 style={{
            margin: 0,
            fontSize: "var(--md-sys-typescale-headline-medium-size)",
            lineHeight: "var(--md-sys-typescale-headline-medium-line-height)"
          }}>
            داشبورد نمونه
          </h1>
          <p style={{
            margin: 0,
            color: "var(--md-sys-color-on-surface-variant)"
          }}>
            نمونه ترکیب Button، TextField و Card
          </p>
        </div>

        <Button variant="filled">افزودن مورد</Button>
      </header>

      <section style={{ maxWidth: 420, marginBlockEnd: "var(--md-sys-spacing-6)" }}>
        <TextField
          fullWidth
          variant="filled"
          label="جستجو"
          placeholder="جستجو در کارت‌ها"
          supportingText="عبارت مورد نظر را وارد کنید"
        />
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "var(--md-sys-spacing-4)"
      }}>
        <Card
          variant="filled"
          title="فروش امروز"
          subtitle="گزارش کوتاه"
          actions={<Button variant="text">مشاهده</Button>}
        >
          ۱۲ سفارش جدید ثبت شده است.
        </Card>

        <Card
          variant="outlined"
          title="کاربران فعال"
          subtitle="وضعیت سیستم"
          actions={<Button variant="outlined">جزئیات</Button>}
        >
          نرخ فعالیت امروز نسبت به دیروز بهتر است.
        </Card>

        <Card
          variant="elevated"
          interactive
          title="پیام‌های جدید"
          subtitle="نیازمند بررسی"
          actions={<Button variant="filled">باز کردن</Button>}
        >
          ۳ پیام جدید از کاربران دریافت شده است.
        </Card>
      </section>
    </main>
  );
}
