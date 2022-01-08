import Repository from "./Repository";
import { config } from "@/constants/const";

const resource = config.AREA_API;
const repository = Repository(resource);

export default repository;
