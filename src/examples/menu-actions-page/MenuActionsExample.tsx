import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Dialog } from "../../components/Dialog";
import { List, ListItem } from "../../components/List";
import { Menu } from "../../components/Menu";
import { Snackbar } from "../../components/Snackbar";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      style={{
        width: 48,
        height: 48,
        border: 0,
        borderRadius: 24,
        background: "transparent",
        cursor: "pointer",
        fontSize: 22,
      }}
    >
      {children}
    </button>
  );
}

export function MenuActionsExample() {
  const [snackbar, setSnackbar] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="اکشن‌های منو"
        navigationIcon="←"
        actions={[{ icon: "🔎", label: "جستجو" }]}
        elevated
      />

      <section style={{
        padding: "var(--md-sys-spacing-6)",
        display: "grid",
        gap: "var(--md-sys-spacing-4)",
        maxWidth: 760,
        marginInline: "auto"
      }}>
        <Card variant="filled" title="لیست گزارش‌ها" subtitle="برای هر آیتم منوی اکشن جداگانه داریم">
          <List density="two-line" dividers>
            <ListItem
              headline="گزارش فروش"
              supportingText="آخرین ویرایش: امروز"
              leading="📊"
              trailing={
                <Menu
                  placement="bottom-end"
                  trigger={<IconButton label="اکشن‌های گزارش فروش">⋮</IconButton>}
                  items={[
                    { value: "open", label: "باز کردن", leadingIcon: "👁" },
                    { value: "edit", label: "ویرایش", leadingIcon: "✏️" },
                    { value: "download", label: "دانلود", leadingIcon: "⬇️", dividerAfter: true },
                    { value: "delete", label: "حذف", leadingIcon: "🗑", destructive: true },
                  ]}
                  onSelect={(value) => {
                    if (value === "delete") setDeleteOpen(true);
                    else setSnackbar(`عملیات ${value} اجرا شد.`);
                  }}
                />
              }
            />

            <ListItem
              headline="گزارش کاربران"
              supportingText="آخرین ویرایش: دیروز"
              leading="👥"
              trailing={
                <Menu
                  placement="bottom-end"
                  trigger={<Button variant="text">بیشتر</Button>}
                  items={[
                    { value: "share", label: "اشتراک‌گذاری", leadingIcon: "🔗" },
                    { value: "archive", label: "آرشیو", leadingIcon: "🗄" },
                    { value: "disabled", label: "غیرفعال", leadingIcon: "⛔", disabled: true },
                  ]}
                  onSelect={(value) => setSnackbar(`گزینه ${value} انتخاب شد.`)}
                />
              }
            />
          </List>
        </Card>
      </section>

      <Dialog
        open={deleteOpen}
        icon="⚠️"
        title="حذف گزارش؟"
        supportingText="این عملیات قابل بازگشت نیست."
        onClose={() => setDeleteOpen(false)}
        actions={[
          { label: "انصراف", variant: "text", onClick: () => setDeleteOpen(false) },
          { label: "حذف", variant: "filled", onClick: () => { setDeleteOpen(false); setSnackbar("گزارش حذف شد."); } },
        ]}
      />

      <Snackbar open={Boolean(snackbar)} message={snackbar} onClose={() => setSnackbar("")} />
    </main>
  );
}
