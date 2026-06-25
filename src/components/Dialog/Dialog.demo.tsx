import React, { useState } from "react";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { Dialog } from "./Dialog";

export function DialogDemo() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section dir="rtl" style={{ display: "grid", gap: 16 }}>
      <h2>Dialog</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="filled" onClick={() => setAlertOpen(true)}>باز کردن هشدار</Button>
        <Button variant="outlined" onClick={() => setFormOpen(true)}>باز کردن فرم</Button>
      </div>

      <Dialog
        open={alertOpen}
        icon="⚠️"
        title="حذف آیتم؟"
        supportingText="این عملیات قابل بازگشت نیست. بعد از حذف، اطلاعات این آیتم از سیستم پاک می‌شود."
        onClose={() => setAlertOpen(false)}
        actions={[
          { label: "انصراف", onClick: () => setAlertOpen(false), variant: "text" },
          { label: "حذف", onClick: () => setAlertOpen(false), variant: "filled" },
        ]}
      />

      <Dialog
        open={formOpen}
        title="افزودن یادداشت"
        supportingText="یک عنوان کوتاه برای یادداشت وارد کنید."
        size="medium"
        onClose={() => setFormOpen(false)}
        actions={[
          { label: "لغو", onClick: () => setFormOpen(false), variant: "text" },
          { label: "ذخیره", onClick: () => setFormOpen(false), variant: "filled" },
        ]}
      >
        <div style={{ display: "grid", gap: 16 }}>
          <TextField fullWidth variant="filled" label="عنوان" placeholder="مثلاً پیگیری سفارش" />
          <TextField fullWidth variant="outlined" label="توضیح کوتاه" placeholder="توضیح..." />
        </div>
      </Dialog>
    </section>
  );
}
