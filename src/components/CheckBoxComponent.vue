<template>
  <label :class="getColSpan">
    <input
      type="checkbox"
      class="hidden"
      :value="checkBoxObject.value"
      :name="checkBoxObject.name"
    />
    <span
      class="block w-full pt-1 pb-1 text-center bg-lightgray shadow-lg text-darkgray rounded-lg shadow-lg hover:opacity-80"
    >
      {{ checkBoxObject.title }}
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export interface CheckBoxObject {
  title: string;
  name: string;
  size: "s" | "m" | "l";
  value: string;
}

export default defineComponent({
  name: "CheckBoxComponent",
  props: {
    checkBoxObject: {
      type: [Object] as PropType<CheckBoxObject>,
      required: true,
    },
  },
  setup(props) {
    const getColSpan = computed((): string => {
      switch (props.checkBoxObject.size) {
        case "s":
          return "col-span-8 md:col-span-2 lg:col-span-1";
        case "m":
          return "col-span-8 lg:col-span-4 xl:col-span-2";
        case "l":
          return "col-span-8 md:col-span-4";
        default:
          return "";
      }
    });

    return {
      getColSpan,
    };
  },
});
</script>

<style scoped>
label input:checked + span {
  background: #ffeecc;
}
</style>
