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
