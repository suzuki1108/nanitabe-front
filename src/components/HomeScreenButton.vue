<template>
  <router-link
    :to="url"
    class="text-center text-xl md:text-2xl w-40 md:w-2/12 py-5 md:py-7 bg-primary opacity-80 font-bold drop-shadow-lg rounded hover:opacity-100"
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
