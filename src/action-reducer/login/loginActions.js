import * as loginConstants from './loginConstants';

export const LoginaAction = (value) => ({
  type: loginConstants.LOGIN,
  payload: value,
});
