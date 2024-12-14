<script setup lang="ts">
import { onShow } from "@dcloudio/uni-app"
import { computed, onMounted, ref, watch, nextTick } from 'vue';
import ShopcartItem from "../../components/shopcart-item/index.vue"
import PopupTitle from "../../components/popup-title/index.vue"
import { BASER_URL } from '../../service';
import useShoppingCartStore from '../../stores/shopping-cart';
import useAuthStore from '../../stores/auth';
import useAddressStore, { type IAddress } from "../../stores/address";
import { confirmModal } from "../../utils";
import { fetchOrderSubmitMultiple, type IOrderSubmitInfo } from "../../service/modules/profile";


const store = useShoppingCartStore()

const itemsRef = ref(null)

// -- 计算总价（🔺）
const totalPrice = ref(0)
function updateTotalPrice (){ // -- 更新总价方法，每个 item 项在改变数量时都需要重新执行该方法来更新总价
	const itemsComp = Array.from(itemsRef.value?.querySelectorAll('.item') as any[]) ?? []
	if(itemsComp.length) {
		let price = 0
		itemsComp.forEach(item => {
			const nowItemPrice = (item as HTMLDivElement).dataset?.totalprice // -- 获取每各 item 组件中的自定义属性 totalprice（该购物项总价）
			price += Number(nowItemPrice)
		})
		return totalPrice.value = price
	}
	return totalPrice.value = 0
}

// -- 清空购物车
const makeEmptyOfShoppingCart = async () => {
	if(await confirmModal('是否确定清空购物车','清空购物车')) {
		store.deleteEmptyOfShoppingCart() 
		nextTick(() => {
			updateTotalPrice() // -- 购物车清空后更新，更新总价信息（注意: 需要再 DOM 更新后再更新总价）
		})
	}
}


// -------------------------------------------------------- ↓ 购物车批量购买部分代码
// -- 地址的选择
const { addresses, formatAddressInfoToString, topAddress } = useAddressStore() // -- 地址选择
const addressData = ref<IAddress | null>(null)
onMounted(() => { addressData.value = addresses[0] }) // -- 初始化地址
const showUpdateAddressPopup = ref(false)
const setAddressData = (newAddress:IAddress) => {
	addressData.value = newAddress
	showUpdateAddressPopup.value = false
}

// confirmModal()

// -- 购买购物车商品: 购物车商品批量购买（订单提交）
const showOrdersSubmitPopup = ref(false)
const submitCartOrders = async () => {
	if(await confirmModal("请您再次确定购买","商品购买")) {
		// -- 创建购物车中所有商品的订单提交的信息
		const buyOrderDataList: IOrderSubmitInfo[] = []
		const itemsComp = Array.from(itemsRef.value?.querySelectorAll('.item') as any[]) ?? []
		store.shoppingCart?.forEach((item,index) => { // -- 生成购物车中每一项商品的订单信息
			const orderData:IOrderSubmitInfo = {
				product_name: item.product_name,
				product_desc: item.product_desc,
				product_price: item.product_price,
				product_discount: item.product_discount,
				product_pics: item.pics.map(item => item.imgUrl),
				buy_count: itemsComp[index]?.dataset?.count , // -- 选择购买的数量
				total_amount: itemsComp[index]?.dataset?.totalprice, // -- 需要根据个数、折扣与价格进行计算
				address: formatAddressInfoToString(addressData.value),
				customer_id: useAuthStore().userInfo?.id,
				merchant_id: Number(item.user_id),
				commodity_id: item.id
			}
			buyOrderDataList.push(orderData)
		})
		// -- 提交所有订单
		fetchOrderSubmitMultiple(buyOrderDataList)
	}
}
</script>
 
