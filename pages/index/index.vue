<template>
  <div class="home">
    <h6 style="margin: 0 auto; margin-bottom:5px">RECENT TWEETS</h6>
    <div v-for="(tweet, i) in tweets" :key="i">
      <Gig :tweet="tweet" />
      <Adsense v-if="i % 6 === 0 && i !== 0" />
    </div>
  </div>
</template>

<script>
import Gig from '~/components/Gig.vue';
import Adsense from '~/components/Adsense.vue';

export default {
  name: 'Home',
  components: {
    Gig,
    Adsense
  },
  computed: {
    tweets() {
      return this.$store.state.twitter.tweets;
    }
  },
  head() {
    return {
      title: '#GigsTwitter - Curated job vacancies from twitter'
    };
  }
};
</script>
