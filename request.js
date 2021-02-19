import config from '@/config'
import const_val from "@/utils/Const"

export default function axios(request) {
	if ('url' in request) {
		let url = request['url']
		if (url.startsWith('/')) {
			request['url'] = config.we_appRequest + url.substr(1)
		} else {
			request['url'] = config.we_appRequest + url
		}
	}

	// 获取token
	let token = uni.getStorageSync(const_val.TOKEN)
	if (token) {
		if ('headers' in request) {
			request['header'] = request['headers']
		} else {
			request['header'] = {}
		}
		request['header']['Authorization'] = 'Bearer ' + token
	} else {
		if ('headers' in request) {
			request['header'] = request['headers']
		} else {
			request['header'] = {}
		}
	}
	delete request['headers']
	
	if(Object.prototype.toString.call(request['data']) == '[object FormData]') {
		let newData = {}
		let it = request['data'].entries()
		while (true) {
			let entry = it.next()
			if (entry['done']) {
				break
			} else {
				newData[entry['value'][0]] = entry['value'][1]
			}
		}
		request['data'] = newData
		request['header']['Content-Type'] = 'application/x-www-form-urlencoded'
	}
	
	return uni.request(request)
}
// axios
