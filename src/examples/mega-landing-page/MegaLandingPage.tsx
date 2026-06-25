import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, Bell, MoreVertical, ArrowUp, Home, LayoutGrid, BookOpen, User, ChevronLeft } from "lucide-react";
import "./MegaLandingPage.css";

const heroItems = [
  { value: "hero-1", title: "طراحی فارسی، سریع و یکپارچه", subtitle: "کامپوننت‌های آماده برای ساخت محصول‌های واقعی فارسی", emoji: "🚀" },
  { value: "hero-2", title: "RTL از پایه", subtitle: "همه چیز برای زبان فارسی و راست‌به‌چپ طراحی شده است", emoji: "↔️" },
  { value: "hero-3", title: "آماده برای پروژه شخصی", subtitle: "خصوصی، قابل توسعه و هماهنگ با فایل فیگما", emoji: "🔒" },
];

const featureItems = [
  { value: "f1", title: "کامپوننت‌های اصلی", subtitle: "Button، Card، Dialog، Menu، Search و بیشتر", emoji: "🧩" },
  { value: "f2", title: "مستندات داخلی", subtitle: "WORKLOG، QA، Storybook و معماری پروژه", emoji: "📚" },
  { value: "f3", title: "تست تصویری آینده", subtitle: "آماده برای Playwright و Pixel Perfect", emoji: "🖼️" },
  { value: "f4", title: "استفاده خصوصی", subtitle: "مناسب پروژه‌های خودت، بدون انتشار عمومی", emoji: "🛡️" },
];

const componentList = [
  { name: "SearchBar", desc: "جستجوی فارسی با پیشنهادها و تاریخچه", icon: "🔎", status: "آماده" },
  { name: "BottomSheet و SideSheet", desc: "سطح‌های موقت موبایل و دسکتاپ", icon: "▤", status: "آماده" },
  { name: "DatePicker و TimePicker", desc: "انتخاب تاریخ و زمان", icon: "📅", status: "نیازمند Jalali" },
];

const workflowList = [
  { name: "Storybook", desc: "مستندسازی و تست دستی", icon: "📘", status: "در حال تکمیل" },
  { name: "Visual Testing", desc: "مقایسه تصویری با Figma", icon: "🖼️", status: "بعدی" },
  { name: "Private Package", desc: "استفاده در پروژه‌های شخصی", icon: "🔒", status: "آماده‌سازی" },
];

const teamList = [
  { name: "علی تابعی", desc: "مالک پروژه", initials: "ع", status: "Owner" },
  { name: "طراح محصول", desc: "بررسی Figma", initials: "ط", status: "Design" },
  { name: "توسعه‌دهنده", desc: "Build و تست", initials: "ت", status: "Dev" },
];

