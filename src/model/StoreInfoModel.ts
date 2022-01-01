import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { Location } from "@/model/LocationModel";
import { config } from "@/constants/const";
import { AxiosError } from "axios";
import { toaster_failure } from "./ToasterModel";

// APIから取得する店舗情報
export interface StoreInfo {
  id: string;
  name: string;
  photoPc: string;
  photoMobile: string;
  access: string;
  url: string;
  genreName: string;
  address: string;
  catchPhrase: string;
  budgetAverage: string;
  open: string;
  close: string;
}

export interface StoreSearchResult {
  resultsAvailable: number;
  storeInfo: StoreInfo[];
  message: string;
}

const storeInfoRepository = RepositoryFactory.get(config.LOCATION_SEARCH_API);

export const locationSearch = async (
  param: Location
): Promise<StoreSearchResult> => {
  const responseData: StoreSearchResult = {
    resultsAvailable: 0,
    storeInfo: [],
    message: "",
  };

  const res = await storeInfoRepository
    .indexWithQuery(param)
    .catch((e: AxiosError) => {
      return e.response;
    });

  if (res === undefined) {
    toaster_failure(config.UNEXPECTED_ERROR_MSG);
    return responseData;
  }

  responseData.resultsAvailable = res.data.resultsAvailable;
  responseData.storeInfo = res.data.shop;
  responseData.message = res.data.message;

  return responseData;
};
