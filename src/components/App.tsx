import List from "./gifs/List";
import Search from "./search/Search";
import Container from "./ui/Container";
import useGif from "../hooks/useGif";
import { GifsContext } from "../store/GifsContext";

function App() {
  const {
    search,
    gifs,
    noResults,
    loading,
    setSearch,
    setGifs,
    setNoResults,
    setLoading,
    onFetchMore,
    onNewSearch,
    onClearData,
  } = useGif();

  return (
    <GifsContext.Provider
      value={{
        search,
        gifs,
        noResults,
        loading,
        setSearch,
        setGifs,
        setNoResults,
        setLoading,
        onFetchMore,
        onNewSearch,
        onClearData,
      }}
    >
      <Container>
        <Search />
        <List />
      </Container>
    </GifsContext.Provider>
  );
}

export default App;
