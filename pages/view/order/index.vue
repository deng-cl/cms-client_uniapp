<script setup lang="ts">
import { onShow } from "@dcloudio/uni-app"
import { computed, onMounted, ref } from "vue";
import TopBack from "../../../components/top-back/index.vue"
import BackTop from "../../../components/back-top/index.vue"
import OrderItem from "../../../components/order-item/index.vue"
import { type IOrderInfo, fetchUserOrderList } from "../../../service/modules/profile";
import { BASER_URL } from "../../../service";

const list = ref<IOrderInfo[]>([])

// -- 刷新订单数据（用于进入订单页面请求对应数据，与再每项 OrderItem 组件，修改对应订单状态时，更新订单数据）
const refreshOrderListData = async () => { 
	list.value = await fetchUserOrderList()
}

onShow(() => refreshOrderListData())

// -- 状态分段
const sectionCurrent = ref(0)
const subsections = ref([ // -- subsection 分段器名称与对应订单的状态信息
		{ name: '全部', status: 'all' },
		{ name: '待发货', status: '0' },
		{ name: '待收货', status: '1' },
		{ name: '退款申请', status: '-1' },
		{ name: '已完成', status: '2' },
		{ name: '已退款', status: '-2' },
])
function onCurrentChange (index:number) {
	sectionCurrent.value = index
}

// -- 根据分段器显示对应状态的订单列表
const showList = computed(() => {
	if(sectionCurrent.value === 0) return list.value
	else {
		const current = subsections.value[sectionCurrent.value]
		const status = current.status
		if(list.value && list.value.length > 0) return list.value?.filter(item => item.status == status) ?? []
		else []
	} 
})
</script>

<template>
	<div class="container">
		<TopBack title="我的订单"/>
		<!-- 状态分段 -->
		<up-subsection 
			class="subsection" :list="subsections.map(item => item.name)" :current="sectionCurrent" @change="onCurrentChange"
			activeColor="#409eff" bgColor="#409eff" inactiveColor="#ffffff" style="border-radius: 0px;"
		/>
		<!-- 订单信息展示 -->
		<view class="order">
			<OrderItem class="item" v-for="item in showList" :key="item.id" :order-data="item" :refresh-order-list-data="refreshOrderListData" />
			<!-- 暂无更多 -->
			<view class="not-more">暂无更多订单信息</view>
		</view>
		<!-- 返回顶部 -->
		<BackTop />
	</div>
</template>

<style scoped lang="scss">
.container {
	min-height: 100vh;
	width:100%;
	background: #ecfbf6b3;
	// -- 隔开固定定位组件 TopBack 与  up-subsection 的高度
	padding-top: calc(44px + 34px);
	box-sizing: border-box;
}
.order {
	padding: 16rpx;
	padding-bottom: 44px;
	box-sizing: border-box;
	.item {
		margin-bottom: 18rpx;
	}
	.not-more {
		padding: 32rpx;
		padding-top: 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: gray;
		font-size: 22rpx;
	}
}
.subsection {
	position: fixed;
	// -- 隔开 TopBack 定位元素的距离
	top: 44px;
	z-index: 999;
}
</style>