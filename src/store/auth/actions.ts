import { Commit } from 'vuex';
import { authService } from 'src/service';
import { SignInDto, SignUpDto } from '../../models/user.model';

const actions = {
  async signup({ commit }: { commit: Commit }, data: SignUpDto) {
    try {
      const token = await authService.signUp(data);
      commit('setAuth', token);
    } catch (err) {
      console.log(err);
    }
  },
  async signin({ commit }: { commit: Commit }, data: SignInDto) {
    try {
      const token = await authService.signIn(data);
      commit('setAuth', token);
    } catch (err) {
      console.log(err);
    }
  },
};

export default actions;
