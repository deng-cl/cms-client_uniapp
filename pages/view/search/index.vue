<script setup lang="ts">
import { onLoad, onPageScroll} from "@dcloudio/uni-app"
import { ref } from "vue";
import TopBack from "../../../components/top-back/index.vue"
import ProductItem from "../../../components/product-item/index.vue"
import BackTop from "../../../components/back-top/index.vue"
import { fetchGetProductsBySearchText } from "../../../service/modules/home";

const list = ref([])
onLoad(async ({ searchText }) => { 
	list.value = await fetchGetProductsBySearchText(searchText) // -- 搜索商品数据
})
</script>

<template>
	<view class="search">
		<TopBack title="搜索结果" />
		<!-- content -->
		<view class="content">		
			<ProductItem class="item" v-for="(item,index) in list" :key="item.id ?? index" :data="item"/>
		</view>
		<!-- 暂无更多 -->
		<view class="not-more">暂无更多商品</view>
		
		<!-- 返回顶部 -->
		<BackTop />
	</view>
</template>

<style scoped lang="scss">
.search {
	background: #ecfbf6f7;
	height: 100vh;
	// -- TopBack 固定标题空间
	padding-top: 44px;
	box-sizing: border-box;
}
	
.search .content {
	padding:0 16rpx;
}

// -- 两列布局 : 注释下面的样式，将切换为单列展示
.content {
	margin-top: 16rpx;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-flow: row wrap; 
	justify-content: space-between;
	padding: 16rpx;
	gap: 16rpx;
	// background: #ecfbf6f7;
	
	.item {
		width: calc(50% - 8rpx);
		// margin-top: 16rpx;
	}
}

.not-more {
	padding: 32rpx;
	padding-top: 24rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: gray;
	font-size: 22rpx;
	background: #ecfbf6f7;
}
</style>