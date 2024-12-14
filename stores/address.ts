import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import useAuthStore from './auth'

export interface IAddress {
	address: string // -- 行政区地址
	specific: string // -- 更具体的地址
	nickname: string // -- 收货人名称
	phone: string // -- 收货人手机
	createTime: number
	updateTime: number
}

const useAddressStore = defineStore('address', () => {
	const STOREAGE_KEY = computed(() => `${useAuthStore().userInfo?.username}:addresses`) 
	const addresses = ref<IAddress[]>([])
	
	const getRefreshAddresses = async () => { // -- 获取本地存储的地址信息
		if(!useAuthStore().userInfo?.username) await useAuthStore().queryUserInfo()
		addresses.value = uni.getStorageSync(STOREAGE_KEY.value)
	}
	
	function setLocalAddress(address: IAddress){ // -- 设置某一个地址
		if(!useAuthStore().userInfo?.username) return
		// -- 添加新的地址信息到本地存储中 → ↓ 更新 store 中的 addresses 状态
		uni.setStorageSync(STOREAGE_KEY.value,  [address, ...addresses.value]) 
		addresses.value = uni.getStorageSync(STOREAGE_KEY.value)
		uni.showToast({ title: "地址添加成功" })
	}
	
	function updateAddress(index:number, address:IAddress){ // -- 修改某一地址
		if(!useAuthStore().userInfo?.username) return
		const newAddresses = [...addresses.value]
		newAddresses[index] = address
		uni.setStorageSync(STOREAGE_KEY.value, newAddresses) 
		// -- 更新 store 中的 addresses 地址信息
		uni.showToast({ title: "地址修改成功" })
		getRefreshAddresses()
	}
	
	function deleteAddress(index:number) { // -- 删除某一地址
		if(!useAuthStore().userInfo?.username) return
		const newAddresses = [...addresses.value]
		// -- 删除对应的地址信息
		newAddresses.splice(index,1)
		uni.setStorageSync(STOREAGE_KEY.value, newAddresses) 
		// -- 更新 store 中的 addresses 地址信息
		getRefreshAddresses()
		uni.showToast({ title: "地址删除成功" })
	}
	
	function topAddress(index:number) { // -- 置顶地址（默认选择）
		if(!useAuthStore().userInfo?.username) return
		const newAddresses = [...addresses.value]
		const topAddressData = newAddresses[index]
		newAddresses.splice(index,1) // -- 先删除对应 index 的地址信息，再移动到首位 ↓
		uni.setStorageSync(STOREAGE_KEY.value, [topAddressData,...newAddresses]) 
		// -- 更新 store 中的 addresses 地址信息
		getRefreshAddresses()
		uni.showToast({ title: "已修改默认地址" })
	}
	
	// -- 将其格式化成提交订单参数需要的值类型: 订单地址（格式: "行政区地址→具体地址→收货姓名→手机号" ，再使用该接口时使用该格式来传递地址参数，后续再前台通过“→”来进行地址信息的划分格式化）
	function formatAddressInfoToString(address: IAddress) {
		return `${address.address}→${address.specific}→${address.nickname}→${address.phone}`
	}
	
	getRefreshAddresses() // -- 初始化 store 中的 addresses 状态值
	
	return { addresses, setLocalAddress, updateAddress, deleteAddress, topAddress, getRefreshAddresses, formatAddressInfoToString }
})

export default useAddressStore
