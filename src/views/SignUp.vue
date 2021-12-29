<template>
  <div class="sign-in relative w-full min-h-screen bg-cover bg-no-repeat">
    <header-component :is_bg_clear="true" />
    <div class="mt-16 container mx-auto flex flex-col items-center">
      <h2 class="text-white font-bold text-2xl md:text-4xl text-center">
        無料会員登録
      </h2>

      <div
        class="mt-8 w-80 h-80 md:w-96 md:h-96 bg-black opacity-70 rounded-lg flex flex-col items-center"
      >
        <div class="mt-4">
          <p class="text-white text-base md:text-xl">メールアドレス</p>
          <input
            type="text"
            class="mt-2 w-72 md:w-80 h-12 rounded-lg outline-black text-lg md:text-xl"
          />
        </div>

        <div class="mt-4">
          <p class="text-white text-base md:text-xl">パスワード</p>
          <input
            type="text"
            class="mt-2 w-72 md:w-80 h-12 rounded-lg outline-black text-lg md:text-xl"
          />
        </div>

        <button
          class="mt-8 md:mt-16 w-72 md:w-80 h-12 rounded-lg bg-primary text-base md:text-xl font-bold text-center opacity-80 hover:opacity-100"
        >
          無料会員登録
        </button>

        <div class="mt-2 md:mt-4">
          <router-link
            to="sign_in"
            class="text-white text-xs md:text-sm underline underline-offset-4"
          >
            ログインはこちら
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  name: "SignIn",
  components: {
    HeaderComponent,
  },
});
</script>

<style>
.sign-in {
  background-image: url(~@/assets/main-image.jpg);
}
</style>
