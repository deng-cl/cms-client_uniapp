<script setup>
import { ref } from 'vue';
const searchText = ref("")
const todoSearch = () => { // -- 跳转至搜索页
	if(!searchText.value.trim()) return
	uni.navigateTo({
		url:"/pages/view/search/index?searchText=" + searchText.value.trim()
	})
}
</script>

<template>
	<view class="search-bar h-flex">
		<view class="left"><slot name="left">
			<view class="logo">deng</view>
		</slot></view>
		<up-search class="center" placeholder="搜索你需要的商品" v-model="searchText" :showAction="false" @search="todoSearch" height="30"></up-search>
		<view class="right"><slot name="right">
			<view class="logo">cl</view>
		</slot></view>
	</view>
</template>

<style scoped lang="scss">
.search-bar {
	height: 44px;
	background-color: var(--h-primary-color);
	color: var(--h-primary-color-text);
		
	> * { 
		height: 100%;
		padding: 0 12rpx;
		box-sizing: border-box; 
		line-height: 44px;
		text-align: center;
	}
		
	.logo {
		font-family: '华文行楷';
	}

	.left,.right {
		width: 100rpx;
	}
	
	.center {
		flex: 1;
	}
	
	.right {
	}
}
</style>