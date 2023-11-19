export interface AuthStateInterface {
  isAuth: boolean;
  token: string;
}

function state() {
  return {
    isAuth: false,
    token: null,
  };
}

export default state;
