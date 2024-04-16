import { useContext } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { GifsContext } from "../../store/GifsContext";

const Search = () => {
  const { search, gifs, loading, setSearch, onNewSearch, onClearData } =
    useContext(GifsContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      onNewSearch();
    }
  };

  return (
    <div className="">
      <Card>
        <div className="w-full flex flex-row gap-2">
          <input
            className="w-full rounded-md border-[1px] border-gray-300 p-1"
            type="text"
            placeholder="Search your gifs here"
            value={search}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
          <Button disabled={loading} onClick={onNewSearch}>
            {loading ? 'Searching...' : 'Search'}
          </Button>
          {gifs.length > 0 && (
            <Button disabled={loading} onClick={onClearData}>
              Clear
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Search;
