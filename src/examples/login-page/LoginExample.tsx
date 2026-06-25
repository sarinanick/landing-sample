import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import "../../styles/base.css";

export function LoginExample() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "var(--md-sys-spacing-6)",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <section style={{
        width: "min(100%, 420px)",
        background: "var(--md-sys-color-surface-container-low)",
        borderRadius: "var(--md-sys-shape-corner-extra-large)",
        padding: "var(--md-sys-spacing-8)",
        boxShadow: "var(--md-sys-elevation-level1)"
      }}>
        <h1 style={{
          margin: 0,
          marginBlockEnd: "var(--md-sys-spacing-2)",
          fontSize: "var(--md-sys-typescale-headline-small-size)",
          lineHeight: "var(--md-sys-typescale-headline-small-line-height)"
        }}>
          ورود به حساب کاربری
        </h1>

        <p style={{
          margin: 0,
          marginBlockEnd: "var(--md-sys-spacing-6)",
          color: "var(--md-sys-color-on-surface-variant)",
          fontSize: "var(--md-sys-typescale-body-medium-size)",
          lineHeight: "var(--md-sys-typescale-body-medium-line-height)"
        }}>
          این صفحه نمونه برای تست Button، TextField و tokenهای اصلی ساخته شده است.
        </p>

        <form style={{ display: "grid", gap: 24 }}>
          <TextField
            fullWidth
            variant="filled"
            label="شماره موبایل"
            placeholder="شماره موبایل"
            supportingText="برای ورود، شماره موبایل خود را وارد کنید"
            inputMode="tel"
          />

          <TextField
            fullWidth
            variant="outlined"
            label="رمز عبور"
            placeholder="رمز عبور"
            type="password"
          />

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBlockStart: 8 }}>
            <Button variant="filled" type="submit">ادامه</Button>
            <Button variant="text" type="button">فراموشی رمز</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
