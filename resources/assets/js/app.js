
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const router = new VueRouter({
	mode: 'history'
});

const app = new Vue(Vue.util.extend({
	router
})).mount('#app');
