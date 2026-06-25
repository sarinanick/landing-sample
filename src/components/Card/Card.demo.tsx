import { Button } from "../Button";
import { Card } from "./Card";

export function CardDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Card Variants</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <Card
          variant="filled"
          title="کارت پر شده"
          subtitle="مناسب برای محتوای عمومی"
          actions={<Button variant="text">مشاهده</Button>}
        >
          این نمونه بر اساس Filled Card در فایل فیگما ساخته شده است.
        </Card>

        <Card
          variant="outlined"
          title="کارت خطی"
          subtitle="مناسب برای تفکیک واضح‌تر"
          actions={<Button variant="outlined">جزئیات</Button>}
        >
          این کارت مرز مشخص دارد و برای لیست‌ها و گروه‌بندی محتوا مناسب است.
        </Card>

        <Card
          variant="elevated"
          interactive
          title="کارت برجسته"
          subtitle="دارای سایه سطح اول"
          actions={<Button variant="filled">ادامه</Button>}
        >
          برای کارت‌هایی که نیاز به تاکید بصری بیشتری دارند.
        </Card>
      </div>
    </section>
  );
}
