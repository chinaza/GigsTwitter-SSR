import Twitter from '../services/twitter';

export const state = () => ({
  twitter: {
    q: '',
    tweets: []
  },
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
  }
};

export const actions = {
  toggleAlert({ commit, state }, payload) {
    if (!payload) payload = { isOpen: !state.alert.isOpen, message: '' };
    commit('setAlert', payload);
  },
  async fetchGigs({ commit, q = '', pos = {} }) {
    try {
      commit('twitterQ', q);
      const twitter = new Twitter(pos);
      const tweets = await twitter.loadData(q);
      commit('tweets', tweets);
      return tweets;
    } catch (error) {}
  }
};
