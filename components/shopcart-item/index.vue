<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import { BASER_URL } from '../../service';
import { type IProductData } from '../../service/modules/classify';
import { confirmModal } from "../../utils";
import useShoppingCartStore from '../../stores/shopping-cart';

const props = defineProps<{ itemData: IProductData, updateTotalPrice:() => any }>()

// -- 购物车数量
const count = ref(1)
const changeCount = (isIncrement:boolean = false) => {
	let newCount = count.value 
	isIncrement ? ++newCount : --newCount
	if(newCount <= 0) {
		count.value = 1
	}else if(props.itemData?.product_count && newCount > props.itemData.product_count){
		count.value = props.itemData.product_count
	}else {
		count.value = newCount
	}
}

// -- 总价：（商品价格 * 商品折扣）* 购买数量
const totalPrice = computed(() => {
	const salePrice = Number((props.itemData?.product_price * Number(props.itemData?.product_discount)).toFixed(2))
	return salePrice * count.value
})

// -- 移出购物车
const removeProductInShoppingCart = async () => {
	if(await confirmModal('是否确定将商品移出购物车')) {
		useShoppingCartStore().removeShoppingCartData(props.itemData)
		nextTick(() => {
			props.updateTotalPrice() // -- 再购物车中移除某项商品，更新总价信息（注意: 需要再 DOM 更新后再更新总价）
		})
	}
}

nextTick(() => props.updateTotalPrice()) // -- 每挂载一个 item 就重新更新父元素中的总价 : 🔺注意，因为这里需要使用 nextTick 当元素挂载后再进行更新总价，具体与 ↓ 监听处一样

// -- 监听 item 总价的改变，更新父组件的总总价
// -- 🔺注意，因为这里时通过获取 item 元素上的 data-totalPrice 自定义属性来计算总价的，所有在 item 总价发生改变时，需要 DOM 渲染结束后，再继续宁更新总价 → 否则: 获取到的总价将为上一次的值，造成数据的混乱
watch(totalPrice, n => nextTick(() => {props.updateTotalPrice()})) 

// -- 点击购物车商品信息区域，进入商品详情页
const toProductDetail = () => {
	uni.navigateTo({
		url: "/pages/view/detail/index?id=" + props.itemData?.id
	})
}
</script>

<template>
	<!-- 将总价给元素设置自定义属性 data-totalPrice，来暴露给父元素使用（父元素获取该元素后通过获取自定义属性获取的方式进行获取） / 当前项 count 也传递给父组件中进行展示 -->
	<div class="shopcart-item" :data-totalPrice="totalPrice" :data-count="count">
		<div class="top" @click="toProductDetail">
			<image class="imgage" :src="BASER_URL + itemData?.pics?.[0]?.imgUrl" mode="widthFix"></image>
			<div class="info">
				<div class="name">{{ itemData?.product_name }}</div>
				<div class="desc">{{ itemData?.product_desc }}</div>
				<div class="price">
					<!-- 有折扣 -->
					<template v-if="Number(itemData?.product_discount) !== 1">
						<view>￥{{ (itemData?.product_price * Number(itemData?.product_discount)).toFixed(2) }}</view>
						<i class="origin">￥{{ itemData?.product_price }}</i>
					</template>
					<!-- 原价 -->
					<template v-else>
						<view>￥{{ itemData?.product_price }}</view>
					</template>
				</div>
			</div>
		</div>
		<div class="handle-line">
			<up-button class="button" type="error" text="移出购物车" size="mini" snape="circle" :hairline="false" @click="removeProductInShoppingCart"/>
			<div class="count">
				<div class="button" @click="changeCount(false)">-</div>
				<div class="text">{{ count }}</div>
				<div class="button" @click="changeCount(true)">+</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.shopcart-item{
	font-size: 28rpx;
	background-color: white;
	padding: 24rpx;
	border-radius: 8rpx;
	// box-shadow: 1px 1px 4px #dadada;
	box-shadow: 1px 1px 4px #dadada7d;
	.top {
		display: flex;
		flex-flow: row nowrap;
		.imgage {
			width: 140rpx;
			min-width: 140rpx;
			margin-right: 12rpx;
		}
		.info {
			padding: 2rpx;
			overflow: hidden;
			
			.desc { 
				margin-top: 6rpx;
				font-size: 24rpx;
				color: gray;
				width: 100%;
				// -- 单行文字超出省略
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.price {
				font-size: 24rpx;
				color: #b0352f;
				display: flex;
				align-items: center;
				margin: 10rpx 0;
				
				.origin {
					text-decoration: line-through;
					margin-left: 8rpx;
					font-size: 22rpx;
					color: #b0352f;
				}
			}
		}
	}
	
	.handle-line {
		margin-top: 8rpx;
		display: flex;
		// justify-content: space-between;
		justify-content: end;
		align-items: center;
		
		> .button {
			width: auto;
			margin: 0;
			margin-right: 16rpx;
		}
		.count {
			// flex: 1;
			display: flex;
			justify-content: end;
			align-items: center;
			.button {
				// width: fit-content;
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
}
</style>