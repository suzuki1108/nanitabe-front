import AccountRegisterRepository from "@/repository/AccountRegisterRepository";

interface repositoryObject {
  [name: string]: any;
}

const repositories: repositoryObject = {
  newregister: AccountRegisterRepository,
};

export const RepositoryFactory = {
  get: (name: string): repositoryObject => repositories[name],
};
