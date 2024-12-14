<script setup lang="ts">
</script>
<template>
	<view class="swiper">
		<up-swiper
			:list="['/static/swiper/swiper1.jpeg','/static/swiper/swiper2.jpeg']"
			indicator
			indicatorMode="dot"
			circular
			height="180"
		></up-swiper>
	</view>
</template>

<style scoped lang="scss">
	.swiper {
		padding: 12rpx;
		box-sizing: border-box;
	}
</style>