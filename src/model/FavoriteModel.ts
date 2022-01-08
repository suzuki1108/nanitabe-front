/* eslint-disable @typescript-eslint/no-explicit-any */

import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { config } from "@/constants/const";
import { AxiosError } from "axios";
import { toaster_failure, toaster_success } from "./ToasterModel";
import { getJwtToken } from "@/model/LocalStorageModel";

const favoriteRepository = RepositoryFactory.get(config.FAVORITE_API);

export const FavoriteModel = (): any => {
  const register = async (shopId: string) => {
    console.log(shopId);
    if (!getJwtToken()) {
      toaster_failure("お気に入り登録の使用にはログインが必要です。");
      return;
    }

    const body = {
      shopId: shopId,
    };

    const res = await favoriteRepository
      .postWithAuth(body)
      .catch((e: AxiosError) => {
        return e.response;
      });

    if (res === undefined) {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      return;
    }

    if (res.status === 201) {
      toaster_success(res.data.message);
      return;
    }
    console.log(res);
    toaster_failure(res.data.message);
  };
  return {
    register,
  };
};
