<template>
  <div class="box constrained-box tw-card">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img
            :src="tweet.user.profile_image_url"
            class="rounded"
            alt="Image"
          />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p class="no-margin">
            <span
              ><strong>{{ tweet.user.name }}</strong></span
            >
            <small style="float:right">31m ago</small>
          </p>
          <p>
            {{ tweet.text }}
          </p>
        </div>
        <div class="buttons">
          <button
            v-if="tweet.entities.urls.length > 0"
            class="button is-primary"
            @click="openGig(tweet.entities.urls[0].url, tweet.id_str)"
          >
            Apply
          </button>
          <button
            class="button is-secondary"
            @click="
              openGig(
                `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`,
                tweet.id_str
              )
            "
          >
            View Tweet
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Twitter from '~/services/twitter';

export default {
  name: 'Gig',
  props: ['tweet'],
  data() {
    return {
      twitter: new Twitter()
    };
  },
  methods: {
    openGig(link, id) {
      if (window && window.gtag)
        window.gtag('event', 'view_item', {
          event_category: 'engagement',
          event_label: link
        });

      window.open(link, '_blank');
      try {
        this.twitter.logTweet(id);
      } catch (error) {}
    }
  }
};
</script>
<style scoped>
.box {
  margin-bottom: 10px;
}
</style>
