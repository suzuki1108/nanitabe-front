<template>
  <header
    class="flex justify-between text-white font-bold items-center"
    :class="is_bg_clear ? '' : 'bg-primary'"
  >
    <div>
      <h1 class="mt-4 mb-4 ml-8 text-lg md:text-2xl">nanitabe</h1>
    </div>
    <div>
      <a href="#" class="mr-8 text-xs md:text-sm">ログイン</a>
      <a href="#" class="mr-8 text-xs md:text-sm">無料会員登録</a>
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
