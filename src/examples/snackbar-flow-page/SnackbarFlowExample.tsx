import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Dialog } from "../../components/Dialog";
import { List, ListItem } from "../../components/List";
import { Snackbar, SnackbarTone } from "../../components/Snackbar";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function SnackbarFlowExample() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [tone, setTone] = useState<SnackbarTone>("success");
  const [message, setMessage] = useState("تغییرات ذخیره شد.");
  const [deleteOpen, setDeleteOpen] = useState(false);

  function showSnackbar(nextMessage: string, nextTone: SnackbarTone = "neutral") {
    setMessage(nextMessage);
    setTone(nextTone);
    setSnackbarOpen(true);
  }

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="جریان Snackbar"
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
          title="عملیات سریع"
          subtitle="نمونه استفاده از Snackbar برای feedback غیرمسدودکننده"
          actions={
            <>
              <Button variant="outlined" onClick={() => showSnackbar("اتصال برقرار نشد.", "error")}>
                تست خطا
              </Button>
              <Button variant="filled" onClick={() => showSnackbar("تغییرات ذخیره شد.", "success")}>
                ذخیره
              </Button>
            </>
          }
        >
          <List density="two-line" dividers>
            <ListItem
              headline="گزارش فروش"
              supportingText="آخرین ویرایش: امروز"
              leading="📊"
              trailing={<Button variant="text" onClick={() => setDeleteOpen(true)}>حذف</Button>}
            />
            <ListItem
              headline="گزارش کاربران"
              supportingText="آخرین ویرایش: دیروز"
              leading="👥"
              trailing={<Button variant="text" onClick={() => showSnackbar("گزارش باز شد.", "neutral")}>باز کردن</Button>}
            />
          </List>
        </Card>
      </section>

      <Dialog
        open={deleteOpen}
        icon="⚠️"
        title="حذف گزارش؟"
        supportingText="بعد از حذف، می‌توانید چند ثانیه با Undo عملیات را برگردانید."
        onClose={() => setDeleteOpen(false)}
        actions={[
          { label: "انصراف", onClick: () => setDeleteOpen(false), variant: "text" },
          {
            label: "حذف",
            onClick: () => {
              setDeleteOpen(false);
              showSnackbar("گزارش حذف شد.", "warning");
            },
            variant: "filled"
          },
        ]}
      />

      <Snackbar
        open={snackbarOpen}
        tone={tone}
        message={message}
        action={{
          label: "بازگشت",
          onClick: () => {
            setSnackbarOpen(false);
            showSnackbar("عملیات برگشت داده شد.", "success");
          }
        }}
        onClose={() => setSnackbarOpen(false)}
      />
    </main>
  );
}
