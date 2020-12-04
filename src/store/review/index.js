// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }
const state = {
  activeTabIndex: 0,
};

const getters = {
  activeTabIndex(state) {
    return state.activeTabIndex;
  }
};

const actions = {
  setActiveTabIndex({ commit }, index) {
    commit(SetActiveTabIndex, index);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  SetActiveTabIndex(state, index) {
    state.activeTabIndex = index;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
