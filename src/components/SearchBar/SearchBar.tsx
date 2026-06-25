import React, { useId, useMemo, useState } from "react";
import "./SearchBar.css";
import { SearchSuggestion, SearchSuggestionItem } from "./SearchSuggestion";
import { SearchHistory } from "./SearchHistory";
import { SearchResults } from "./SearchResults";

export type SearchBarSize = "small" | "medium" | "large";

export type SearchBarProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  suggestions?: SearchSuggestionItem[];
  recentSearches?: string[];
  results?: SearchSuggestionItem[];
  loading?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  size?: SearchBarSize;
  emptyText?: React.ReactNode;
  onValueChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  onSuggestionSelect?: (item: SearchSuggestionItem) => void;
  className?: string;
};

export function SearchBar({
  value,
  defaultValue = "",
  placeholder = "جستجو",
  label = "جستجو",
  suggestions = [],
  recentSearches = [],
  results = [],
  loading = false,
  disabled = false,
  expanded = false,
  size = "medium",
  emptyText = "نتیجه‌ای پیدا نشد.",
  onValueChange,
  onSearch,
  onClear,
  onSuggestionSelect,
  className = "",
}: SearchBarProps) {
  const inputId = useId();
  const listId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [active, setActive] = useState(expanded);
  const actualValue = value ?? internalValue;

  const visibleSuggestions = useMemo(() => {
    if (!actualValue.trim()) return [];
    return suggestions.filter((item) =>
      item.label?.toString().toLowerCase().includes(actualValue.toLowerCase())
    );
  }, [actualValue, suggestions]);

  const hasPanel = active && !disabled;
  const hasResults = results.length > 0;
  const hasSuggestions = visibleSuggestions.length > 0;
  const hasHistory = !actualValue && recentSearches.length > 0;

  function updateValue(next: string) {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  }

  function submitSearch() {
    const trimmed = actualValue.trim();
    if (trimmed) onSearch?.(trimmed);
  }

  return (
    <div className={["pm-searchbar", `pm-searchbar--${size}`, active ? "pm-searchbar--active" : "", disabled ? "pm-searchbar--disabled" : "", className].filter(Boolean).join(" ")} data-component="SearchBar">
      <div className="pm-searchbar__surface">
        <span className="pm-searchbar__leading-icon" aria-hidden="true">🔎</span>
        <input
          id={inputId}
          className="pm-searchbar__input"
          value={actualValue}
          disabled={disabled}
          placeholder={placeholder}
          aria-label={label}
          aria-controls={hasPanel ? listId : undefined}
          aria-expanded={hasPanel ? "true" : "false"}
          onFocus={() => setActive(true)}
          onChange={(event) => updateValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") submitSearch();
            if (event.key === "Escape") setActive(false);
          }}
        />
        {loading ? <span className="pm-searchbar__loading" aria-label="در حال جستجو" /> : null}
        {actualValue && !loading ? (
          <button type="button" className="pm-searchbar__icon-button" aria-label="پاک کردن جستجو" onClick={() => { updateValue(""); onClear?.(); }}>×</button>
        ) : null}
        <button type="button" className="pm-searchbar__icon-button" aria-label="جستجوی صوتی" disabled={disabled}>🎙</button>
      </div>

      {hasPanel ? (
        <div id={listId} className="pm-searchbar__panel" role="listbox">
          {loading ? <div className="pm-searchbar__status">در حال جستجو...</div>
          : hasResults ? <SearchResults items={results} onSelect={(item) => { updateValue(item.label.toString()); onSuggestionSelect?.(item); }} />
          : hasSuggestions ? (
            <div className="pm-searchbar__section">
              <div className="pm-searchbar__section-title">پیشنهادها</div>
              {visibleSuggestions.map((item) => <SearchSuggestion key={item.value} item={item} onSelect={() => { updateValue(item.label.toString()); onSuggestionSelect?.(item); }} />)}
            </div>
          ) : hasHistory ? <SearchHistory items={recentSearches} onSelect={(item) => { updateValue(item); onSearch?.(item); }} />
          : <div className="pm-searchbar__empty">{emptyText}</div>}
        </div>
      ) : null}
    </div>
  );
}
