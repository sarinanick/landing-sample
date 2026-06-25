import React, { useState } from "react";
import { Button } from "../Button";
import { List, ListItem } from "../List";
import { BottomSheet } from "./BottomSheet";

export function BottomSheetDemo() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);

  return (
    <section dir="rtl" style={{ display: "grid", gap: 16 }}>
      <h2>BottomSheet</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="filled" onClick={() => setFilterOpen(true)}>فیلترها</Button>
        <Button variant="outlined" onClick={() => setActionsOpen(true)}>اکشن‌ها</Button>
      </div>

      <BottomSheet
        open={filterOpen}
        title="فیلتر محصولات"
        description="گزینه‌های مورد نظر را انتخاب کنید."
        onClose={() => setFilterOpen(false)}
        actions={[
          { label: "پاک کردن", onClick: () => setFilterOpen(false) },
          { label: "اعمال", onClick: () => setFilterOpen(false) },
        ]}
      >
        <List density="two-line" dividers>
          <ListItem headline="فقط کالاهای موجود" supportingText="نمایش کالاهای قابل خرید" leading="📦" trailing="فعال" interactive />
          <ListItem headline="ارسال رایگان" supportingText="فقط کالاهای دارای ارسال رایگان" leading="🚚" trailing="غیرفعال" interactive />
          <ListItem headline="تخفیف‌دار" supportingText="نمایش کالاهای دارای تخفیف" leading="٪" trailing="فعال" interactive />
        </List>
      </BottomSheet>

      <BottomSheet
        open={actionsOpen}
        title="اکشن‌های سریع"
        variant="modal"
        height="content"
        onClose={() => setActionsOpen(false)}
      >
        <List density="one-line">
          <ListItem headline="اشتراک‌گذاری" leading="🔗" interactive onClick={() => setActionsOpen(false)} />
          <ListItem headline="دانلود" leading="⬇️" interactive onClick={() => setActionsOpen(false)} />
          <ListItem headline="حذف" leading="🗑" interactive onClick={() => setActionsOpen(false)} />
        </List>
      </BottomSheet>
    </section>
  );
}
