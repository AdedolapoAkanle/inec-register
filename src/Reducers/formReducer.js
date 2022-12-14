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
    partyName: "",
    partySlogan: "",
    partyColor: "",
    partyImage: "",
    candidateName: "",
    candidateDob: "",
    candidateParty: "",
    candidateGender: "",
    candidatePosition: "",
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
