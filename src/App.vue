<template>
  <div class="font-body">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from "vue";
import { StoreSearchResult } from "./model/StoreInfoModel";

export default defineComponent({
  setup() {
    const detailSearchResult = reactive<StoreSearchResult>({
      resultsAvailable: 0,
      storeInfo: [],
      message: "",
    });
    const favoriteStoreList = reactive<StoreSearchResult>({
      resultsAvailable: 0,
      storeInfo: [],
      message: "",
    });

    provide<StoreSearchResult>("detailSearchResult", detailSearchResult);
    provide<StoreSearchResult>("favoriteStoreList", favoriteStoreList);
  },
});
</script>
