import state from './state';
import actions from './actions';
import mutations from './mutations';

const auth = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export default auth;
