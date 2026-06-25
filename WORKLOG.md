# دستور کار و گزارش پیشرفت

## هدف پروژه

ساخت یک Design System فارسی بر اساس Material Design فارسی موجود در Figma، به شکلی که برای React/Next.js قابل استفاده باشد و بعداً بتوان آن را به صفحات واقعی، داشبورد، فرم‌ها و اپلیکیشن فارسی تبدیل کرد.

---

## قدم 1 — v0.1: پایه سیستم

### انجام شد

- ساخت ساختار اولیه پروژه
- ساخت tokenهای پایه
- ساخت base styles برای RTL
- ساخت Button component
- ساخت Login example اولیه
- ساخت rules و QA اولیه

### ناقص / نیازمند تکمیل

- استخراج کامل همه Figma variables
- تست تصویری
- Storybook یا Component Gallery
- پیاده‌سازی سایر کامپوننت‌ها

---

## قدم 2 — v0.2: TextField

### انجام شد

- ساخت TextField component
- پشتیبانی از Filled و Outlined
- پشتیبانی از Enabled / Hover / Focus / Error / Disabled
- پشتیبانی از Supporting text
- پشتیبانی از Leading icon و Trailing icon
- آپدیت Login example
- ساخت TextField QA checklist

### ناقص / نیازمند تکمیل

- همه ترکیب‌های فیگما به‌صورت جداگانه snapshot نشده‌اند.
- هنوز تست تصویری نداریم.
- هنوز multiline text field اضافه نشده است.

---

## قدم 3 — v0.3: Card

### انجام شد

- ساخت Card component
- پشتیبانی از Filled / Outlined / Elevated
- پشتیبانی از stateهای Enabled / Hovered / Focused / Pressed / Dragged
- ساخت slotهای media, overline, title, subtitle, body, actions
- ساخت Card demo
- ساخت Dashboard example
- ساخت Card QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- Card هنوز pixel-perfect با همه نمونه‌های Figma تست نشده است.
- Horizontal card فعلاً به‌صورت helper CSS آماده شده، ولی API جداگانه ندارد.
- Media aspect ratio هنوز variant رسمی ندارد.

---

## دستور کار قدم بعدی

پیشنهاد: پیاده‌سازی Checkbox یا Switch.

دلیل:

- برای فرم‌ها، فیلترها، تنظیمات و داشبوردها بسیار کاربردی هستند.
- بعد از Button + TextField + Card، ورودی‌های انتخابی مهم‌ترین نیاز UI هستند.


---

## قدم 4 — v0.4: Switch

### انجام شد

- ساخت Switch component
- پشتیبانی از checked و unchecked
- پشتیبانی از enabled و disabled
- پشتیبانی از hover، focus-visible و pressed
- استفاده از native checkbox برای accessibility
- پشتیبانی از label و supporting text
- ساخت Switch demo
- ساخت Settings example
- ساخت Switch QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- iconهای داخلی switch فعلاً متنی هستند؛ در نسخه بعدی می‌توانند با آیکن رسمی جایگزین شوند.
- هنوز اندازه‌ها با همه variantهای احتمالی Figma تطبیق تصویری نشده‌اند.

---

## دستور کار قدم بعدی

پیاده‌سازی Checkbox.

دلیل:

- مکمل Switch است.
- برای فرم‌ها، فیلترها و انتخاب چند گزینه‌ای ضروری است.
- بعد از Checkbox می‌توانیم صفحه فرم و فیلتر واقعی بسازیم.


---

## قدم 5 — v0.5: Checkbox

### انجام شد

- ساخت Checkbox component
- پشتیبانی از unchecked، checked و indeterminate
- پشتیبانی از enabled و disabled
- پشتیبانی از error
- پشتیبانی از hover، focus-visible و pressed
- استفاده از native checkbox برای accessibility
- پشتیبانی از label و supporting text
- ساخت Checkbox demo
- ساخت Filter example
- ساخت Checkbox QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- علامت check و indeterminate فعلاً متنی هستند؛ در نسخه نهایی می‌توانند با SVG رسمی جایگزین شوند.
- هنوز تمام حالت‌های احتمالی hover/error/disabled از فیگما به‌صورت تصویری مقایسه نشده‌اند.

