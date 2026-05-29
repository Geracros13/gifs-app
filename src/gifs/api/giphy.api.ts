import axios from "axios";

export const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: import.meta.env.VITE_GYPHY_API_KEY,
    limit: 10,
    offset: 0,
    rating: "g",
    lang: "en",
    bundle: "messaging_non_clips",
  },
});
