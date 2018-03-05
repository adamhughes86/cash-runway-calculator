<template>
  <section>
    <h2 v-if="displayResultsCheck === true">{{ runway }} months runway</h2>
    <h3 v-if="displayResultsCheck === true">{{ runwayEndDate }}</h3>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Results',

  props: [
    'runway'
  ],

  data () {
    return {
      runwayEndDate: null,
      displayResultsCheck: {
        type: Boolean,
        default: false
      }
    }
  },

  watch: {
    runway: function () {
      this.displayResults()
      this.calculateDate()
    }
  },

  methods: {
    displayResults () {
      if (this.runway) {
        this.displayResultsCheck = true
      }
    },

    calculateDate () {
      if (this.runway === Infinity) {
        this.runwayEndDate = 'You can go until the end of time'
      } else {
        const now = moment()
        this.runwayEndDate = moment(now).add(this.runway, 'M').format('MMMM YYYY')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../theme/style";

  section {
    grid-area: results;
    min-height: 120px;
    text-align: center;
  }

  h2 {
    margin: 16px 0 0;
    color: $color-dark;
    font-family: $font-heading;
    font-size: 34px;
    font-weight: 800;
  }

  h3 {
    margin: 0 0 16px 0;
    color: $color-dark;
    font-family: $font-body;
    font-size: 24px;
  }
</style>
