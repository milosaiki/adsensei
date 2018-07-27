import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import { routes } from './routes';
import { store } from './store/store';
import VueBreadcrumbs from 'vue-breadcrumbs';
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
import VModal from 'vue-js-modal';
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import lightbox from 'vlightbox';

window.Vue = require('vue');
window.axios = axios;

/* var options = {
    persist: true
} */

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);
Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCj-uArwNFniTUsX_USY30pXu2l0v-Z-vU'
    }
  });
Vue.use(Loading);
Vue.use(VModal);
Vue.use(Slick);
Vue.use(lightbox);

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('removeHTMLTags', function (text) {
  return text ? String(text).replace(/<[^>]+>/gm, '') : '';
});

Vue.filter('truncate', function (text, charNum = 100) {
  return text.slice(0, charNum) + (charNum < text.length ? '...' : '')
});

Vue.filter('utfDecode', function (text) {
  return decodeURIComponent(text);
});

Vue.filter('formatDate', (date) => {
  var result = date.split(" ");
  var date = result[0].split("-");
  var time = result[1].split(":");
  return date[2] + '.' + date[1] + '.' + date[0] + ' ' + time[0] + ':' + time[1];
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

const app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  }
});
