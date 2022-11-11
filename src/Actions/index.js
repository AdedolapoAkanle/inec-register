import { REGISTRATION } from "./types";

export const RegistrationAction = (param) => {
  return {
    type: REGISTRATION,
    payload: param,
  };
};
