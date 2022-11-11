import { REGISTRATION } from "../Actions/types";
const INITIAL_STATE = {
  registerState: {
    name: "",
    address: "",
    email: "",
    occupation: "",
    gender: "",
    searchType: "",
    password: "",
    arr: [],
  },
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION:
      return { ...state, registerState: action.payload };
    default:
      return state;
  }
};

export default formReducer;