---

## دستور کار قدم بعدی

پیاده‌سازی Radio Button.

دلیل:

- در فایل Figma وجود دارد.
- برای فرم‌ها و انتخاب یکی از چند گزینه ضروری است.
- بعد از Radio می‌توانیم یک فرم تنظیمات/ثبت‌نام کامل‌تر بسازیم.


---

## قدم 6 — v0.6: Radio Button

### انجام شد

- ساخت Radio component
- ساخت RadioGroup component
- پشتیبانی از selected و unselected
- پشتیبانی از enabled و disabled
- پشتیبانی از error
- پشتیبانی از hover، focus-visible و pressed
- استفاده از native radio برای accessibility
- پشتیبانی از label و supporting text
- ساخت Radio demo
- ساخت Profile form example
- ساخت Radio QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- هنوز size variant جداگانه ندارد.
- هنوز keyboard interaction گروهی فراتر از native browser behavior سفارشی‌سازی نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Chip.

دلیل:

- در فایل Figma بخش Chips وجود دارد.
- برای فیلتر، انتخاب سریع، تگ، دسته‌بندی، و اکشن‌های کوچک بسیار پرکاربرد است.
- بعد از Chip می‌توانیم صفحات لیست، جستجو و فیلتر را واقعی‌تر کنیم.


---

## قدم 7 — v0.7: Chip

### انجام شد

- ساخت Chip component
- پشتیبانی از assist، filter، input و suggestion
- پشتیبانی از selected و disabled
- پشتیبانی از hover، focus-visible و pressed
- پشتیبانی از leading icon
- پشتیبانی از remove action برای input chip
- ساخت Chip demo
- ساخت Search example
- ساخت Chip QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- آیکن‌های check/remove فعلاً ساده هستند و می‌توانند SVG رسمی شوند.
- هنوز حالت‌های مختلف اندازه و density اضافه نشده‌اند.

---

## دستور کار قدم بعدی

پیاده‌سازی Tabs.

دلیل:

- برای دسته‌بندی محتوا در داشبورد، پروفایل و گزارش‌ها ضروری است.
- در فایل Figma بخش Tabs وجود دارد.
- بعد از Tabs می‌توانیم صفحات واقعی‌تر با چند بخش بسازیم.


---

## قدم 8 — v0.8: Tabs

### انجام شد

- ساخت Tabs component
- ساخت Tab component
- ساخت TabPanel component
- پشتیبانی از primary و secondary
- پشتیبانی از active، inactive و disabled
- پشتیبانی از hover، focus-visible و pressed
- پشتیبانی از icon اختیاری
- اتصال aria بین Tab و TabPanel
- ساخت Tabs demo
- ساخت Tabbed profile example
- ساخت Tabs QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- keyboard navigation با arrow keys هنوز سفارشی نشده و فعلاً بر رفتار button/native تکیه دارد.
- هنوز scroll buttons برای تب‌های زیاد اضافه نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Top App Bar.

دلیل:

- برای ساخت قالب صفحات واقعی ضروری است.
- در فایل Figma بخش Top Bar وجود دارد.
- بعد از Top App Bar می‌توانیم صفحات نمونه را شبیه اپلیکیشن کامل کنیم.


---

## قدم 9 — v0.9: Top App Bar

### انجام شد

- ساخت TopAppBar component
- پشتیبانی از small، center، medium و large
- پشتیبانی از navigation icon
- پشتیبانی از action slots
- پشتیبانی از subtitle
- پشتیبانی از elevated/scrolled state
- پشتیبانی از hover، focus-visible و pressed برای icon buttonها
- ساخت Top App Bar demo
- ساخت App Shell example
- ساخت Top App Bar QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- آیکن‌ها فعلاً ساده/متنی هستند و در نسخه نهایی باید SVG رسمی شوند.
- هنوز responsive collapse برای actionهای زیاد اضافه نشده است.
- هنوز behavior اسکرول به‌صورت hook یا utility جداگانه پیاده‌سازی نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Navigation Bar یا Navigation Drawer.

