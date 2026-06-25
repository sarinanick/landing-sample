import React, { useState } from "react";
import { BottomSheet } from "../../components/BottomSheet";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Checkbox } from "../../components/Checkbox";
import { Chip } from "../../components/Chip";
import { List, ListItem } from "../../components/List";
import { SearchBar } from "../../components/SearchBar";
import { Slider } from "../../components/Slider";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function BottomSheetFilterExample() {
  const [open, setOpen] = useState(false);

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="فروشگاه"
        navigationIcon="←"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "⋮", label: "بیشتر" },
        ]}
        elevated
      />

      <section style={{
        padding: "var(--md-sys-spacing-6)",
        display: "grid",
        gap: "var(--md-sys-spacing-4)",
        maxWidth: 860,
        marginInline: "auto"
      }}>
        <SearchBar placeholder="جستجوی محصول" recentSearches={["کفش", "کیف", "ساعت"]} />

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Chip variant="filter" selected>همه</Chip>
            <Chip variant="filter">دیجیتال</Chip>
            <Chip variant="filter">پوشاک</Chip>
          </div>
          <Button variant="outlined" onClick={() => setOpen(true)}>فیلترها</Button>
        </div>

        <Card variant="filled" title="محصولات پیشنهادی">
          <List density="two-line" dividers>
            <ListItem headline="کفش ورزشی" supportingText="موجود — ارسال رایگان" leading="👟" trailing="مشاهده" interactive />
            <ListItem headline="هدفون بی‌سیم" supportingText="تخفیف‌دار" leading="🎧" trailing="مشاهده" interactive />
            <ListItem headline="ساعت هوشمند" supportingText="جدید" leading="⌚" trailing="مشاهده" interactive />
          </List>
        </Card>
      </section>

      <BottomSheet
        open={open}
        title="فیلتر محصولات"
        description="فیلترها در موبایل داخل BottomSheet نمایش داده می‌شوند."
        height="half"
        onClose={() => setOpen(false)}
        actions={[
          { label: "پاک کردن", onClick: () => setOpen(false) },
          { label: "اعمال فیلتر", onClick: () => setOpen(false) },
        ]}
      >
        <div style={{ display: "grid", gap: 20 }}>
          <Slider
            label="حداکثر قیمت"
            min={0}
            max={5000000}
            step={100000}
            defaultValue={1500000}
            valueFormatter={(v) => `${v.toLocaleString("fa-IR")} تومان`}
          />
          <Checkbox label="فقط کالاهای موجود" defaultChecked />
          <Checkbox label="ارسال رایگان" />
          <Checkbox label="فقط تخفیف‌دارها" />
        </div>
      </BottomSheet>
    </main>
  );
}
