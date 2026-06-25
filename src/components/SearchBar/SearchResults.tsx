import { SearchSuggestion, SearchSuggestionItem } from "./SearchSuggestion";

export type SearchResultsProps = {
  items: SearchSuggestionItem[];
  onSelect?: (item: SearchSuggestionItem) => void;
};

export function SearchResults({ items, onSelect }: SearchResultsProps) {
  return (
    <div className="pm-searchbar__section">
      <div className="pm-searchbar__section-title">نتایج</div>
      {items.map((item) => (
        <SearchSuggestion key={item.value} item={item} onSelect={() => onSelect?.(item)} />
      ))}
    </div>
  );
}
