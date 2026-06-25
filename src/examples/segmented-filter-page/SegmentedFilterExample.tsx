import React, { useState } from "react";
import { Card } from "../../components/Card";
import { List, ListItem } from "../../components/List";
import { SearchBar } from "../../components/SearchBar";
import { SegmentedButtonGroup, SegmentedButtonItem } from "../../components/SegmentedButton";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function SegmentedFilterExample() {
  const [view, setView] = useState<string | string[]>("list");
  const [status, setStatus] = useState<string | string[]>("all");

  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="فیلتر و نمایش" navigationIcon="←" actions={[{ icon: "🔎", label: "جستجو" }, { icon: "⋮", label: "بیشتر" }]} elevated />

      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-4)", maxWidth: 860, marginInline: "auto" }}>
        <SearchBar placeholder="جستجو در گزارش‌ها" recentSearches={["فروش", "کاربران", "مالی"]} />

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <SegmentedButtonGroup value={status} onValueChange={setStatus} density="compact">
            <SegmentedButtonItem value="all">همه</SegmentedButtonItem>
            <SegmentedButtonItem value="active">فعال</SegmentedButtonItem>
            <SegmentedButtonItem value="archived">آرشیو</SegmentedButtonItem>
          </SegmentedButtonGroup>

          <SegmentedButtonGroup value={view} onValueChange={setView} density="compact">
            <SegmentedButtonItem value="list" icon="☰">لیست</SegmentedButtonItem>
            <SegmentedButtonItem value="grid" icon="▦">شبکه</SegmentedButtonItem>
          </SegmentedButtonGroup>
        </div>

        <Card variant="filled" title="نتایج" subtitle={`حالت نمایش: ${view === "list" ? "لیست" : "شبکه"}`}>
          <List density="two-line" dividers>
            <ListItem headline="گزارش فروش" supportingText="فعال" leading="📊" trailing="مشاهده" interactive />
            <ListItem headline="گزارش کاربران" supportingText="فعال" leading="👥" trailing="مشاهده" interactive />
            <ListItem headline="گزارش مالی" supportingText="آرشیو" leading="💰" trailing="مشاهده" interactive />
          </List>
        </Card>
      </section>
    </main>
  );
}
