import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { List, ListItem } from "../../components/List";
import { NavigationDrawer } from "../../components/NavigationDrawer";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";

export function DividerLayoutExample() {
  return (
    <main dir="rtl" className="pm-navigation-drawer-layout" style={{
      background: "var(--md-sys-color-background)",
      color: "var(--md-sys-color-on-background)"
    }}>
      <NavigationDrawer
        value="layout"
        headline="سیستم فارسی"
        sections={[
          {
            items: [
              { value: "dashboard", label: "داشبورد", icon: "📊" },
              { value: "layout", label: "چیدمان", icon: "▤" },
              { value: "settings", label: "تنظیمات", icon: "⚙️" },
            ],
          },
        ]}
      />

      <section style={{ minWidth: 0 }}>
        <TopAppBar
          variant="small"
          title="نمونه Divider"
          navigationIcon="←"
          actions={[
            { icon: "🔎", label: "جستجو" },
            { icon: "⋮", label: "بیشتر" },
          ]}
          elevated
        />

        <div style={{
          padding: "var(--md-sys-spacing-6)",
          display: "grid",
          gap: "var(--md-sys-spacing-6)"
        }}>
          <Card variant="filled" title="تنظیمات حساب" subtitle="Divider برای جدا کردن گروه‌ها">
            <List density="two-line">
              <ListItem
                headline="اطلاعات شخصی"
                supportingText="نام، ایمیل و شماره تماس"
                leading="👤"
                trailing={<Button variant="text">ویرایش</Button>}
              />
              <Divider variant="inset" />
              <ListItem
                headline="امنیت"
                supportingText="رمز عبور و ورود دومرحله‌ای"
                leading="🔐"
                trailing={<Button variant="text">مدیریت</Button>}
              />
              <Divider variant="inset" />
              <ListItem
                headline="اعلان‌ها"
                supportingText="پیامک، ایمیل و اعلان درون‌برنامه‌ای"
                leading="🔔"
                trailing={<Button variant="text">تنظیم</Button>}
              />
            </List>
          </Card>

          <Card variant="outlined" title="اکشن‌های صفحه">
            <div style={{ display: "flex", alignItems: "stretch", gap: 16, flexWrap: "wrap" }}>
              <Button variant="filled">ذخیره</Button>
              <Divider orientation="vertical" />
              <Button variant="outlined">پیش‌نمایش</Button>
              <Divider orientation="vertical" />
              <Button variant="text">انصراف</Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
