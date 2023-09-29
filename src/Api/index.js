import axios from "axios";
export const LIST_MOVIE = "movie/";

import { BASE_URL, API_KEY } from "@env";

// ${BASE_URL}${LIST_MOVIE}popular?api_key=7599f6bb4d0f8d41537cb8146a24736a&language=en-US&page=1

export const getData = (url, page) => {
  try {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${BASE_URL}${url}?api_key=${API_KEY}&languange=en-US&${page
            ? (page = page)
            : null}`
        )
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  } catch (err) {
    console.log("API ERROR => ", err);
  }
};
