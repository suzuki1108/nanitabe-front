/* eslint-disable @typescript-eslint/no-explicit-any */
import { isBlank, isEmailAddress, isPassword } from "@/util/Utility";
import { computed, reactive } from "vue";
import SignUpModel from "@/model/SignUpModel";
import SignInModel from "@/model/SignInModel";
import router from "@/router/index";
import { config } from "@/constants/const";
export interface Form {
  email: string;
  password: string;
}

interface State {
  loading: boolean;
}

const FormModel = (): any => {
  const form = reactive<Form>({
    email: "",
    password: "",
  });

  const state = reactive<State>({
    loading: false,
  });

  const loadingStart = () => {
    state.loading = true;
  };

  const loadingEnd = () => {
    state.loading = false;
  };

  const signUp = async () => {
    loadingStart();
    const model = SignUpModel();
    const result = await model.signUp(form);
    loadingEnd();

    if (result.isSuccess) {
      router.push({ name: config.VIEW_NAME_MY_PAGE });
    }
  };

  const signIn = async () => {
    loadingStart();
    const model = SignInModel();
    const result = await model.signIn(form);
    loadingEnd();

    if (result.isSuccess) {
      router.push({ name: config.VIEW_NAME_MY_PAGE });
    }
  };

  // emailのバリデーション結果を保持
  const isEmailValid = computed(() => isEmailAddress(form.email));

  // emailのinput枠のアウトライン色を保持
  const emailOutLine = computed(() => {
    const black = "outline-black";
    const red = "outline-red";
    if (isBlank(form.email)) {
      return black;
    } else if (isEmailAddress(form.email)) {
      return black;
    } else {
      return red;
    }
  });

  // passwordのバリデーション結果を保持
  const isPasswordValid = computed(() => isPassword(form.password));

  // passwordのinput枠のアウトライン色を保持
  const passwordOutLine = computed(() => {
    const black = "outline-black";
    const red = "outline-red";
    if (isBlank(form.password)) {
      return black;
    } else if (isPassword(form.password)) {
      return black;
    } else {
      return red;
    }
  });

  return {
    form,
    state,
    signUp,
    signIn,
    isEmailValid,
    emailOutLine,
    isPasswordValid,
    passwordOutLine,
  };
};

export default FormModel;
