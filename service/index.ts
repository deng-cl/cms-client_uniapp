interface Options {
	url: string
	data?: any
	method?: "GET" | "POST" | "PUT" | "DELETE"
	headers?: any
	timeout?: any
	showLoading?:boolean
}

interface ObjectType { [K : string] : any }

export const BASER_URL = "http://localhost:3000" 

class H_HTTP {
	get(url:string, data?: ObjectType,showLoading?:boolean, headers?:ObjectType) {
		return this.request({ url, method: "GET", data, headers, showLoading })
	}
	
	post(url:string, data?: ObjectType,showLoading?:boolean, headers?:ObjectType) {
		return this.request({ url, method: "POST", data, headers, showLoading })
	}
	
	put(url:string, data?: ObjectType,showLoading?:boolean, headers?:ObjectType) {
		return this.request({ url, method: "PUT", data, headers, showLoading })
	}
	
	delete(url:string, data?: ObjectType,showLoading?:boolean, headers?:ObjectType) {
		return this.request({ url, method: "DELETE", data, headers, showLoading })
	}
	
	request({ url, method = 'GET', data = {}, headers = {}, timeout = 10000 , showLoading = false} : Options ): Promise<any> {
		return new Promise((resolve,reject) => {
			if(showLoading) uni.showLoading({ mask:true })
					
			uni.request({
				url: BASER_URL + url,
				method,
				data,
				header: {
					...headers,
					'Authorization': `Bearer ${uni.getStorageSync('token')}`
				},
				timeout,
				success:(res => {
					if (res.statusCode === 200) {
						resolve(res.data);
					} else {
						reject(new Error(`Error: ${res.statusCode} - ${res.errMsg}`));
					}
				}),
	            fail: (err) => {
	                // reject(new Error(`Request failed: ${err.errMsg}`));
	                reject(err);
	            },
				complete() {
					if(showLoading) uni.hideLoading()
				}
			})
		})
	}
	
	uploadImage( // -- 图片上传方法
		url:string, 
		name:string, // -- 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
		filePath:string, // -- 要上传文件资源的路径(临时路径)
		showLoading:boolean = false,
		headers?: any
	){
		return new Promise((resolve,reject) => {
			if(showLoading) uni.showLoading({ mask:true })
			uni.uploadFile({
				url: BASER_URL + url,
				name, filePath,
				fileType: "image",
				header: {
					...headers,
					'Authorization': `Bearer ${uni.getStorageSync('token')}`
				},
				success:(res => {
					if (res.statusCode === 200) {
						resolve(JSON.parse(res.data));
					} else {
						reject(new Error(`Error: ${res.statusCode} - ${res.errMsg}`));
					}
				}),
	            fail: (err) => {
	                reject(err);
	            },
				complete() {
					if(showLoading) uni.hideLoading()
				}
			})
		})
	}
} 

const http = new H_HTTP()

export default http

