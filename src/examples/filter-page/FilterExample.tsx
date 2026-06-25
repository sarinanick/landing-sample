import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Checkbox } from "../../components/Checkbox";
import { TextField } from "../../components/TextField";
import "../../styles/base.css";

export function FilterExample() {
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
          فیلتر محصولات
        </h1>
        <p style={{
          margin: 0,
          color: "var(--md-sys-color-on-surface-variant)"
        }}>
          نمونه ترکیب TextField، Checkbox، Card و Button
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "minmax(260px, 360px) minmax(0, 1fr)",
        gap: "var(--md-sys-spacing-6)",
        alignItems: "start"
      }}>
        <Card variant="filled" title="فیلترها" subtitle="چند گزینه را انتخاب کنید">
          <div style={{ display: "grid", gap: 16, marginBlockStart: 16 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="جستجو"
              placeholder="نام محصول"
            />

            <Checkbox label="موجود در انبار" defaultChecked />
            <Checkbox label="ارسال رایگان" />
            <Checkbox label="تخفیف‌دار" />
            <Checkbox label="برندهای منتخب" indeterminate supportingText="بعضی برندها انتخاب شده‌اند" />

            <div style={{ display: "flex", gap: 12, marginBlockStart: 8 }}>
              <Button variant="filled">اعمال فیلتر</Button>
              <Button variant="text">پاک کردن</Button>
            </div>
          </div>
        </Card>

        <Card
          variant="outlined"
          title="نتایج"
          subtitle="اینجا لیست آیتم‌های فیلترشده نمایش داده می‌شود."
        >
          فعلاً این صفحه برای تست کامپوننت‌های پایه ساخته شده است.
        </Card>
      </section>
    </main>
  );
}
