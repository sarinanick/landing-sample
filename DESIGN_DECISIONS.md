# Design Decisions

## DD-001 — RTL-first بودن پروژه

پروژه از ابتدا برای فارسی و راست‌به‌چپ طراحی می‌شود.

## DD-002 — استفاده از CSS Variables

تمام رنگ‌ها، typography، spacing، radius و elevation باید با CSS variables کنترل شوند.

## DD-003 — هر کامپوننت Demo دارد

برای تست سریع، آماده‌سازی Storybook و بررسی variantها.

## DD-004 — هر کامپوننت QA Checklist دارد

برای جلوگیری از regression و آماده‌سازی pixel-perfect.

## DD-005 — هر نسخه Example Page دارد

برای تست integration، spacing، composition و رفتار واقعی صفحه.

## DD-006 — فعلاً Figma-inspired، نه Pixel-perfect

تا وقتی Storybook، baseline و visual diff نداریم، ادعای pixel-perfect دقیق نیست.

## DD-007 — Governance Docs از v0.21

از v0.21 فایل‌های CHANGELOG، ARCHITECTURE، DESIGN_DECISIONS، COMPONENT_MATRIX و TODO_MASTER اضافه شدند.


## DD-009 — SegmentedButton برای View و Filter

SegmentedButton برای انتخاب بین چند گزینه مرتبط استفاده می‌شود، نه برای اکشن اصلی.

### دلیل

- حالت single select برای تغییر view مناسب است.
- حالت multi select برای فیلترهای سریع مناسب است.
- نسبت به Chip برای گزینه‌های ساختاریافته‌تر و محدودتر مناسب‌تر است.


## DD-010 — Avatar با سه fallback

Avatar باید سه حالت تصویر، حروف اول و آیکن را پشتیبانی کند.

### دلیل

- همیشه تصویر کاربر در دسترس نیست.
- initials برای کاربران واقعی مناسب است.
- icon برای سیستم، پشتیبانی یا حساب عمومی مناسب است.


## DD-011 — BottomSheet برای موبایل و اکشن‌های موقت

BottomSheet برای فیلترها، اکشن‌ها و سطح‌های موقت موبایلی اضافه شد.

### دلیل

- در موبایل طبیعی‌تر از Dialog برای لیست اکشن‌ها است.
- برای فیلترها و انتخاب گزینه‌ها فضای بیشتری از Menu می‌دهد.
- می‌تواند با SearchBar، Slider، Checkbox و List ترکیب شود.


## DD-012 — SideSheet مکمل BottomSheet

SideSheet برای دسکتاپ و تبلت به عنوان مکمل BottomSheet اضافه شد.

### دلیل

- BottomSheet در موبایل طبیعی‌تر است.
- SideSheet در دسکتاپ فضای کناری مناسبی برای فیلترها و جزئیات می‌دهد.
- هر دو باید در آینده با یک adaptive surface pattern ترکیب شوند.


## DD-013 — DatePicker ابتدا با Gregorian Adapter

DatePicker فعلاً با تقویم میلادی ساخته شد و مسیر Jalali adapter برای آینده باز گذاشته شد.

### دلیل

- ساختار UI و API ابتدا باید پایدار شود.
- تقویم شمسی نیازمند adapter دقیق، فرمت تاریخ و تست جداگانه است.


## DD-014 — TimePicker ابتدا با Select Controls

TimePicker فعلاً با native select ساخته شد.

### دلیل

- accessibility پایه بهتر حفظ می‌شود.
- سریع‌تر قابل استفاده در فرم‌هاست.
- clock-face radial picker می‌تواند در فاز بعدی اضافه شود.


## DD-015 — Carousel بدون Autoplay در نسخه اول

Carousel در نسخه اول autoplay ندارد.

### دلیل

- autoplay ممکن است accessibility و کنترل کاربر را ضعیف کند.
- ابتدا باید scroll-snap، controls و dots پایدار شوند.
- autoplay در صورت نیاز بعداً با توقف در hover/focus اضافه می‌شود.


## DD-016 — Integration Sprint بعد از ۳۰ قدم

بعد از ساخت ۳۰ قدم، یک فاز یکپارچه‌سازی شروع شد.

### دلیل

- پروژه قبل از رشد بیشتر باید مستندسازی و تست‌پذیری بهتری داشته باشد.
- Storybook و visual testing برای pixel-perfect ضروری هستند.
- Icon system باید قبل از refactor بزرگ آماده شود.


## DD-017 — پروژه خصوصی است

پروژه به عنوان یک سیستم طراحی خصوصی برای استفاده شخصی تعریف شد.

### دلیل

- کاربر نمی‌خواهد پروژه open-source باشد.
- هدف استفاده در پروژه‌های شخصی است.
- مستندات، release و package باید private-first طراحی شوند.


## DD-018 — Build خصوصی با Vite Library Mode

برای build پروژه از Vite library mode استفاده شد.

### دلیل

- ساده‌تر از monorepo کامل است.
- برای پروژه شخصی و private package کافی است.
- خروجی ESM و CSS را سریع‌تر آماده می‌کند.
- بعداً اگر لازم شد می‌توان به tsup یا monorepo مهاجرت کرد.
