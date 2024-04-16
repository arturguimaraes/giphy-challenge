import { useEffect, useState } from "react";
import { Gif } from "../utils/types";
import { GIPHY_API_CONFIGS } from "../utils/variables";

const useGif = () => {
  const [search, setSearch] = useState<string>("");
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClearData = () => {
    setSearch("");
    setOffset(0);
    setGifs([]);
    setNoResults(false);
    setLoading(false);
  };

  const handleOnNewSearch = () => {
    setOffset(0);
    setGifs([]);
    setNoResults(false);
    setLoading(false);
    fetchData();
  };

  const fetchData = async () => {
    if (search === "") {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${GIPHY_API_CONFIGS.endpoint}?api_key=${GIPHY_API_CONFIGS.api_key}&q=${encodeURI(search)}&limit=${GIPHY_API_CONFIGS.limit}&offset=${offset}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      if (!data || !data.data || !data.meta || data.meta.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      console.log(data);

      if (data.data.length === 0) {
        setNoResults(true);
        setGifs([]);
        setOffset(0);
        return;
      }

      const newOffset = gifs.length + data.data.length;
      const newGifs = [...gifs, ...data.data];
      setOffset(newOffset);
      setGifs(newGifs);
      setNoResults(false);
      setLoading(false);
    } catch (error: any) {
      console.error("Error: ", error.message);
      setLoading(false);
      setGifs([]);
      setNoResults(false);
      setOffset(0);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFetchMore = () => {
    fetchData();
  };

  return {
    search,
    gifs,
    noResults,
    loading,
    setSearch,
    setGifs,
    setNoResults,
    setLoading,
    onFetchMore: handleFetchMore,
    onNewSearch: handleOnNewSearch,
    onClearData: handleClearData,
  };
};

export default useGif;
