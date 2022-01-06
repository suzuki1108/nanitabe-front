<template>
  <label :class="getColSpan">
    <input
      @click="onClick"
      type="checkbox"
      class="hidden"
      :id="checkBoxObject.value"
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
import CheckBoxObject from "@/types/CheckBoxObject";
import { toaster_failure } from "@/model/ToasterModel";

export default defineComponent({
  name: "CheckBoxComponent",
  props: {
    checkBoxObject: {
      type: [Object] as PropType<CheckBoxObject>,
      required: true,
    },
    selectLimit: {
      type: Number,
      required: false,
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

    // propsのselectLimitが設定されている場合に同一nameチェックボックスの選択数制限制御
    const onClick = () => {
      if (props.selectLimit === undefined) {
        return;
      }

      const target = document.getElementById(
        props.checkBoxObject.value
      ) as HTMLInputElement;

      const list = document.getElementsByName(props.checkBoxObject.name);

      let count = 0;

      for (let i = 0; i < list.length; i++) {
        const item = list[i] as HTMLInputElement;
        if (item.checked === true) {
          count++;
        }
      }

      if (count === props.selectLimit + 1) {
        target.checked = false;
        toaster_failure(props.selectLimit + "個まで選択可能です。");
      }
    };

    return {
      getColSpan,
      onClick,
    };
  },
});
</script>

<style scoped>
label input:checked + span {
  background: #ffeecc;
}
</style>
