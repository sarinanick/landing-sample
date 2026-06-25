# Implementation Status

## v0.1 — Base scaffold

وضعیت: پایه قابل استفاده، اما نهایی نیست.

شامل:

- Design token files
- RTL base rules
- Button component
- Login example
- QA checklists

محدودیت‌ها:

- هنوز همه Figma variables به‌صورت دقیق استخراج نشده‌اند.
- هنوز Visual Regression Test نداریم.
- هنوز همه کامپوننت‌های UI Kit پیاده‌سازی نشده‌اند.
- هنوز Storybook یا Component Gallery کامل ساخته نشده است.

## v0.2 — TextField

وضعیت: اضافه شدن دومین کامپوننت اصلی.

شامل:

- TextField component
- Filled / Outlined variants
- Enabled / Hover / Focus / Error / Disabled states
- Supporting text
- Leading / Trailing icon slots
- Updated login example

## Next recommended step

پیاده‌سازی Card، چون برای داشبورد، لیست‌ها، صفحه پروفایل، سفارش‌ها و محتوای سایت بسیار پرکاربرد است.


## v0.3 — Card

وضعیت: سومین کامپوننت اصلی اضافه شد.

شامل:

- Card component
- Filled / Outlined / Elevated variants
- Enabled / Hovered / Focused / Pressed / Dragged states
- Media / Overline / Title / Subtitle / Body / Actions slots
- Card demo
- Dashboard example
- Card QA checklist

## Next recommended step

پیاده‌سازی Checkbox یا Switch، چون بعد از فرم و کارت برای ساخت تنظیمات، فیلترها و داشبورد بسیار پرکاربرد هستند.


## v0.4 — Switch

وضعیت: چهارمین کامپوننت اصلی اضافه شد.

شامل:

- Switch component
- Checked / Unchecked states
- Enabled / Disabled states
- Hover / Focus / Pressed states
- Label and supporting text
- Native checkbox input for accessibility
- Settings example page
- Switch QA checklist

## Next recommended step

پیاده‌سازی Checkbox، چون مکمل Switch است و برای فیلترها، لیست‌ها، فرم‌ها و انتخاب چند گزینه‌ای بسیار مهم است.


## v0.5 — Checkbox

وضعیت: پنجمین کامپوننت اصلی اضافه شد.

شامل:

- Checkbox component
- Checked / Unchecked / Indeterminate states
- Enabled / Disabled states
- Error state
- Hover / Focus / Pressed states
- Label and supporting text
- Native checkbox input for accessibility
- Checkbox demo
- Filter example page
- Checkbox QA checklist

## Next recommended step

پیاده‌سازی Radio Button، چون در فایل Figma وجود دارد و برای فرم‌ها و انتخاب یکی از چند گزینه ضروری است.


## v0.6 — Radio Button

وضعیت: ششمین کامپوننت اصلی اضافه شد.

شامل:

- Radio component
- RadioGroup component
- Selected / Unselected states
- Enabled / Disabled states
- Error state
- Hover / Focus / Pressed states
- Label and supporting text
- Native radio input for accessibility
- Radio demo
- Profile form example page
- Radio QA checklist

## Next recommended step

پیاده‌سازی Chip، چون در فایل Figma وجود دارد و برای فیلتر، انتخاب سریع، تگ‌ها و اکشن‌های کوچک بسیار پرکاربرد است.


## v0.7 — Chip

وضعیت: هفتمین کامپوننت اصلی اضافه شد.

شامل:

- Chip component
- Assist / Filter / Input / Suggestion variants
- Selected / Disabled states
- Hover / Focus / Pressed states
- Leading icon
- Remove action for input chip
- Chip demo
- Search example page
- Chip QA checklist

## Next recommended step

پیاده‌سازی Tabs، چون برای صفحات داشبورد، پروفایل، گزارش‌ها و دسته‌بندی محتوا بسیار پرکاربرد است.


## v0.8 — Tabs

وضعیت: هشتمین کامپوننت اصلی اضافه شد.

شامل:

- Tabs component
- Tab component
- TabPanel component
- Primary / Secondary variants
- Active / Inactive / Disabled states
- Hover / Focus / Pressed states
- Optional icons
- ARIA wiring between tab and panel
- Tabs demo
- Tabbed profile example page
- Tabs QA checklist

## Next recommended step

پیاده‌سازی Top App Bar، چون برای ساخت صفحات واقعی و قالب اپلیکیشن ضروری است.


## v0.9 — Top App Bar

وضعیت: نهمین کامپوننت اصلی اضافه شد.

شامل:

