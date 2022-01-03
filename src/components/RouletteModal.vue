<template>
  <div v-if="show" id="fadeLayer">
    <div class="w-11/12 md:w-2/5 h-auto bg-white rounded-lg">
      <div class="flex flex-row-reverse">
        <button @click="$emit('close-modal')">
          <font-awesome-component
            :icon="time"
            class="mt-1 mr-2 text-darkgray text-3xl"
          />
        </button>
      </div>
      <div class="flex flex-col items-center">
        <div>
          <p class="mt-2 font-bold text-sm">
            {{ storeData.storeInfo[index].genreName }}
          </p>
          <p class="mt-2 text-darkgray text-xs">
            {{ storeData.storeInfo[index].catchPhrase || "&nbsp;" }}
          </p>
          <img class="mt-2 image" :src="storeData.storeInfo[index].photoPc" />
        </div>
        <p
          class="mt-2 font-bold text-lg text-blue-700 underline underline-offset-4"
        >
          <a :href="storeData.storeInfo[index].url">
            {{ storeData.storeInfo[index].name }}
          </a>
        </p>
        <button
          v-if="isStop"
          @click="roulette"
          class="mt-8 mb-8 w-64 h-12 rounded-lg bg-primary text-white text-xl font-bold text-center shadow-lg hover:opacity-80"
        >
          ルーレットを回す
        </button>
        <button
          v-if="!isStop"
          @click="rouletteStop"
          class="mt-8 mb-8 w-64 h-12 rounded-lg bg-primary text-white text-xl font-bold text-center shadow-lg hover:opacity-80"
        >
          ストップ
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import FontAwesomeComponent from "@/components/FontAwesomeComponent.vue";
import FontAwesomeConst from "@/constants/FontAwesomeConst";
import { StoreSearchResult } from "@/model/StoreInfoModel";

export default defineComponent({
  name: "RouletteModal",
  components: {
    FontAwesomeComponent,
  },
  emits: ["close-modal"],
  props: {
    show: {
      type: Boolean,
      require: true,
    },
    storeData: {
      type: [Object] as PropType<StoreSearchResult>,
      required: true,
    },
  },
  setup(props) {
    const time = FontAwesomeConst.TIMES;

    const index = ref(0);

    const isStop = ref(true);

    const rouletteStop = () => {
      isStop.value = true;
    };

    const roulette = () => {
      isStop.value = false;
      const repeat = setInterval(() => {
        if (isStop.value) {
          clearInterval(repeat);
        }
        index.value = Math.floor(
          Math.random() * props.storeData.resultsAvailable
        );
      }, 50);
    };

    return {
      time,
      index,
      isStop,
      rouletteStop,
      roulette,
    };
  },
});
</script>

<style scoped>
#fadeLayer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
