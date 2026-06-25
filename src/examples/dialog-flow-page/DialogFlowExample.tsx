import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Dialog } from "../../components/Dialog";
import { List, ListItem } from "../../components/List";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function DialogFlowExample() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="جریان دیالوگ"
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
        maxWidth: 760,
        marginInline: "auto"
      }}>
        <Card
          variant="filled"
          title="مدیریت آیتم‌ها"
          subtitle="نمونه استفاده از Dialog برای ویرایش و حذف"
        >
          <List density="two-line" dividers>
            <ListItem
              headline="گزارش فروش"
              supportingText="آخرین ویرایش: امروز"
              leading="📊"
              trailing={
                <div style={{ display: "flex", gap: 8 }}>
                  <Button variant="text" onClick={() => setEditOpen(true)}>ویرایش</Button>
                  <Button variant="text" onClick={() => setDeleteOpen(true)}>حذف</Button>
                </div>
              }
            />

            <ListItem
              headline="گزارش کاربران"
              supportingText="آخرین ویرایش: دیروز"
              leading="👥"
              trailing={<Button variant="text" onClick={() => setEditOpen(true)}>ویرایش</Button>}
            />
          </List>
        </Card>
      </section>

      <Dialog
        open={deleteOpen}
        icon="⚠️"
        title="حذف گزارش؟"
        supportingText="با حذف این گزارش، اطلاعات ذخیره‌شده آن از دسترس خارج می‌شود."
        onClose={() => setDeleteOpen(false)}
        actions={[
          { label: "انصراف", onClick: () => setDeleteOpen(false), variant: "text" },
          { label: "حذف", onClick: () => setDeleteOpen(false), variant: "filled" },
        ]}
      />

      <Dialog
        open={editOpen}
        title="ویرایش گزارش"
        supportingText="نام گزارش را به‌روزرسانی کنید."
        size="medium"
        onClose={() => setEditOpen(false)}
        actions={[
          { label: "لغو", onClick: () => setEditOpen(false), variant: "text" },
          { label: "ذخیره", onClick: () => setEditOpen(false), variant: "filled" },
        ]}
      >
        <TextField
          fullWidth
          variant="filled"
          label="نام گزارش"
          placeholder="نام گزارش"
          defaultValue="گزارش فروش"
        />
      </Dialog>
    </main>
  );
}
