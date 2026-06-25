import { Switch } from "../Switch";
import { List, ListItem } from "./List";

export function ListDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>List / ListItem</h2>

      <List density="one-line" dividers>
        <ListItem headline="آیتم یک‌خطی" leading="🏠" trailing="›" interactive />
        <ListItem headline="آیتم انتخاب‌شده" leading="📌" trailing="فعال" selected interactive />
        <ListItem headline="آیتم غیرفعال" leading="⛔" disabled interactive />
      </List>

      <List density="two-line" dividers>
        <ListItem
          headline="اعلان‌ها"
          supportingText="دریافت پیام‌های مهم و فوری"
          leading="🔔"
          trailing={<Switch aria-label="اعلان‌ها" defaultChecked />}
        />
        <ListItem
          headline="حالت تاریک"
          supportingText="فعال‌سازی ظاهر تیره برای رابط کاربری"
          leading="🌙"
          trailing={<Switch aria-label="حالت تاریک" />}
        />
      </List>

      <List density="three-line" dividers>
        <ListItem
          overline="امروز"
          headline="پیام جدید از پشتیبانی"
          supportingText="سلام، درخواست شما بررسی شد و نتیجه آن در پنل کاربری قابل مشاهده است."
          leading="✉️"
          trailing="۱۲:۳۰"
          interactive
        />
      </List>
    </section>
  );
}