- TopAppBar component
- Small / Center / Medium / Large variants
- Navigation icon slot
- Actions slot
- Subtitle support
- Elevated/scrolled state
- Hover / Focus / Pressed states for icon buttons
- Top App Bar demo
- App shell example page
- Top App Bar QA checklist

## Next recommended step

پیاده‌سازی Navigation Bar یا Navigation Drawer، چون بعد از Top App Bar برای ساخت shell کامل اپلیکیشن لازم است.


## v0.10 — Navigation Bar

وضعیت: دهمین کامپوننت اصلی اضافه شد.

شامل:

- NavigationBar component
- Active / Inactive states
- Disabled state
- Hover / Focus / Pressed states
- Icon + label support
- Badge support
- Fixed bottom helper
- Navigation Bar demo
- Mobile shell example page
- Navigation Bar QA checklist

## Next recommended step

پیاده‌سازی Navigation Drawer، چون برای desktop/tablet و ساخت shell کامل اپلیکیشن لازم است.


## v0.11 — Navigation Drawer

وضعیت: یازدهمین کامپوننت اصلی اضافه شد.

شامل:

- NavigationDrawer component
- Standard / Modal variants
- Sections
- Active / Inactive states
- Disabled state
- Hover / Focus / Pressed states
- Icon + label support
- Badge support
- Scrim for modal drawer
- Navigation Drawer demo
- Desktop shell example page
- Navigation Drawer QA checklist

## Next recommended step

پیاده‌سازی List / ListItem، چون برای منوها، drawer، تنظیمات، پیام‌ها و صفحات مدیریتی بسیار پرکاربرد است.


## v0.12 — List / ListItem

وضعیت: دوازدهمین کامپوننت اصلی اضافه شد.

شامل:

- List component
- ListItem component
- One-line / Two-line / Three-line densities
- Leading / Trailing slots
- Overline / Headline / Supporting text
- Selected / Disabled states
- Hover / Focus / Pressed states
- Dividers
- List demo
- Messages example page
- List QA checklist

## Next recommended step

پیاده‌سازی Dialog، چون برای تأیید عملیات، هشدار، فرم‌های کوچک و تعاملات مهم UI ضروری است.


## v0.13 — Dialog

وضعیت: سیزدهمین کامپوننت اصلی اضافه شد.

شامل:

- Dialog component
- Small / Medium / Large sizes
- Icon / Title / Supporting text / Content / Actions
- Modal scrim
- Escape close behavior
- Initial focus behavior
- Text / Filled / Outlined action variants
- Dialog demo
- Dialog flow example page
- Dialog QA checklist

## Next recommended step

پیاده‌سازی Snackbar، چون مکمل Dialog برای پیام‌های کوتاه و غیرمسدودکننده است.


## v0.14 — Snackbar

وضعیت: چهاردهمین کامپوننت اصلی اضافه شد.

شامل:

- Snackbar component
- Neutral / Success / Error / Warning tones
- Bottom / Top positions
- Optional action
- Close button
- Auto-dismiss duration
- Multiline mode
- ARIA live regions
- Snackbar demo
- Snackbar flow example page
- Snackbar QA checklist

## Next recommended step

پیاده‌سازی Tooltip، چون برای توضیح کوتاه آیکن‌ها، اکشن‌ها و کنترل‌های فشرده ضروری است.


## v0.15 — Tooltip

وضعیت: پانزدهمین کامپوننت اصلی اضافه شد.

شامل:

- Tooltip component
- Plain / Rich variants
- Top / Bottom / Start / End placements
- Hover and focus triggers
- Escape close behavior
- ARIA describedby wiring
- Tooltip demo
- Tooltip actions example page
- Tooltip QA checklist

## Next recommended step

پیاده‌سازی Menu، چون برای اکشن‌های بیشتر، dropdown، overflow menu و TopAppBar بسیار مهم است.


## v0.16 — Menu

وضعیت: شانزدهمین کامپوننت اصلی اضافه شد.

شامل:

- Menu component
- Bottom-start / Bottom-end / Top-start / Top-end placements
- Leading icon
- Trailing text
- Disabled item
- Destructive item
- Dividers
- Outside click close
- Escape close
- Arrow key focus movement
- Menu demo
- Menu actions example page
- Menu QA checklist

## Next recommended step

پیاده‌سازی IconButton، چون الان در چند صفحه از button خام استفاده کردیم و باید آن را به یک کامپوننت رسمی تبدیل کنیم.


## v0.17 — IconButton

وضعیت: هفدهمین کامپوننت اصلی اضافه شد.

شامل:

