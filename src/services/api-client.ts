import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17485f2c3a3342f087a18e4f11341427",
  },
});
