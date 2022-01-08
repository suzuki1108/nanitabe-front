import Repository from "./Repository";
import { config } from "@/constants/const";

const resource = config.FAVORITE_API;
const repository = Repository(resource);

export default repository;