<template>
	<view class="container">
		<view class="title">我的购物车</view>
		<div class="shopping-cart" ref="itemsRef">
			<ShopcartItem class="item" v-for="(item,index) in store.shoppingCart" :key="item.id ?? index" :item-data="item" :updateTotalPrice="updateTotalPrice"/>
			<up-button v-if="store.shoppingCart?.length > 0" class="clear-button" type="error" text="清空购物车" size="small" snape="circle" :hairline="false" @click="makeEmptyOfShoppingCart"/>
			<view v-else class="not-more">购物车暂未添加任何商品</view>
			<view class="handle-line">
				<div class="price">
					<text class="name">总价: </text>
					<text class="value">￥{{Number(totalPrice).toFixed(2)}}</text>
				</div>
				<div class="button" @click="
					async () => {
						if(await confirmModal('请再次确定购物车中的商品与数量，是否都要一键购买')) showOrdersSubmitPopup = true
					}
				">购买</div>
			</view>
		</div>
		
		<!-- 购买弹出层 -->
		<up-popup :show="showOrdersSubmitPopup" @close="showOrdersSubmitPopup = false">
			<div class="submit-popup">
				<PopupTitle class="title" title="地址确认" />
				<div class="address-line">
					<view class="line">
						<text class="name">购买地址:</text>
						<text class="value">{{addressData?.address}} {{addressData?.specific}}</text>
					</view>
					<view class="line">
						<text class="name">收货信息:</text>
						<text class="value">{{addressData?.nickname}}，{{addressData?.phone}}</text>
					</view>
					<view class="line btn">
						<up-button class="button" type="warning" text="修改收货信息" size="small" snape="circle" :hairline="false" @click="showUpdateAddressPopup = true"/>
						<up-button class="button" type="primary" text="确定下单" size="small" snape="circle" :hairline="false" @click="submitCartOrders"/>
					</view>
				</div>
			</div>
		</up-popup>
		
		<!-- 修改地址弹出层 : 与商品详情的一样 -->
		<up-popup :show="showUpdateAddressPopup" @close="showUpdateAddressPopup = false">
			<view class="address-popup">
				<PopupTitle title="地址选择"/>
				<view class="tip">
					tip：如果想要选择其它的新的地址信息，请先前往个人中心中的地址管理处进行先行添加!!!
				</view>
				<!-- 与 address 页面中的 iem 基本一样，照搬 -->
				<view class="item" v-for="(address,index) in addresses" :key="index">
					<div class="info">
						<view class="user-info">{{ address.nickname + "，" + address.phone }}</view>
						<view class="address-info">{{ address.address + " " + address.specific  }}</view>
					</div>
					<div class="controller">
						<div class="selected" v-if="addressData === address">当前地址</div>
						<up-button v-else class="button" type="primary" text="选择" size="mini" snape="circle" :hairline="false" @click="setAddressData(address)"/>
					</div>
				</view>
				<view class="not-more">暂无更多</view>
			</view>
		</up-popup>
	</view>
</template>

<style scoped lang="scss">
.container {
	background: #ecfbf6b3;
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 50px);
	height: fit-content;
}
	
.title {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 88rpx;
	background-color: white;
}

.shopping-cart {
	position: relative;
	flex: 1;
	padding:16rpx;
	// -- 加上 handle-line 的高度
	padding-bottom: calc(60rpx + 88rpx);
	box-sizing: border-box;
	height: auto;
	.item {
		margin-bottom: 16rpx;
	}
	
	.not-more {
		margin-top: 28rpx;
		font-size: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: gray;
	}	
	
	.clear-button {
		margin-top: 60rpx;
		width: 44vw;
		min-width: fit-content;
	}
	
	.handle-line {
		transform: translateX(-16rpx);
		position: fixed;
		height: 88rpx;
		width: 100%;
		bottom: 50px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e7ebec;
		
		.price {
			padding: 12rpx;
			box-sizing: border-box;
			height: 100%;
			display: flex;
			align-items: center;
			.name {
				font-size: 28rpx;
				margin-right: 6rpx;
				color: gray;
			}
			.value {
				font-size: 40rpx;
				color: #fb4848;
			}
		}
		
		.button {
			padding: 12rpx;
			box-sizing: border-box;
			width: 240rpx;
			height: 100%;
			background-color: #fb4848;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
		}
	}
}

.submit-popup {
	padding: 16rpx;
	box-sizing: border-box;
	.title { margin: 0; }
	.address-line {
		.line {
			margin-top: 24rpx;
			font-size: 28rpx;
			display: flex;
			align-items: center;
			.name {
				margin-right: 12rpx;
				color: gray;
			}
			
			// -- 购买数量控制
			.value.count {
				margin-left: auto;
				display: flex;
				justify-content: end;
				align-items: center;
				.button {
					padding: 0;
					margin: 0;
					height: 44rpx;
					width: 44rpx;
					min-width: 20px;
					min-height: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #3c9cff;
					color: white;
					border-radius: 6rpx;
				}
				.text {
					margin: 0 14rpx;
				}
			}
		}
		.line.price {
			color: #b0352f;
			.value .icon {
				font-size: 16rpx;
			}
		}
		// -- 确认下单等按钮
		.line.btn {
			margin: 36rpx 0;
			.button {
				margin: 0 24rpx;
			} 
		}
	}
}

.address-popup {
	padding: 28rpx 16rpx;
	box-sizing: border-box;
	
	.tip {
		margin: 12rpx;
		color: gray;
		font-size: 20rpx;
	}
	
	// -- 与 address 页面中的 iem 基本一样，照搬
	.item {
		padding:14rpx 0;
		box-sizing:border-box;
		font-size: 24rpx;
		background-color: white;
		margin-bottom: 14rpx;
		border-bottom: 1px solid #e7ebec;
		
		.info {
			> * {
				margin: 12rpx 0;
				padding:0 16rpx;
				box-sizing:border-box;
			}
		}
		
		
		.controller {
			display: flex;
			justify-content: end;
			margin: 0;
			.selected {
				color: #d23636;
			}
			.button {
				width: fit-content;
				margin: 0;
			}
		}
	}
	.not-more {
		margin-top: 28rpx;
		font-size: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: gray;
	}	
}
</style>