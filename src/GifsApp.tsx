import { SearchBar } from "./shared/components/SearchBar";
import { Header } from "./shared/components/Header";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { GifsList } from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs();
  return (
    <div>
      <Header title="Search gifts" description="Find the funniest gifs!" />
      <SearchBar
        placeholder="Write your search here..."
        onQuery={handleSearch}
      />
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClick}
      />
      <GifsList gifs={gifs} />
    </div>
  );
};
