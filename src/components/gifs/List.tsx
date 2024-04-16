import { useContext } from "react";
import Button from "../ui/Button";
import GifCard from "./GifCard";
import { GifsContext } from "../../store/GifsContext";

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
      <div className="grid grid-cols-8 grid-flow-row gap-4">
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
      <div className="max-w-[300px] margin-x-auto flex flex-col">
        {loading && <div className="text-sm">Loading...</div>}
        {!loading && <Button onClick={onFetchMore}>More...</Button>}
      </div>
    </div>
  );
};

export default List;