دلیل:

- بعد از Top App Bar برای ساخت shell کامل اپلیکیشن ضروری است.
- در فایل Figma بخش Navigation Bar / Drawer / Rail وجود دارد.
- با آن می‌توانیم صفحات نمونه را شبیه اپلیکیشن واقعی‌تر کنیم.


---

## قدم 10 — v0.10: Navigation Bar

### انجام شد

- ساخت NavigationBar component
- پشتیبانی از active و inactive
- پشتیبانی از disabled
- پشتیبانی از hover، focus-visible و pressed
- پشتیبانی از icon و label
- پشتیبانی از badge
- ساخت fixed bottom helper
- ساخت Navigation Bar demo
- ساخت Mobile shell example
- ساخت Navigation Bar QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- آیکن‌ها فعلاً ساده/متنی هستند و باید SVG رسمی شوند.
- هنوز حالت adaptive برای tablet/desktop به Navigation Rail یا Drawer وصل نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Navigation Drawer.

دلیل:

- مکمل Navigation Bar برای desktop/tablet است.
- در فایل Figma بخش Navigation Drawer وجود دارد.
- با Drawer می‌توانیم یک App Shell کامل‌تر بسازیم.


---

## قدم 11 — v0.11: Navigation Drawer

### انجام شد

- ساخت NavigationDrawer component
- پشتیبانی از standard و modal
- پشتیبانی از sectionها
- پشتیبانی از active و inactive
- پشتیبانی از disabled
- پشتیبانی از hover، focus-visible و pressed
- پشتیبانی از icon و label
- پشتیبانی از badge
- پشتیبانی از scrim برای modal drawer
- ساخت Navigation Drawer demo
- ساخت Desktop shell example
- ساخت Navigation Drawer QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- آیکن‌ها فعلاً ساده/متنی هستند و باید SVG رسمی شوند.
- مدیریت focus trap برای modal drawer هنوز اضافه نشده است.
- animation دقیق باز/بسته شدن هنوز با فیگما مقایسه نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی List / ListItem.

دلیل:

- در فایل Figma بخش List وجود دارد.
- برای Drawer، تنظیمات، پیام‌ها، آیتم‌های داشبورد و صفحات مدیریتی ضروری است.
- بعد از ListItem می‌توانیم Dialog، Menu و Search Result را بهتر بسازیم.


---

## قدم 12 — v0.12: List / ListItem

### انجام شد

- ساخت List component
- ساخت ListItem component
- پشتیبانی از one-line، two-line و three-line
- پشتیبانی از leading و trailing slot
- پشتیبانی از overline، headline و supporting text
- پشتیبانی از selected و disabled
- پشتیبانی از hover، focus-visible و pressed
- پشتیبانی از dividers
- ساخت List demo
- ساخت Messages example
- ساخت List QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- هنوز swipe actions برای موبایل اضافه نشده است.
- هنوز virtualized list برای لیست‌های خیلی بزرگ اضافه نشده است.
- هنوز checkbox/radio selection pattern داخل List به‌صورت preset جداگانه ندارد.

---

## دستور کار قدم بعدی

پیاده‌سازی Dialog.

دلیل:

- در فایل Figma بخش Dialogs وجود دارد.
- برای تأیید عملیات، هشدار، حذف، ذخیره و فرم‌های کوچک ضروری است.
- با Dialog می‌توانیم صفحات نمونه را تعامل‌پذیرتر کنیم.


---

## قدم 13 — v0.13: Dialog

### انجام شد

- ساخت Dialog component
- پشتیبانی از small، medium و large
- پشتیبانی از icon، title، supporting text، content و actions
- پشتیبانی از modal scrim
- پشتیبانی از بستن با Escape
- انتقال focus اولیه به action
- پشتیبانی از text، filled و outlined برای actionها
- ساخت Dialog demo
- ساخت Dialog flow example
- ساخت Dialog QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- focus trap کامل داخل Dialog هنوز اضافه نشده است.
- animation خروج هنوز جداگانه پیاده‌سازی نشده است.
- اکشن مخرب هنوز variant اختصاصی مثل destructive ندارد.

