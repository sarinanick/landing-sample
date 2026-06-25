import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Dialog } from "../../components/Dialog";
import { FAB } from "../../components/FAB";
import { List, ListItem } from "../../components/List";
import { Snackbar } from "../../components/Snackbar";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function FABTaskExample() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)",
      paddingBlockEnd: 120
    }}>
      <TopAppBar
        variant="small"
        title="وظایف"
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
          title="لیست وظایف"
          subtitle="FAB برای اکشن اصلی صفحه استفاده شده است"
        >
          <List density="two-line" dividers>
            <ListItem
              headline="بررسی گزارش فروش"
              supportingText="مهلت: امروز"
              leading="📊"
              trailing="درحال انجام"
              interactive
            />
            <ListItem
              headline="تماس با مشتری"
              supportingText="مهلت: فردا"
              leading="☎️"
              trailing="جدید"
              interactive
            />
            <ListItem
              headline="آماده‌سازی ارائه"
              supportingText="مهلت: هفته آینده"
              leading="📄"
              trailing="برنامه‌ریزی"
              interactive
            />
          </List>
        </Card>
      </section>

      <FAB
        className="pm-fab--fixed"
        icon="＋"
        label="وظیفه جدید"
        variant="primary"
        onClick={() => setDialogOpen(true)}
      />

      <Dialog
        open={dialogOpen}
        title="افزودن وظیفه"
        supportingText="عنوان وظیفه جدید را وارد کنید."
        size="medium"
        onClose={() => setDialogOpen(false)}
        actions={[
          { label: "لغو", variant: "text", onClick: () => setDialogOpen(false) },
          {
            label: "افزودن",
            variant: "filled",
            onClick: () => {
              setDialogOpen(false);
              setSnackbar("وظیفه جدید اضافه شد.");
            }
          },
        ]}
      >
        <TextField fullWidth variant="filled" label="عنوان وظیفه" placeholder="مثلاً تماس با مشتری" />
      </Dialog>

      <Snackbar open={Boolean(snackbar)} message={snackbar} onClose={() => setSnackbar("")} />
    </main>
  );
}
