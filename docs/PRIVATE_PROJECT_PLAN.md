# Private Project Plan

## هدف

این پروژه یک Design System خصوصی برای استفاده شخصی و پروژه‌های خود علی است.

هدف این نیست که پروژه به شکل عمومی، اوپن‌سورس یا npm public منتشر شود.

## تعریف پروژه

```txt
Private Persian Material Design System
```

یعنی:

- استفاده شخصی
- قابل استفاده در پروژه‌های خودت
- قابل نگهداری در GitHub private repository
- قابل انتشار به صورت private package
- قابل توسعه با Figma شخصی
- بدون نیاز به community، contributor guide یا public roadmap

## اولویت‌های واقعی

برای پروژه خصوصی، اولویت‌ها این‌ها هستند:

1. سرعت استفاده در پروژه‌های شخصی
2. هماهنگی با فایل Figma
3. RTL و فارسی بودن کامل
4. Pixel-perfect در صفحات مهم
5. Storybook داخلی
6. تست تصویری داخلی
7. پکیج private
8. قابلیت کپی/استفاده مستقیم در پروژه‌ها

## چیزهایی که لازم نیست

برای پروژه خصوصی این‌ها فعلاً ضروری نیستند:

- public npm package
- open source governance
- contributor guide
- public issue templates
- community docs
- semantic release عمومی
- public website
- public changelog marketing

## مدل استفاده پیشنهادی

سه روش استفاده ممکن است:

### روش ۱ — کپی مستقیم

برای شروع سریع:

```txt
copy src/components
copy src/styles
copy src/rules
```

### روش ۲ — Git Submodule یا Monorepo خصوصی

برای چند پروژه شخصی:

```txt
apps/
  website/
  admin/
packages/
  persian-material-system/
```

### روش ۳ — Private npm package

برای حالت حرفه‌ای‌تر:

```txt
@ali/persian-material-system
```

این package فقط داخل حساب یا سازمان خصوصی نصب می‌شود.

## مسیر پیشنهادی از اینجا به بعد

```txt
Private setup
    ↓
Internal package readiness
    ↓
Storybook internal docs
    ↓
Visual testing
    ↓
Figma pixel-perfect pass
    ↓
Personal project templates
```
