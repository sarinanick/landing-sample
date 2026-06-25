import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { List, ListItem } from "../../components/List";
import { Tooltip } from "../../components/Tooltip";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

function IconButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
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

export function TooltipActionsExample() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <TopAppBar
        variant="small"
        title="اکشن‌های راهنما"
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
          title="Toolbar نمونه"
          subtitle="روی آیکن‌ها hover یا focus کنید"
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBlockStart: 16 }}>
            <Tooltip content="جستجو در لیست" placement="bottom">
              <IconButton label="جستجو">🔎</IconButton>
            </Tooltip>

            <Tooltip content="فیلتر کردن نتایج" placement="bottom">
              <IconButton label="فیلتر">⚙️</IconButton>
            </Tooltip>

            <Tooltip content="دریافت خروجی" placement="bottom">
              <IconButton label="خروجی">⬇️</IconButton>
            </Tooltip>

            <Tooltip
              variant="rich"
              title="حذف گروهی"
              content="ابتدا چند آیتم را انتخاب کنید، سپس با این اکشن همه آن‌ها حذف می‌شوند."
              action={<Button variant="text">جزئیات</Button>}
              placement="bottom"
            >
              <IconButton label="حذف گروهی">🗑</IconButton>
            </Tooltip>
          </div>
        </Card>

        <Card variant="outlined" title="لیست با توضیح اکشن‌ها">
          <List density="two-line" dividers>
            <ListItem
              headline="گزارش فروش"
              supportingText="آخرین ویرایش: امروز"
              leading="📊"
              trailing={
                <Tooltip content="باز کردن گزارش" placement="start">
                  <Button variant="text">باز کردن</Button>
                </Tooltip>
              }
            />
            <ListItem
              headline="گزارش کاربران"
              supportingText="آخرین ویرایش: دیروز"
              leading="👥"
              trailing={
                <Tooltip content="دانلود فایل" placement="start">
                  <Button variant="text">دانلود</Button>
                </Tooltip>
              }
            />
          </List>
        </Card>
      </section>
    </main>
  );
}
