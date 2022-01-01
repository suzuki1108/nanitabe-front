/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { config } from "@/constants/const";

const repository = axios.create({
  baseURL: config.API_BASE_URL,
});

export default (resource: string): any => {
  return {
    index() {
      return repository.get(resource);
    },
    indexWithQuery(param: any) {
      let query = "?";
      const keys = Object.keys(param);

      // クエリパラメータを生成
      for (let i = 0; i < keys.length; i++) {
        query +=
          encodeURIComponent(keys[i]) +
          "=" +
          encodeURIComponent(param[keys[i]]);

        if (i + 1 !== keys.length) {
          query += "&";
        }
      }

      return repository.get(resource + query);
    },
    show(id: number) {
      return repository.get(`${resource}/${id}`);
    },
    post(payload: any) {
      return repository.post(resource, payload);
    },
    delete(id: number) {
      return repository.delete(`${resource}/${id}`);
    },
  };
};
