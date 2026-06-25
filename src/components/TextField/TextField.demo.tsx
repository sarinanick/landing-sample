import { TextField } from "./TextField";

const SearchIcon = <span style={{ fontSize: 20 }}>🔎</span>;
const CloseIcon = <span style={{ fontSize: 20 }}>✕</span>;

export function TextFieldDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>TextField Variants</h2>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "start" }}>
        <TextField
          variant="filled"
          label="نام کاربری"
          defaultValue="علی"
          supportingText="نام کاربری خود را وارد کنید"
        />

        <TextField
          variant="outlined"
          label="شماره موبایل"
          placeholder="مثلاً 0912..."
          supportingText="شماره موبایل باید معتبر باشد"
        />

        <TextField
          variant="filled"
          label="جستجو"
          placeholder="عبارت جستجو"
          leadingIcon={SearchIcon}
          trailingIcon={CloseIcon}
        />

        <TextField
          variant="outlined"
          label="ایمیل"
          defaultValue="ali@example.com"
          errorText="فرمت ایمیل درست نیست"
        />

        <TextField
          variant="filled"
          label="غیرفعال"
          defaultValue="قابل ویرایش نیست"
          disabled
          supportingText="این فیلد غیرفعال است"
        />
      </div>
    </section>
  );
}