---

## دستور کار قدم بعدی

پیاده‌سازی Snackbar.

دلیل:

- در فایل Figma بخش Snack Bar وجود دارد.
- مکمل Dialog است.
- برای پیام‌های کوتاه، نتیجه عملیات، ذخیره موفق و undo بسیار کاربردی است.


---

## قدم 14 — v0.14: Snackbar

### انجام شد

- ساخت Snackbar component
- پشتیبانی از neutral، success، error و warning
- پشتیبانی از bottom و top position
- پشتیبانی از action اختیاری
- پشتیبانی از close button
- پشتیبانی از auto-dismiss duration
- پشتیبانی از multiline mode
- استفاده از ARIA live region
- ساخت Snackbar demo
- ساخت Snackbar flow example
- ساخت Snackbar QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- queue/stack مدیریت چند Snackbar همزمان هنوز اضافه نشده است.
- animation خروج هنوز جداگانه پیاده‌سازی نشده است.
- provider/hook مثل useSnackbar هنوز ساخته نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Tooltip.

دلیل:

- در فایل Figma بخش Tooltip وجود دارد.
- برای توضیح کوتاه آیکن‌ها و کنترل‌های فشرده ضروری است.
- بعد از Tooltip می‌توانیم IconButtonها و AppBarها را حرفه‌ای‌تر کنیم.


---

## قدم 15 — v0.15: Tooltip

### انجام شد

- ساخت Tooltip component
- پشتیبانی از plain و rich
- پشتیبانی از top، bottom، start و end
- پشتیبانی از hover و focus trigger
- پشتیبانی از بستن با Escape
- اتصال aria-describedby
- ساخت Tooltip demo
- ساخت Tooltip actions example
- ساخت Tooltip QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- هنوز collision detection با لبه صفحه اضافه نشده است.
- هنوز delay کنترل‌شده برای open/close اضافه نشده است.
- rich tooltip هنوز focus management کامل برای action داخلی ندارد.

---

## دستور کار قدم بعدی

پیاده‌سازی Menu.

دلیل:

- در فایل Figma بخش Menu وجود دارد.
- برای overflow actions در TopAppBar و لیست‌ها ضروری است.
- با Menu می‌توانیم دکمه «بیشتر» را واقعی‌تر کنیم.


---

## قدم 16 — v0.16: Menu

### انجام شد

- ساخت Menu component
- پشتیبانی از bottom-start، bottom-end، top-start و top-end
- پشتیبانی از leading icon
- پشتیبانی از trailing text
- پشتیبانی از disabled item
- پشتیبانی از destructive item
- پشتیبانی از divider
- بستن با کلیک بیرون
- بستن با Escape
- حرکت فوکوس با ArrowDown و ArrowUp
- ساخت Menu demo
- ساخت Menu actions example
- ساخت Menu QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- collision detection با لبه صفحه هنوز اضافه نشده است.
- focus restoration به trigger بعد از بسته شدن کامل نشده است.
- nested menu هنوز پشتیبانی نمی‌شود.

---

## دستور کار قدم بعدی

پیاده‌سازی IconButton.

دلیل:

- در فایل Figma بخش Icon Button / Iconic وجود دارد.
- در TopAppBar، Tooltip، Menu و صفحات نمونه چندجا از button خام استفاده شده است.
- با IconButton، اکشن‌های آیکنی رسمی و هماهنگ می‌شوند.


---

## قدم 17 — v0.17: IconButton

### انجام شد

