import React, { useState } from "react";
import { Card } from "../../components/Card";
import { IconButton } from "../../components/IconButton";
import { Menu } from "../../components/Menu";
import { Snackbar } from "../../components/Snackbar";
import { Tooltip } from "../../components/Tooltip";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function IconActionsExample() {
  const [liked, setLiked] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="اکشن‌های آیکنی"
        navigationIcon="←"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "🔔", label: "اعلان‌ها" },
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
          title="کارت اکشن‌دار"
          subtitle="نمونه ترکیب IconButton با Tooltip، Menu و Snackbar"
          actions={
            <>
              <Tooltip content={liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}>
                <IconButton
                  label="علاقه‌مندی"
                  icon="♡"
                  selectedIcon="♥"
                  selected={liked}
                  onClick={() => {
                    setLiked(!liked);
                    setSnackbar(!liked ? "به علاقه‌مندی‌ها اضافه شد." : "از علاقه‌مندی‌ها حذف شد.");
                  }}
                />
              </Tooltip>

              <Tooltip content="اشتراک‌گذاری">
                <IconButton
                  label="اشتراک‌گذاری"
                  icon="🔗"
                  variant="tonal"
                  onClick={() => setSnackbar("لینک اشتراک‌گذاری آماده شد.")}
                />
              </Tooltip>

              <Menu
                placement="bottom-end"
                trigger={<IconButton label="بیشتر" icon="⋮" />}
                items={[
                  { value: "edit", label: "ویرایش", leadingIcon: "✏️" },
                  { value: "duplicate", label: "کپی", leadingIcon: "⧉" },
                  { value: "delete", label: "حذف", leadingIcon: "🗑", destructive: true },
                ]}
                onSelect={(value) => setSnackbar(`گزینه ${value} انتخاب شد.`)}
              />
            </>
          }
        >
          این صفحه نشان می‌دهد چرا IconButton باید به‌جای button خام استفاده شود.
        </Card>
      </section>

      <Snackbar
        open={Boolean(snackbar)}
        message={snackbar}
        onClose={() => setSnackbar("")}
      />
    </main>
  );
}
