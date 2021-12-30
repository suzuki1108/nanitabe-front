/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { config } from "@/constants/const";
import { AxiosError } from "axios";
import { setJwtToken } from "@/model/LocalStorageModel";
import { Form } from "@/model/FormModel";
import { toaster_success, toaster_failure } from "@/model/ToasterModel";

const signInRepository = RepositoryFactory.get(config.LOGIN_API);

export interface SignInResponse {
  isSuccess: boolean;
  message: string[];
}

const SignInModel = (): any => {
  const signIn = async (param: Form) => {
    const res = await signInRepository.post(param).catch((e: AxiosError) => {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      return e.response;
    });
    if (res === undefined) {
      return null;
    }

    let isSuccess = false;

    if (res.status === 201 || res.status === 200) {
      setJwtToken(res.data.jwtToken);
      isSuccess = true;
      toaster_success(res.data.message);
    } else {
      toaster_failure(res.data.message);
    }

    const responseData: SignInResponse = {
      isSuccess: isSuccess,
      message: res.data.message,
    };

    return responseData;
  };

  return {
    signIn,
  };
};

export default SignInModel;
