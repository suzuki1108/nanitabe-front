<template>
  <loading-component :show="state.loading"/>
  <div class="sign-in relative w-full min-h-screen bg-cover bg-no-repeat">
    <header-component :is_bg_clear="true" />
    <div class="mt-16 container mx-auto flex flex-col items-center">
      <h2 class="text-white font-bold text-2xl md:text-4xl text-center">
        ログイン
      </h2>

      <div
        class="mt-8 w-80 h-80 md:w-96 md:h-96 bg-black opacity-70 rounded-lg flex flex-col items-center"
      >
        <div class="mt-4">
          <p class="text-white text-base md:text-xl">メールアドレス</p>
          <input
            type="text"
            v-model="form.email"
            class="mt-2 w-72 md:w-80 h-12 rounded-lg text-lg md:text-xl"
            :class="emailOutLine"
          />
        </div>

        <div class="mt-4">
          <p class="text-white text-base md:text-xl">パスワード</p>
          <input
            type="password"
            v-model="form.password"
            class="mt-2 w-72 md:w-80 h-12 rounded-lg text-lg md:text-xl"
            :class="passwordOutLine"
          />
        </div>

        <button
          @click="
            loadingStart();
            signIn();
          "
          :disabled="!(isEmailValid && isPasswordValid)"
          class="mt-8 md:mt-16 w-72 md:w-80 h-12 rounded-lg bg-primary text-base md:text-xl font-bold text-center opacity-80 hover:opacity-100"
        >
          ログイン
        </button>

        <div class="mt-2 md:mt-4">
          <router-link
            to="sign_in"
            class="text-white text-xs md:text-sm underline underline-offset-4"
          >
            無料会員登録はこちら
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import FormModel from "@/model/FormModel";

export default defineComponent({
  name: "SignIn",
  components: {
    HeaderComponent,
    LoadingComponent,
  },
  setup() {
    const formModel = FormModel();

    return {
      ...formModel,
    };
  },
});
</script>

<style>
.sign-in {
  background-image: url(~@/assets/main-image.jpg);
}

.outline-red {
  outline: 2px solid red;
  outline-offset: 0px;
}
</style>
