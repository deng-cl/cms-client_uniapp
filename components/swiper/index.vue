<script setup lang="ts">
	import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

	const pics = ['/static/swiper/swiper1.jpeg','/static/swiper/swiper2.jpeg']	
	
	// -- 监听图片加载完成，动态计算 swiper 高度
	const ratio = ref(1) // -- 原图宽高比 - 用于在 load 与 window resize 时动态计算 swiper 高度
	const onImageload = (e:any) => {
		const { width, height } = e.detail
		ratio.value = height / width
		changeSwiperHeightByImageWidth() // -- ↑ 计算完宽高比，更新 swiper 高度
	}
	
	// -- 根据图片的宽度与对应原图的宽高比 ratio，动态计算 swiper 的高度
	const swiperHeight = ref(150)
	const changeSwiperHeightByImageWidth = () => {
		// -- 获取 picture 图片高度，在根据原图宽高比进行计算对应高度（ratio * originWidth）
		uni.createSelectorQuery().select(".picture-0").boundingClientRect().exec(res => {
			const imageDomWidth = res[0]?.width
			if(imageDomWidth) {
				// -- 计算图片高度，动态赋值 swiper 的高度
				const imageDomHeight = Math.ceil(imageDomWidth * ratio.value) 
				swiperHeight.value = imageDomHeight;
			}
		})
	}
	
	// -- 监听页面尺寸改变 - 更新 swiper 高度
	document.body.onresize = changeSwiperHeightByImageWidth
</script>
<template>
	<view class="swiper-container">
		<swiper  class="swiper" circular autoplay :interval="3000" :duration="1000"
			indicator-dots
			indicator-color="rgba(255,255,255,0.3)"
			indicator-active-color="white"
			:style="{ height: swiperHeight+'px' }"
		>
			<swiper-item class="swiper-item" v-for="(picItemUrl,i) in pics" :key="i">
				<image :class="'picture picture-'+i" :src="picItemUrl" mode="widthFix" 
					@load="onImageload"
				></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<style scoped lang="scss">
	.swiper-container {
		padding: 12rpx;
		box-sizing: border-box;
		height: fit-content !important;
		
		.swiper {
			border-radius: 6rpx;
			overflow:hidden;
			.swiper-item .picture {
				width: 100%;
			}
		}
	}
</style>