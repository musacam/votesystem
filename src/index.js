/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from './HomeScreen'
import CreateLink from './CreateLink'

Vue.use(Router)

const router = new Router({
	//To get rid of the hash, we can use the router's history mode, which leverages the history.pushState API to achieve URL navigation without a page reload:
	mode: 'history',
	routes: [
		{
			path: '/createlink',
			name: 'CreateLink',
			component: CreateLink,
			meta: {
			},
		},
		{
			path: '/',
			name: 'HomeScreen',
			component: HomeScreen,
			meta: {
			},
		},
		{
			path: '*',
			redirect: '/'
		},
	]
})

export default router;
