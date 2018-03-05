<template>
  <svg v-bind:width="widthForSVG" height="110" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="runway-svg" fill="none" fill-rule="evenodd">
      <g id="runway">
        <g id="main">
          <rect stroke="#37474F" id="main-runway" stroke-width="5" fill="#78909C" x="2.5" y="2.5" v-bind:width="widthForMain" height="105" rx="4"/>
          <g id="marking-bottom" transform="translate(5 95)" >
            <rect id="marking-bottom--dark" fill="#FFAB00" x="0" y="5" height="5" v-bind:width="widthForBorder"/>
            <rect id="marking-bottom--yellow" fill="#37474F" x="0" y="0" height="5" v-bind:width="widthForBorder"/>
          </g>
          <g id="marking-top" transform="translate(5 5)">
            <rect id="marking-top--dark" fill="#FFAB00" x="0" y="0" height="5" v-bind:width="widthForBorder"/>
            <rect id="marking-top--yellow" fill="#37474F" x="0" y="5" height="5"  v-bind:width="widthForBorder"/>
          </g>
        </g>
        <g transform="translate(2 52)" id="markings-center" fill-rule="nonzero">
          <g id="markings-1">
            <g id="Group" transform="rotate(90 7 7)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 22 22)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 37 37)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 52 52)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
          </g>
          <g id="markings-2" transform="translate(120)">
            <g id="Group" transform="rotate(90 7 7)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 22 22)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 37 37)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 52 52)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 67 67)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
          </g>
          <g id="markings-3" transform="translate(270)">
            <g id="Group" transform="rotate(90 7 7)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 22 22)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 37 37)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 52 52)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 67 67)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
          </g>
          <g id="markings-4" transform="translate(420)">
            <g id="Group" transform="rotate(90 7 7)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 22 22)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 37 37)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 52 52)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
            <g id="Group" transform="rotate(90 67 67)">
              <path d="M2 2v10" id="Shape" fill="#FFECB3"/>
              <path d="M2 14c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0s2 .9 2 2v10c0 1.1-.9 2-2 2z" id="Shape" fill="#37474F"/>
            </g>
          </g>
        </g>
        <g id="airplane" transform="rotate(90 48 54)" fill-rule="nonzero">
          <g id="Group" transform="translate(0 24)">
            <g id="Shape">
              <path fill="#FFF" d="M2.4 26.2L43.7 2.4l2 19-.9 3.3-42.4 6.5z"/>
              <path d="M2.4 33.2c-.5 0-.9-.2-1.3-.5-.4-.4-.7-.9-.7-1.5v-5.1c0-.7.4-1.4 1-1.7L42.7.7c.6-.3 1.3-.4 1.9 0 .6.3 1 .9 1.1 1.6l2.1 19c0 .2 0 .5-.1.7l-.9 3.3c-.2.8-.8 1.3-1.6 1.4L2.7 33.2h-.3zm2-5.9v1.6l38.9-6 .5-1.7L42 5.7 4.4 27.3z" fill="#37474F"/>
            </g>
            <g id="Shape">
              <path fill="#FFF" d="M46 26.2L4.9 2.4 3 21.4l.7 3.3L46 31.2z" transform="translate(48)"/>
              <path d="M46 33.2h-.3L3.4 26.7c-.8-.1-1.5-.7-1.6-1.5L1 21.9c0-.2-.1-.4 0-.6l2-19c.1-.7.5-1.3 1.1-1.6C4.7.4 5.4.4 6 .7l41 23.8c.6.4 1 1 1 1.7v5.1c0 .6-.3 1.1-.7 1.5-.4.3-.8.4-1.3.4zM5.4 22.9l38.6 6v-1.6L6.6 5.7 5 21.3l.4 1.6z" fill="#37474F" transform="translate(48)"/>
            </g>
          </g>
          <g id="Group" transform="translate(31)">
            <path d="M21.3 80.2L32 82.7v-4.8L20.8 64.8l-.8.3v-.4c1-1.8 1.5-5.9 1.5-8.2L23.7 12c0-1.3-.5-2.6-1.4-3.5 0-3.3-2.2-6-4.9-6-2.8 0-5 2.7-5 6-.8.9-1.4 2.2-1.4 3.5l2.3 44.5c0 2.2-.4 6.3 1.6 8.2v.4l-1-.3L2.6 78v4.8l10.8-2.5" id="Shape" fill="#FFF"/>
            <path d="M32 84.7c-.2 0-.3 0-.5-.1l-10.7-2.5c-1.1-.3-1.7-1.3-1.5-2.4.3-1.1 1.3-1.7 2.4-1.5l8.3 1.9v-1.5L20.2 67c-.4 0-.9-.1-1.3-.3-.6-.4-.9-1-.9-1.7v-.4c0-.3.1-.7.2-1 .7-1.3 1.3-4.9 1.3-7.2l2.2-44.6c0-.9-.5-1.6-.9-2.1s-.6-1.1-.5-1.6c-.1-2-1.4-3.7-2.9-3.7-1.6 0-2.9 1.7-3 3.9 0 .4-.1.8-.3 1.2-.1.1-.1.2-.2.3-.4.4-.9 1.2-.9 2.1l2.3 44.5v1.1c0 1.8-.1 4.7 1 5.7.4.4.6.9.6 1.5v.4c0 .6-.3 1.3-.8 1.6-.4.3-1 .4-1.5.3l-10 11.6v1.5l8.3-1.9c1.1-.3 2.2.4 2.4 1.5.2 1.1-.4 2.2-1.5 2.4L3 84.6c-.6.1-1.2 0-1.7-.4s-.8-1-.8-1.6v-4.8c0-.5.2-.9.5-1.3l11-12.8c-.8-2.1-.8-4.6-.7-6.4v-.9L9 12v-.1c0-1.5.5-3 1.4-4.2.3-4.1 3.3-7.3 6.9-7.3 3.6 0 6.6 3.2 6.9 7.3.9 1.2 1.4 2.7 1.4 4.2l-2.2 44.6c0 1.8-.3 4.8-1 7.1l11 13c.3.4.5.8.5 1.3v4.8c0 .6-.3 1.2-.8 1.6-.2.3-.7.4-1.1.4z" id="Shape" fill="#37474F"/>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Runway',

  props: [
    'runway'
  ],

  data () {
    return {
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      widthForSVG: 126,
      widthForMain: 121,
      widthForBorder: 116
    }
  },

  watch: {
    runway: function () {
      this.calculateAnimationStep(this.runway)
      this.changeSVGWidths()
    }
  },

  methods: {
    calculateAnimationStep (runway) {
      if (runway <= 1) {
        this.step1 = true
        this.step2 = false
        this.step3 = false
        this.step4 = false
      } else if (runway > 1 && runway < 4) {
        this.step1 = true
        this.step2 = true
        this.step3 = false
        this.step4 = false
      } else if (runway >= 4 && runway < 8) {
        this.step1 = true
        this.step2 = true
        this.step3 = true
        this.step4 = false
      } else if (runway >= 9) {
        this.step1 = true
        this.step2 = true
        this.step3 = true
        this.step4 = true
      }
    },

    changeSVGWidths () {
      if (this.step4) {
        // console.log('Step 4 is true')
        this.widthForSVG = 582
        this.widthForMain = 576
        this.widthForBorder = 571
      } else if (this.step3) {
        // console.log('Step 3 is true')
        this.widthForSVG = 431
        this.widthForMain = 426
        this.widthForBorder = 421
      } else if (this.step2) {
        // console.log('Step 2 is true')
        this.widthForSVG = 281
        this.widthForMain = 276
        this.widthForBorder = 271
      } else if (this.step1) {
        // console.log('Step 1 is true')
        this.widthForSVG = 126
        this.widthForMain = 121
        this.widthForBorder = 116
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  svg {
    grid-area: svg;
    margin: 0 auto;
    transition: width 0.4s ease-out;
  }

  #main-runway,
  #marking-top--dark,
  #marking-top--yellow,
  #marking-bottom--dark,
  #marking-bottom--yellow {
    transition: width 0.4s ease-out;
  }

  #airplane {
    animation-name: airplane-land;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }

  @keyframes airplane-land {
    0% {
      transform: scale(1.05) rotateZ(90deg) translateX(6px) translateY(0px);
    }
    20% {
      transform: scale(1.05) rotateZ(90deg) translateX(6px) translateY(0px);
    }
    30% {
      transform: scale(1) rotateZ(90deg) translateX(6px) translateY(-106px);
    }
    80% {
      transform: scale(1) rotateZ(90deg) translateX(6px) translateY(-106px);
    }
    100% {
      transform: scale(1.2) rotateZ(90deg) translateX(6px) translateY(-606px);
    }
  }
</style>
