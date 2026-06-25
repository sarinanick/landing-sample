# Import Test Guide

## هدف

این راهنما نشان می‌دهد private package در یک پروژه جداگانه قابل import است یا نه.

## مسیر تست

```txt
example-app/
```

## اجرا

در ریشه پروژه:

```bash
npm install
npm run build
```

سپس:

```bash
cd example-app
npm install
npm run dev
```

## چیزی که باید دیده شود

صفحه‌ای فارسی شامل:

- SearchBar
- Card
- Button
- Avatar
- TextField

## هدف فنی

این import باید کار کند:

```tsx
import { Button, Card, TextField } from "@ali/persian-material-system";
import "@ali/persian-material-system/styles.css";
```

## اگر خطا داد

موارد زیر بررسی شود:

- package exports
- dist/style.css path
- type declarations
- peer dependencies
- vite build output
