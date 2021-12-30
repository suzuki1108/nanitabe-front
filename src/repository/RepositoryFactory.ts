/* eslint-disable @typescript-eslint/no-explicit-any */
import AccountRegisterRepository from "@/repository/AccountRegisterRepository";
import LoginRepository from "@/repository/LoginRepository";

interface repositoryObject {
  [name: string]: any;
}

const repositories: repositoryObject = {
  newregister: AccountRegisterRepository,
  login: LoginRepository,
};

export const RepositoryFactory = {
  get: (name: string): repositoryObject => repositories[name],
};
