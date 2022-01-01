<template>
  <loading-component :show="isLoading" />
  <header-component :is_bg_clear="false" />
  <base-layout>
    <page-header
      :roulette_button="true"
      @rouletteButtonClick="test"
      :min_record_count="1"
      :max_record_count="10"
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

export default defineComponent({
  name: "LocationSearchResult",
  components: {
    HeaderComponent,
    PageHeader,
    BaseLayout,
    StoreInfo,
    LoadingComponent,
  },
  setup() {
    const locationSearchModel = LocationSearchModel();
    const test = () => {
      alert("test");
    };

    return {
      ...locationSearchModel,
      test,
    };
  },
});
</script>
