<template>
  <div class="home relative w-full min-h-screen bg-cover bg-no-repeat">
    <h1 class="font-body text-4xl text-white">nanitabe font test</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style>
.home {
  background-image: url(~@/assets/main-image.jpg);
}
</style>
