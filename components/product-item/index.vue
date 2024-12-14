<script setup lang="ts">
	import { BASER_URL } from "../../service";
	import type { IProductData } from "../../service/modules/classify";
	// import useProductDetailStore from "../../stores/product-detail";
	const { data } = defineProps<{ data: IProductData }>()	
	
	// -- 处理点击当前商品，进入详情页
	const todoProductDetailPage = () => {
		// useProductDetailStore().setProduct(data ?? {})
		uni.navigateTo({
			url:"/pages/view/detail/index?id=" + data.id
		})
	}
</script>

<template>
	<view class="item" @click="todoProductDetailPage">
		<view class="picture">
			<template v-if="data.pics[0]">
				<image class="image" :src="BASER_URL + data.pics[0].imgUrl" mode="heightFix"></image>
			</template>
			<template v-else>
				<view class="no-picture">暂无图片</view>
			</template>
		</view>
			
		<view class="main">
			<view class="title">{{data.product_name}}</view>
			<div class="desc">{{data.product_desc}}</div>
			<view class="price-sales">
				<!-- 有折扣 -->
				<view class="price" v-if="Number(data.product_discount) !== 1">
					<view>￥{{ (data.product_price * Number(data.product_discount)).toFixed(2) }}</view>
					<i class="origin">￥{{ data.product_price }}</i>
				</view>
				<!-- 原价 -->
				<view class="price" v-else>
					<view>￥{{ data.product_price }}</view>
				</view>
				<view class="count">销量: {{ data.sales_count }}</view>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.item {
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 8rpx;
	padding: 8rpx;
	box-sizing: border-box;
	box-shadow: 1px 1px 4px #dadada;
	
	.picture {
		width: 100%;
		height: 240rpx;
		display: flex;
		justify-content: center;
		// background: red;
		
		.image {
			height: 100%;
		}
		
		.no-picture {
			display: flex;
			justify-content: center;
			align-items: center;
			color: gray;
			font-size: 24rpx;
		}
	}

	.main {
		width: 100%;
		padding: 4rpx;
		box-sizing: border-box;
		
		> * {
			margin: 4rpx 0;
		}
		
		.title {
			font-weight: 400;
			font-size: 28rpx;
		}
		
		.desc {
			font-size: 22rpx;
			color: gray;
		}
		
		.title,.desc {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		
		.price-sales {
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
				
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
			
			.count {
				color: gray;
				font-size: 22rpx;
			}
		}
	}
	
}
</style>