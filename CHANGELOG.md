# Changelog

## [0.21.0] - 2026-06-25

### Added

- Progress component family.
- LinearProgress component.
- CircularProgress component.
- Determinate and indeterminate states.
- Primary, secondary and error tones.
- Progress demo.
- Progress loading example page.
- Progress QA checklist.
- Governance docs:
  - ARCHITECTURE.md
  - DESIGN_DECISIONS.md
  - COMPONENT_MATRIX.md
  - TODO_MASTER.md

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated implementation-status.md.
- Updated README.md.

### Known Issues

- Pixel-perfect validation against Figma is not done yet.
- Motion tokens are not centralized yet.
- Figma node mapping is still incomplete.

## [0.20.0] - 2026-06-25

### Added

- Divider component.
- Divider demo.
- Divider layout example page.
- Divider QA checklist.


## [0.22.0] - 2026-06-25

### Added

- Slider component.
- Slider demo.
- Slider filter example page.
- Slider QA checklist.
- Primary, secondary and error tones.
- Value formatter support.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated implementation-status.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.

### Known Issues

- Range slider is not implemented yet.
- Tick marks are not implemented yet.
- Pixel-perfect validation against Figma is not done yet.


## [0.23.0] - 2026-06-25

### Added

- SearchBar component family.
- SearchSuggestion, SearchHistory and SearchResults.
- useSearch hook.
- ProductSearchExample.
- SearchBar QA checklist.


## [0.24.0] - 2026-06-25

### Added

- SegmentedButton component family.
- SegmentedButtonGroup.
- SegmentedButtonItem.
- Single-select mode.
- Multi-select mode.
- Regular and compact densities.
- SegmentedButton demo.
- SegmentedFilterExample page.
- SegmentedButton QA checklist.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Pixel-perfect validation against Figma is not done yet.
- Keyboard arrow navigation is not implemented yet.
- Icons are still temporary text/emoji placeholders.


## [0.25.0] - 2026-06-25

### Added

- Avatar component.
- Image, initials and icon fallback modes.
- xsmall, small, medium, large and xlarge sizes.
- circle, rounded and square shapes.
- primary, secondary, tertiary and neutral tones.
- online, busy, away and offline status indicators.
- Avatar demo.
- AvatarProfileExample page.
- Avatar QA checklist.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Avatar status colors are currently hard-coded fallbacks and should become tokens.
- Pixel-perfect validation against Figma is not done yet.
- Image loading/error fallback handling is not implemented yet.


## [0.26.0] - 2026-06-25

### Added

- BottomSheet component.
- Modal and standard variants.
- Content, half and full heights.
- Drag handle.
- Title, description, content and actions.
- Scrim support.
- BottomSheet demo.
- BottomSheetFilterExample page.
- BottomSheet QA checklist.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Drag gesture is not implemented yet.
- Focus trap is not complete yet.
- Pixel-perfect validation against Figma is not done yet.


## [0.27.0] - 2026-06-25

### Added

- SideSheet component.
- Modal and standard variants.
- Start and end positions.
- Compact, medium and expanded widths.
- Title, description, content and actions.
- Scrim and close button support.
- SideSheet demo.
- SideSheetDashboardExample page.
- SideSheet QA checklist.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Focus trap is not complete yet.
- Responsive conversion between BottomSheet and SideSheet is not automated yet.
- Pixel-perfect validation against Figma is not done yet.


## [0.28.0] - 2026-06-25

### Added

- DatePicker component.
- Gregorian calendar month grid.
- Previous/next month navigation.
- Selected date display.
- Today and selected states.
- Min/max date support.
- DatePicker demo.
- DatePickerFormExample page.
- DatePicker QA checklist.

### Known Issues

- Jalali/Persian calendar adapter is not implemented yet.
- Range mode is not implemented yet.
- Keyboard navigation inside grid is not complete yet.
- Pixel-perfect validation against Figma is not done yet.


## [0.29.0] - 2026-06-25

### Added

- TimePicker component.
- 24-hour mode.
- 12-hour mode with AM/PM Persian labels.
- Hour and minute selection.
- minuteStep support.
- TimePicker demo.
- TimePickerScheduleExample page.
- TimePicker QA checklist.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Clock-face radial picker is not implemented yet.
- Keyboard shortcuts are not implemented yet.
- Pixel-perfect validation against Figma is not done yet.


## [0.30.0] - 2026-06-25

### Added

- Carousel component.
- Cards, hero and compact variants.
- Horizontal scroll-snap viewport.
- Previous/next controls.
- Active dot navigation.
- Carousel demo.
- CarouselShopExample page.
- Carousel QA checklist.

