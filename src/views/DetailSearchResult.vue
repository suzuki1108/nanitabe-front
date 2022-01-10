<template>
  <roulette-modal
    :show="isModalShow"
    :storeData="state"
    @close-modal="modalClose"
  ></roulette-modal>
  <header-component :is_bg_clear="false" />
  <base-layout>
    <page-header
      :roulette_button="true"
      @rouletteButtonClick="modalOpen"
      :min_record_count="state.resultsAvailable > 0 ? '1' : '0'"
      :max_record_count="state.resultsAvailable || '0'"
    >
      詳細検索結果
    </page-header>
    <store-info :storeData="state" />
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, onUnmounted, ref } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import StoreInfo from "@/components/StoreInfo.vue";
import RouletteModal from "@/components/RouletteModal.vue";
import { StoreSearchResult } from "@/model/StoreInfoModel";
import router from "@/router";
import { config } from "@/constants/const";

export default defineComponent({
  name: "DetailSearchResult",
  components: {
    HeaderComponent,
    PageHeader,
    BaseLayout,
    StoreInfo,
    RouletteModal,
  },
  setup() {
    const state = inject<StoreSearchResult>("detailSearchResult");
    if (!state) {
      return;
    }

    onMounted(() => {
      // 検索結果を保持しない状態でURLからアクセスされた場合にリダイレクト
      if (state.message === "") {
        router.push({ name: config.VIEW_NAME_DETAIL_SEARCH });
      }
      // スクロール位置を先頭に
      window.scroll({ top: 0, behavior: "smooth" });
    });

    // 初期化
    onUnmounted(() => {
      state.resultsAvailable = 0;
      state.storeInfo = [];
      state.message = "";
    });

    // ルーレットモーダル用
    const isModalShow = ref(false);
    const modalOpen = () => {
      isModalShow.value = true;
    };
    const modalClose = () => {
      isModalShow.value = false;
    };

    return {
      state,
      isModalShow,
      modalOpen,
      modalClose,
    };
  },
});
</script>
