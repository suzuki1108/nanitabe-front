/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, onUpdated, reactive } from "vue";
import { getJwtToken, deleteToken } from "@/model/LocalStorageModel";
import router from "@/router/index";
import { config } from "@/constants/const";

interface State {
  isLogin: boolean;
}

const HeaderModel = (): any => {
  const state = reactive<State>({
    isLogin: false,
  });

  const loginStateUpdate = (): void => {
    state.isLogin = getJwtToken() !== null;
  };

  onMounted(() => {
    loginStateUpdate();
  });

  onUpdated(() => {
    loginStateUpdate();
  });

  const logout = (): void => {
    const result = window.confirm("本当にログアウトしてもよろしいですか？");
    if (!result) {
      return;
    }

    deleteToken();
    loginStateUpdate();
    // ホーム画面にリダイレクト
    router.push({ name: config.VIEW_NAME_HOME });
  };

  return {
    state,
    logout,
  };
};

export default HeaderModel;
