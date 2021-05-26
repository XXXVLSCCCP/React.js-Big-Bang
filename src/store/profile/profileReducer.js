import { CHANGE_NAME } from "./profileTypes";

const initialName = {
  name: "no name",
};

const profileReducer = (state = initialName, action) => {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
