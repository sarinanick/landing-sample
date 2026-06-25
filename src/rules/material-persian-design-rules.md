# Persian Material Design Rules

این فایل قانون مرجع برای انسان و AI Agent است.

## قوانین اصلی

1. کل پروژه باید RTL-first باشد.
2. هیچ رنگی نباید مستقیم در component CSS نوشته شود.
3. همه رنگ‌ها باید از `src/styles/tokens` بیایند.
4. فونت اصلی باید `IRANSansX` یا fallback فارسی استاندارد باشد.
5. هیچ Button دستی ساخته نشود؛ فقط از `components/Button` استفاده شود.
6. هیچ Text Input دستی ساخته نشود؛ فقط از `components/TextField` استفاده شود.
7. همه کامپوننت‌ها باید حداقل حالت‌های زیر را پوشش دهند:
   - enabled
   - hovered
   - focused
   - pressed
   - disabled
8. اندازه‌ها، فاصله‌ها، radius و shadow باید از tokenها بیایند.
9. برای layout فارسی از `inline-start` و `inline-end` استفاده شود، نه `left` و `right`.
10. آیکن‌های جهت‌دار باید در RTL بررسی شوند.
11. هیچ کامپوننتی بدون نمونه usage پذیرفته نیست.
12. هر صفحه باید قبل از تحویل با QA checklist بررسی شود.

## قوانین دکمه

- Filled Button فقط برای اکشن اصلی و نهایی استفاده شود.
- Outlined Button برای اکشن ثانویه استفاده شود.
- Text Button برای اکشن‌های کم‌اهمیت یا در Dialog استفاده شود.
- Elevated Button در سطح‌هایی استفاده شود که نیاز به جداسازی بصری دارند.
- Tonal Button برای اکشن‌های متوسط و کمتر از Filled استفاده شود.
