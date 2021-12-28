<template>
  <div class="home relative w-full min-h-screen bg-cover bg-no-repeat">
    <header-component :is_bg_clear="true" />
    <div class="pt-40 pl-10 md:pl-28 text-white font-bold">
      <p class="text-lg md:text-3xl">現在地から最適なお店をご案内</p>
      <p class="pt-5 text-4xl md:text-6xl">お店探しに迷ったら</p>
      <p class="pt-8 text-4xl md:text-6xl">nanitabe</p>
    </div>
    <div class="pt-40 flex justify-center gap-5 md:gap-40">
      <home-screen-button url="/">おまかせ検索</home-screen-button>
      <home-screen-button url="/">詳細検索</home-screen-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeScreenButton from "@/components/HomeScreenButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeaderComponent,
    HomeScreenButton,
  }
});
</script>

<style>
.home {
  background-image: url(~@/assets/main-image.jpg);
}
</style>
