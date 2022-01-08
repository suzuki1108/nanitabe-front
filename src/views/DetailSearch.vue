<template>
  <loading-component :show="loading" />
  <header-component :is_bg_clear="false" />
  <base-layout>
    <page-header>詳細検索</page-header>

    <detail-search-content title="フリーワード">
      <p class="text-darkgray text-xs">※空欄可</p>
      <p class="text-red-500 text-xs" v-if="outLine !== ''">
        記号以外で入力してください。
      </p>
      <input
        type="text"
        placeholder="例: 居酒屋 宴会"
        v-model="freeWord"
        class="outline-none border mt-1 pl-2 w-full lg:w-full xl:w-6/12 h-8 rounded-lg text-darkgray text-sm"
        :class="outLine"
      />
    </detail-search-content>

    <detail-search-content title="エリア">
      <area-component @onChange="areaChange" />
    </detail-search-content>

    <detail-search-content title="お店ジャンル">
      <p class="text-darkgray text-xs mb-2">※複数選択可</p>
      <div class="grid grid-cols-8 gap-4">
        <check-box-component
          v-for="item in storeGenre"
          :key="item.value"
          :checkBoxObject="item"
        />
      </div>
    </detail-search-content>

    <detail-search-content title="予算">
      <p class="text-darkgray text-xs mb-2">※0~2つまで選択可</p>
      <div class="grid grid-cols-8 gap-4">
        <check-box-component
          v-for="item in budgetList"
          :key="item.value"
          :checkBoxObject="item"
          :selectLimit="2"
        />
      </div>
    </detail-search-content>

    <div class="container mx-auto flex flex-col items-center">
      <button
        @click="search"
        class="m-4 md:m-8 w-5/6 md:w-64 h-12 font-bold text-white rounded-lg shadow-lg bg-primary hover:opacity-80"
      >
        検索
      </button>
    </div>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import DetailSearchModel from "@/model/DetailSearchModel";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import DetailSearchContent from "@/components/DetailSearchContent.vue";
import CheckBoxComponent from "@/components/CheckBoxComponent.vue";
import AreaComponent from "@/components/AreaComponent.vue";

export default defineComponent({
  name: "DetailSearch",
  components: {
    LoadingComponent,
    HeaderComponent,
    PageHeader,
    BaseLayout,
    DetailSearchContent,
    AreaComponent,
    CheckBoxComponent,
  },
  setup() {
    const detailSearchModel = DetailSearchModel();
    return {
      ...detailSearchModel,
    };
  },
});
</script>

<style scoped>
.outline-red {
  outline: 2px solid red;
  outline-offset: 0px;
}
</style>