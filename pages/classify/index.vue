<script setup lang="ts">
	import { onMounted, ref,watch } from "vue";
	import { onPageScroll } from '@dcloudio/uni-app';
	import { fetchGetProductByTagname, fetchGetTags } from "../../service/modules/classify";
	import SearchBar from "../../components/search-bar/index.vue"
	import ProductItem from "../../components/product-item/index.vue"
	import BackTop from "../../components/back-top/index.vue"

	// --- 状态
	const tags = ref([])
	const currentId = ref(-1)
	const datas = ref([])
	const showDatas = ref([])
	
	// -- 处理点击其它商品标签，进行展示数据的切换
	const handleTabsChange = (row:any) => {
		if(currentId.value === row.id) return
		else currentId.value = row.id
		
		// -- 数据展示处理部分
		if(row.id === -1) showDatas.value = datas.value // -- 推荐部分，显示所有
		else showDatas.value = datas.value.filter(item => item.tag_name === row.name) // -- 点击其它分类标签时处理函数
	}
	
	// -- 初始数据请求（商品标签 & 商品数据）
	onMounted(async () => {
		tags.value = [{ id:-1, name:"推荐" },...await fetchGetTags()]
		datas.value = await fetchGetProductByTagname()
		showDatas.value = datas.value
	})
</script>

<template>
	<view class="classify">
		<!-- 搜索栏 -->
		<SearchBar/>
		<!-- tabs 标签切换 -->
		<up-tabs :list="tags" @click="handleTabsChange" lineColor="#b0352f"></up-tabs>
		<!-- content -->
		<view class="content">		
			<ProductItem class="item" v-for="(item,index) in showDatas" :key="item.id ?? index" :data="item"/>
		</view>
		
		<!-- 暂无更多 -->
		<view class="not-more" v-if="showDatas.length">暂无更多商品</view>
	
		<!-- 返回顶部 -->
		<BackTop />
	</view>
</template>

<style scoped lang="scss">
.content {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-flow: row wrap; 
	justify-content: space-between;
	// grid-template-columns: repeat(2,1fr);
	padding: 16rpx;
	gap: 16rpx;
	background: #ecfbf6b3;
	
	.item {
		width: calc(50% - 8rpx);
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