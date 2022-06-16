import axios from "axios";
import { DogsResponse, ImagesResponse } from "../../../../interfaces";

const API = {
  getDogs: function () {
    return axios.get<DogsResponse>("https://dog.ceo/api/breeds/list/all");
  },
  
  getImages: function (query: string) {
    return axios.get<ImagesResponse>(`https://dog.ceo/api/breed/${query}/images/random/8`);
  },
};

export default API;
