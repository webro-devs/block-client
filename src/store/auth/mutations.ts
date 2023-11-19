import { AuthStateInterface } from './state';

const mutation = {
  setAuth(state: AuthStateInterface, token: string) {
    state.isAuth = true;
    state.token = token;
  },
};

export default mutation;
