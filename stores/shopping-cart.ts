import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import useAuthStore from './auth'
import { type IProductData } from '../service/modules/classify'

const useShoppingCartStore = defineStore('shoping-cart', () => {
	// -- 根据对应的 username 存储对应的购物车数据 : 避免与其它的账号混淆
	const STOREAGE_KEY = computed(() => `${useAuthStore().userInfo?.username}:cart`) 
	
	// -- 购物车数据
	const shoppingCart = ref<IProductData[]>([])
	
	// -- 获取购物车数据
	const refreshShoppingCartData = async () => { 
		if(!useAuthStore().userInfo?.username) await useAuthStore().queryUserInfo()

		if(useAuthStore().userInfo?.username) {
			const localData = JSON.parse(uni.getStorageSync(STOREAGE_KEY.value))
			if(localData) {
				shoppingCart.value = localData?.filter(item => item?.username) ?? []
			}
		}
	}
	
	// -- 向购物车添加新商品信息
	const setShoppingCartData = (productData?:IProductData) => {
		if(!useAuthStore().userInfo?.username) return
		const newShoppingCart = [productData, ...shoppingCart.value]
		uni.setStorageSync(STOREAGE_KEY.value,JSON.stringify(newShoppingCart))
		uni.showToast({ title:'已添加至购物车' })
		refreshShoppingCartData() // -- 更新购物车数据
	}

	// -- 在购物车中移出某一商品
	const removeShoppingCartData = (productData?:IProductData) =>  {
		const index = shoppingCart.value?.findIndex(item => item.id === productData.id)
		if(index >= 0) {
			const newShoppingCart = [...shoppingCart.value]
			newShoppingCart.splice(index,1)
			uni.setStorageSync(STOREAGE_KEY.value,JSON.stringify(newShoppingCart))
			uni.showToast({ title:'已移出购物车' })
			refreshShoppingCartData() // -- 更新购物车数据
		}
	}
	
	// -- 清空购物车
	const deleteEmptyOfShoppingCart = () => {
		if(!useAuthStore().userInfo?.username) return
		uni.setStorageSync(STOREAGE_KEY.value,JSON.stringify([]))
		// refreshShoppingCartData() // -- 更新购物车数据
		uni.showToast({ title:'购物车已清空' })
		shoppingCart.value = []
	}

	refreshShoppingCartData() // -- 初始化获取购物车数据
	
	return { shoppingCart, refreshShoppingCartData, setShoppingCartData, removeShoppingCartData, deleteEmptyOfShoppingCart }
})

export default useShoppingCartStore