- ساخت IconButton component
- پشتیبانی از standard، filled، tonal و outlined
- پشتیبانی از small، medium و large
- پشتیبانی از selected و selectedIcon
- پشتیبانی از disabled
- پشتیبانی از hover، focus-visible و pressed
- الزام label برای accessibility
- ساخت IconButton demo
- ساخت Icon actions example
- ساخت IconButton QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- آیکن‌ها فعلاً متنی/emoji هستند و باید به SVG رسمی تبدیل شوند.
- هنوز loading state ندارد.
- هنوز integration کامل TopAppBar برای استفاده داخلی از IconButton انجام نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی FAB.

دلیل:

- در فایل Figma بخش FAB وجود دارد.
- برای اکشن اصلی صفحه در موبایل و اپلیکیشن‌ها بسیار کاربردی است.
- مکمل Button و IconButton است.


---

## قدم 18 — v0.18: FAB

### انجام شد

- ساخت FAB component
- پشتیبانی از small، medium، large و extended
- پشتیبانی از primary، secondary، tertiary و surface
- پشتیبانی از hover، focus-visible، pressed و disabled
- ساخت fixed placement helper
- ساخت fixed-with-nav placement helper
- ساخت FAB demo
- ساخت FAB task example
- ساخت FAB QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- آیکن‌ها فعلاً متنی/emoji هستند و باید SVG رسمی شوند.
- hide/show behavior هنگام scroll هنوز اضافه نشده است.
- هنوز با NavigationBar به‌صورت adaptive هماهنگ نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Badge.

دلیل:

- در فایل Figma بخش Badges وجود دارد.
- برای اعلان‌ها، پیام‌ها، NavigationBar و IconButton لازم است.
- با Badge می‌توانیم شمارنده‌ها را از حالت دستی به کامپوننت رسمی تبدیل کنیم.


---

## قدم 19 — v0.19: Badge

### انجام شد

- ساخت Badge component
- ساخت BadgeAnchor component
- پشتیبانی از small و large
- پشتیبانی از error، primary و secondary
- پشتیبانی از max overflow مثل 99+
- پشتیبانی از showZero
- ساخت Badge demo
- ساخت Badge notifications example
- ساخت Badge QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- هنوز Badge داخلی NavigationBar از همین کامپوننت استفاده نمی‌کند و بعداً refactor می‌شود.
- هنوز جای‌گذاری دقیق روی همه سایزهای IconButton تست تصویری نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Divider.

دلیل:

- در فایل Figma بخش Dividers وجود دارد.
- برای List، Drawer، Menu، Dialog و Card sectionها لازم است.
- با Divider می‌توانیم borderهای دستی را کمتر کنیم.


---

## قدم 20 — v0.20: Divider

### انجام شد

- ساخت Divider component
- پشتیبانی از horizontal و vertical
- پشتیبانی از full، inset و middle
- پشتیبانی از default و strong tone
- پشتیبانی از decorative و semantic separator
- ساخت Divider demo
- ساخت Divider layout example
- ساخت Divider QA checklist
- آپدیت component usage rules

### ناقص / نیازمند تکمیل

- هنوز با snapshot تصویری فیگما pixel-perfect تست نشده است.
- هنوز List/Menu/Drawer به‌صورت داخلی از Divider component استفاده نمی‌کنند و بعداً refactor می‌شوند.
- responsive spacing دقیق برای همه layoutها هنوز تست تصویری نشده است.

---

## دستور کار قدم بعدی

پیاده‌سازی Progress.

دلیل:

- در فایل Figma بخش Progress وجود دارد.
- برای loading، آپلود، ارسال فرم و عملیات async لازم است.
- برای صفحات واقعی UI خیلی کاربردی است.


---

## قدم 21 — v0.21: Progress

### انجام شد

- ساخت LinearProgress
- ساخت CircularProgress
- پشتیبانی از determinate و indeterminate
- پشتیبانی از primary، secondary و error
- ساخت Progress demo
- ساخت Progress loading example
- ساخت Progress QA checklist
- اضافه شدن CHANGELOG.md
- اضافه شدن ARCHITECTURE.md
- اضافه شدن DESIGN_DECISIONS.md
- اضافه شدن COMPONENT_MATRIX.md
- اضافه شدن TODO_MASTER.md

### ناقص / نیازمند تکمیل

