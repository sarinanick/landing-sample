# Architecture

## هدف معماری

هدف معماری این پروژه ساخت یک Design System فارسی، RTL-first و قابل توسعه برای React/TypeScript است.

## لایه‌های اصلی

```txt
Figma Reference / Material Principles
        ↓
Design Tokens
        ↓
Theme Layer
        ↓
Primitive Components
        ↓
Composite Components
        ↓
Page Templates
        ↓
Testing + Documentation
```

## Primitive Components

- Button
- IconButton
- TextField
- Checkbox
- Radio
- Switch
- Badge
- Divider
- Progress

## Composite Components

- Card
- Dialog
- Menu
- Tabs
- Snackbar
- Tooltip
- NavigationBar
- NavigationDrawer
- TopAppBar
- List / ListItem

## Dependency Rules

- Primitiveها نباید به Compositeها وابسته باشند.
- Compositeها می‌توانند از Primitiveها استفاده کنند.
- Pageها می‌توانند از همه کامپوننت‌ها استفاده کنند.
- Tokens باید تنها منبع رنگ، spacing، radius و elevation باشند.

## Refactor Targets

```txt
TopAppBar → IconButton
NavigationBar → Badge
Menu → Divider
List → Divider
NavigationDrawer → Badge + Divider
Dialog actions → Button
Snackbar action → Button/TextButton pattern
```

## مسیر تست آینده

```txt
Storybook Story
    ↓
Playwright Screenshot
    ↓
Figma Baseline
    ↓
Visual Diff
```


## Selection Controls

SegmentedButton joins Checkbox, Radio, Chip and Tabs as part of the selection-control layer.

```txt
Selection Controls
  ├── Checkbox
  ├── Radio
  ├── Chip
  ├── Tabs
  └── SegmentedButton
```


## Identity Components

Avatar introduces the identity layer of the design system.

```txt
Identity
  ├── Avatar
  ├── Badge
  └── ListItem / Profile patterns
```


## Temporary Surfaces

BottomSheet adds a mobile-first temporary surface pattern.

```txt
Temporary Surfaces
  ├── Dialog
  ├── Menu
  ├── Snackbar
  ├── Tooltip
  └── BottomSheet
```


## Responsive Surfaces

SideSheet and BottomSheet form the responsive surface pair.

```txt
Mobile → BottomSheet
Tablet/Desktop → SideSheet
```


## Date and Time Layer

DatePicker starts the date/time input layer.

```txt
Date & Time
  ├── DatePicker
  └── TimePicker
```

Future requirement: Jalali/Persian calendar adapter.


## Time Input

TimePicker completes the first Date & Time pair with DatePicker.

```txt
Date & Time
  ├── DatePicker
  └── TimePicker
```


## Content Discovery Components

Carousel starts the content discovery layer.

```txt
Discovery
  ├── SearchBar
  ├── Carousel
  ├── Cards
  └── Chips
```


## Integration Sprint Layer

After v0.30, the project starts integration sprints.

```txt
Core Components
    ↓
Integration Sprints
    ↓
Storybook
    ↓
Visual Testing
    ↓
Pixel Perfect
```


## Private Architecture Direction

از v0.34 پروژه به عنوان یک design system خصوصی تعریف می‌شود.

```txt
Private Figma Reference
    ↓
Private Design System
    ↓
Private Storybook
    ↓
Private Package
    ↓
Personal Projects
```

این پروژه public package یا open-source library نیست.


## Build Architecture

از v0.35 پروژه برای build خصوصی آماده شد.

```txt
src/index.ts
    ↓
vite library build
    ↓
dist/index.js

tsconfig.build.json
    ↓
dist/types
```

CSS از مسیر `src/styles.css` به عنوان ورودی اصلی استایل استفاده می‌شود.
