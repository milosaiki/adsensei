import Vue from 'vue';
import VueRouter from 'vue-router';
import AppAdmin from './AppAdmin.vue';
import axios from 'axios';
import { routes } from './adminRoutes';
import { store } from './store/store';
import VueBreadcrumbs from 'vue-breadcrumbs';
import VueResource from 'vue-resource';
import tinymce from 'vue-tinymce-editor';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
//import Datepicker from 'vuejs-datepicker';
import DatePicker from 'vue2-datepicker'

window.Vue = require('vue');
window.axios = axios;

/* var options = {
    persist: true
} */

Vue.use(VueRouter);
Vue.use(VueBreadcrumbs);
Vue.use(VueResource);
Vue.use(Loading);
//Vue.use(Datepicker);
Vue.use(DatePicker);

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('removeHTMLTags', function (text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
});

Vue.filter('truncate', function (text) {
    return text.slice(0, 100) + (100 < text.length ? '...' : '')
});

Vue.filter('utfDecode', function(text) {
    return decodeURIComponent(text);
});

Vue.filter('formatdate', function (date) {
    var result = date.split("-");
    return result[2] + '.' + result[1] + '.' + result[0];
});

Vue.component('tinymce', tinymce)

const router = new VueRouter({
    routes,
    mode: 'history'
});

const app = new Vue({
    el: '#appAdmin',
    router,
    store,
    components: {
        AppAdmin
    }
});
