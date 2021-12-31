<template>
  <header-component :is_bg_clear="false" />
  <div class="container mx-auto">
    <div class="mt-8 flex flex-col items-center md:flex-row md:justify-between">
      <div class="flex items-baseline">
        <h2 class="font-bold text-base md:text-xl md:ml-4">
          現在地からの検索結果
        </h2>
        <p class="ml-2 md:ml-5 text-xs">
          <span class="font-bold">1~10件</span>を表示
        </p>
      </div>
      <div>
        <button
          class="text-sm text-darkgray mt-2 w-64 h-8 md:mr-4 md:mt-0 md:w-40 bg-secondary rounded-lg shadow-lg hover:opacity-80"
        >
          ルーレットで決める
        </button>
      </div>
    </div>
    <div class="mt-2 border border-lightgray"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LocationSearchModel from "@/model/LocationSearchModel";

export default defineComponent({
  name: "LocationSearchResult",
  components: {
    HeaderComponent,
  },
  setup() {
    const locationSearchModel = LocationSearchModel();
    return {
      ...locationSearchModel,
    };
  },
});
</script>
