/* eslint-disable @typescript-eslint/no-explicit-any */
import { onBeforeMount, reactive, ref } from "vue";
import { Location, getCurrentPosition } from "./LocationModel";
import { locationSearch } from "./StoreInfoModel";
import { StoreSearchResult } from "@/model/StoreInfoModel";

const LocationSearchModel = (): any => {
  let location: Location;

  const state = reactive<StoreSearchResult>({
    resultsAvailable: 0,
    storeInfo: [],
    message: "",
  });
  const isLoading = ref(false);

  const getData = async () => {
    try {
      // ローディングのプログレス表示
      isLoading.value = true;
      console.log(isLoading);
      // 位置情報を取得
      location = await getCurrentPosition();
      // 店舗情報を取得
      const locationSearchResult = await locationSearch(location);

      state.resultsAvailable = locationSearchResult.resultsAvailable;
      state.storeInfo = locationSearchResult.storeInfo;
      state.message = locationSearchResult.message;

      isLoading.value = false;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  onBeforeMount(() => {
    getData();
  });

  return {
    state,
    isLoading,
  };
};

export default LocationSearchModel;
