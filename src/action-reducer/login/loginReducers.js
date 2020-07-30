import * as loginConstants from './loginConstants';

const initialState = {
  login: false,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    default:
      return state;
  }
}
