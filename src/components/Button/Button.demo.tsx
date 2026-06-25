import { Button } from "./Button";

export function ButtonDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 16 }}>
      <h2>Button Variants</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="filled">تأیید</Button>
        <Button variant="outlined">انصراف</Button>
        <Button variant="text">بیشتر</Button>
        <Button variant="elevated">ذخیره</Button>
        <Button variant="tonal">ادامه</Button>
      </div>

      <h3>Disabled</h3>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="filled" disabled>غیرفعال</Button>
        <Button variant="outlined" disabled>غیرفعال</Button>
        <Button variant="text" disabled>غیرفعال</Button>
        <Button variant="elevated" disabled>غیرفعال</Button>
        <Button variant="tonal" disabled>غیرفعال</Button>
      </div>
    </section>
  );
}
