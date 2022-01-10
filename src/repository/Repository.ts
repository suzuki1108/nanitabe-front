/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { config } from "@/constants/const";
import { getJwtToken } from "@/model/LocalStorageModel";

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
        if (
          param[keys[i]] === "" ||
          param[keys[i]] === null ||
          param[keys[i]] === undefined
        ) {
          continue;
        }

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
    indexWithAuth() {
      const token = getJwtToken();
      return repository.get(resource, {
        headers: {
          Authorization: `${token}`,
        },
      });
    },
    show(id: number) {
      return repository.get(`${resource}/${id}`);
    },
    post(payload: any) {
      return repository.post(resource, payload);
    },
    postWithAuth(payload: any) {
      const token = getJwtToken();
      return repository.post(resource, payload, {
        headers: {
          Authorization: `${token}`,
        },
      });
    },
    delete(id: string) {
      return repository.delete(`${resource}/${id}`);
    },
    deleteWithAuth(id: string) {
      const token = getJwtToken();
      return repository.delete(`${resource}/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
    },
  };
};
