# Persian Material Design System

این پروژه یک اسکلت اولیه برای پیاده‌سازی دقیق Material Design فارسی بر اساس فایل Figma است.

## هدف

- RTL-first
- استفاده از Design Tokens
- ممنوعیت رنگ‌های hard-coded
- کامپوننت‌محور بودن
- سازگاری با React / Next.js
- آماده برای توسعه با AI Agent یا برنامه‌نویس انسانی

## شروع

```bash
npm install
npm run dev
```

## ساختار

```txt
src/
  styles/
    tokens/
    base.css
    rtl.css
  components/
    Button/
  rules/
  examples/
  qa/
```


## Version 0.2

اضافه شد:

- TextField component
- Filled / Outlined variants
- Error / Disabled / Focus / Hover states
- Supporting text
- Leading / Trailing icon slots
- Login page updated with TextField
- Implementation status document
- TextField QA checklist


## Version 0.3

اضافه شد:

- Card component
- Filled / Outlined / Elevated variants
- Enabled / Hovered / Focused / Pressed / Dragged states
- Card demo
- Dashboard example
- Card QA checklist
- WORKLOG.md برای گزارش کار و دستور کار


## Version 0.4

اضافه شد:

- Switch component
- Checked / Unchecked
- Enabled / Disabled
- Hover / Focus / Pressed
- Label and supporting text
- Settings example
- Switch QA checklist


## Version 0.5

اضافه شد:

- Checkbox component
- Checked / Unchecked / Indeterminate
- Enabled / Disabled
- Error / Hover / Focus / Pressed
- Label and supporting text
- Checkbox demo
- Filter example
- Checkbox QA checklist


## Version 0.6

اضافه شد:

- Radio component
- RadioGroup component
- Selected / Unselected
- Enabled / Disabled
- Error / Hover / Focus / Pressed
- Label and supporting text
- Radio demo
- Profile form example
- Radio QA checklist


## Version 0.7

اضافه شد:

- Chip component
- Assist / Filter / Input / Suggestion variants
- Selected / Disabled
- Hover / Focus / Pressed
- Leading icon
- Remove action for input chip
- Chip demo
- Search example
- Chip QA checklist


## Version 0.8

اضافه شد:

- Tabs component
- Tab component
- TabPanel component
- Primary / Secondary variants
- Active / Inactive / Disabled
- Hover / Focus / Pressed
- Optional icons
- Tabs demo
- Tabbed profile example
- Tabs QA checklist


## Version 0.9

اضافه شد:

- TopAppBar component
- Small / Center / Medium / Large variants
- Navigation icon slot
- Actions slot
- Subtitle support
- Elevated/scrolled state
- Top App Bar demo
- App shell example
- Top App Bar QA checklist


## Version 0.10

اضافه شد:

- NavigationBar component
- Active / Inactive states
- Disabled state
- Hover / Focus / Pressed
- Icon + label support
- Badge support
- Fixed bottom helper
- Navigation Bar demo
- Mobile shell example
- Navigation Bar QA checklist


## Version 0.11

اضافه شد:

- NavigationDrawer component
- Standard / Modal variants
- Sections
- Active / Inactive states
- Disabled state
- Hover / Focus / Pressed
- Icon + label support
- Badge support
- Navigation Drawer demo
- Desktop shell example
- Navigation Drawer QA checklist


## Version 0.12

اضافه شد:

- List component
- ListItem component
- One-line / Two-line / Three-line densities
- Leading / Trailing slots
- Overline / Headline / Supporting text
- Selected / Disabled
- Hover / Focus / Pressed
- Dividers
- List demo
- Messages example
- List QA checklist


## Version 0.13

اضافه شد:

- Dialog component
- Small / Medium / Large sizes
- Icon / Title / Supporting text / Content / Actions
- Modal scrim
- Escape close behavior
- Dialog demo
- Dialog flow example
- Dialog QA checklist


## Version 0.14

اضافه شد:

- Snackbar component
- Neutral / Success / Error / Warning tones
- Bottom / Top positions
- Optional action
- Close button
- Auto-dismiss duration
- Multiline mode
- Snackbar demo
- Snackbar flow example
- Snackbar QA checklist


## Version 0.15

اضافه شد:

