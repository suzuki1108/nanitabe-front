<template>
  <div class="home relative w-full min-h-screen bg-cover bg-no-repeat">
    <header-component :is_bg_clear="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  name: "Home",
  components: {
    HeaderComponent,
  }
});
</script>

<style>
.home {
  background-image: url(~@/assets/main-image.jpg);
}
</style>
