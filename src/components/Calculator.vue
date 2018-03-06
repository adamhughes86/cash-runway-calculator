<template>
  <section>
    <div class="inner">
      <label for="balance">Your current balance:</label>
      <input id="balance" type="number" @blur="saveBalance"/>

      <label for="burn-rate">Burn Rate:</label>
      <input id="burn-rate" type="number" @blur="saveBurnRate"/>

      <button class="submit" @click="calculate"><span>Calculate</span></button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Calculator',

  data () {
    return {
      balance: 0,
      burnRate: 0
    }
  },

  methods: {
    saveBalance (event) {
      if (event.target.value === '') {
        this.balance = 0
      } else {
        this.balance = event.target.value
      }
    },

    saveBurnRate (event) {
      if (event.target.value === '') {
        this.burnRate = 0
      } else {
        this.burnRate = event.target.value
      }
    },

    calculate () {
      const runway = Math.round(Number(this.balance) / Number(this.burnRate))
      if (isNaN(runway)) {
        this.$emit('calculated', 0)
      } else {
        this.$emit('calculated', runway)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../theme/variables";
  @import "../theme/media-queries";

  section {
    grid-area: calculator;
    padding: 16px;
    margin-bottom: 16px;
    background-color: $color-dark;
    border-color: $color-accent;
    border-style: solid;
    border-width: 5px 0 5px 0;

    @include breakpoint(medium) {
      border-radius: 6px 0 0 6px;
      border-width: 5px 0 5px 5px;
    }
  }

  .inner {
    display: grid;
    max-width: 300px;
    grid-gap: 16px;
    grid-template-columns: 140px 1fr;
    align-items: center;
  }

  label {
    color: #fff;
    font-family: $font-body;
    font-size: 15px;
    text-align: right;
    cursor: pointer;
  }

  input {
    padding: 3px;
    color: #fff;
    font-family: $font-body;
    font-size: 16px;
    background-color: transparent;
    border-color: $color-light;
    border-style: dashed;
    border-width: 0 0 3px 0;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
    transition-property: background-color, border-color;

    &:focus {
      background-color: $color-light;
      border-color: $color-accent;
      outline: none;
    }
  }

  button {
    position: relative;
    grid-column-end: -1;
    padding: 8px;
    margin-top: 16px;
    color: #fff;
    font-weight: 800;
    font-family: $font-heading;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    background-color: $color-light;
    border: 0;
    cursor: pointer;
    transition: color 0.4s ease-out, top 0.4s ease-out;

    @supports(display: grid) {
      margin: 0;
    }

    span {
      position: relative;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: calc(100% - 3px);
      right: 0;
      bottom: 0;
      left: 0;
      background-color: $color-accent;
      z-index: 1;
      transition: top 0.2s ease-in;
    }

    &:hover,
    &:focus {
      color: $color-dark;

      &::after {
        top: 0;
      }
    }
  }
</style>
