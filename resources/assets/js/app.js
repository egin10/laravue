require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';

Vue.component('app', require('./App.vue'));

const routes = [
	{
		name: 'posts',
		path: '/',
		component: IndexComponent
	},
	{
		name: 'create',
		path: '/create',
		component: CreateComponent
	},
	{
		name: 'edit',
		path: '/edit/:id',
		component: EditComponent
	}
];

const router = new VueRouter({ 
	mode: 'history',
	routes: routes 
});
const app = new Vue(Vue.util.extend({ router })).$mount('#app');
