/* eslint-disable @typescript-eslint/no-explicit-any */
import AccountRegisterRepository from "@/repository/AccountRegisterRepository";
import LoginRepository from "@/repository/LoginRepository";
import LocationSearchRepository from "@/repository/LocationSearchRepository";
import FavoriteRepository from "./FavoriteRepository";
import DetailSearchRepository from "./DetailSearchRepository";
import AreaRepository from "./AreaRepository";

interface repositoryObject {
  [name: string]: any;
}

const repositories: repositoryObject = {
  newregister: AccountRegisterRepository,
  login: LoginRepository,
  getcurrentlocationshop: LocationSearchRepository,
  favorite: FavoriteRepository,
  detailedsearch: DetailSearchRepository,
  getsmallarea: AreaRepository,
};

export const RepositoryFactory = {
  get: (name: string): repositoryObject => repositories[name],
};