- IconButton component
- Standard / Filled / Tonal / Outlined variants
- Small / Medium / Large sizes
- Selected / Disabled states
- Hover / Focus / Pressed states
- Accessible label requirement
- IconButton demo
- Icon actions example page
- IconButton QA checklist

## Next recommended step

پیاده‌سازی FAB، چون در فایل Figma وجود دارد و برای اکشن اصلی صفحه در موبایل و اپلیکیشن‌ها بسیار کاربردی است.


## v0.18 — FAB

وضعیت: هجدهمین کامپوننت اصلی اضافه شد.

شامل:

- FAB component
- Small / Medium / Large / Extended sizes
- Primary / Secondary / Tertiary / Surface variants
- Hover / Focus / Pressed / Disabled states
- Fixed placement helpers
- FAB demo
- FAB task example page
- FAB QA checklist

## Next recommended step

پیاده‌سازی Badge، چون در فایل Figma وجود دارد و برای NavigationBar، TopAppBar، IconButton و اعلان‌ها لازم است.


## v0.19 — Badge

وضعیت: نوزدهمین کامپوننت اصلی اضافه شد.

شامل:

- Badge component
- BadgeAnchor component
- Small / Large variants
- Error / Primary / Secondary tones
- max overflow support
- showZero support
- Badge demo
- Badge notifications example page
- Badge QA checklist

## Next recommended step

پیاده‌سازی Divider، چون در فایل Figma وجود دارد و برای List، Drawer، Menu، Dialog و Card sectionها لازم است.


## v0.20 — Divider

وضعیت: بیستمین کامپوننت اصلی اضافه شد.

شامل:

- Divider component
- Horizontal / Vertical orientations
- Full / Inset / Middle variants
- Default / Strong tones
- Decorative vs semantic separator behavior
- Divider demo
- Divider layout example page
- Divider QA checklist

## Next recommended step

پیاده‌سازی Progress، چون در فایل Figma وجود دارد و برای loading، فرم‌ها و عملیات async لازم است.


## v0.21 — Progress

وضعیت: بیست‌ویکمین کامپوننت اصلی اضافه شد.

شامل:

- LinearProgress
- CircularProgress
- Determinate / Indeterminate states
- Primary / Secondary / Error tones
- Small / Medium / Large circular sizes
- Progress demo
- Progress loading example page
- Progress QA checklist
- Governance docs

## Next recommended step

پیاده‌سازی Slider.


## v0.22 — Slider

وضعیت: بیست‌ودومین کامپوننت اصلی اضافه شد.

شامل:

- Slider component
- Primary / Secondary / Error tones
- Label / Supporting text / Value display
- valueFormatter support
- Native range input
- Slider demo
- Slider filter example page
- Slider QA checklist

## Next recommended step

پیاده‌سازی SearchBar.


## v0.23 — SearchBar

وضعیت: بیست‌وسومین کامپوننت اصلی اضافه شد.

شامل:

- SearchBar component
- SearchSuggestion / SearchHistory / SearchResults
- useSearch hook
- ProductSearchExample
- SearchBar QA checklist


## v0.24 — SegmentedButton

وضعیت: بیست‌وچهارمین کامپوننت اصلی اضافه شد.

شامل:

- SegmentedButtonGroup
- SegmentedButtonItem
- Single-select mode
- Multi-select mode
- Regular / Compact densities
- Icon + Label support
- SegmentedButton demo
- SegmentedFilterExample page
- SegmentedButton QA checklist

## Next recommended step

پیاده‌سازی Avatar.


## v0.25 — Avatar

وضعیت: بیست‌وپنجمین کامپوننت اصلی اضافه شد.

شامل:

- Avatar component
- Image / Initials / Icon fallback
- xsmall / small / medium / large / xlarge sizes
- circle / rounded / square shapes
- primary / secondary / tertiary / neutral tones
- online / busy / away / offline status
- Avatar demo
- AvatarProfileExample page
- Avatar QA checklist

## Next recommended step

پیاده‌سازی BottomSheet.


## v0.26 — BottomSheet

وضعیت: بیست‌وششمین کامپوننت اصلی اضافه شد.

شامل:

- BottomSheet component
- Modal / Standard variants
- Content / Half / Full heights
- Drag handle
- Title / Description / Content / Actions
- Scrim support
- BottomSheet demo
- BottomSheetFilterExample page
- BottomSheet QA checklist

## Next recommended step

پیاده‌سازی SideSheet.


## v0.27 — SideSheet

وضعیت: بیست‌وهفتمین کامپوننت اصلی اضافه شد.

شامل:

