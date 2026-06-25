import React, { useState } from "react";
import { Button } from "../Button";
import { Snackbar } from "./Snackbar";

export function SnackbarDemo() {
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState<"neutral" | "success" | "error" | "warning">("neutral");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 16 }}>
      <h2>Snackbar</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="filled" onClick={() => { setTone("neutral"); setOpen(true); }}>
          پیام ساده
        </Button>
        <Button variant="outlined" onClick={() => { setTone("success"); setOpen(true); }}>
          موفقیت
        </Button>
        <Button variant="outlined" onClick={() => { setTone("error"); setOpen(true); }}>
          خطا
        </Button>
        <Button variant="outlined" onClick={() => { setTone("warning"); setOpen(true); }}>
          هشدار
        </Button>
      </div>

      <Snackbar
        open={open}
        tone={tone}
        message={
          tone === "success" ? "تغییرات با موفقیت ذخیره شد." :
          tone === "error" ? "خطا رخ داد. دوباره تلاش کنید." :
          tone === "warning" ? "این عملیات نیاز به بررسی دارد." :
          "پیام کوتاه سیستم نمایش داده شد."
        }
        action={{ label: "بازگشت", onClick: () => setOpen(false) }}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