export function MegaLandingPage() {
  const [nav, setNav] = useState("home");
  const [view, setView] = useState("overview");
  const [filters, setFilters] = useState<string[]>(["rtl", "private"]);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [snackbar, setSnackbar] = useState("");
  const [sliderValue, setSliderValue] = useState([72]);
  const [densitySlider, setDensitySlider] = useState([60]);

  const toggleFilter = (value: string) => {
    setFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  return (
    <TooltipProvider>
      <main dir="rtl" className="min-h-screen bg-background text-foreground font-body pb-24">
        {/* Accent bar */}
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent z-50 pointer-events-none" />

        {/* Top Bar */}
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <span className="text-lg font-display font-bold tracking-tight">Persian Material System</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 items-center">
          <div className="space-y-7">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">نسخه خصوصی</Badge>
              <Badge variant="default">RTL-first</Badge>
              <Badge variant="outline">Material-inspired</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-display font-bold leading-[1.05] tracking-tight">
              یک لندینگ‌پیج کامل، ساخته‌شده فقط با <span className="text-primary">دیزاین سیستم</span> خودمان
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              این صفحه برای فشار آوردن به سیستم طراحی ساخته شده: ناوبری، جستجو، کارت‌ها،
              فرم‌ها، فیلترها، جدول محتوایی، BottomSheet، SideSheet، Carousel، Pickerها،
              Progress، Avatar، Badge و ده‌ها الگوی UI در یک صفحه فارسی.
            </p>

            <div className="flex gap-3 flex-wrap items-center">
              <Button onClick={() => setSnackbar("شروع پروژه آماده است.")}>شروع پروژه</Button>
              <Button variant="outline" onClick={() => setSideOpen(true)}>مشاهده جزئیات</Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">؟</Button>
                </TooltipTrigger>
                <TooltipContent>این CTA با کامپوننت Tooltip تست می‌شود.</TooltipContent>
              </Tooltip>
            </div>

            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="جستجو در کامپوننت‌ها، صفحات و مستندات"
                className="pl-4 pr-10 h-12 rounded-full bg-[#18181b] border-[#27272a]"
              />
            </div>
          </div>

          {/* Status Card */}
          <Card className="bg-[#0f0f0f]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">وضعیت سیستم</CardTitle>
                  <CardDescription>نمای زنده از بلوغ پروژه</CardDescription>
                </div>
                <Badge variant="secondary">37 قدم</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 -rotate-90">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#27272a" strokeWidth="4" />
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#c8ff00" strokeWidth="4" strokeDasharray="176" strokeDashoffset="49" strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary">72%</span>
                </div>
                <span className="text-sm text-muted-foreground">آمادگی</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>پوشش کامپوننت‌ها</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>آمادگی Production</span>
                    <span className="text-muted-foreground">55%</span>
                  </div>
                  <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground rounded-full" style={{ width: "55%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Pixel Perfect</span>
                    <span className="text-destructive">20%</span>
                  </div>
                  <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-destructive rounded-full" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

        {/* Showcase Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <span className="text-xs font-display font-semibold tracking-[2px] text-primary uppercase">01</span>
          <div className="flex justify-between items-end flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold tracking-tight">ویترین امکانات</h2>
              <p className="text-muted-foreground mt-1">Carousel، Card، Button و Chip در کنار هم برای معرفی محصول.</p>
            </div>
            <div className="flex bg-[#18181b] rounded-lg p-1 gap-1">
              {["overview", "docs", "qa"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    view === v ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {v === "overview" ? "نمای کلی" : v === "docs" ? "مستندات" : "QA"}
                </button>
              ))}
            </div>
          </div>

          {/* Hero carousel items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {heroItems.map((item) => (
              <Card key={item.value} className="bg-[#0f0f0f] group">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.subtitle}</p>
                  <Button size="sm">مشاهده</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featureItems.map((item) => (
              <Card key={item.value} className="bg-[#0f0f0f]">
                <CardContent className="p-5">
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <h4 className="font-display font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

        {/* Filters & Forms Grid */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6">
          <Card className="bg-[#0f0f0f]">
            <CardHeader>
              <CardTitle className="text-lg">فیلترهای سریع</CardTitle>
              <CardDescription>SegmentedButton، Checkbox، Switch و Slider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex bg-[#18181b] rounded-lg p-1 gap-1">
                {["rtl", "private", "figma"].map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleFilter(f)}
                    className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      filters.includes(f) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>درجه شباهت به فیگما</span>
                  <span className="text-primary">{sliderValue[0]}%</span>
                </div>
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="prod" />
                <label htmlFor="prod" className="text-sm cursor-pointer">فقط کامپوننت‌های آماده Production</label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm">حالت مستندسازی داخلی</label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0f0f0f]">
            <CardHeader>
              <CardTitle className="text-lg">فرم دریافت دسترسی</CardTitle>
              <CardDescription>TextField، DatePicker و TimePicker</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">نام پروژه</label>
                <Input placeholder="مثلاً داشبورد فروش" className="bg-[#18181b] border-[#27272a]" />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">توضیح کوتاه</label>
                <Input placeholder="هدف صفحه را بنویس" className="bg-[#18181b] border-[#27272a]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">تاریخ شروع</label>
                  <Input type="date" defaultValue="2026-06-25" className="bg-[#18181b] border-[#27272a]" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">زمان جلسه</label>
                  <Input type="time" defaultValue="10:30" className="bg-[#18181b] border-[#27272a]" />
                </div>
              </div>
              <Button className="w-full" onClick={() => setSnackbar("فرم نمونه ثبت شد.")}>ثبت درخواست</Button>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

        {/* Tabs Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <span className="text-xs font-display font-semibold tracking-[2px] text-primary uppercase">02</span>
          <Tabs defaultValue="components">
            <TabsList>
              <TabsTrigger value="components">کامپوننت‌ها</TabsTrigger>
              <TabsTrigger value="workflow">فرآیند</TabsTrigger>
              <TabsTrigger value="team">تیم فرضی</TabsTrigger>
            </TabsList>

            <TabsContent value="components">
              <Card className="bg-[#0f0f0f]">
                <CardHeader>
                  <CardTitle className="text-lg">لیست کامپوننت‌های کلیدی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {componentList.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <div>
                              <div className="text-sm font-medium">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.desc}</div>
                            </div>
                          </div>
                          <Badge variant={item.status === "آماده" ? "default" : "secondary"} className="text-xs">
                            {item.status}
                          </Badge>
                        </div>
                        {i < componentList.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workflow">
              <Card className="bg-[#0f0f0f]">
                <CardHeader>
                  <CardTitle className="text-lg">نقشه کیفیت</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {workflowList.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <div>
                              <div className="text-sm font-medium">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.desc}</div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">{item.status}</Badge>
                        </div>
                        {i < workflowList.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card className="bg-[#0f0f0f]">
                <CardHeader>
                  <CardTitle className="text-lg">اعضای نمونه</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {teamList.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarFallback className="bg-[#27272a] text-xs">{item.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.desc}</div>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">{item.status}</Badge>
                        </div>
                        {i < teamList.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

        {/* Pricing Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <span className="text-xs font-display font-semibold tracking-[2px] text-primary uppercase">03</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card className="bg-[#0f0f0f]">
              <CardHeader>
                <CardTitle className="text-lg">نسخه سریع</CardTitle>
                <CardDescription>برای کپی مستقیم در پروژه</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">مناسب تست سریع صفحه‌های فارسی و prototype.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">انتخاب</Button>
              </CardFooter>
            </Card>

            <Card className="bg-[#0f0f0f] border-primary shadow-[0_0_30px_rgba(200,255,0,0.1)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">نسخه خصوصی</CardTitle>
                  <Badge>پیشنهاد اصلی</Badge>
                </div>
                <CardDescription>Private package، Storybook داخلی و تست تصویری.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Private package، Storybook داخلی و تست تصویری.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">شروع نسخه خصوصی</Button>
              </CardFooter>
            </Card>

            <Card className="bg-[#0f0f0f]">
              <CardHeader>
                <CardTitle className="text-lg">نسخه Pixel Perfect</CardTitle>
                <CardDescription>مرحله پیشرفته</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">مقایسه مستقیم با Figma و اصلاح visual diff.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">برنامه‌ریزی</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />

        {/* Actions Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
          <span className="text-xs font-display font-semibold tracking-[2px] text-primary uppercase">04</span>
          <Card className="bg-[#0f0f0f]">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <CardTitle className="text-lg">اکشن‌های نهایی</CardTitle>
                  <CardDescription>BottomSheet، SideSheet، Snackbar، FAB و NavigationBar</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                      <Button>باز کردن BottomSheet</Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="h-[50vh]">
                      <SheetHeader>
                        <SheetTitle>تنظیمات سریع</SheetTitle>
                        <SheetDescription>نمونه BottomSheet در لندینگ‌پیج</SheetDescription>
                      </SheetHeader>
                      <div className="space-y-4 mt-4">
                        <div className="flex items-center gap-2">
                          <Checkbox id="pro" defaultChecked />
                          <label htmlFor="pro" className="text-sm cursor-pointer">فعال‌سازی حالت حرفه‌ای</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="approved" />
                          <label htmlFor="approved" className="text-sm cursor-pointer">نمایش فقط کامپوننت‌های تاییدشده</label>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>تراکم صفحه</span>
                            <span className="text-primary">{densitySlider[0]}%</span>
                          </div>
                          <Slider value={densitySlider} onValueChange={setDensitySlider} max={100} />
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Button variant="outline" onClick={() => setSheetOpen(false)}>بستن</Button>
                          <Button onClick={() => { setSheetOpen(false); setSnackbar("تنظیمات اعمال شد."); }}>اعمال</Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Sheet open={sideOpen} onOpenChange={setSideOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline">باز کردن SideSheet</Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>جزئیات سیستم</SheetTitle>
                        <SheetDescription>نمایش SideSheet برای دسکتاپ</SheetDescription>
                      </SheetHeader>
                      <div className="space-y-0 mt-4">
                        {[
                          { label: "تعداد قدم‌ها", value: "۳۷ قدم تا این نسخه", badge: "v0.37" },
                          { label: "نوع پروژه", value: "Private Design System", badge: "خصوصی" },
                          { label: "مرحله بعد", value: "Pixel-perfect pipeline", badge: "بعدی" },
                        ].map((item, i) => (
                          <div key={i}>
                            <div className="flex items-center justify-between py-3">
                              <div>
                                <div className="text-sm font-medium">{item.label}</div>
                                <div className="text-xs text-muted-foreground">{item.value}</div>
                              </div>
                              <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                            </div>
                            {i < 2 && <Separator />}
                          </div>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                این بخش نشان می‌دهد صفحه می‌تواند هم برای موبایل و هم دسکتاپ الگوهای تعاملی داشته باشد.
              </p>
              <Separator />
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-[#27272a] text-xs">سا</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-[#27272a] text-xs">رض</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-[#27272a] text-xs">می</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAB */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-28 left-6 z-40 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(200,255,0,0.3)] flex items-center justify-center hover:bg-[#d4ff33] transition-colors cursor-pointer"
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl">
          <div className="max-w-lg mx-auto flex items-center justify-around h-16">
            {[
              { id: "home", label: "خانه", icon: Home },
              { id: "components", label: "اجزا", icon: LayoutGrid, badge: 30 },
              { id: "docs", label: "مستندات", icon: BookOpen },
              { id: "profile", label: "پروفایل", icon: User },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setNav(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  nav === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative">
                  <item.icon className="h-5 w-5" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Snackbar / Toast */}
        {snackbar && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <div className="bg-[#18181b] border border-border text-foreground px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-sm">{snackbar}</span>
              <button onClick={() => setSnackbar("")} className="text-muted-foreground hover:text-foreground text-xs cursor-pointer">
                بستن
              </button>
            </div>
          </div>
        )}
      </main>
    </TooltipProvider>
  );
}
