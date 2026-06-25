# Export Architecture

## Public Internal API

برای پروژه خصوصی، API اصلی همچنان باید تمیز و پایدار باشد.

## مسیرهای export

```txt
.
./styles.css
./components
```

## پیشنهاد استفاده

```tsx
import { Button, TextField, Card } from "@ali/persian-material-system";
```

## مسیرهای آینده

در نسخه‌های بعدی می‌توان exportهای زیر را اضافه کرد:

```txt
./hooks
./tokens
./icons
./utils
```

## قانون

هیچ فایل internal نباید بدون دلیل مستقیم export شود.
