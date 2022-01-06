<template>
  <p class="text-darkgray text-xs mb-2">
    <span v-if="state.selected === ''">&nbsp;</span>
    <span v-if="state.selected !== ''">
      {{ state.ls_name + state.la_name + state.ma_name + state.sa_name }}
    </span>
  </p>
  <div class="grid grid-cols-8 gap-4" v-if="state.selected === ''">
    <label
      class="col-span-8 lg:col-span-4 xl:col-span-2"
      v-for="item in largeServiceArea"
      :key="item.code"
      @click="lsSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        :name="item.name"
      />
      <span
        class="block w-full pt-1 pb-1 text-center bg-lightgray shadow-lg text-darkgray rounded-lg shadow-lg hover:opacity-80"
      >
        {{ item.name }}
      </span>
    </label>
  </div>

  <div class="grid grid-cols-8 gap-4" v-if="state.selected === 'LS'">
    <label
      class="col-span-8 lg:col-span-4 xl:col-span-2"
      v-for="item in state.largeArea"
      :key="item.code"
      @click="laSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        :name="item.name"
      />
      <span
        class="block w-full pt-1 pb-1 text-center bg-lightgray shadow-lg text-darkgray rounded-lg shadow-lg hover:opacity-80"
      >
        {{ item.name }}
      </span>
    </label>
  </div>

  <div class="grid grid-cols-8 gap-4" v-if="state.selected === 'LA'">
    <label
      class="col-span-8 lg:col-span-8 xl:col-span-4"
      v-for="item in state.middleArea"
      :key="item.code"
      @click="maSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        :name="item.name"
      />
      <span
        class="block w-full pt-1 pb-1 text-center bg-lightgray shadow-lg text-darkgray rounded-lg shadow-lg hover:opacity-80"
      >
        {{ item.name }}
      </span>
    </label>
  </div>

  <div class="grid grid-cols-8 gap-4" v-if="state.selected === 'MA'">
    <label
      class="col-span-8 lg:col-span-8 xl:col-span-4"
      v-for="item in state.smallArea"
      :key="item.code"
      @click="saSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        :name="item.name"
      />
      <span
        class="block w-full pt-1 pb-1 text-center bg-lightgray shadow-lg text-darkgray rounded-lg shadow-lg hover:opacity-80"
      >
        {{ item.name }}
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
import {
  largeServiceArea,
  largeArea,
  middleArea,
  ServiceArea,
  LargeArea,
  MiddleArea,
  SmallArea,
} from "@/model/AreaModel";

interface State {
  selected: "" | "LS" | "LA" | "MA";
  largeArea: LargeArea[];
  middleArea: MiddleArea[];
  smallArea: SmallArea[];
  ls_code: string;
  ls_name: string;
  la_code: string;
  la_name: string;
  ma_code: string;
  ma_name: string;
  sa_code: string;
  sa_name: string;
}

export default defineComponent({
  name: "CheckBoxComponent",
  setup() {
    const state = reactive<State>({
      selected: "",
      largeArea: largeArea,
      middleArea: middleArea,
      smallArea: [],
      ls_code: "",
      ls_name: "",
      la_code: "",
      la_name: "",
      ma_code: "",
      ma_name: "",
      sa_code: "",
      sa_name: "",
    });

    const lsSelect = (selected: ServiceArea) => {
      if (selected.code === "SS40") {
        state.selected = "LA";
        state.ls_code = selected.code;
        state.ls_name = selected.name + " > ";
        state.middleArea = middleArea.filter(
          (item) => item.large_service_area.code === selected.code
        );
      } else {
        state.selected = "LS";
        state.ls_code = selected.code;
        state.ls_name = selected.name + " > ";
        state.largeArea = largeArea.filter(
          (item) => item.large_service_area.code === selected.code
        );
      }
    };

    const laSelect = (selected: LargeArea) => {
      state.selected = "LA";
      state.la_code = selected.code;
      state.la_name = selected.name + " > ";
      state.middleArea = middleArea.filter(
        (item) => item.large_area.code === selected.code
      );
    };

    const maSelect = (selected: MiddleArea) => {
      state.selected = "MA";
      state.ma_code = selected.code;
      state.ma_name = selected.name + " > ";

      const url =
        "https://webservice.recruit.co.jp/hotpepper/small_area/v1/?key=90c6e06346c60dc8&format=json&middle_area=" +
        selected.code;
      axios.get(url).then((res) => {
        state.smallArea = res.data.results.small_area;
      });
    };

    const saSelect = (selected: SmallArea) => {
      state.sa_code = selected.code;
      state.sa_name = selected.name;
    }

    return {
      state,
      lsSelect,
      laSelect,
      maSelect,
      saSelect,
      largeArea,
      largeServiceArea,
      middleArea,
    };
  },
});
</script>

<style scoped>
label input:checked + span {
  background: #ffeecc;
}
</style>