- SideSheet component
- Modal / Standard variants
- Start / End positions
- Compact / Medium / Expanded widths
- Title / Description / Content / Actions
- Scrim and close button support
- SideSheet demo
- SideSheetDashboardExample page
- SideSheet QA checklist

## Next recommended step

پیاده‌سازی DatePicker.


## v0.28 — DatePicker

وضعیت: بیست‌وهشتمین کامپوننت اصلی اضافه شد.

شامل:

- DatePicker component
- Gregorian month grid
- Previous / Next month navigation
- Selected date display
- Today / Selected / Disabled states
- Min / Max support
- DatePicker demo
- DatePickerFormExample page
- DatePicker QA checklist

## Next recommended step

پیاده‌سازی TimePicker.


## v0.29 — TimePicker

وضعیت: بیست‌ونهمین کامپوننت اصلی اضافه شد.

شامل:

- TimePicker component
- 24h mode
- 12h mode
- Hour / Minute selection
- minuteStep support
- TimePicker demo
- TimePickerScheduleExample page
- TimePicker QA checklist

## Next recommended step

پیاده‌سازی Carousel.


## v0.30 — Carousel

وضعیت: سی‌امین کامپوننت اصلی اضافه شد.

شامل:

- Carousel component
- Cards / Hero / Compact variants
- Horizontal scroll-snap viewport
- Previous / Next controls
- Active dot navigation
- Carousel demo
- CarouselShopExample page
- Carousel QA checklist

## Next recommended step

شروع فاز Integration Sprint A: refactor داخلی، Storybook scaffold، و آماده‌سازی visual testing.


## v0.31 — Integration Sprint A

وضعیت: اولین فاز یکپارچه‌سازی بعد از ۳۰ قدم انجام شد.

شامل:

- Icon scaffold
- Storybook scaffold
- Button story
- Icon story
- Visual testing scaffold
- Integration Sprint A docs
- Storybook guide
- Icon system plan
- Integration Sprint A QA checklist

## Next recommended step

تکمیل Storybook stories برای همه کامپوننت‌ها یا شروع Icon System refactor.


## v0.32 — Storybook Sprint Core Stories

وضعیت: Storyهای پایه برای چند کامپوننت اصلی اضافه شد.

شامل:

- TextField stories
- Card stories
- IconButton stories
- Dialog stories
- NavigationBar stories
- SearchBar stories
- DatePicker stories
- TimePicker stories
- Carousel stories
- Storybook coverage docs
- Storybook Sprint QA checklist

## Next recommended step

تکمیل Storybook برای باقی کامپوننت‌ها یا شروع Icon System refactor.


## v0.33 — Storybook Completion Sprint

وضعیت: Storyهای باقی‌مانده برای کامپوننت‌های اصلی اضافه شد.

شامل:

- Story برای بیشتر کامپوننت‌های ساخته‌شده
- آپدیت STORYBOOK_COVERAGE.md
- Storybook completion QA checklist

## Next recommended step

شروع Icon System refactor یا visual testing baseline.


## v0.34 — Private Project Setup

وضعیت: مسیر پروژه از open-source فرضی به private production design system اصلاح شد.

شامل:

- Private project plan
- Private usage guide
- Private release checklist
- Private security notes
- Private package notes
- .npmrc.example
- package.json private=true
- Private project QA checklist

## Next recommended step

آماده‌سازی package exports و build structure برای استفاده خصوصی.


## v0.35 — Production Build System

وضعیت: ساختار build برای private package آماده شد.

شامل:

- src/index.ts
- src/styles.css
- tsconfig.build.json
- vite.config.ts
- package exports
- peerDependencies
- build scripts
- BUILD_SYSTEM.md
- EXPORT_ARCHITECTURE.md
- Build system QA checklist

## Next recommended step

Export Architecture refinement و تست import خصوصی.


## v0.36 — Import Test + Export Refinement

وضعیت: ساختار import خصوصی و تست نمونه اضافه شد.

شامل:

- example-app
- hooks/index.ts
- utils/index.ts
- tokens/index.ts
- src/index.ts refinement
- package exports refinement
- IMPORT_TEST_GUIDE.md
- EXPORTS_CHECKLIST.md
- Import test QA checklist

## Next recommended step

اجرای build واقعی یا شروع Icon System SVG registry.


## v0.37 — Mega Landing Page

وضعیت: یک لندینگ‌پیج بسیار پرالمان برای تست ترکیب کامپوننت‌ها ساخته شد.

شامل:

- MegaLandingPage
- MegaLandingPage CSS
- Mega landing page docs
- Mega landing page QA checklist

## Next recommended step

اجرای visual QA روی این صفحه و شروع Pixel Perfect pipeline.
