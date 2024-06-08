export const request = (vm) => {
	uni.$u.http.setConfig((config) => {
		config.baseURL = 'http://192.168.1.100:8080/zh-admin'
		return config
	})
	uni.$u.http.interceptors.request.use((config) => {
		config.data = config.data || {}
		config.header.Authorization = vm.state.$token ?? uni.getStorageSync('token') ?? ''
		return config
	}, config => {
		return Promise.reject(config)
	})
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data
		const custom = response.config?.custom
		if (data.code !== 200) {
			if (custom?.catch) {
				return Promise.reject(data)
			} else {
				return data
			}
		}
		return data.data === undefined ? data : data.data
	}, (response) => {
		return Promise.reject(response)
	})
}
export default request