import React, { useState } from "react";
import { SegmentedButtonGroup, SegmentedButtonItem } from "./SegmentedButton";

export function SegmentedButtonDemo() {
  const [view, setView] = useState<string | string[]>("list");
  const [filters, setFilters] = useState<string | string[]>(["available"]);

  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>SegmentedButton</h2>

      <SegmentedButtonGroup value={view} onValueChange={setView}>
        <SegmentedButtonItem value="list" icon="☰">لیست</SegmentedButtonItem>
        <SegmentedButtonItem value="grid" icon="▦">شبکه</SegmentedButtonItem>
        <SegmentedButtonItem value="map" icon="📍">نقشه</SegmentedButtonItem>
      </SegmentedButtonGroup>

      <SegmentedButtonGroup value={filters} onValueChange={setFilters} multiple density="compact">
        <SegmentedButtonItem value="available">موجود</SegmentedButtonItem>
        <SegmentedButtonItem value="discount">تخفیف‌دار</SegmentedButtonItem>
        <SegmentedButtonItem value="fast">ارسال سریع</SegmentedButtonItem>
        <SegmentedButtonItem value="disabled" disabled>غیرفعال</SegmentedButtonItem>
      </SegmentedButtonGroup>
    </section>
  );
}
