<template>
  <div class="home">
    <h6 style="margin: 0 auto; margin-bottom:5px">RECENT TWEETS</h6>
    <div v-for="(tweet, i) in tweets" :key="i">
      <Gig :tweet="tweet" />
      <!-- <Adsense v-if="i % 4 === 0 && i !== 0" /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Gig from '~/components/Gig.vue';
// import Adsense from '~/components/Adsense.vue';

export default {
  name: 'Home',
  components: {
    Gig
    // Adsense
  },
  computed: {
    tweets() {
      return this.$store.state.twitter.tweets;
    }
  },
  mounted() {
    const gwindow = window;
    (gwindow.adsbygoogle = gwindow.adsbygoogle || []).push({});
  },
  head() {
    return {
      title: '#GigTwitter'
    };
  }
};
</script>
