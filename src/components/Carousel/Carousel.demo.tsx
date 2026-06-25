import { Button } from "../Button";
import { Carousel } from "./Carousel";

const items = [
  { value: "1", title: "کفش ورزشی", subtitle: "پیشنهاد امروز", media: "👟", action: <Button variant="text">مشاهده</Button> },
  { value: "2", title: "هدفون بی‌سیم", subtitle: "تخفیف ویژه", media: "🎧", action: <Button variant="text">مشاهده</Button> },
  { value: "3", title: "ساعت هوشمند", subtitle: "محصول جدید", media: "⌚", action: <Button variant="text">مشاهده</Button> },
  { value: "4", title: "کیف چرمی", subtitle: "پرفروش", media: "👜", action: <Button variant="text">مشاهده</Button> },
];

export function CarouselDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 32 }}>
      <h2>Carousel</h2>
      <Carousel items={items} />
      <Carousel items={items} variant="hero" ariaLabel="بنرهای اصلی" />
      <Carousel items={items} variant="compact" ariaLabel="اسلایدر فشرده" />
    </section>
  );
}
