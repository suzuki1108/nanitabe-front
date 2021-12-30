import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSubway,
  faStar,
  faClock,
  faYenSign,
  faTrashAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toaster from "@meforma/vue-toaster";

library.add(faSubway, faStar, faClock, faYenSign, faTrashAlt, faTimes);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(router);

app.use(Toaster);

app.mount("#app");
