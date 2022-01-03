<template>
  <header-component :is_bg_clear="false" />
  <base-layout>
    <page-header>詳細検索</page-header>

    <detail-search-content title="フリーワード">
      <p class="text-darkgray text-xs">※空欄可</p>
      <input
        type="text"
        placeholder="例: 居酒屋 宴会"
        class="outline-none border mt-1 pl-2 w-full lg:w-full xl:w-6/12 h-8 rounded-lg text-darkgray text-sm"
      />
    </detail-search-content>

    <detail-search-content title="エリア">
      <p class="text-darkgray text-xs">
        ※空欄可(空欄の場合には位置情報を元に検索します)
      </p>
      <input
        type="text"
        placeholder="例: 新宿"
        class="outline-none border mt-1 pl-2 w-full lg:w-full xl:w-6/12 h-8 rounded-lg text-darkgray text-sm"
      />
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

    <detail-search-content title="喫煙">
      <p class="text-darkgray text-xs mb-2">※複数選択可</p>
      <div class="grid grid-cols-8 gap-4">
        <check-box-component
          v-for="item in tobacco"
          :key="item.value"
          :checkBoxObject="item"
        />
      </div>
    </detail-search-content>

    <detail-search-content title="予算">
      <p>test</p>
    </detail-search-content>

    <div class="container mx-auto flex flex-col items-center">
      <button
        class="m-4 md:m-8 w-5/6 md:w-64 h-12 font-bold text-white rounded-lg shadow-lg bg-primary hover:opacity-80"
      >
        検索
      </button>
    </div>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PageHeader from "@/components/PageHeader.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import DetailSearchContent from "@/components/DetailSearchContent.vue";
import CheckBoxComponent, {
  CheckBoxObject,
} from "@/components/CheckBoxComponent.vue";

export default defineComponent({
  name: "DetailSearch",
  components: {
    HeaderComponent,
    PageHeader,
    BaseLayout,
    DetailSearchContent,
    CheckBoxComponent,
  },
  setup() {
    const storeGenre: CheckBoxObject[] = [
      {
        title: "居酒屋",
        name: "genre",
        size: "s",
        value: "居酒屋",
      },
      {
        title: "和食",
        name: "genre",
        size: "s",
        value: "和食",
      },
      {
        title: "中華",
        name: "genre",
        size: "s",
        value: "中華",
      },
      {
        title: "洋食",
        name: "genre",
        size: "s",
        value: "洋食",
      },
      {
        title: "韓国料理",
        name: "genre",
        size: "s",
        value: "韓国料理",
      },
      {
        title: "創作料理",
        name: "genre",
        size: "s",
        value: "創作料理",
      },
      {
        title: "各国料理",
        name: "genre",
        size: "s",
        value: "各国料理",
      },
      {
        title: "ラーメン",
        name: "genre",
        size: "s",
        value: "ラーメン",
      },
      {
        title: "イタリアン・フレンチ",
        name: "genre",
        size: "m",
        value: "イタリアン・フレンチ",
      },
      {
        title: "焼肉・ホルモン",
        name: "genre",
        size: "m",
        value: "焼肉・ホルモン",
      },
      {
        title: "ダイニングバー・バル",
        name: "genre",
        size: "m",
        value: "ダイニングバー・バル",
      },
      {
        title: "バー・カクテル",
        name: "genre",
        size: "m",
        value: "バー・カクテル",
      },
      {
        title: "アジア・エスニック料理",
        name: "genre",
        size: "m",
        value: "アジア・エスニック料理",
      },
      {
        title: "お好み焼き・もんじゃ",
        name: "genre",
        size: "m",
        value: "お好み焼き・もんじゃ",
      },
      {
        title: "カフェ・スイーツ",
        name: "genre",
        size: "m",
        value: "カフェ・スイーツ",
      },
      {
        title: "カラオケ・パーティ",
        name: "genre",
        size: "m",
        value: "カラオケ・パーティ",
      },
    ];

    const tobacco: CheckBoxObject[] = [
      {
        title: "喫煙可",
        name: "tobacco",
        size: "l",
        value: "喫煙可",
      },
      {
        title: "禁煙",
        name: "tobacco",
        size: "l",
        value: "禁煙",
      },
    ];

    return {
      storeGenre,
      tobacco,
    };
  },
});
</script>
