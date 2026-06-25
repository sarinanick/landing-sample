import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { List, ListItem } from "../../components/List";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function MessagesExample() {
  const [selected, setSelected] = useState("support");

  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="پیام‌ها"
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
        maxWidth: 920,
        marginInline: "auto"
      }}>
        <TextField
          fullWidth
          variant="filled"
          label="جستجو در پیام‌ها"
          placeholder="نام فرستنده یا متن پیام"
        />

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Chip variant="filter" selected>همه</Chip>
          <Chip variant="filter">خوانده‌نشده</Chip>
          <Chip variant="filter">پشتیبانی</Chip>
          <Chip variant="suggestion">امروز</Chip>
        </div>

        <Card variant="filled">
          <List density="three-line" dividers ariaLabel="لیست پیام‌ها">
            <ListItem
              overline="پشتیبانی"
              headline="پاسخ به درخواست شما"
              supportingText="درخواست شما بررسی شد و نتیجه آن در پنل کاربری قرار گرفت."
              leading="🎧"
              trailing="۱۲:۳۰"
              selected={selected === "support"}
              interactive
              onClick={() => setSelected("support")}
            />

            <ListItem
              overline="سیستم"
              headline="ورود جدید به حساب"
              supportingText="یک ورود جدید از دستگاه ویندوزی ثبت شده است. اگر شما نبودید رمز عبور را تغییر دهید."
              leading="🔐"
              trailing="دیروز"
              selected={selected === "security"}
              interactive
              onClick={() => setSelected("security")}
            />

            <ListItem
              overline="فروشگاه"
              headline="سفارش شما ارسال شد"
              supportingText="سفارش شماره ۱۲۳۴۵ تحویل شرکت پست شد و به‌زودی به دست شما می‌رسد."
              leading="📦"
              trailing="۲ روز پیش"
              selected={selected === "order"}
              interactive
              onClick={() => setSelected("order")}
            />
          </List>
        </Card>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="filled">نوشتن پیام جدید</Button>
        </div>
      </section>
    </main>
  );
}
