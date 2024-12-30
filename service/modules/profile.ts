import http, { BASER_URL } from "..";
import useAuthStore from "../../stores/auth";
import useShoppingCartStore from '../../stores/shopping-cart';

// -- 用户登录
export const fetchLogin = async (formData:{ 
	username:string, password:string
}) => {
	const res = await http.post('/login/client',formData,true)
	if(res.state === 200) { // -- 登录成功 → 存储 token 信息 → 跳转至用户信息页（在用户信息 profile 页中携带该 token 获取对应用户信息）
		// -- 存储 token 信息
		uni.setStorageSync('token', res.token)

		uni.showToast({ title:'登录成功\n即将跳转用户页' })
		
		useAuthStore().queryUserInfo() // -- 更新用户信息
		
		setTimeout(() => {
			uni.switchTab({ url:"/pages/profile/index" })
		}, 500)
	}else { // -- 登录失败
		console.log('登录失败:',res);
		uni.showToast({ title:'登录失败: ' + res.msg, icon:'error' })
	}
}

// -- 用户注册
export const fetchRegistryUser:(formData:any) => Promise<boolean> = async (formData) => {
	const res = await http.post("/user/registry/normal", formData, true)
	if(res.state === 200) {
		uni.showToast({ title:'注册成功，即将为您切换为登录页'})
		return true
	}else {
		uni.showToast({ title:'注册失败: ' + res.msg, icon:'error' })
		return false
	}
}

// -- 获取用户信息（根据登录 token 获取对应的用户信息）
export const fetchGetUserInfo = async () => { 
	const res = await http.get('/user/userinfo')
	if(res.state === 200) return res.data // -- 返回用户信息
	else uni.showToast({ title:'登录失败: ' + res.msg, icon:'error' })
}

// -- 修改用户头像
export const fetchUpdateUserAvatar = async (file: any) => { 
	const res = await http.uploadImage("/file/avatar","avatar",file.path,true) as any
	if(res.state && res.state === 200) {
		uni.showToast({ title: res.msg ?? '未知' })
		await useAuthStore().queryUserInfo() // -- 更新用户信息
	}else {
		uni.showToast({ title: '头像更新失败', icon:'error' })
	}
}

// -- 修改用户基本信息
export const fetchUpdateUserBaseInfo = async (formData) => {
	const { id, username, nickname, age, sex, name, id_card, phone, shop_name } = formData
	const res = await http.put("/user/userinfo", { id, username, nickname, age, sex, name, id_card, phone, shop_name }, true)
	if(res.state === 200) {
		uni.showToast({ title: res.msg })
		await useAuthStore().queryUserInfo() // -- 更新用户信息
	}else uni.showToast({ title: res.msg, icon:'error' })
}

// -- 申请商家用户
export const fetchApplyForMerchantUser = async (formData:any) => {
	const res = await http.post("/user/merchant",formData)
	if(res.state === 200) uni.showToast({ title: "已提交申请" })
	else uni.showToast({ title: res.msg, icon:'error' })
}

// -- 查询当前账号是否存在在商家申请注册表中 → 用户判断当前用户是否已经提交了商家用户的申请
export const fetchQueryUsernameInMerchantRegistryExist = async () => {
	const res = await http.get("/user/merchant/inregisry")
	return res?.data?.length > 0
}

// --  获取用户订单信息
export interface IOrderSubmitInfo {
	product_name: string
	product_desc: string
	product_price: number
	product_discount: string
	product_pics: string[]
	buy_count: number
	total_amount: string // -- 实付总价
	address: string // -- 订单地址（格式: "行政区地址→具体地址→收货姓名→手机号" ，再使用该接口时使用该格式来传递地址参数，后续再前台通过“→”来进行地址信息的划分格式化）
	customer_id: number // -- 购买用户id
	merchant_id: number // -- 商品所属商家id
	commodity_id: number // -- 商品id
}
export interface IOrderInfo extends Partial<IOrderSubmitInfo>{ 
	id?:number
	status?: string // -- 订单状态
	order_number?: string
}
export const fetchUserOrderList:() => Promise<IOrderInfo[]> = async () => {
	const res = await http.get("/order/client",{},true)
	if(res.state === 200) {
		// uni.showToast({ title: res.msg })
	}else uni.showToast({ title: res.msg, icon:'error' })
	return res.data ?? []
}

// -- 修改订单状态: 申请退款 → -1 : 撤销申请退款 → 0 : 确认收货 → 2
export const fetchUpdateOrderStatus:(order_id:number, status: "-1" | "0" | "2") => any = async (order_id,status) => {
	const res = await http.put("/order/status",{ order_id, status }, true)	
	return res
}
// -- 订单提交（商品购买）
export const fetchOrderSubmit:(orderData:IOrderSubmitInfo) => void = async (orderData) => {
	// -- 模拟订单的提交与支付
	uni.showLoading({title: "正在提交订单信息...", mask:true })
	setTimeout(() => {
		uni.hideLoading()
		uni.showLoading({title: "订单模拟支付中...", mask:true })
		setTimeout(async () => {
			uni.hideLoading()
			const res = await http.post("/order/submit", orderData, true) // -- 订单提交
			if(res.state == 200) {
				uni.showToast({ title: "购买成功\r即将为您跳转至订单页面" })
				setTimeout(() => {
					uni.navigateTo({ url:"/pages/view/order/index" })
				},600)
			} else uni.showToast({ title: res.msg })
		},1000)
	}, 800)
} 

// -- 批量订单提交
export const fetchOrderSubmitMultiple:(orderDatas:IOrderSubmitInfo[]) => Promise<any> = async (orderDatas) => {
	return new Promise((resolve,reject) => {
		uni.showLoading({title: "正在提交所有订单信息...", mask:true })
		setTimeout(() => {
			uni.hideLoading()
			uni.showLoading({title: "订单模拟支付中...", mask:true })
			setTimeout(async () => {
				uni.hideLoading()
				const fetchs = []
				orderDatas.forEach(orderData => { // -- 遍历订单提交
					fetchs.push(http.post("/order/submit", orderData, true))
				})
				const results = await  Promise.all(fetchs) // -- 同意发起所有请求
				console.log("results:",results);
				useShoppingCartStore().deleteEmptyOfShoppingCart() // -- 购买成功，清空购物车
				if(results[0]?.state == 200) {
					uni.showToast({ title: "购买成功\r即将为您跳转至订单页面" })
					resolve("success")
					setTimeout(() => {
						uni.navigateTo({ url:"/pages/view/order/index" })
					},600)
				} else uni.showToast({ title: results[0]?.msg })
			},1200)
		}, 1000)
	})
}


