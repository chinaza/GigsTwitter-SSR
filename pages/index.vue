<template>
  <div class="main">
    <div class="container">
      <nav
        class="navbar is-primary is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" style="padding-left:20px" @click="submitQ()">
            <img src="/img/logo.png" class="nav-logo" />
          </a>

          <div
            class="navbar-item"
            style="position:absolute; left:60px; right:20px;"
          >
            <div class="field" style="width:100%">
              <p class="control has-icons-left">
                <input
                  v-model="q"
                  class="input"
                  type="text"
                  placeholder="Role (e.g. Customer Service)"
                  @keyup="submitQ($event)"
                />
                <span class="icon is-left">
                  <i class="icon ion-md-search"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nuxt-child />
    </div>

    <progress
      v-if="isLoading"
      class="progress app-loader is-small is-danger"
      max="100"
      >80%</progress
    >
    <nav
      class="navbar is-light is-fixed-bottom"
      role="navigation"
      aria-label="main navigation"
      @click="submitQ()"
    >
      <div class="navbar-item has-text-centered" style="width:100%;">
        <h4 class="has-text-centered" style="margin: 0 auto">#GigsTwitter</h4>
      </div>
    </nav>
    <Alert />
  </div>
</template>

<script>
import Twitter from '~/services/twitter';
import Loc from '~/services/location';
import Alert from '~/components/Alert.vue';

export default {
  components: {
    Alert
  },
  data() {
    return {
      q: '',
      pos: null,
      twitter: new Twitter()
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },

  async asyncData({ route, store }) {
    try {
      const q = route.params.q || '';

      const twitter = new Twitter();
      const tweets = await twitter.loadData(q);

      store.commit('twitterQ', q);
      store.commit('tweets', tweets);

      return tweets;
    } catch (error) {
      store.dispatch('toggleAlert', {
        isOpen: true,
        message: error.message
      });
    }
  },

  async mounted() {
    try {
      this.$store.commit('isLoading', true);

      this.q = this.$route.query.q || '';
      this.pos = await Loc.getLatLng();

      const twitter = new Twitter(this.pos);
      this.tweets = await twitter.loadData(this.q);

      this.$store.commit('twitterQ', this.q);
      this.$store.commit('setPos', this.pos);
      this.$store.commit('tweets', this.tweets);

      this.$store.commit('isLoading', false);
    } catch (error) {
      this.$store.commit('isLoading', false);
      this.$store.dispatch('toggleAlert', {
        isOpen: true,
        message: error.message
      });
    }
  },

  methods: {
    async submitQ(e) {
      if (!e || e.key.toLowerCase() === 'enter') {
        this.$store.commit('isLoading', true);

        if (window && window.gtag)
          window.gtag('event', 'view_search_results', {
            event_category: 'engagement',
            event_label: this.q
          });

        try {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          this.$store.commit('twitterQ', this.q);
          const tweets = await this.twitter.loadData(this.q);
          this.$store.commit('tweets', tweets);
          this.$store.commit('isLoading', false);
        } catch (error) {
          this.$store.commit('isLoading', false);
          this.$store.dispatch('toggleAlert', {
            isOpen: true,
            message: error.message
          });
        }
      }
    }
  }
};
</script>
