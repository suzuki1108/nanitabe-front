<template>
  <div v-for="item in storeData.storeInfo" :key="item.id">
    <div
      class="m-4 flex flex-col items-center md:items-start md:flex-row md:justify-between"
    >
      <div class="flex flex-col items-center md:items-start md:flex-row">
        <img class="image" :src="item.photoPc" />

        <div class="ml-4 md:max-w-sm lg:max-w-2xl">
          <p class="mt-2 font-bold text-sm">{{ item.genreName }}</p>
          <p class="mt-2 text-darkgray text-xs">{{ item.catchPhrase }}</p>
          <a
            :href="item.url"
            class="font-bold text-lg text-blue-700 underline underline-offset-4"
          >
            <p class="mt-2">{{ item.name }}</p>
          </a>

          <div class="mt-2 flex items-center">
            <font-awesome-component
              :icon="subway"
              class="text-sm text-primary mr-2"
            />
            <p class="text-xs text-darkgray">
              {{ item.access }}
            </p>
          </div>

          <div class="mt-2 flex items-center">
            <font-awesome-component
              :icon="clock"
              class="text-sm text-primary mr-2"
            />
            <p class="text-xs text-darkgray">
              {{ item.open }}
            </p>
          </div>

          <div class="mt-2 flex items-center">
            <font-awesome-component
              :icon="yen"
              class="text-sm text-primary mr-2"
            />
            <p class="text-xs text-darkgray">
              {{ item.budgetAverage || "-" }}
            </p>
          </div>
        </div>
      </div>
      <button
        v-if="!isMyPage"
        class="text-sm text-darkgray w-64 h-8 md:w-36 mt-4 md:mt-0 bg-secondary rounded-lg shadow-lg hover:opacity-80"
      >
        <font-awesome-component :icon="star" class="text-primary" />
        お気に入り登録
      </button>
      <button
        v-if="isMyPage"
        class="text-sm text-darkgray w-64 h-8 md:w-16 mt-4 md:mt-0 bg-lightgray rounded-lg shadow-lg hover:opacity-80"
      >
        <font-awesome-component :icon="trash" class="text-darkgray" />
        削除
      </button>
    </div>
    <divider />
  </div>

  <div v-if="!storeData.resultsAvailable" class="text-xl mt-8 text-darkgray">
    <p v-if="!isMyPage">{{ storeData.message }}</p>
    <p v-if="isMyPage">お気に入りの店舗が存在しません。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Divider from "./Divider.vue";
import FontAwesomeConst from "@/constants/FontAwesomeConst";
import FontAwesomeComponent from "@/components/FontAwesomeComponent.vue";
import { StoreSearchResult } from "@/model/StoreInfoModel.ts";

export default defineComponent({
  components: {
    FontAwesomeComponent,
    Divider,
  },
  name: "StoreInfo",
  emits: [],
  props: {
    isMyPage: {
      type: Boolean,
      required: false,
    },
    storeData: {
      type: [Object] as PropType<StoreSearchResult>,
      required: true,
    },
  },
  setup() {
    const subway = FontAwesomeConst.SUBWAY;
    const clock = FontAwesomeConst.CLOCK;
    const yen = FontAwesomeConst.YEN_SIGN;
    const star = FontAwesomeConst.STAR;
    const trash = FontAwesomeConst.TRASH;

    return {
      subway,
      clock,
      yen,
      star,
      trash,
    };
  },
});
</script>

<style scoped>
.image {
  width: 180px;
  height: 180px;
  object-fit: cover;
}
</style>
