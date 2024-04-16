import { createContext } from "react";
import { Gif } from "../utils/types";

export interface GifsContextType {
  search: string;
  gifs: Gif[];
  noResults: boolean;
  loading: boolean;
  setSearch: (search: string) => void;
  setGifs: (gifs: Gif[]) => void;
  setNoResults: (noResults: boolean) => void;
  setLoading: (loading: boolean) => void;
  onFetchMore: () => void;
  onNewSearch: () => void;
  onClearData: () => void;
}

export const GifsContext = createContext<GifsContextType>({
  search: "",
  gifs: [],
  noResults: false,
  loading: false,
  setSearch: () => {},
  setGifs: () => {},
  setNoResults: () => {},
  setLoading: () => {},
  onFetchMore: () => {},
  onNewSearch: () => {},
  onClearData: () => {},
});
