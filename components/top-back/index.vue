<script setup lang="ts">
	const back = () => uni.navigateBack()
	defineProps<{ title: string }>()
</script>

<template>
	<view class="back">
		<up-icon name="arrow-left" color="white" size="20" @click="back"></up-icon>
		<view class="title">{{ title ?? '默认标题' }}</view>
		<view class="right">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<style scoped lang="scss">
.back {
	padding: 0 8rpx;
	box-sizing: border-box;
	height: 44px;
	background: var(--h-primary-color);
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	// 固定定位
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
	
	.title {
		height: 44px;
		line-height: 44px;
		width: fit-content;
		color: white;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		font-size: 28rpx;
	}
	
	.right {
		
	}
}
</style>