<template>
  <header-component :is_bg_clear="false" />
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
