/* eslint-disable @typescript-eslint/no-explicit-any */
import { onBeforeMount, reactive, ref } from "vue";
import { Location, getCurrentPosition } from "./LocationModel";
import { locationSearch } from "./StoreInfoModel";
import { StoreSearchResult } from "@/model/StoreInfoModel";

const LocationSearchModel = (): any => {
  let location: Location;

  const state: StoreSearchResult = reactive<StoreSearchResult>({
    resultsAvailable: 0,
    storeInfo: [],
    message: "",
  });

  // ローディング中プログレス表示用
  const isLoading = ref(false);

  // ルーレットモーダル用
  const isModalShow = ref(false);
  const modalOpen = () => {
    isModalShow.value = true;
  };
  const modalClose = () => {
    isModalShow.value = false;
  };

  const getData = async () => {
    try {
      // ローディングのプログレス表示
      isLoading.value = true;

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
    isModalShow,
    modalOpen,
    modalClose,
  };
};

export default LocationSearchModel;
