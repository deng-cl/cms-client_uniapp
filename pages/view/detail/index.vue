<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app"
import { computed, onMounted, ref } from "vue";
import TopBack from "../../../components/top-back/index.vue"
import PopupTitle from "../../../components/popup-title/index.vue"
import { BASER_URL } from "../../../service";
import useShoppingCartStore from "../../../stores/shopping-cart";
import useAddressStore, { type IAddress } from "../../../stores/address";
import useAuthStore from "../../../stores/auth";
import { type IProductData, fetchGetSingleProductById } from "../../../service/modules/classify";
import { confirmModal } from "../../../utils";
import { fetchOrderSubmit, type IOrderSubmitInfo } from "../../../service/modules/profile";

const productData = ref<IProductData>({})
const shoppingCartStore = useShoppingCartStore()
onLoad(async ({ id }) => {
	productData.value = await fetchGetSingleProductById(id) // -- 请求商品想起数据
})

// -- 添加至购物车中
const inCartexistsed = computed(() => {
	if(shoppingCartStore.shoppingCart?.length) {
		const find = shoppingCartStore.shoppingCart?.find(item => item.id === productData.value?.id) ?? {}
		return !!find.username
	}
	return false
})
const addProductToShoppingCart = async () => {
	if(await confirmModal('请确认将商品添加至购物车')) shoppingCartStore.setShoppingCartData(productData.value) 
}

// -- 移出购物车
const removeProductToShoppingCart = async () => {
	if(await confirmModal('是否确定将商品移出购物车')) shoppingCartStore.removeShoppingCartData(productData.value) 
}

// ---------------------------------------------------------------------- 一下都为点击购买按钮后的流程代码
// -- 购买 → 生成对应的订单信息
const showOrderSubmitPopup = ref(false)

// -- 购买数量的控制 
const count = ref(1)
const changeCount = (isIncrement:boolean = false) => {
	let newCount = count.value 
	isIncrement ? ++newCount : --newCount
	if(newCount <= 0) {
		count.value = 1
	}else if(productData.value?.product_count && newCount > productData.value?.product_count){
		count.value = productData.value?.product_count
	}else {
		count.value = newCount
	}
}

// -- 总价的计算
const totalPrice = computed(() => {
	const salePrice = Number((productData.value?.product_price * Number(productData.value?.product_discount)).toFixed(2))
	return String(salePrice * count.value)
}) 

// -- 地址的选择
const { addresses, formatAddressInfoToString, topAddress } = useAddressStore() // -- 地址选择
const addressData = ref<IAddress | null>(null)
onMounted(() => { addressData.value = addresses[0] }) // -- 初始化地址
const showUpdateAddressPopup = ref(false)
const setAddressData = (newAddress:IAddress) => {
	addressData.value = newAddress
	showUpdateAddressPopup.value = false
}

// -- 提交购买订单 → 购买商品
const confirmBuyOrder = async () => { 
	const orderData:IOrderSubmitInfo = {
		product_name: productData.value?.product_name,
		product_desc: productData.value?.product_desc,
		product_price: productData.value?.product_price,
		product_discount: String(productData.value?.product_discount),
		product_pics: productData.value?.pics.map(item => item.imgUrl),
		buy_count: count.value, // -- 选择购买的数量
		total_amount: totalPrice.value, // -- 需要根据个数、折扣与价格进行计算
		address: formatAddressInfoToString(addressData.value),
		customer_id: useAuthStore().userInfo?.id,
		merchant_id: Number(productData.value?.user_id),
		commodity_id: productData.value?.id
	}
	if(await confirmModal("是否确定购买该商品","商品购买")) {
		fetchOrderSubmit(orderData)
	}
}
</script>

