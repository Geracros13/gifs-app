interface Props {
  searches: string[];

  onLabelClick: (search: string) => void;
}

export default function PreviousSearches({ searches, onLabelClick }: Props) {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search, index) => (
          <li key={index} onClick={() => onLabelClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
}