- Tooltip component
- Plain / Rich variants
- Top / Bottom / Start / End placements
- Hover and focus triggers
- Escape close behavior
- Tooltip demo
- Tooltip actions example
- Tooltip QA checklist


## Version 0.16

اضافه شد:

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
- Menu actions example
- Menu QA checklist


## Version 0.17

اضافه شد:

- IconButton component
- Standard / Filled / Tonal / Outlined variants
- Small / Medium / Large sizes
- Selected / Disabled states
- Hover / Focus / Pressed
- Accessible label requirement
- IconButton demo
- Icon actions example
- IconButton QA checklist


## Version 0.18

اضافه شد:

- FAB component
- Small / Medium / Large / Extended sizes
- Primary / Secondary / Tertiary / Surface variants
- Hover / Focus / Pressed / Disabled states
- Fixed placement helpers
- FAB demo
- FAB task example
- FAB QA checklist


## Version 0.19

اضافه شد:

- Badge component
- BadgeAnchor component
- Small / Large variants
- Error / Primary / Secondary tones
- max overflow support
- showZero support
- Badge demo
- Badge notifications example
- Badge QA checklist


## Version 0.20

اضافه شد:

- Divider component
- Horizontal / Vertical orientations
- Full / Inset / Middle variants
- Default / Strong tones
- Decorative vs semantic separator behavior
- Divider demo
- Divider layout example
- Divider QA checklist


## Version 0.21

اضافه شد:

- LinearProgress
- CircularProgress
- Determinate / Indeterminate
- Primary / Secondary / Error tones
- Progress demo
- Progress loading example
- Governance docs


## Version 0.22

اضافه شد:

- Slider component
- Slider demo
- Slider filter example
- Slider QA checklist
- valueFormatter support


## Version 0.23

اضافه شد:

- SearchBar component family
- useSearch hook
- ProductSearchExample


## Version 0.24

اضافه شد:

- SegmentedButtonGroup
- SegmentedButtonItem
- Single / Multi select
- Regular / Compact density
- SegmentedButton demo
- SegmentedFilterExample


## Version 0.25

اضافه شد:

- Avatar component
- Image / Initials / Icon fallback
- Sizes and shapes
- Status indicators
- Avatar demo
- AvatarProfileExample


## Version 0.26

اضافه شد:

- BottomSheet component
- Modal / Standard variants
- Content / Half / Full heights
- BottomSheet demo
- BottomSheetFilterExample


## Version 0.27

اضافه شد:

- SideSheet component
- Modal / Standard variants
- Start / End positions
- Compact / Medium / Expanded widths
- SideSheet demo
- SideSheetDashboardExample


## Version 0.28

اضافه شد:

- DatePicker component
- Gregorian month grid
- Previous / Next navigation
- DatePicker demo
- DatePickerFormExample


## Version 0.29

اضافه شد:

- TimePicker component
- 24h / 12h modes
- Hour / Minute selection
- TimePicker demo
- TimePickerScheduleExample


## Version 0.30

اضافه شد:

- Carousel component
- Cards / Hero / Compact variants
- Controls and dots
- Carousel demo
- CarouselShopExample


## Version 0.31

اضافه شد:

- Integration Sprint A
- Icon component scaffold
- Storybook scaffold
- Button and Icon stories
- Visual testing scaffold
- Integration docs


## Version 0.32

اضافه شد:

- Storybook stories برای چند کامپوننت اصلی
- Storybook coverage documentation
- Storybook Sprint QA checklist


## Version 0.33

اضافه شد:

- Storybook stories برای کامپوننت‌های باقی‌مانده
- Storybook coverage update
- Storybook completion QA checklist


## Version 0.34

تغییر مسیر پروژه:

- پروژه خصوصی است، نه open-source.
- آماده‌سازی private package notes
- اضافه شدن private project documentation
- package.json با private=true


## Version 0.35

اضافه شد:

- Production Build System
- Root exports
- CSS export
- Vite library config
- Type declaration build config
- Private package exports


## Version 0.36

اضافه شد:

- example-app برای تست import
- hooks/utils/tokens exports
- Import test documentation
- Export checklist


## Version 0.37

اضافه شد:

- Mega Landing Page
- صفحه فارسی پرالمان برای تست واقعی Design System
- Mega landing page documentation
- Mega landing page QA checklist
