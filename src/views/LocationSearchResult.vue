<template>
  <loading-component :show="isLoading" />
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
      現在地からの検索結果
    </page-header>
    <store-info :storeData="state" />
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LocationSearchModel from "@/model/LocationSearchModel";
import PageHeader from "@/components/PageHeader.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import StoreInfo from "@/components/StoreInfo.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import RouletteModal from "@/components/RouletteModal.vue";

export default defineComponent({
  name: "LocationSearchResult",
  components: {
    HeaderComponent,
    PageHeader,
    BaseLayout,
    StoreInfo,
    LoadingComponent,
    RouletteModal,
  },
  setup() {
    const locationSearchModel = LocationSearchModel();

    return {
      ...locationSearchModel,
    };
  },
});
</script>
