<template>
  <header-component :is_bg_clear="false" />
  <page-header :roulette_button="true">現在地からの検索結果</page-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LocationSearchModel from "@/model/LocationSearchModel";
import PageHeader from "@/components/PageHeader.vue";

export default defineComponent({
  name: "LocationSearchResult",
  components: {
    HeaderComponent,
    PageHeader,
  },
  setup() {
    const locationSearchModel = LocationSearchModel();
    return {
      ...locationSearchModel,
    };
  },
});
</script>