- هنوز pixel-perfect تست نشده است.
- motion tokenها هنوز مرکزی نشده‌اند.
- animationها هنوز با Figma مقایسه نشده‌اند.

## دستور کار قدم بعدی

پیاده‌سازی Slider.


---

## قدم 22 — v0.22: Slider

### انجام شد

- ساخت Slider component
- پشتیبانی از min، max و step
- پشتیبانی از label و supporting text
- پشتیبانی از showValue و valueFormatter
- پشتیبانی از primary، secondary و error
- پشتیبانی از disabled، hover، focus-visible و pressed
- ساخت Slider demo
- ساخت Slider filter example
- ساخت Slider QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- Range slider هنوز ساخته نشده است.
- Tick marks هنوز اضافه نشده است.
- هنوز pixel-perfect با Figma تست نشده است.

## دستور کار قدم بعدی

پیاده‌سازی SearchBar.


---

## قدم 23 — v0.23: SearchBar

### انجام شد

- ساخت SearchBar
- ساخت SearchSuggestion / SearchHistory / SearchResults
- ساخت useSearch hook
- ساخت ProductSearchExample
- ساخت SearchBar QA checklist

### ناقص / نیازمند تکمیل

- keyboard navigation کامل هنوز اضافه نشده است.
- mobile fullscreen Search View هنوز اضافه نشده است.


---

## قدم 24 — v0.24: SegmentedButton

### انجام شد

- ساخت SegmentedButtonGroup
- ساخت SegmentedButtonItem
- پشتیبانی از single select
- پشتیبانی از multi select
- پشتیبانی از regular و compact density
- پشتیبانی از icon و label
- ساخت SegmentedButton demo
- ساخت SegmentedFilterExample
- ساخت SegmentedButton QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- هنوز pixel-perfect با Figma تست نشده است.
- keyboard navigation با ArrowLeft/ArrowRight هنوز اضافه نشده است.
- آیکن‌ها هنوز رسمی نیستند.

## دستور کار قدم بعدی

پیاده‌سازی Avatar.


---

## قدم 25 — v0.25: Avatar

### انجام شد

- ساخت Avatar component
- پشتیبانی از image، initials و icon fallback
- پشتیبانی از xsmall، small، medium، large و xlarge
- پشتیبانی از circle، rounded و square
- پشتیبانی از primary، secondary، tertiary و neutral
- پشتیبانی از online، busy، away و offline status
- ساخت Avatar demo
- ساخت AvatarProfileExample
- ساخت Avatar QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- هنوز pixel-perfect با Figma تست نشده است.
- status colorها باید به token تبدیل شوند.
- fallback هنگام خطای لود تصویر هنوز ندارد.

## دستور کار قدم بعدی

پیاده‌سازی BottomSheet.


---

## قدم 26 — v0.26: BottomSheet

### انجام شد

- ساخت BottomSheet component
- پشتیبانی از modal و standard
- پشتیبانی از content، half و full height
- پشتیبانی از drag handle
- پشتیبانی از title، description، content و actions
- پشتیبانی از scrim
- بستن با Escape
- ساخت BottomSheet demo
- ساخت BottomSheetFilterExample
- ساخت BottomSheet QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- drag gesture هنوز پیاده‌سازی نشده است.
- focus trap کامل نیست.
- هنوز pixel-perfect با Figma تست نشده است.

## دستور کار قدم بعدی

پیاده‌سازی SideSheet.


---

## قدم 27 — v0.27: SideSheet

### انجام شد

- ساخت SideSheet component
- پشتیبانی از modal و standard
- پشتیبانی از start و end
- پشتیبانی از compact، medium و expanded width
- پشتیبانی از title، description، content و actions
- پشتیبانی از scrim و close button
- بستن با Escape
- ساخت SideSheet demo
- ساخت SideSheetDashboardExample
- ساخت SideSheet QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- focus trap کامل نیست.
- تبدیل adaptive بین BottomSheet و SideSheet خودکار نیست.
- هنوز pixel-perfect با Figma تست نشده است.

