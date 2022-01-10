<template>
  <header-component :is_bg_clear="false" />
  <base-layout>
    <page-header
      :min_record_count="state.resultsAvailable ? '1' : '0'"
      :max_record_count="state.resultsAvailable || '0'"
    >
      お気に入りリスト
    </page-header>
    <store-info :storeData="state" />
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onUnmounted } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import StoreInfo from "@/components/StoreInfo.vue";
import { StoreSearchResult } from "@/model/StoreInfoModel";
import { FavoriteModel } from "@/model/FavoriteModel";

export default defineComponent({
  name: "MyPage",
  components: {
    HeaderComponent,
    PageHeader,
    BaseLayout,
    StoreInfo,
  },
  setup() {
    const state = inject<StoreSearchResult>("favoriteStoreList");
    if (!state) {
      return;
    }

    onMounted(() => {
      // スクロール位置を先頭に
      window.scroll({ top: 0, behavior: "smooth" });
      FavoriteModel().fetchData();
    });

    // 初期化
    onUnmounted(() => {
      state.resultsAvailable = 0;
      state.storeInfo = [];
      state.message = "";
    });

    return {
      state,
    };
  },
});
</script>
