import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Checkbox } from "../../components/Checkbox";
import { Slider } from "../../components/Slider";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function SliderFilterExample() {
  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="فیلتر پیشرفته" navigationIcon="←" actions={[{ icon: "🔎", label: "جستجو" }, { icon: "⋮", label: "بیشتر" }]} elevated />

      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-4)", maxWidth: 760, marginInline: "auto" }}>
        <Card variant="filled" title="فیلتر محصولات" subtitle="نمونه استفاده از Slider در فیلتر">
          <div style={{ display: "grid", gap: 24, marginBlockStart: 16 }}>
            <TextField fullWidth variant="outlined" label="جستجو" placeholder="نام محصول" />

            <Slider
              label="حداکثر قیمت"
              min={0}
              max={5000000}
              step={100000}
              defaultValue={1500000}
              valueFormatter={(v) => `${v.toLocaleString("fa-IR")} تومان`}
              supportingText="محدوده قیمت مورد نظر را انتخاب کنید"
            />

            <Slider
              label="امتیاز کاربران"
              min={1}
              max={5}
              step={0.5}
              defaultValue={4}
              tone="secondary"
              valueFormatter={(v) => `${v.toLocaleString("fa-IR")} از ۵`}
            />

            <Checkbox label="فقط کالاهای موجود" defaultChecked />
            <Checkbox label="ارسال رایگان" />

            <div style={{ display: "flex", gap: 12 }}>
              <Button variant="filled">اعمال فیلتر</Button>
              <Button variant="text">پاک کردن</Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
