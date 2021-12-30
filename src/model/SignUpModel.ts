/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import { config } from "@/constants/const";
import { AxiosError } from "axios";
import { setJwtToken } from "@/model/LocalStorageModel";
import { Form } from "@/model/FormModel";
import { toaster_success, toaster_failure } from "@/model/ToasterModel";

const signUpRepository = RepositoryFactory.get(config.ACCOUNT_REGISTER_API);

export interface SignUpResponse {
  isSuccess: boolean;
  message: string[];
}

const SignUpModel = (): any => {
  const signUp = async (param: Form) => {
    const res = await signUpRepository.post(param).catch((e: AxiosError) => {
      return e.response;
    });
    if (res === undefined) {
      toaster_failure(config.UNEXPECTED_ERROR_MSG);
      return null;
    }

    let isSuccess = false;

    if (res.status === 201) {
      setJwtToken(res.data.jwtToken);
      isSuccess = true;
      toaster_success(res.data.message);
    } else {
      toaster_failure(res.data.message);
    }

    const responseData: SignUpResponse = {
      isSuccess: isSuccess,
      message: res.data.message,
    };

    return responseData;
  };

  return {
    signUp,
  };
};

export default SignUpModel;
