import React, { useState } from "react";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Checkbox } from "../../components/Checkbox";
import { List, ListItem } from "../../components/List";
import { SearchBar } from "../../components/SearchBar";
import { SegmentedButtonGroup, SegmentedButtonItem } from "../../components/SegmentedButton";
import { SideSheet } from "../../components/SideSheet";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function SideSheetDashboardExample() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [view, setView] = useState<string | string[]>("list");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="داشبورد کاربران"
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
        maxWidth: 980,
        marginInline: "auto"
      }}>
        <SearchBar placeholder="جستجوی کاربر" recentSearches={["سارا", "رضا", "مدیر"]} />

        <div style={{ display: "flex", gap: 16, justifyContent: "space-between", flexWrap: "wrap" }}>
          <SegmentedButtonGroup value={view} onValueChange={setView} density="compact">
            <SegmentedButtonItem value="list" icon="☰">لیست</SegmentedButtonItem>
            <SegmentedButtonItem value="grid" icon="▦">شبکه</SegmentedButtonItem>
          </SegmentedButtonGroup>

          <Button variant="outlined" onClick={() => setFilterOpen(true)}>فیلترها</Button>
        </div>

        <Card variant="filled" title="کاربران">
          <List density="two-line" dividers>
            <ListItem headline="سارا محمدی" supportingText="طراح محصول" leading={<Avatar name="سارا محمدی" status="online" />} trailing="فعال" interactive />
            <ListItem headline="رضا کریمی" supportingText="توسعه‌دهنده" leading={<Avatar name="رضا کریمی" status="busy" tone="secondary" />} trailing="فعال" interactive />
            <ListItem headline="مینا احمدی" supportingText="تحلیل‌گر داده" leading={<Avatar name="مینا احمدی" status="offline" tone="neutral" />} trailing="آفلاین" interactive />
          </List>
        </Card>
      </section>

      <SideSheet
        open={filterOpen}
        title="فیلتر کاربران"
        description="در دسکتاپ فیلترها در SideSheet نمایش داده می‌شوند."
        width="medium"
        onClose={() => setFilterOpen(false)}
        actions={[
          { label: "پاک کردن", onClick: () => setFilterOpen(false) },
          { label: "اعمال فیلتر", onClick: () => setFilterOpen(false) },
        ]}
      >
        <div style={{ display: "grid", gap: 16 }}>
          <Checkbox label="فقط کاربران آنلاین" />
          <Checkbox label="فقط مدیران" />
          <Checkbox label="اعضای فعال" defaultChecked />
          <Checkbox label="کاربران دعوت‌شده" />
        </div>
      </SideSheet>
    </main>
  );
}
