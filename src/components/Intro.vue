<template>
  <section>
    <p>Cash Runway is an important metric for any startup or business founder to know. It lets you know how long your business can run with your current capital and at your current burn rate.</p>
    <p>Too little runway can have huge implications for your business, whereas too much probably means you're not expanding as well as you can</p>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
  @import "../theme/variables";
  @import "../theme/media-queries";

  section {
    grid-area: main;
  }

  p {
    padding: 0 16px;
    color: $color-dark;
    font-family: $font-body;
    font-size: 18px;

    &:first-child {
      margin-top: 5px;
      padding-top: 0;
    }

    @include breakpoint(medium) {
      padding: 0;
      float: right;
      max-width: 400px;
    }
  }
</style>
