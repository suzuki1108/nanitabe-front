<template>
  <div class="container mx-auto">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLayout",
});
</script>
