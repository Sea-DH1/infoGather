// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import fullCalendar from 'vue-fullcalendar'

Vue.config.productionTip = false
Vue.component('full-calendar', fullCalendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
