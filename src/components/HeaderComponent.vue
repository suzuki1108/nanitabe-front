<template>
  <header
    class="flex justify-between text-white font-bold items-center drop-shadow-lg"
    :class="is_bg_clear ? '' : 'bg-primary'"
  >
    <div>
      <h1 class="mt-4 mb-4 ml-8 text-lg md:text-3xl">
        <router-link to="/">nanitabe</router-link>
      </h1>
    </div>
    <div>
      <router-link to="sign_in" class="mr-8 text-xs md:text-sm">
        ログイン
      </router-link>
      <router-link to="sign_up" class="mr-8 text-xs md:text-sm">
        無料会員登録
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderComponent",
  props: {
    // ヘッダーの背景を透明にするかプライマリカラーにするか判別する
    is_bg_clear: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
