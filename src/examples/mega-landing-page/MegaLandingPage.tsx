import React, { useState } from "react";
import { Avatar } from "../../components/Avatar";
import { BadgeAnchor } from "../../components/Badge";
import { BottomSheet } from "../../components/BottomSheet";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";
import { Checkbox } from "../../components/Checkbox";
import { Chip } from "../../components/Chip";
import { DatePicker } from "../../components/DatePicker";
import { Divider } from "../../components/Divider";
import { FAB } from "../../components/FAB";
import { IconButton } from "../../components/IconButton";
import { LinearProgress, CircularProgress } from "../../components/Progress";
import { List, ListItem } from "../../components/List";
import { Menu } from "../../components/Menu";
import { NavigationBar } from "../../components/NavigationBar";
import { SearchBar } from "../../components/SearchBar";
import { SegmentedButtonGroup, SegmentedButtonItem } from "../../components/SegmentedButton";
import { SideSheet } from "../../components/SideSheet";
import { Slider } from "../../components/Slider";
import { Snackbar } from "../../components/Snackbar";
import { Switch } from "../../components/Switch";
import { Tabs, Tab, TabPanel } from "../../components/Tabs";
import { TextField } from "../../components/TextField";
import { TimePicker } from "../../components/TimePicker";
import { Tooltip } from "../../components/Tooltip";
import { TopAppBar } from "../../components/TopAppBar";
import "../../styles/base.css";
import "./MegaLandingPage.css";

const heroItems = [
  { value: "hero-1", title: "طراحی فارسی، سریع و یکپارچه", subtitle: "کامپوننت‌های آماده برای ساخت محصول‌های واقعی فارسی", media: "🚀", action: <Button variant="filled">شروع ساخت</Button> },
  { value: "hero-2", title: "RTL از پایه", subtitle: "همه چیز برای زبان فارسی و راست‌به‌چپ طراحی شده است", media: "↔️", action: <Button variant="filled">دیدن سیستم</Button> },
  { value: "hero-3", title: "آماده برای پروژه شخصی", subtitle: "خصوصی، قابل توسعه و هماهنگ با فایل فیگما", media: "🔒", action: <Button variant="filled">بررسی مسیر</Button> },
];

const featureItems = [
  { value: "f1", title: "کامپوننت‌های اصلی", subtitle: "Button، Card، Dialog، Menu، Search و بیشتر", media: "🧩" },
  { value: "f2", title: "مستندات داخلی", subtitle: "WORKLOG، QA، Storybook و معماری پروژه", media: "📚" },
  { value: "f3", title: "تست تصویری آینده", subtitle: "آماده برای Playwright و Pixel Perfect", media: "🖼️" },
  { value: "f4", title: "استفاده خصوصی", subtitle: "مناسب پروژه‌های خودت، بدون انتشار عمومی", media: "🛡️" },
];

