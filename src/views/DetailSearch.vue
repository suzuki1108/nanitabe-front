<template>
  <header-component :is_bg_clear="false" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  name: "DetailSearch",
  components: {
    HeaderComponent,
  },
});
</script>
