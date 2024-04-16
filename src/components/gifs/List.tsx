import { useContext } from "react";
import Button from "../ui/Button";
import GifCard from "./GifCard";
import { GifsContext } from "../../store/GifsContext";
import { GIPHY_API_CONFIGS } from "../../utils/variables";

const List = () => {
  const { gifs, noResults, loading, onFetchMore } = useContext(GifsContext);

  if (noResults) {
    return <div className="p-4 italic">No results found</div>;
  }

  if (!loading && gifs.length === 0) {
    return <div className="p-4 italic">Please search for a gif</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`grid grid-cols-${GIPHY_API_CONFIGS.gifsPerRow} grid-flow-row gap-4`}
      >
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
      {gifs.length > 0 && (
        <div className="max-w-[300px] margin-x-auto flex flex-col">
          <Button onClick={onFetchMore} disabled={loading}>
            {loading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default List;
