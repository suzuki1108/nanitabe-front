import Repository from "./Repository";
import { config } from "@/constants/const";

const resource = config.LOCATION_SEARCH_API;
const repository = Repository(resource);

export default repository;
