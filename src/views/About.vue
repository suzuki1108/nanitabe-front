<template>
  <div class="about">
    <h1>This is an about page</h1>
    <font-awesome-component
      v-for="item in iconTestArray"
      :key="item"
      :icon="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FontAwesomeComponent from "@/components/FontAwesomeComponent.vue";
import FontAwesomeConst from "@/constants/FontAwesomeConst";

export default defineComponent({
  components: { FontAwesomeComponent },
  name: "About",
  setup() {
    const iconTestArray = [
      FontAwesomeConst.SUBWAY,
      FontAwesomeConst.STAR,
      FontAwesomeConst.CLOCK,
      FontAwesomeConst.YEN_SIGN,
      FontAwesomeConst.TRASH,
      FontAwesomeConst.TIMES,
    ];

    return {
      iconTestArray,
    };
  },
});
</script>