export function MegaLandingPage() {
  const [nav, setNav] = useState("home");
  const [view, setView] = useState<string | string[]>("overview");
  const [filters, setFilters] = useState<string | string[]>(["rtl", "private"]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [snackbar, setSnackbar] = useState("");

  return (
    <main dir="rtl" className="mega-landing">
      <TopAppBar
        variant="small"
        title="Persian Material System"
        navigationIcon="⌂"
        actions={[
          { icon: "🔎", label: "جستجو" },
          { icon: "🔔", label: "اعلان‌ها" },
          { icon: "⋮", label: "بیشتر" },
        ]}
        elevated
      />

      <section className="mega-hero">
        <div className="mega-hero__content">
          <div className="mega-kicker">
            <Chip variant="assist">نسخه خصوصی</Chip>
            <Chip variant="filter" selected>RTL-first</Chip>
            <Chip variant="suggestion">Material-inspired</Chip>
          </div>

          <h1>یک لندینگ‌پیج کامل، ساخته‌شده فقط با دیزاین سیستم خودمان</h1>
          <p>
            این صفحه برای فشار آوردن به سیستم طراحی ساخته شده: ناوبری، جستجو، کارت‌ها،
            فرم‌ها، فیلترها، جدول محتوایی، BottomSheet، SideSheet، Carousel، Pickerها،
            Progress، Avatar، Badge و ده‌ها الگوی UI در یک صفحه فارسی.
          </p>

          <div className="mega-hero__actions">
            <Button variant="filled" onClick={() => setSnackbar("شروع پروژه آماده است.")}>شروع پروژه</Button>
            <Button variant="outlined" onClick={() => setSideOpen(true)}>مشاهده جزئیات</Button>
            <Tooltip content="این CTA با کامپوننت Tooltip تست می‌شود.">
              <IconButton label="راهنما" icon="؟" variant="tonal" />
            </Tooltip>
          </div>

          <SearchBar
            placeholder="جستجو در کامپوننت‌ها، صفحات و مستندات"
            recentSearches={["Button", "RTL", "Storybook"]}
            suggestions={[
              { value: "button", label: "Button", supportingText: "کامپوننت پایه", leadingIcon: "🔘" },
              { value: "search", label: "SearchBar", supportingText: "جستجوی فارسی", leadingIcon: "🔎" },
              { value: "picker", label: "DatePicker و TimePicker", supportingText: "فرم پیشرفته", leadingIcon: "📅" },
            ]}
          />
        </div>

        <Card
          variant="elevated"
          title="وضعیت سیستم"
          subtitle="نمای زنده از بلوغ پروژه"
          actions={
            <>
              <BadgeAnchor badgeContent={37}>
                <IconButton label="قدم‌ها" icon="🧱" />
              </BadgeAnchor>
              <Menu
                trigger={<IconButton label="منو" icon="⋮" />}
                items={[
                  { value: "docs", label: "مستندات", leadingIcon: "📚" },
                  { value: "qa", label: "چک‌لیست QA", leadingIcon: "✅" },
                  { value: "private", label: "Private Setup", leadingIcon: "🔒" },
                ]}
              />
            </>
          }
        >
          <div className="mega-status">
            <CircularProgress value={72} label="آمادگی" />
            <div>
              <LinearProgress value={85} label="پوشش کامپوننت‌ها" />
              <LinearProgress value={55} label="آمادگی Production" tone="secondary" />
              <LinearProgress value={20} label="Pixel Perfect" tone="error" />
            </div>
          </div>
        </Card>
      </section>

      <section className="mega-section">
        <div className="mega-section__header">
          <div>
            <h2>ویترین امکانات</h2>
            <p>Carousel، Card، Button و Chip در کنار هم برای معرفی محصول.</p>
          </div>
          <SegmentedButtonGroup value={view} onValueChange={setView} density="compact">
            <SegmentedButtonItem value="overview" icon="▦">نمای کلی</SegmentedButtonItem>
            <SegmentedButtonItem value="docs" icon="📚">مستندات</SegmentedButtonItem>
            <SegmentedButtonItem value="qa" icon="✅">QA</SegmentedButtonItem>
          </SegmentedButtonGroup>
        </div>
        <Carousel items={heroItems} variant="hero" ariaLabel="بنرهای اصلی لندینگ" />
        <Carousel items={featureItems} variant="cards" ariaLabel="ویژگی‌ها" />
      </section>

      <section className="mega-grid">
        <Card variant="filled" title="فیلترهای سریع" subtitle="SegmentedButton، Checkbox، Switch و Slider">
          <div className="mega-stack">
            <SegmentedButtonGroup value={filters} onValueChange={setFilters} multiple density="compact">
              <SegmentedButtonItem value="rtl">RTL</SegmentedButtonItem>
              <SegmentedButtonItem value="private">Private</SegmentedButtonItem>
              <SegmentedButtonItem value="figma">Figma</SegmentedButtonItem>
            </SegmentedButtonGroup>
            <Slider label="درجه شباهت به فیگما" defaultValue={72} valueFormatter={(v) => `${v}%`} />
            <Checkbox label="فقط کامپوننت‌های آماده Production" />
            <Switch label="حالت مستندسازی داخلی" defaultChecked />
          </div>
        </Card>

        <Card variant="outlined" title="فرم دریافت دسترسی" subtitle="TextField، DatePicker و TimePicker">
          <div className="mega-stack">
            <TextField fullWidth variant="outlined" label="نام پروژه" placeholder="مثلاً داشبورد فروش" />
            <TextField fullWidth variant="filled" label="توضیح کوتاه" placeholder="هدف صفحه را بنویس" />
            <div className="mega-picker-row">
              <DatePicker defaultValue="2026-06-25" supportingText="تاریخ شروع" />
              <TimePicker defaultValue="10:30" supportingText="زمان جلسه" />
            </div>
            <Button variant="filled" onClick={() => setSnackbar("فرم نمونه ثبت شد.")}>ثبت درخواست</Button>
          </div>
        </Card>
      </section>

      <section className="mega-section">
        <Tabs defaultValue="components">
          <Tab value="components">کامپوننت‌ها</Tab>
          <Tab value="workflow">فرآیند</Tab>
          <Tab value="team">تیم فرضی</Tab>

          <TabPanel value="components">
            <Card variant="filled" title="لیست کامپوننت‌های کلیدی">
              <List density="two-line" dividers>
                <ListItem headline="SearchBar" supportingText="جستجوی فارسی با پیشنهادها و تاریخچه" leading="🔎" trailing="آماده" interactive />
                <ListItem headline="BottomSheet و SideSheet" supportingText="سطح‌های موقت موبایل و دسکتاپ" leading="▤" trailing="آماده" interactive />
                <ListItem headline="DatePicker و TimePicker" supportingText="انتخاب تاریخ و زمان" leading="📅" trailing="نیازمند Jalali" interactive />
              </List>
            </Card>
          </TabPanel>

          <TabPanel value="workflow">
            <Card variant="outlined" title="نقشه کیفیت">
              <List density="two-line" dividers>
                <ListItem headline="Storybook" supportingText="مستندسازی و تست دستی" leading="📘" trailing="در حال تکمیل" />
                <ListItem headline="Visual Testing" supportingText="مقایسه تصویری با Figma" leading="🖼️" trailing="بعدی" />
                <ListItem headline="Private Package" supportingText="استفاده در پروژه‌های شخصی" leading="🔒" trailing="آماده‌سازی" />
              </List>
            </Card>
          </TabPanel>

          <TabPanel value="team">
            <Card variant="filled" title="اعضای نمونه">
              <List density="two-line" dividers>
                <ListItem headline="علی تابعی" supportingText="مالک پروژه" leading={<Avatar name="علی تابعی" status="online" />} trailing="Owner" />
                <ListItem headline="طراح محصول" supportingText="بررسی Figma" leading={<Avatar name="طراح محصول" status="away" tone="secondary" />} trailing="Design" />
                <ListItem headline="توسعه‌دهنده" supportingText="Build و تست" leading={<Avatar name="توسعه‌دهنده" status="busy" tone="tertiary" />} trailing="Dev" />
              </List>
            </Card>
          </TabPanel>
        </Tabs>
      </section>

      <section className="mega-section mega-pricing">
        <Card variant="elevated" title="نسخه سریع" subtitle="برای کپی مستقیم در پروژه">
          <p>مناسب تست سریع صفحه‌های فارسی و prototype.</p>
          <Button variant="outlined">انتخاب</Button>
        </Card>
        <Card variant="filled" title="نسخه خصوصی" subtitle="پیشنهاد اصلی">
          <p>Private package، Storybook داخلی و تست تصویری.</p>
          <Button variant="filled">شروع نسخه خصوصی</Button>
        </Card>
        <Card variant="outlined" title="نسخه Pixel Perfect" subtitle="مرحله پیشرفته">
          <p>مقایسه مستقیم با Figma و اصلاح visual diff.</p>
          <Button variant="outlined">برنامه‌ریزی</Button>
        </Card>
      </section>

      <section className="mega-section">
        <Card
          variant="filled"
          title="اکشن‌های نهایی"
          subtitle="BottomSheet، SideSheet، Snackbar، FAB و NavigationBar"
          actions={
            <>
              <Button variant="filled" onClick={() => setSheetOpen(true)}>باز کردن BottomSheet</Button>
              <Button variant="outlined" onClick={() => setSideOpen(true)}>باز کردن SideSheet</Button>
            </>
          }
        >
          <p>
            این بخش نشان می‌دهد صفحه می‌تواند هم برای موبایل و هم دسکتاپ الگوهای تعاملی داشته باشد.
          </p>
          <Divider variant="middle" />
          <div className="mega-avatars">
            <Avatar name="سارا محمدی" status="online" />
            <Avatar name="رضا کریمی" status="busy" tone="secondary" />
            <Avatar name="مینا احمدی" status="offline" tone="neutral" />
          </div>
        </Card>
      </section>

      <BottomSheet
        open={sheetOpen}
        title="تنظیمات سریع"
        description="نمونه BottomSheet در لندینگ‌پیج"
        height="half"
        onClose={() => setSheetOpen(false)}
        actions={[
          { label: "بستن", onClick: () => setSheetOpen(false) },
          { label: "اعمال", onClick: () => { setSheetOpen(false); setSnackbar("تنظیمات اعمال شد."); } },
        ]}
      >
        <div className="mega-stack">
          <Checkbox label="فعال‌سازی حالت حرفه‌ای" defaultChecked />
          <Checkbox label="نمایش فقط کامپوننت‌های تاییدشده" />
          <Slider label="تراکم صفحه" defaultValue={60} valueFormatter={(v) => `${v}%`} />
        </div>
      </BottomSheet>

      <SideSheet
        open={sideOpen}
        title="جزئیات سیستم"
        description="نمایش SideSheet برای دسکتاپ"
        onClose={() => setSideOpen(false)}
        actions={[{ label: "بستن", onClick: () => setSideOpen(false) }]}
      >
        <List density="two-line" dividers>
          <ListItem headline="تعداد قدم‌ها" supportingText="۳۷ قدم تا این نسخه" leading="🧱" trailing="v0.37" />
          <ListItem headline="نوع پروژه" supportingText="Private Design System" leading="🔒" trailing="خصوصی" />
          <ListItem headline="مرحله بعد" supportingText="Pixel-perfect pipeline" leading="🖼️" trailing="بعدی" />
        </List>
      </SideSheet>

      <FAB
        icon="↑"
        ariaLabel="بازگشت به بالا"
        className="mega-fab"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <NavigationBar
        className="pm-navigation-bar--fixed"
        value={nav}
        onValueChange={setNav}
        items={[
          { value: "home", label: "خانه", icon: "⌂" },
          { value: "components", label: "اجزا", icon: "▦", badge: 30 },
          { value: "docs", label: "مستندات", icon: "📚" },
          { value: "profile", label: "پروفایل", icon: "👤" },
        ]}
      />

      <Snackbar open={Boolean(snackbar)} message={snackbar} onClose={() => setSnackbar("")} />
    </main>
  );
}
