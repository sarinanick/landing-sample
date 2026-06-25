import { Radio, RadioGroup } from "./Radio";

export function RadioDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Radio Button States</h2>

      <RadioGroup
        label="نوع حساب"
        supportingText="فقط یک گزینه را انتخاب کنید"
        defaultValue="personal"
      >
        <Radio value="personal" label="شخصی" supportingText="برای استفاده فردی" />
        <Radio value="business" label="تجاری" supportingText="برای تیم‌ها و کسب‌وکارها" />
        <Radio value="enterprise" label="سازمانی" supportingText="برای سازمان‌های بزرگ" />
      </RadioGroup>

      <RadioGroup
        label="گروه خطادار"
        errorText="انتخاب یکی از گزینه‌ها الزامی است"
      >
        <Radio value="a" label="گزینه اول" />
        <Radio value="b" label="گزینه دوم" />
      </RadioGroup>

      <RadioGroup label="گروه غیرفعال" defaultValue="one" disabled>
        <Radio value="one" label="گزینه انتخاب‌شده" />
        <Radio value="two" label="گزینه دیگر" />
      </RadioGroup>
    </section>
  );
}
