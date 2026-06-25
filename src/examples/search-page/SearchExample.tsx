import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { TextField } from "../../components/TextField";
import "../../styles/base.css";

export function SearchExample() {
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
          جستجو
        </h1>
        <p style={{
          margin: 0,
          color: "var(--md-sys-color-on-surface-variant)"
        }}>
          نمونه صفحه جستجو با TextField، Chip، Card و Button
        </p>
      </header>

      <section style={{ display: "grid", gap: 20, maxWidth: 860 }}>
        <TextField
          fullWidth
          variant="filled"
          label="جستجو"
          placeholder="نام محصول، دسته‌بندی یا برند"
          supportingText="برای محدود کردن نتیجه‌ها از چیپ‌ها استفاده کنید"
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Chip variant="filter" selected>موجود در انبار</Chip>
          <Chip variant="filter">ارسال رایگان</Chip>
          <Chip variant="filter">تخفیف‌دار</Chip>
          <Chip variant="suggestion">پیشنهاد امروز</Chip>
          <Chip variant="input" onRemove={() => {}}>کفش ورزشی</Chip>
        </div>

        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "var(--md-sys-spacing-4)"
        }}>
          <Card
            variant="filled"
            title="نتیجه اول"
            subtitle="دسته‌بندی نمونه"
            actions={<Button variant="text">مشاهده</Button>}
          >
            این کارت نمونه برای نمایش نتیجه جستجو ساخته شده است.
          </Card>

          <Card
            variant="outlined"
            title="نتیجه دوم"
            subtitle="دسته‌بندی نمونه"
            actions={<Button variant="outlined">جزئیات</Button>}
          >
            چیپ‌ها برای کنترل سریع فیلترها استفاده شده‌اند.
          </Card>
        </section>
      </section>
    </main>
  );
}
