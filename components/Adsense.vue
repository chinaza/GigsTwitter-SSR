<template>
  <div class="box constrained-box tw-card" style="width:100%">
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-format="fluid"
      data-ad-layout-key="-gg-2m-29-3h+ys"
      data-ad-client="ca-pub-8522455793322408"
      data-ad-slot="2134179299"
    ></ins>
  </div>
</template>

<script>
export default {
  name: 'Adsense',
  mounted() {
    const adScript = document.createElement('script');
    adScript.innerHTML = `
    (adsbygoogle = window.adsbygoogle || []).push({});
    `;
    document.getElementById('adsense-scripts').appendChild(adScript);
  }
};
</script>

<style scoped>
.box {
  margin-bottom: 10px;
}
</style>
