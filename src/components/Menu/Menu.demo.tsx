import React, { useState } from "react";
import { Button } from "../Button";
import { Snackbar } from "../Snackbar";
import { Menu } from "./Menu";

export function MenuDemo() {
  const [message, setMessage] = useState("");

  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Menu</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Menu
          trigger={<Button variant="filled">باز کردن منو</Button>}
          items={[
            { value: "edit", label: "ویرایش", leadingIcon: "✏️" },
            { value: "duplicate", label: "کپی", leadingIcon: "⧉", trailingText: "Ctrl+D" },
            { value: "archive", label: "آرشیو", leadingIcon: "🗄", dividerAfter: true },
            { value: "delete", label: "حذف", leadingIcon: "🗑", destructive: true },
          ]}
          onSelect={(value) => setMessage(`گزینه ${value} انتخاب شد.`)}
        />

        <Menu
          placement="bottom-end"
          trigger={<Button variant="outlined">منوی دوم</Button>}
          items={[
            { value: "share", label: "اشتراک‌گذاری", leadingIcon: "🔗" },
            { value: "download", label: "دانلود", leadingIcon: "⬇️" },
            { value: "disabled", label: "غیرفعال", leadingIcon: "⛔", disabled: true },
          ]}
          onSelect={(value) => setMessage(`گزینه ${value} انتخاب شد.`)}
        />
      </div>

      <Snackbar open={Boolean(message)} message={message} onClose={() => setMessage("")} duration={2500} />
    </section>
  );
}
