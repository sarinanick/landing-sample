export type SearchHistoryProps = {
  items: string[];
  onSelect?: (item: string) => void;
};

export function SearchHistory({ items, onSelect }: SearchHistoryProps) {
  return (
    <div className="pm-searchbar__section">
      <div className="pm-searchbar__section-title">جستجوهای اخیر</div>
      {items.map((item) => (
        <button key={item} type="button" className="pm-searchbar__history-item" role="option" onClick={() => onSelect?.(item)}>
          <span aria-hidden="true">↺</span>
          <span>{item}</span>
        </button>
      ))}
    </div>
  );
}
