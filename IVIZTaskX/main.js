import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import uViewPlus from '@/uni_modules/uview-plus'
import request from '@/utils/request.js'
import store from '@/store'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uViewPlus)
	app.use(store)
	request(store)
	return {
		app
	}
}
// #endif