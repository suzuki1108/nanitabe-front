import { createToaster } from "@meforma/vue-toaster";

const success = createToaster({
  type: "success",
  position: "top",
  duration: 3000,
});

const failure = createToaster({
  type: "error",
  position: "top",
  duration: 3000,
});

export const toaster_success = (message: string | string[]): void => {
  if (Array.isArray(message)) {
    message.forEach((item) => success.show(item));
  } else {
    success.show(message);
  }
};

export const toaster_failure = (message: string | string[]): void => {
  if (Array.isArray(message)) {
    message.forEach((item) => failure.show(item));
  } else {
    failure.show(message);
  }
};
