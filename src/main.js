/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './index'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import Vuetify from 'vuetify'

import VueToastify from "vue-toastify";
Vue.use(VueToastify)

import VueConfirmDialog from 'vue-confirm-dialog'
Vue.use(VueConfirmDialog)

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
	  this.$store.commit('initialiseStore');
  },
});
