<script setup lang="ts">
import { onShow } from "@dcloudio/uni-app";
import { ref } from "vue";
import SearchBar from "../../components/search-bar/index.vue"
import Swiper from "../../components/swiper/index.vue"
import Title from "../../components/title/index.vue"
import ProductItem from "../../components/product-item/index.vue"
import { IProductData, fetchGetProductByTagname } from "../../service/modules/classify";
import { fetchGetHasDiscountProducts } from "../../service/modules/home";
import useAddressStore from "../../stores/address";

useAddressStore().getRefreshAddresses() // -- 初始化地址数据

// -- 热销商品
const hotSales = ref<IProductData[]>([])

// -- 优惠折扣
const discountList = ref<any[]>([])

// -- 数据请求
onShow(async () => {
	if(!hotSales.value?.length) hotSales.value = await fetchGetProductByTagname(false,4,0)
	if(!discountList.value?.length) discountList.value = await fetchGetHasDiscountProducts()
})
</script>

<template>
	<view class="home">
		<!-- 搜索栏 -->
		<SearchBar/>
		<!-- 轮播图 -->
		<Swiper/>
	
		<view class="content">
			<div class="hot-sales">
				<Title title="热销商品"/>
				<view class="list">
					<ProductItem class="item" v-for="(item,index) in hotSales" :key="item.id ?? index" :data="item"/>
				</view>
			</div>
			<div class="discount">
				<Title title="优惠折扣"/>
				<!-- <view class="list">
					<ProductItem class="item" v-for="(item,index) in discountList" :key="item.id ?? index" :data="item"/>
				</view> -->
				<ProductItem class="item" v-for="(item,index) in discountList" :key="item.id ?? index" :data="item"/>
			</div>
		</view>
	</view>
</template>

<style scoped lang="scss">
.content {
	padding: 0 12rpx;
	box-sizing: border-box;
	
	.list {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-flow: row wrap; 
		justify-content: space-between;
		padding: 16rpx;
		gap: 16rpx;
		
		.item {
			width: calc(50% - 8rpx);
		}
	}
}
</style>
