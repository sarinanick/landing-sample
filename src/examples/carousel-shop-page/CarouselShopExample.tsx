import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import { SearchBar } from "../../components/SearchBar";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

const heroItems = [
  { value: "hero-1", title: "پیشنهادهای تابستانی", subtitle: "تا ۴۰٪ تخفیف روی محصولات منتخب", media: "☀️", action: <Button variant="filled">مشاهده پیشنهادها</Button> },
  { value: "hero-2", title: "ارسال رایگان", subtitle: "برای سفارش‌های بالای ۵۰۰ هزار تومان", media: "🚚", action: <Button variant="filled">شروع خرید</Button> },
  { value: "hero-3", title: "محصولات جدید", subtitle: "جدیدترین کالاهای هفته", media: "✨", action: <Button variant="filled">دیدن جدیدها</Button> },
];

const productItems = [
  { value: "p1", title: "کفش ورزشی", subtitle: "۱٬۲۵۰٬۰۰۰ تومان", media: "👟", action: <Button variant="text">افزودن</Button> },
  { value: "p2", title: "هدفون بی‌سیم", subtitle: "۸۹۰٬۰۰۰ تومان", media: "🎧", action: <Button variant="text">افزودن</Button> },
  { value: "p3", title: "ساعت هوشمند", subtitle: "۲٬۴۰۰٬۰۰۰ تومان", media: "⌚", action: <Button variant="text">افزودن</Button> },
  { value: "p4", title: "کیف چرمی", subtitle: "۱٬۸۰۰٬۰۰۰ تومان", media: "👜", action: <Button variant="text">افزودن</Button> },
];

export function CarouselShopExample() {
  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="فروشگاه" navigationIcon="←" actions={[{ icon: "🛒", label: "سبد خرید" }, { icon: "⋮", label: "بیشتر" }]} elevated />

      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-6)", maxWidth: 980, marginInline: "auto" }}>
        <SearchBar placeholder="جستجوی محصول" recentSearches={["کفش", "هدفون", "ساعت"]} />

        <Carousel items={heroItems} variant="hero" ariaLabel="بنرهای فروشگاه" />

        <Card variant="filled" title="محصولات پیشنهادی" subtitle="نمونه استفاده از Carousel در فروشگاه">
          <div style={{ marginBlockStart: 16 }}>
            <Carousel items={productItems} variant="cards" ariaLabel="محصولات پیشنهادی" />
          </div>
        </Card>
      </section>
    </main>
  );
}
