/* eslint-disable @typescript-eslint/no-explicit-any */
import AccountRegisterRepository from "@/repository/AccountRegisterRepository";
import LoginRepository from "@/repository/LoginRepository";
import LocationSearchRepository from "@/repository/LocationSearchRepository";

interface repositoryObject {
  [name: string]: any;
}

const repositories: repositoryObject = {
  newregister: AccountRegisterRepository,
  login: LoginRepository,
  getcurrentlocationshop: LocationSearchRepository,
};

export const RepositoryFactory = {
  get: (name: string): repositoryObject => repositories[name],
};
