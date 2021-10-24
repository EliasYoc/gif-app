export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=E8KIYzxPDiknto5CRSHlE0rfvq2gH8WR`;
  try {
    const res = await fetch(url);
    const { data } = await res.json();
    // console.log(data);
    const gifsData = data.map((gif) => ({
      id: gif.id,
      img: gif.images?.downsized.url,
      title: gif.title,
    }));
    return gifsData;
  } catch (error) {}
};
