<template>
  <router-link
    :to="url"
    class="text-center w-40 py-5 bg-primary opacity-80 font-bold rounded hover:opacity-100"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeScreenButton",
  props: {
    url: String,
  },
});
</script>
