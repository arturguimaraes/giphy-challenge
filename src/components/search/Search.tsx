import { useContext } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { GifsContext } from "../../store/GifsContext";

const Search = () => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { search, gifs, setSearch, onNewSearch, onClearData } =
    useContext(GifsContext);

  return (
    <div className="max-w-[500px] p-4">
      <Card>
        <div className="w-full flex flex-row gap-2">
          <input
            className="w-full rounded-md border-[1px] border-gray-300 p-1"
            type="text"
            placeholder="Search your gifs here"
            value={search}
            onChange={handleOnChange}
          />
          <Button onClick={onNewSearch}>Go</Button>
          {gifs.length > 0 && <Button onClick={onClearData}>Clear</Button>}
        </div>
      </Card>
    </div>
  );
};

export default Search;
