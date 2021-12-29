import { isBlank, isEmailAddress, isPassword } from "@/util/Utility";
import { computed, reactive } from "vue";

interface State {
  email: string;
  password: string;
}

const FormModel = (): any => {
  const state = reactive<State>({
    email: "",
    password: "",
  });

  // emailのバリデーション結果を保持
  const isEmailValid = computed(() => isEmailAddress(state.email));

  // emailのinput枠のアウトライン色を保持
  const emailOutLine = computed(() => {
    const black = "outline-black";
    const red = "outline-red";
    if (isBlank(state.email)) {
      return black;
    } else if (isEmailAddress(state.email)) {
      return black;
    } else {
      return red;
    }
  });

  // passwordのバリデーション結果を保持
  const isPasswordValid = computed(() => isPassword(state.password));

  // passwordのinput枠のアウトライン色を保持
  const passwordOutLine = computed(() => {
    const black = "outline-black";
    const red = "outline-red";
    if (isBlank(state.password)) {
      return black;
    } else if (isPassword(state.password)) {
      return black;
    } else {
      return red;
    }
  });

  return {
    state,
    isEmailValid,
    emailOutLine,
    isPasswordValid,
    passwordOutLine,
  };
};

export default FormModel;
