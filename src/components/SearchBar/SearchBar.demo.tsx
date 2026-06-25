import { SearchBar } from "./SearchBar";

const suggestions = [
  { value: "shoes", label: "کفش ورزشی", supportingText: "۱۲۳ نتیجه", leadingIcon: "👟" },
  { value: "bag", label: "کیف چرمی", supportingText: "۴۲ نتیجه", leadingIcon: "👜" },
  { value: "watch", label: "ساعت هوشمند", supportingText: "۸۸ نتیجه", leadingIcon: "⌚" },
];

export function SearchBarDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>SearchBar</h2>
      <SearchBar placeholder="جستجوی محصول" suggestions={suggestions} recentSearches={["کفش", "لپ‌تاپ", "هدفون"]} />
      <SearchBar placeholder="در حال جستجو" loading defaultValue="کفش" />
      <SearchBar placeholder="غیرفعال" disabled />
    </section>
  );
}