### Changed

- Updated component exports.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Drag-specific behavior is native scroll only.
- Autoplay is not implemented.
- Pixel-perfect validation against Figma is not done yet.


## [0.31.0] - 2026-06-25

### Added

- Integration Sprint A.
- Icon component scaffold.
- Storybook scaffold.
- Button Storybook story.
- Icon Storybook story.
- Visual testing scaffold.
- Integration Sprint A documentation.
- Storybook guide.
- Icon system plan.
- Integration Sprint A QA checklist.

### Changed

- Updated component exports.
- Updated package scripts for Storybook and visual testing.
- Updated WORKLOG.md.
- Updated COMPONENT_MATRIX.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Storybook dependencies are declared but not installed.
- Most components still need stories.
- Visual testing is scaffold-only and not fully configured.
- Icon system still uses temporary text/emoji rendering.


## [0.32.0] - 2026-06-25

### Added

- Storybook Sprint for core components.
- TextField stories.
- Card stories.
- IconButton stories.
- Dialog stories.
- NavigationBar stories.
- SearchBar stories.
- DatePicker stories.
- TimePicker stories.
- Carousel stories.
- Storybook coverage documentation.
- Storybook Sprint QA checklist.

### Changed

- Updated WORKLOG.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Many components still need stories.
- Stories are scaffold-level and not yet visual-baseline verified.
- Storybook dependencies still need installation in a real project environment.


## [0.33.0] - 2026-06-25

### Added

- Storybook Completion Sprint.
- Stories for remaining components:
  - Switch
  - Checkbox
  - Radio
  - Chip
  - Tabs
  - TopAppBar
  - NavigationDrawer
  - List
  - Snackbar
  - Tooltip
  - Menu
  - FAB
  - Badge
  - Divider
  - Progress
  - Slider
  - SegmentedButton
  - Avatar
  - BottomSheet
  - SideSheet
- Updated Storybook coverage documentation.
- Storybook completion QA checklist.

### Known Issues

- Stories need validation in a real Storybook runtime.
- Some stories may require prop tuning after TypeScript build.
- Pixel-perfect baseline is still not connected.


## [0.34.0] - 2026-06-25

### Added

- Private Project Setup.
- PRIVATE_PROJECT_PLAN.md.
- PRIVATE_USAGE_GUIDE.md.
- PRIVATE_RELEASE_CHECKLIST.md.
- PRIVATE_SECURITY_NOTES.md.
- PRIVATE_PACKAGE_NOTES.md.
- .npmrc.example.
- Private project QA checklist.

### Changed

- package.json is now explicitly private.
- Package name prepared as a private scoped package.
- Project direction clarified as private, personal and production-focused.
- Updated WORKLOG.md.
- Updated TODO_MASTER.md.
- Updated implementation-status.md.

### Known Issues

- Private registry is not configured yet.
- Build pipeline is still scaffold-level.
- Package exports are not finalized yet.


## [0.35.0] - 2026-06-25

### Added

- Production Build System.
- src/index.ts root export.
- src/styles.css style export.
- tsconfig.build.json.
- vite.config.ts library build config.
- build/README.md.
- BUILD_SYSTEM.md.
- EXPORT_ARCHITECTURE.md.
- Build system QA checklist.

### Changed

- package.json exports prepared for private package usage.
- Added main/module/types/style/files fields.
- Added peerDependencies for React and React DOM.
- Updated build scripts.

### Known Issues

- Build has not been executed in a real local environment.
- CSS output path may need adjustment after first real Vite build.
- Some stories and demos are excluded from type build but may need separate validation.


## [0.36.0] - 2026-06-25

### Added

- Import Test App.
- example-app with Vite + React.
- hooks export entrypoint.
- utils export entrypoint.
- tokens export entrypoint placeholder.
- IMPORT_TEST_GUIDE.md.
- EXPORTS_CHECKLIST.md.
- Import test QA checklist.

### Changed

- src/index.ts now exports components, hooks, utils and tokens.
- package exports expanded for hooks, utils and tokens.
- package version updated to 0.36.0.

### Known Issues

- Import test has not been executed in a real local environment.
- Token exports are placeholders and CSS variables remain the real token source.
- Dist paths must be verified after actual build.


## [0.37.0] - 2026-06-25

### Added

- Mega Landing Page example.
- MegaLandingPage.tsx.
- MegaLandingPage.css.
- Mega landing page documentation.
- Mega landing page QA checklist.

### Changed

- Added a real composition benchmark page for the private design system.

### Known Issues

- This page has not been visually tested yet.
- Some icons are still temporary emoji placeholders.
- Pixel-perfect comparison against Figma is not done yet.
