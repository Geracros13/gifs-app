import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";
import type { Gif } from "../actions/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  /* Para evitar hacer peticiones a la API por cada término de búsqueda, 
     podemos almacenar los resultados en un objeto (cache) y 
     consultarlo antes de hacer la petición. Si el término ya existe en la cache, 
     usamos esos resultados en lugar de hacer una nueva petición.*/
  const gifsCache = useRef<Record<string, Gif[]>>({}).current;

  const handleTermClick = async (term: string) => {
    if (gifsCache[term]) {
      setGifs(gifsCache[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLocaleLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms((prev) => [...prev, query].splice(0, 3));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);

    gifsCache[query] = gifs;
    console.log({ gifsCache });
  };

  return { gifs, previousTerms, handleSearch, handleTermClick };
};
