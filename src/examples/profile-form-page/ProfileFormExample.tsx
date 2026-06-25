import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Radio, RadioGroup } from "../../components/Radio";
import { TextField } from "../../components/TextField";
import { Checkbox } from "../../components/Checkbox";
import "../../styles/base.css";

export function ProfileFormExample() {
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
          فرم پروفایل
        </h1>
        <p style={{
          margin: 0,
          color: "var(--md-sys-color-on-surface-variant)"
        }}>
          نمونه فرم با TextField، Radio، Checkbox، Card و Button
        </p>
      </header>

      <Card
        variant="filled"
        title="اطلاعات کاربر"
        subtitle="لطفاً اطلاعات پایه را تکمیل کنید"
        actions={
          <>
            <Button variant="text">انصراف</Button>
            <Button variant="filled">ذخیره</Button>
          </>
        }
      >
        <form style={{ display: "grid", gap: 24, marginBlockStart: 16, maxWidth: 520 }}>
          <TextField
            fullWidth
            variant="filled"
            label="نام و نام خانوادگی"
            placeholder="مثلاً علی تابعی"
          />

          <TextField
            fullWidth
            variant="outlined"
            label="ایمیل"
            placeholder="example@email.com"
            inputMode="email"
          />

          <RadioGroup
            label="نوع حساب"
            supportingText="فقط یک گزینه را انتخاب کنید"
            defaultValue="personal"
          >
            <Radio value="personal" label="شخصی" />
            <Radio value="business" label="تجاری" />
            <Radio value="enterprise" label="سازمانی" />
          </RadioGroup>

          <Checkbox
            label="قوانین را می‌پذیرم"
            supportingText="برای ادامه باید قوانین و شرایط استفاده را بپذیرید"
          />
        </form>
      </Card>
    </main>
  );
}