<template>
	<view class="container">
		<TopBack title="商品详情"/>
		<view class="detail">
			<view class="pic">
				<image v-if="productData?.pics && productData?.pics[0]" class="imgage" :src="BASER_URL + productData?.pics[0].imgUrl" mode="widthFix"></image>
				<text v-else class="text">暂无商品图</text>
			</view>
			<view class="price-sales">
				<!-- 有折扣 -->
				<view class="price" v-if="Number(productData?.product_discount) !== 1">
					<view>￥{{ (productData?.product_price * Number(productData?.product_discount)).toFixed(2) }}</view>
					<i class="origin">￥{{ productData?.product_price }}</i>
				</view>
				<!-- 原价 -->
				<view class="price" v-else>
					<view>￥{{ productData?.product_price }}</view>
				</view>
				<view class="discount" v-if="Number(productData?.product_discount) < 1">
					<text>现时优惠:</text>
					<text class="text">{{ productData?.product_discount?.split(".")[1] }}折</text>
					<up-icon class="icon" name="play-left-fill" color="#d23636" size="18"></up-icon>
				</view>
			</view>
			<view class="title">
				<text class="text">{{ productData?.product_name }}</text>
				<!-- <up-tag :text="productData?.tag_name" type="error" plain size="mini"></up-tag> -->
				<div class="tag">
					<up-icon class="icon" name="tags-fill" color="#fb4848" size="18"></up-icon>
					<text>{{ productData?.tag_name }}</text>
				</div>
			</view>
			<view class="desc">{{ productData?.product_desc }}</view>
			<view class="pics">
				<image v-for="pic in productData?.pics" :src="BASER_URL + pic.imgUrl" mode="widthFix"></image>
			</view>
		</view>
		<view class="handle-line">
			<view v-if="inCartexistsed" class="add-car active" @click="removeProductToShoppingCart">（已添加）移出购物车</view>
			<view v-else class="add-car" @click="addProductToShoppingCart">添加至购物车</view>
			<view class="buy" @click="showOrderSubmitPopup = true">
				<text>购买</text>
				<up-icon class="icon" name="play-left-fill" color="#fb4848" size="18"></up-icon>
			</view>
		</view>
		
		<!-- 购买弹出层 -->
		<up-popup :show="showOrderSubmitPopup" @close="showOrderSubmitPopup = false">
		    <view class="submit-popup">
				<PopupTitle title="订单详情"/>
				<view class="line">
					<text class="name">商品名称:</text>
					<text class="value">{{productData.product_name}}</text>
				</view>
				<view class="line">
					<text class="name">商品描述:</text>
					<text class="value">{{productData.product_name}}</text>
				</view>
				<view class="line">
					<text class="name">购买数量:</text>
					<view class="value count">
						<div class="button" @click="changeCount(false)">-</div>
						<div class="text">{{ count }}</div>
						<div class="button" @click="changeCount(true)">+</div>
					</view>
				</view>
				<view class="line price">
					<text class="name">总价:</text>
					<text class="value"><text class="icon">￥</text>{{Number(totalPrice).toFixed(2)}}</text>
				</view>
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
					<up-button class="button" type="primary" text="确定下单" size="small" snape="circle" :hairline="false" @click="confirmBuyOrder"/>
				</view>
			</view>
		</up-popup>
		
		<!-- 修改地址弹出层 -->
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
.detail {
	// -- TopBack 固定标题空间
	padding-top: 44px;
	// -- 底部购买按钮空间
	padding-bottom: calc(88rpx + 24rpx);
	box-sizing: border-box;
	
	.pic {
		width: 100vw;
		.imgage {
			width: 100%;
		}
		.text {
			width: 100%;
			height:380rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: gray;
			font-size: 28rpx;
			border-bottom: 1px solid #80808047;
		}
	}
	
	.price-sales {
		padding-left: 16rpx;
		box-sizing: border-box;
		height: 88rpx;
		background: #e84b4b;
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		color: white;
			
		.price {
			font-size: 24rpx;
			display: flex;
			align-items: center;
			margin: 10rpx 0;
			font-size: 32rpx;
			font-weight: 500;
			
			.origin {
				text-decoration: line-through;
				margin-left: 12rpx;
				font-size: 24rpx;
				font-weight: 400;
			}
		}
		
		.discount {
			padding:0 22rpx;
			box-sizing: border-box;
			height: 100%;
			font-size: 22rpx;
			display: flex;
			align-items: center;
			background: #d23636;
			position: relative;
			
			.text {
				font-size: 26rpx;
				margin-left: 12rpx;
				transform: translateY(2rpx);
			}
			
			.icon {
				position: absolute;
				left: -12px;
				top: 0;
				bottom: 0;
				margin: auto 0;
			}
		}
	}

	.title {
		display: flex;
		padding:0 16rpx;
		box-sizing: border-box;
		font-weight: bold;
		font-size: 36rpx;
		margin: 24rpx 0;
		.text { flex: 1; }
		.tag {
			display: flex;
			align-items: center;
			font-weight: normal;
			font-size: 24rpx;
			gap: 2px;
			color: #d91e1e;
			font-weight: bold;
		}
	}
	
	.desc {
		padding:0 16rpx;
		box-sizing: border-box;
	}
	
	.pics {
		width: 100vw;
		display: flex;
		// justify-content: center;
		flex-direction: column;
		align-items: center;
		
		.imgage {
			width: 100%;
		}
	}
}

.handle-line {
	display: flex;
	background-color: #d23636;
	width: 100vw;
	height: 88rpx;
	position: fixed;
	bottom: 0;
	> * {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
		color: white;
	}
	.add-car {
		background-color: #fb9048;
	}
	.add-car.active {
		background-color: #ffad76;
	}
	
	.buy {
		background-color: #fb4848;
		position: relative;
		
		.icon {
			position: absolute;
			left: -12px;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
}

.submit-popup {
	padding: 16rpx;
	box-sizing: border-box;
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