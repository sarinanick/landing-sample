import React, { useState } from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { List, ListItem } from "../List";
import { Slider } from "../Slider";
import { SideSheet } from "./SideSheet";

export function SideSheetDemo() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section dir="rtl" style={{ display: "grid", gap: 16 }}>
      <h2>SideSheet</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="filled" onClick={() => setFilterOpen(true)}>فیلتر کناری</Button>
        <Button variant="outlined" onClick={() => setDetailsOpen(true)}>جزئیات</Button>
      </div>

      <SideSheet
        open={filterOpen}
        title="فیلترها"
        description="فیلترهای پیشرفته برای دسکتاپ"
        width="medium"
        onClose={() => setFilterOpen(false)}
        actions={[
          { label: "پاک کردن", onClick: () => setFilterOpen(false) },
          { label: "اعمال", onClick: () => setFilterOpen(false) },
        ]}
      >
        <div style={{ display: "grid", gap: 20 }}>
          <Slider label="حداکثر قیمت" min={0} max={5000000} step={100000} defaultValue={1500000} valueFormatter={(v) => `${v.toLocaleString("fa-IR")} تومان`} />
          <Checkbox label="فقط کالاهای موجود" defaultChecked />
          <Checkbox label="ارسال رایگان" />
          <Checkbox label="فقط تخفیف‌دارها" />
        </div>
      </SideSheet>

      <SideSheet
        open={detailsOpen}
        title="جزئیات گزارش"
        description="اطلاعات تکمیلی آیتم انتخاب‌شده"
        position="start"
        width="compact"
        onClose={() => setDetailsOpen(false)}
      >
        <List density="two-line" dividers>
          <ListItem headline="وضعیت" supportingText="فعال" leading="●" />
          <ListItem headline="آخرین ویرایش" supportingText="امروز" leading="🕒" />
          <ListItem headline="مالک" supportingText="علی تابعی" leading="👤" />
        </List>
      </SideSheet>
    </section>
  );
}
