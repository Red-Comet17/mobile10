import {
	createStore
} from 'vuex'
const store = createStore({
	state: {
		$token: uni.getStorageSync('token') || "",
	},
	mutations: {
		setToken(state, payload) {
			state.$token = payload.token
		}
	},
	actions: {
		setToken(context, payload) {
			context.commit('setToken', payload)
			return uni.setStorageSync({
				key: "token",
				data: payload.token
			})
		}
	}
})

export default store