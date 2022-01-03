<template>
  <div
    class="container mx-auto flex flex-col md:flex-row items-center md:items-start"
  >
    <h2 class="m-4 font-bold md:w-32">{{ title }}</h2>
    <div class="w-10/12 md:mt-8">
      <slot></slot>
      <divider />
    </div>
    <p class="md:m-4 font-bold md:w-32"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Divider from "@/components/Divider.vue";

export default defineComponent({
  name: "DetailSearchContent",
  components: {
    Divider,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
