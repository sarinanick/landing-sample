# Private Usage Guide

## استفاده در پروژه شخصی

بعد از build نهایی، استفاده ایده‌آل این است:

```tsx
import { Button, Card, TextField } from "@ali/persian-material-system";
import "@ali/persian-material-system/styles.css";
```

اما تا قبل از package نهایی، می‌توانی فولدرهای زیر را مستقیم کپی کنی:

```txt
src/components
src/styles
src/hooks
```

## ساختار پیشنهادی پروژه شخصی

```txt
my-app/
  src/
    app/
    pages/
    components/
    design-system/
```

در حالت ساده:

```txt
my-app/src/design-system = خروجی این پروژه
```

## قوانین استفاده

- برای UI فارسی از کامپوننت‌های همین سیستم استفاده کن.
- از button/input خام فقط در موارد اضطراری استفاده کن.
- هر صفحه جدید باید RTL تست شود.
- هر صفحه مهم باید با Figma مقایسه شود.
- برای آیکن‌ها، بعد از آماده شدن Icon System، emoji حذف شود.

## پروژه‌های مناسب برای استفاده

- پنل مدیریت
- CRM
- فروشگاه فارسی
- داشبورد آموزشی
- سایت شرکتی
- اپلیکیشن موبایل وبی
- فرم‌های داخلی
