<template>
  <div class="mt-8 flex flex-col items-center md:flex-row md:justify-between">
    <div class="flex items-baseline">
      <h2 class="font-bold text-base md:text-xl md:ml-4">
        <slot></slot>
      </h2>
      <p v-if="min_record_count" class="ml-2 md:ml-5 text-xs">
        <span class="font-bold">
          {{ min_record_count }}~{{ max_record_count }}件
        </span>
        を表示
      </p>
    </div>
    <div class="flex flex-col items-center md:flex-row">
      <button
        v-if="resetting_button"
        @click="$emit('resetting-button-click')"
        class="text-sm text-darkgray mt-2 w-64 h-8 md:mr-4 md:mt-0 md:w-40 bg-secondary rounded-lg shadow-lg hover:opacity-80"
      >
        条件を再設定する
      </button>
      <button
        v-if="roulette_button"
        @click="$emit('roulette-button-click')"
        class="text-sm text-darkgray mt-2 w-64 h-8 md:mr-4 md:mt-0 md:w-40 bg-secondary rounded-lg shadow-lg hover:opacity-80"
      >
        ルーレットで決める
      </button>
    </div>
  </div>
  <divider />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Divider from "./Divider.vue";

export default defineComponent({
  components: { Divider },
  name: "PageHeader",
  emits: ["roulette-button-click", "resetting-button-click"],
  props: {
    min_record_count: {
      type: Number,
      required: false,
    },
    max_record_count: {
      type: Number,
      required: false,
    },
    resetting_button: {
      type: Boolean,
      required: false,
    },
    roulette_button: {
      type: Boolean,
      required: false,
    },
  },
});
</script>
