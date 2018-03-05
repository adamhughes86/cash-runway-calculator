// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Heading from './components/Heading'
import Intro from './components/Intro'
import Calculator from './components/Calculator'
import Results from './components/Results'
import Runway from './components/Runway'
import Footer from './components/Footer'

Vue.component('app-heading', Heading)
Vue.component('app-intro', Intro)
Vue.component('app-calculator', Calculator)
Vue.component('app-results', Results)
Vue.component('app-runway', Runway)
Vue.component('app-footer', Footer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
