# Integration Sprint A

## هدف

بعد از رسیدن به ۳۰ قدم، پروژه وارد فاز یکپارچه‌سازی شد.

این فاز برای این است که قبل از اضافه کردن کامپوننت‌های خیلی پیچیده‌تر، ساختار پروژه تمیزتر شود.

## انجام‌شده در v0.31

- اضافه شدن Icon component scaffold
- اضافه شدن Storybook scaffold
- اضافه شدن نمونه story برای Button
- اضافه شدن نمونه story برای Icon
- اضافه شدن visual testing scaffold
- اضافه شدن برنامه refactor داخلی

## Refactorهای بعدی

| Target | کار لازم |
|---|---|
| TopAppBar | استفاده داخلی از IconButton |
| NavigationBar | استفاده داخلی از Badge |
| Menu | استفاده از Divider |
| List | استفاده از Divider |
| NavigationDrawer | استفاده از Badge و Divider |
| Dialog | focus trap کامل |
| BottomSheet | focus trap و exit animation |
| SideSheet | focus trap و adaptive behavior |

## خروجی مورد انتظار Sprint

- Storybook قابل اجرا
- داستان پایه برای همه کامپوننت‌ها
- تست تصویری پایه
- Icon system قابل جایگزینی با SVG رسمی