## دستور کار قدم بعدی

پیاده‌سازی DatePicker.


---

## قدم 28 — v0.28: DatePicker

### انجام شد

- ساخت DatePicker component
- ساخت grid ماه میلادی
- پشتیبانی از تغییر ماه قبل و بعد
- پشتیبانی از selected date display
- پشتیبانی از today و selected state
- پشتیبانی از min و max
- ساخت DatePicker demo
- ساخت DatePickerFormExample
- ساخت DatePicker QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- تقویم شمسی/Jalali هنوز اضافه نشده است.
- range mode کامل نیست.
- keyboard navigation کامل داخل grid هنوز ندارد.
- هنوز pixel-perfect با Figma تست نشده است.

## دستور کار قدم بعدی

پیاده‌سازی TimePicker.


---

## قدم 29 — v0.29: TimePicker

### انجام شد

- ساخت TimePicker component
- پشتیبانی از حالت ۲۴ ساعته
- پشتیبانی از حالت ۱۲ ساعته
- پشتیبانی از انتخاب ساعت و دقیقه
- پشتیبانی از minuteStep
- ساخت TimePicker demo
- ساخت TimePickerScheduleExample
- ساخت TimePicker QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- radial clock picker هنوز اضافه نشده است.
- keyboard shortcutها هنوز اضافه نشده‌اند.
- هنوز pixel-perfect با Figma تست نشده است.

## دستور کار قدم بعدی

پیاده‌سازی Carousel.


---

## قدم 30 — v0.30: Carousel

### انجام شد

- ساخت Carousel component
- پشتیبانی از cards، hero و compact
- پشتیبانی از horizontal scroll-snap
- پشتیبانی از previous/next controls
- پشتیبانی از active dots
- ساخت Carousel demo
- ساخت CarouselShopExample
- ساخت Carousel QA checklist
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- autoplay ندارد.
- drag-specific behavior فقط native scroll است.
- هنوز pixel-perfect با Figma تست نشده است.

## دستور کار قدم بعدی

شروع Integration Sprint A.

هدف:

- refactor داخلی کامپوننت‌ها
- ساخت Storybook scaffold
- آماده‌سازی visual testing
- آماده‌سازی Icon System


---

## قدم 31 — v0.31: Integration Sprint A

### انجام شد

- ساخت Icon component scaffold
- ساخت Icon demo
- ساخت Storybook scaffold
- ساخت Button.stories.tsx
- ساخت Icon.stories.tsx
- ساخت visual testing scaffold
- ساخت docs/INTEGRATION_SPRINT_A.md
- ساخت docs/STORYBOOK_GUIDE.md
- ساخت docs/ICON_SYSTEM_PLAN.md
- ساخت integration-sprint-a-checklist.md
- آپدیت package scripts
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- Storybook dependencies هنوز نصب نشده‌اند.
- story همه کامپوننت‌ها هنوز ساخته نشده است.
- visual testing فقط scaffold است.
- Icon هنوز به SVG رسمی وصل نشده است.

## دستور کار قدم بعدی

تکمیل Storybook stories برای کامپوننت‌های اصلی یا شروع refactor آیکن‌ها.


---

## قدم 32 — v0.32: Storybook Sprint Core Stories

### انجام شد

- ساخت TextField.stories.tsx
- ساخت Card.stories.tsx
- ساخت IconButton.stories.tsx
- ساخت Dialog.stories.tsx
- ساخت NavigationBar.stories.tsx
- ساخت SearchBar.stories.tsx
- ساخت DatePicker.stories.tsx
- ساخت TimePicker.stories.tsx
- ساخت Carousel.stories.tsx
- ساخت docs/STORYBOOK_COVERAGE.md
- ساخت storybook-sprint-checklist.md

### ناقص / نیازمند تکمیل

- Story همه کامپوننت‌ها هنوز کامل نشده است.
- Storyها هنوز با baseline تصویری تست نشده‌اند.
- Storybook dependencies باید در محیط واقعی نصب شوند.

## دستور کار قدم بعدی

