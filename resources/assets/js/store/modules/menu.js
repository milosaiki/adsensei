const state = {
  isMenuOpen: true
}

const mutations = {
  menuToggle(state) {    
    state.isMenuOpen = !state.isMenuOpen;
  }
};

const actions = {

};

const getters = {
  isMenuOpen: state => {
    return state.isMenuOpen;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}