import React, { useEffect } from "react";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    const getGifs = async () => {
      const url =
        "https://api.giphy.com/v1/gifs/search?q=dragonball&limit=10&api_key=E8KIYzxPDiknto5CRSHlE0rfvq2gH8WR";
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        const gifs = data.map((gif) => ({
          id: gif.id,
          img: gif.images?.downsized_medium.url,
          title: gif.title,
        }));
        console.log(gifs);
      } catch (error) {}
    };
    getGifs();
  }, []);
  return <li key={category}>{category}</li>;
};
