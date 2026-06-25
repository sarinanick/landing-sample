import { useMemo, useState } from "react";

export type UseSearchItem = {
  value: string;
  label: string;
  keywords?: string[];
  category?: string;
};

export type UseSearchOptions<T extends UseSearchItem> = {
  items: T[];
  initialQuery?: string;
  limit?: number;
};

export function useSearch<T extends UseSearchItem>({
  items,
  initialQuery = "",
  limit = 8,
}: UseSearchOptions<T>) {
  const [query, setQuery] = useState(initialQuery);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return [];
    return items.filter((item) => {
      const haystack = [item.label, item.value, item.category, ...(item.keywords ?? [])].filter(Boolean).join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    }).slice(0, limit);
  }, [items, normalizedQuery, limit]);

  function search(nextQuery: string) {
    const trimmed = nextQuery.trim();
    setQuery(trimmed);
    if (trimmed) {
      setRecentSearches((current) => [trimmed, ...current.filter((item) => item !== trimmed)].slice(0, 5));
    }
  }

  function clear() {
    setQuery("");
  }

  return { query, setQuery, results, recentSearches, search, clear, hasQuery: Boolean(normalizedQuery), hasResults: results.length > 0 };
}
