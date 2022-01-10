/* eslint-disable @typescript-eslint/no-explicit-any */

import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { config } from "@/constants/const";
import { AxiosError } from "axios";
import { toaster_failure, toaster_success } from "./ToasterModel";
import { getJwtToken } from "@/model/LocalStorageModel";
import { inject, ref } from "vue";
import { StoreSearchResult } from "./StoreInfoModel";

const favoriteRepository = RepositoryFactory.get(config.FAVORITE_API);

export const FavoriteModel = (): any => {
  // プロバイダから取得
  const favoriteStoreList = inject<StoreSearchResult>("favoriteStoreList");

  const favLoading = ref(false);

  const register = async (shopId: string) => {
    favLoading.value = true;
    if (!getJwtToken()) {
      toaster_failure("お気に入り登録の使用にはログインが必要です。");
      favLoading.value = false;
      return;
    }

    const body = {
      shopId: shopId,
    };

    const res = await favoriteRepository
      .postWithAuth(body)
      .catch((e: AxiosError) => {
        favLoading.value = false;
        return e.response;
      });

    if (res === undefined) {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      favLoading.value = false;
      return;
    }

    if (res.status === 201) {
      toaster_success(res.data.message);
      favLoading.value = false;
      return;
    }

    toaster_failure(res.data.message);
    favLoading.value = false;
  };

  const deleteFavorite = async (shopId: string) => {
    favLoading.value = true;
    if (!getJwtToken()) {
      toaster_failure("お気に入り削除の使用にはログインが必要です。");
      favLoading.value = false;
      return;
    }

    const body = {
      shopId: shopId,
    };

    const res = await favoriteRepository
      .deleteWithAuth(body)
      .catch((e: AxiosError) => {
        favLoading.value = false;
        return e.response;
      });

    if (res === undefined) {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      favLoading.value = false;
      return;
    }

    if (res.status === 201 || res.status === 200) {
      toaster_success(res.data.message);
      favLoading.value = false;
      await fetchData();
      return;
    }

    toaster_failure(res.data.message);
    favLoading.value = false;
  };

  const fetchData = async () => {
    favLoading.value = true;
    if (!getJwtToken()) {
      toaster_failure("お気に入り取得にはログインが必要です。");
      return;
    }

    const res = await favoriteRepository
      .indexWithAuth()
      .catch((e: AxiosError) => {
        favLoading.value = false;
        return e.response;
      });

    if (res === undefined) {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      favLoading.value = false;
      return;
    }

    if (res.status === 201 || res.status === 200) {
      // プロバイダに結果を渡す
      if (!favoriteStoreList) {
        toaster_failure(config.UNEXPECTED_ERROR_MSG);
        favLoading.value = false;
        return;
      }

      favoriteStoreList.resultsAvailable = res.data.resultsAvailable;
      favoriteStoreList.storeInfo = res.data.shop;
      favoriteStoreList.message = res.data.message;
      favLoading.value = false;
      return;
    }

    toaster_failure(res.data.message);
  };

  return {
    favLoading,
    register,
    deleteFavorite,
    fetchData,
  };
};
