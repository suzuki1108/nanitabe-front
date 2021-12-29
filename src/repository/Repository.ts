import axios from "axios";

const repository = axios.create({
  baseURL: "http://localhost:8080/",
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
