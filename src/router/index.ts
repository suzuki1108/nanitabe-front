import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { config } from "@/constants/const";
import Home from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import MyPage from "@/views/MyPage.vue";
import LocationSearchResult from "@/views/LocationSearchResult.vue";
import DetailSearch from "@/views/DetailSearch.vue";
import DetailSearchResult from "@/views/DetailSearchResult.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: config.VIEW_PATH_HOME,
    name: config.VIEW_NAME_HOME,
    component: Home,
  },
  {
    path: config.VIEW_PATH_SIGN_IN,
    name: config.VIEW_NAME_SIGN_IN,
    component: SignIn,
  },
  {
    path: config.VIEW_PATH_SIGN_UP,
    name: config.VIEW_NAME_SIGN_UP,
    component: SignUp,
  },
  {
    path: config.VIEW_PATH_MY_PAGE,
    name: config.VIEW_NAME_MY_PAGE,
    component: MyPage,
  },
  {
    path: config.VIEW_PATH_LOCATION_SEARCH_RESULT,
    name: config.VIEW_NAME_LOCATION_SEARCH_RESULT,
    component: LocationSearchResult,
  },
  {
    path: config.VIEW_PATH_DETAIL_SEARCH,
    name: config.VIEW_NAME_DETAIL_SEARCH,
    component: DetailSearch,
  },
  {
    path: config.VIEW_PATH_DETAIL_SEARCH_RESULT,
    name: config.VIEW_NAME_DETAIL_SEARCH_RESULT,
    component: DetailSearchResult,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
