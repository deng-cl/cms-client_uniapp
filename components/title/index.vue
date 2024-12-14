<script setup lang="ts">
	defineProps<{
		title?: string
	}>()
</script>

<template>
	<view class="title">{{title ?? '默认标题'}}</view>
</template>

<style scoped lang="scss">
.title {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 24rpx 0;
	
	&:before{
		content: "";
		display: block;
		width: 10rpx;
		height: 10rpx;
		background-color: var(--h-primary-color);
		margin-right: 24rpx;
		transform: rotate(45deg);
		border-radius: 2rpx;
	}
	
	&::after{
		content: "";
		display: block;
		width: 10rpx;
		height: 10rpx;
		background-color: var(--h-primary-color);
		margin-left: 24rpx;
		transform: rotate(45deg);
		border-radius: 2rpx;
	}
}

</style>