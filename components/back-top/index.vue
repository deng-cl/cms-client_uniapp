<script setup lang="ts">
// -- 返回顶部组件
	import { onShow, onPageScroll } from "@dcloudio/uni-app"
	import { ref } from "vue";
	const scrollTop = ref(0);  
	onPageScroll((e) => { scrollTop.value = e.scrollTop; });
</script>

<template>
	<up-back-top :scroll-top="scrollTop" top="300"
		:customStyle="{
			background: 'rgb(176 53 47 / 81%)'
		}"
		:iconStyle="{
			color:'white'
		}"
	/>
</template>