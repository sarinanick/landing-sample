import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { List, ListItem } from "../../components/List";
import { SearchBar } from "../../components/SearchBar";
import { TopAppBar } from "../../components/TopAppBar";
import { useSearch } from "../../hooks/useSearch";
import "../../styles/base.css";

const products = [
  { value: "sport-shoes", label: "کفش ورزشی", category: "پوشاک", keywords: ["کفش", "اسنیکرز", "ورزش"] },
  { value: "leather-bag", label: "کیف چرمی", category: "اکسسوری", keywords: ["کیف", "چرم"] },
  { value: "smart-watch", label: "ساعت هوشمند", category: "دیجیتال", keywords: ["ساعت", "هوشمند"] },
  { value: "headphones", label: "هدفون بی‌سیم", category: "دیجیتال", keywords: ["هدفون", "موسیقی"] },
];

export function ProductSearchExample() {
  const search = useSearch({ items: products, limit: 5 });

  const suggestions = products.map((item) => ({
    value: item.value,
    label: item.label,
    supportingText: item.category,
    leadingIcon: item.category === "دیجیتال" ? "📱" : item.category === "پوشاک" ? "👟" : "🔎",
  }));

  const resultItems = search.results.map((item) => ({
    value: item.value,
    label: item.label,
    supportingText: item.category,
    leadingIcon: "📦",
    trailingText: "مشاهده",
  }));

  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "var(--md-sys-color-background)", color: "var(--md-sys-color-on-background)" }}>
      <TopAppBar variant="small" title="جستجوی محصول" navigationIcon="←" actions={[{ icon: "🔔", label: "اعلان‌ها" }, { icon: "⋮", label: "بیشتر" }]} elevated />
      <section style={{ padding: "var(--md-sys-spacing-6)", display: "grid", gap: "var(--md-sys-spacing-4)", maxWidth: 860, marginInline: "auto" }}>
        <SearchBar
          value={search.query}
          onValueChange={search.setQuery}
          onSearch={search.search}
          onClear={search.clear}
          placeholder="نام محصول، دسته‌بندی یا برند"
          suggestions={suggestions}
          recentSearches={search.recentSearches.length ? search.recentSearches : ["کفش", "هدفون", "ساعت"]}
          results={resultItems}
          emptyText="محصولی با این عبارت پیدا نشد."
        />
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Chip variant="filter" selected>همه</Chip>
          <Chip variant="filter">دیجیتال</Chip>
          <Chip variant="filter">پوشاک</Chip>
        </div>
        <Card variant="filled" title={search.hasQuery ? `نتایج برای «${search.query}»` : "پیشنهادهای امروز"} subtitle={search.hasQuery ? `${search.results.length} نتیجه پیدا شد` : "برای شروع، یک عبارت را جستجو کنید"}>
          <List density="two-line" dividers>
            {(search.hasQuery ? search.results : products.slice(0, 3)).map((item) => (
              <ListItem key={item.value} headline={item.label} supportingText={item.category} leading="📦" trailing="مشاهده" interactive />
            ))}
          </List>
        </Card>
      </section>
    </main>
  );
}
