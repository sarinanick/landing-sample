# Build System

## هدف قدم 35

در این قدم پروژه برای استفاده واقعی به عنوان یک package خصوصی آماده‌تر شد.

## فایل‌های اضافه‌شده

```txt
src/index.ts
src/styles.css
tsconfig.build.json
vite.config.ts
build/README.md
```

## Export اصلی

```ts
export * from "./components";
export * from "./hooks/useSearch";
```

## CSS Export

```ts
import "@ali/persian-material-system/styles.css";
```

## package.json

در این نسخه package.json برای حالت private package آماده‌تر شد:

- private=true
- main
- module
- types
- exports
- files
- build scripts
- peerDependencies

## هدف نهایی

```tsx
import { Button, Card, TextField } from "@ali/persian-material-system";
import "@ali/persian-material-system/styles.css";
```
