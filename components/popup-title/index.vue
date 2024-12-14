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
	box-sizing: border-box;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 16rpx 0;
	font-size: 28rpx;
}
</style>