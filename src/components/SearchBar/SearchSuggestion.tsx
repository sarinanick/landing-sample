import React from "react";

export type SearchSuggestionItem = {
  value: string;
  label: React.ReactNode;
  supportingText?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingText?: React.ReactNode;
};

export type SearchSuggestionProps = {
  item: SearchSuggestionItem;
  onSelect?: () => void;
};

export function SearchSuggestion({ item, onSelect }: SearchSuggestionProps) {
  return (
    <button type="button" className="pm-searchbar__suggestion" role="option" onClick={onSelect}>
      <span className="pm-searchbar__suggestion-leading" aria-hidden="true">{item.leadingIcon ?? "🔎"}</span>
      <span className="pm-searchbar__suggestion-content">
        <span className="pm-searchbar__suggestion-label">{item.label}</span>
        {item.supportingText ? <span className="pm-searchbar__suggestion-supporting">{item.supportingText}</span> : null}
      </span>
      {item.trailingText ? <span className="pm-searchbar__suggestion-trailing">{item.trailingText}</span> : null}
    </button>
  );
}
