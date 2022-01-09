<template>
  <loading-component :show="loading" />
  <p class="text-darkgray text-xs mb-2">
    <span v-if="state.selected === ''">
      ※選択しない場合は位置情報を元に周囲のお店から検索します。
    </span>
    <span v-if="state.selected !== ''">
      選択エリア:&nbsp;
      <span
        @click="reset('')"
        class="text-blue-700 underline underline-offset-4"
      >
        {{ state.ls_name }}
      </span>
      <span>&nbsp;>&nbsp;</span>

      <span
        @click="reset('LS')"
        class="text-blue-700 underline underline-offset-4"
      >
        {{ state.la_name }}
      </span>
      <span v-if="state.selected !== 'LS' && state.ls_code !== 'SS40'">
        &nbsp;>&nbsp;
      </span>

      <span
        @click="reset('LA')"
        class="text-blue-700 underline underline-offset-4"
      >
        {{ state.ma_name }}
      </span>
      <span v-if="state.selected !== 'LA' && state.selected !== 'LS'">
        &nbsp;>&nbsp;
      </span>
    </span>
  </p>
  <p v-if="state.selected === 'MA'" class="text-darkgray text-xs mb-2">
    ※エリアは5つまで選択可能です。
  </p>
  <div class="grid grid-cols-8 gap-4" v-if="state.selected === ''">
    <label
      class="col-span-4 lg:col-span-2"
      v-for="item in largeServiceArea"
      :key="item.code"
      @click="lsSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        name="area"
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
      class="col-span-4 lg:col-span-1"
      v-for="item in state.largeArea"
      :key="item.code"
      @click="laSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        name="area"
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
        name="area"
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
      class="col-span-4 md:col-span-2 lg:col-span-1"
      v-for="item in state.smallArea"
      :key="item.code"
      @click="saSelect(item)"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="item.code"
        :value="item.code"
        name="area"
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
import { defineComponent, reactive, ref, watch } from "vue";
import { AxiosError } from "axios";
import {
  largeServiceArea,
  largeArea,
  middleArea,
  ServiceArea,
  LargeArea,
  MiddleArea,
  SmallArea,
} from "@/model/AreaModel";
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { config } from "@/constants/const";
import { toaster_failure } from "@/model/ToasterModel";
import AreaState from "@/types/AreaState";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default defineComponent({
  name: "CheckBoxComponent",
  emits: ["onChange"],
  components: {
    LoadingComponent,
  },
  setup(_, context) {
    const loading = ref(false);
    const state = reactive<AreaState>({
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
      sa_code: [],
      sa_name: [],
    });

    const onChange = () => {
      context.emit("onChange", state);
    };

    watch(
      () => state,
      () => {
        onChange();
      },
      { deep: true }
    );

    const reset = (target: "" | "LS" | "LA" | "MA") => {
      state.selected = target;
      if (target === "") {
        state.ls_code = "";
        state.ls_name = "";
        state.la_code = "";
        state.la_name = "";
        state.ma_code = "";
        state.ma_name = "";
        state.sa_code = [];
        state.sa_name = [];
      }
      if (target === "LS") {
        state.la_code = "";
        state.la_name = "";
        state.ma_code = "";
        state.ma_name = "";
        state.sa_code = [];
        state.sa_name = [];
      }
      if (target === "LA") {
        state.ma_code = "";
        state.ma_name = "";
        state.sa_code = [];
        state.sa_name = [];
      }
      if (target === "MA") {
        state.sa_code = [];
        state.sa_name = [];
      }
    };

    const lsSelect = (selected: ServiceArea) => {
      if (selected.code === "SS40") {
        state.selected = "LA";
        state.ls_code = selected.code;
        state.ls_name = selected.name;
        state.middleArea = middleArea.filter(
          (item) => item.large_service_area.code === selected.code
        );
      } else {
        state.selected = "LS";
        state.ls_code = selected.code;
        state.ls_name = selected.name;
        state.largeArea = largeArea.filter(
          (item) => item.large_service_area.code === selected.code
        );
      }
    };

    const laSelect = (selected: LargeArea) => {
      state.selected = "LA";
      state.la_code = selected.code;
      state.la_name = selected.name;
      state.middleArea = middleArea.filter(
        (item) => item.large_area.code === selected.code
      );
    };

    const maSelect = async (selected: MiddleArea) => {
      loading.value = true;
      state.selected = "MA";
      state.ma_code = selected.code;
      state.ma_name = selected.name;

      const areaRepository = RepositoryFactory.get(config.AREA_API);

      const param = {
        middleArea: selected.code,
      };

      const res = await areaRepository
        .indexWithQuery(param)
        .catch((e: AxiosError) => {
          loading.value = false;
          return e.response;
        });

      if (res.status === 201) {
        state.smallArea = res.data.results.small_area;
      } else {
        toaster_failure(config.UNEXPECTED_ERROR_MSG);
      }
      loading.value = false;
    };

    // propsのselectLimitが設定されている場合に同一nameチェックボックスの選択数制限制御
    const saSelect = (selected: SmallArea) => {
      const target = document.getElementById(selected.code) as HTMLInputElement;

      if (target.checked === false) {
        state.sa_code = state.sa_code.filter((item) => item !== selected.code);
        state.sa_name = state.sa_name.filter((item) => item !== selected.name);
        return;
      }

      const list = document.getElementsByName("area");

      let count = 0;

      for (let i = 0; i < list.length; i++) {
        const item = list[i] as HTMLInputElement;
        if (item.checked === true) {
          count++;
        }
      }

      if (count > 5) {
        target.checked = false;
        toaster_failure("5個まで選択可能です。");
      } else {
        state.sa_code.push(selected.code);
        state.sa_name.push(selected.name);
      }
    };

    return {
      loading,
      state,
      reset,
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
