export const state = () => ({
  twitter: {
    q: '',
    tweets: []
  },
  pos: null,
  alert: {
    isOpen: false,
    message: ''
  },
  isLoading: false
});

export const mutations = {
  tweets(state, tweets) {
    state.twitter.tweets = tweets;
  },
  twitterQ(state, q) {
    state.twitter.q = q;
  },
  isLoading(state, loading) {
    state.isLoading = loading;
  },
  setAlert(state, payload) {
    state.alert = payload;
  },
  setPos(state, payload) {
    state.pos = payload;
  }
};

export const actions = {
  toggleAlert({ commit, state }, payload) {
    if (!payload) payload = { isOpen: !state.alert.isOpen, message: '' };
    commit('setAlert', payload);
  }
};
