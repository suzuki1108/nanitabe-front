<template>
  <p class="mb-2 text-darkgray text-sm">{{ "~" + state + "円" }}</p>
  <slider
    v-model="state"
    :min="500"
    :max="30000"
    :step="100"
    :tooltip="true"
    tooltipColor="#CCCCCC"
    tooltipTextColor="#666666"
    color="#FFEECC"
    track-color="#CCCCCC"
    :height="18"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import slider from "vue3-slider";

export default defineComponent({
  name: "SliderBar",
  components: {
    slider,
  },
  setup() {
    const state = ref(3000);
    return {
      state,
    };
  },
});
</script>
