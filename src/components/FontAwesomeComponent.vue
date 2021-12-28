<template>
  <fa :icon="icon" />
</template>

<script lang="ts">
import { FontAwesomeInnerObject } from "@/types/fontawesome-inner-object";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "FontAwesomeComponent",
  props: {
    icon: {
      type: [Object, String] as PropType<FontAwesomeInnerObject>,
      required: true,
    },
  },
});
</script>
