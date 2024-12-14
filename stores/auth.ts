import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchGetUserInfo } from '../service/modules/profile'

interface IUserInfo {
	id: number
	username: string,
	phone: string,
	password: string,
	name: string,
	shop_name: string,
	nickname: string,
	id_card: string,
	sex: string,
	age:string,
	avatar_url: string,
	user_type_id: number,
	createAt: string,
	updateAt: string
}

const useAuthStore = defineStore('auth', () => {
	const userInfo = ref<IUserInfo | null>(null)
	
	const queryUserInfo = async () => {
		if(!uni.getStorageSync('token')) return // -- 不存在 token 信息 → 不做处理（userInfo = null）
		userInfo.value = (await fetchGetUserInfo()) ?? null // -- 获取用户信息，并存储在 userInfo 状态中
	}
	
	const dispatchLogout = () => { // -- 退出登录
		uni.removeStorageSync('token')
		userInfo.value = null
		uni.showToast({ title: '已退出登录' })
		setTimeout(() => { uni.switchTab({ url: "/pages/profile/index" }) }, 400)
	}
	
	// queryUserInfo() // -- 初始化用户数据
	
	return { userInfo, queryUserInfo, dispatchLogout }
})

export default useAuthStore
