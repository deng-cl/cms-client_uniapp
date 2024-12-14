<script setup lang="ts">
	import { BASER_URL } from '../../service';
	import { fetchUpdateOrderStatus, type IOrderInfo } from '../../service/modules/profile';
	import { confirmModal } from "../../utils";
	const { refreshOrderListData, orderData } = defineProps<{ orderData: IOrderInfo, refreshOrderListData: () => void }>()
	
	const updateOrderStatus = async (status: "-1" | "0" | "2") => { // -- 修改订单状态
		if (await confirmModal(
			status === "-1" ? "是否确定申请退款" : 
			status === "0" ? "是否撤销退款申请" : "是否确定已收到货物"
		)) {
			const res = await fetchUpdateOrderStatus(orderData.id, status) // -- 更新状态
			// -- 刷新数据
			refreshOrderListData()
			// -- 反馈信息
			if(res.state == 200) {
				uni.showToast({ title: status === "-1" ? "已向商家申请退款，待商家处理" : status === "0" ? "已撤销退款申请" : "已确认收货"  })
			}else uni.showToast({ title: res.msg, icon:'error' })
		}
	}
</script>

<template>
	<div class="item">
		<div class="info">
			<image class="image" :src="BASER_URL + orderData?.product_pics[0]" mode="widthFix"></image>
			<div class="base">
				<div class="name">{{ orderData?.product_name }}</div>
				<div class="desc">{{ orderData?.product_desc }}</div>
			</div>
			<div class="price-count">
				<div class="price">
					<text class="name">总计:</text>
					<!-- <text class="icon">￥</text> -->
					<text class="value">{{ orderData?.total_amount }}</text>
				</div>
				<div class="price original">
					<!-- 有折扣 -->
					<template v-if="Number(orderData?.product_discount) !== 1">
						<view>￥{{ (orderData?.product_price * Number(orderData?.product_discount)).toFixed(2) }}</view>
						<i class="origin-price">￥{{ orderData?.product_price }}</i>
					</template>
					<!-- 原价 -->
					<template v-else>
						<view>￥{{ orderData?.product_price }}</view>
					</template>
				</div>
				<div class="count">×{{ orderData?.buy_count }}</div>
			</div>
		</div>
		<up-steps class="step" :current="Math.abs(Number(orderData?.status))"
			:activeColor="[-1,-2].includes(Number(orderData?.status)) ? '#f56c6c' : '#3c9cff'"
		>
			<template v-if="[-1,-2].includes(Number(orderData?.status))">
				<up-steps-item title="待发货"/>
				<up-steps-item title="退款申请中"/>
				<up-steps-item title="已退款"/>
			</template>
			<template v-else>
				<up-steps-item title="待发货" />
				<up-steps-item title="待收货" />
				<up-steps-item title="已完成" />
			</template>
		</up-steps>
		<!-- 操作按钮 -->
		<div class="handle-line">
			<!-- 待发货 -->
			<template v-if="orderData?.status == '0'">
				<up-button class="button" type="error" text="申请退款" size="mini" snape="circle" :hairline="false" @click="updateOrderStatus('-1')"/>
			</template>
			<!-- 已发货，待确认收货 -->
			<template v-if="orderData?.status == '1'">
				<!-- <up-button class="button" type="error" text="申请退款" size="mini" snape="circle" :hairline="false"/> -->
				<up-button class="button" type="primary" text="确认收货" size="mini" snape="circle" :hairline="false" @click="updateOrderStatus('2')"/>
			</template>
			<!-- 退款申请中 -->
			<template v-if="orderData?.status == '-1'">
				<up-button class="button" type="warning" text="撤销退款申请" size="mini" snape="circle" :hairline="false" @click="updateOrderStatus('0')"/>
			</template>
			<!-- 已退款 -->
			<!-- 已完成 -->
		</div>
	</div>
</template>

<style scoped lang="scss">
.item {
	background-color: white;
	width: 100%;
	border-radius: 6rpx;
	box-shadow: 1px 1px 4px #dadada;
	padding: 16rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	
	.info {
		display: flex;
		flex-flow: row nowrap;
		.image {
			width: 120rpx;
			height: 120rpx;
		}
		.base {
			flex: 1;
			padding: 0 4rpx;
			box-sizing: border-box;
			overflow: hidden;
			> * { // -- 单行超出省略
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			.name {
				font-size: 28rpx;
				display: -webkit-box;
				-webkit-line-clamp: 2; // 多行在这里修改数字即可
				-webkit-box-orient: vertical;
				white-space: normal;
			}
			.desc {
				font-size: 22rpx;
				color: gray;
				margin-top: 6rpx;
			}
		}
		.price-count {
			display: flex;
			flex-direction: column;
			align-items: end;
			min-width: fit-content;
			.price {
				font-size: 24rpx;
				color: #d83f39;
				.name {
					// font-size: 22rpx;
					margin:0 8rpx;
					color: gray;
				}
				.icon {
					font-size: 18rpx;
					margin-right: 2rpx;
				}
			}
			.price.original {
				display: flex;
				gap: 6rpx;
				font-size: 18rpx;
				margin: 8rpx 0;
				color: #d83f39ba;
				.icon {
					font-size: 12rpx;
					margin-right: 2rpx;
				}
				.origin-price {
					text-decoration: line-through;
				}
			}
			.count {
				color: gray;
				font-size: 22rpx;
				// margin-top: 4rpx;
			}
		}
	}
	
	.step {
		margin: 12rpx;
	}
	
	.handle-line {
		margin: 8rpx;
		width: 100%;
		display: flex;
		justify-content: end;
		align-items: center;
		.button {
			margin: 0;
			margin-left: 8rpx;
			width: fit-content;
		}
	}
}
</style>