تکمیل Storybook برای باقی کامپوننت‌ها یا شروع Icon System refactor.


---

## قدم 33 — v0.33: Storybook Completion Sprint

### انجام شد

- ساخت Story برای کامپوننت‌های باقی‌مانده
- آپدیت docs/STORYBOOK_COVERAGE.md
- ساخت storybook-completion-checklist.md
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- Storyها باید در محیط واقعی Storybook اجرا و type-check شوند.
- بعضی storyها ممکن است بعد از build نیاز به تنظیم prop داشته باشند.
- visual baseline هنوز متصل نیست.

## دستور کار قدم بعدی

شروع Icon System refactor یا visual testing baseline.


---

## قدم 34 — v0.34: Private Project Setup

### انجام شد

- تغییر جهت پروژه به Private Persian Material Design System
- ساخت docs/PRIVATE_PROJECT_PLAN.md
- ساخت docs/PRIVATE_USAGE_GUIDE.md
- ساخت docs/PRIVATE_RELEASE_CHECKLIST.md
- ساخت docs/PRIVATE_SECURITY_NOTES.md
- ساخت PRIVATE_PACKAGE_NOTES.md
- ساخت .npmrc.example
- تنظیم package.json برای private=true
- آماده‌سازی نام private package
- ساخت private-project-checklist.md
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- registry خصوصی هنوز تنظیم نشده است.
- package exports هنوز نهایی نشده است.
- build واقعی هنوز کامل نیست.
- TypeScript build باید در محیط واقعی تست شود.

## دستور کار قدم بعدی

آماده‌سازی package exports و build structure برای استفاده خصوصی.


---

## قدم 35 — v0.35: Production Build System

### انجام شد

- ساخت src/index.ts
- ساخت src/styles.css
- ساخت tsconfig.build.json
- ساخت vite.config.ts
- تنظیم package.json برای private package
- اضافه کردن main/module/types/style
- اضافه کردن exports
- اضافه کردن files
- اضافه کردن peerDependencies
- اضافه کردن build scripts
- ساخت docs/BUILD_SYSTEM.md
- ساخت docs/EXPORT_ARCHITECTURE.md
- ساخت build-system-checklist.md

### ناقص / نیازمند تکمیل

- build هنوز در محیط واقعی اجرا نشده است.
- مسیر خروجی CSS بعد از اولین build واقعی باید بررسی شود.
- package import test هنوز ساخته نشده است.

## دستور کار قدم بعدی

Export Architecture refinement و ساخت import test.


---

## قدم 36 — v0.36: Import Test + Export Refinement

### انجام شد

- ساخت example-app
- ساخت نمونه import از package خصوصی
- ساخت hooks/index.ts
- ساخت utils/index.ts
- ساخت tokens/index.ts
- آپدیت src/index.ts
- آپدیت package exports
- ساخت IMPORT_TEST_GUIDE.md
- ساخت EXPORTS_CHECKLIST.md
- ساخت import-test-checklist.md

### ناقص / نیازمند تکمیل

- تست import هنوز در محیط واقعی اجرا نشده است.
- dist pathها بعد از build واقعی باید بررسی شوند.
- token export هنوز placeholder است.

## دستور کار قدم بعدی

اجرای build واقعی یا شروع Icon System SVG registry.


---

## قدم 37 — v0.37: Mega Landing Page

### انجام شد

- ساخت یک لندینگ‌پیج فارسی پرالمان
- استفاده از اکثر کامپوننت‌های Design System
- ساخت MegaLandingPage.tsx
- ساخت MegaLandingPage.css
- ساخت docs/MEGA_LANDING_PAGE.md
- ساخت mega-landing-page-checklist.md
- آپدیت فایل‌های مدیریتی

### ناقص / نیازمند تکمیل

- هنوز visual QA انجام نشده است.
- هنوز pixel-perfect با Figma تست نشده است.
- آیکن‌ها هنوز رسمی نیستند.

## دستور کار قدم بعدی

Visual QA و Pixel Perfect pipeline برای Mega Landing Page.
