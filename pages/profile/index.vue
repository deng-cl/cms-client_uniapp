<script setup lang="ts">
	import { onShow } from '@dcloudio/uni-app'
	import { onBeforeMount, onMounted, ref } from 'vue';
	import { BASER_URL } from '../../service';
	import useAuthStore from '../../stores/auth';
	
	const src = ref("")
	
	const authStore = useAuthStore()
	authStore.queryUserInfo() 
	
	// onShow(async () => {
	// 	if(authStore.userInfo) return
	// 	await authStore.queryUserInfo() // -- 获取用户信息
	// })
	
	// -- 页面跳转方法
	const navigateToMethod = (url:string) => uni.navigateTo({ url })
</script>

<template>
	<view class="profile">
		<!-- 头部信息 -->
		<view class="info">
			<up-avatar class="avatar" :src="BASER_URL + authStore.userInfo?.avatar_url" size="50" mode="aspectFill"></up-avatar>
			<view class="username" v-if="authStore.userInfo && authStore.userInfo.nickname">{{ authStore.userInfo.nickname ?? '用户数据存在问题' }}</view>
			<button v-else type="primary" size="mini" @click="navigateToMethod('/pages/view/login/index')">登录</button>
		</view>
		
		<view class="setting">
			<view class="item" @click="navigateToMethod('/pages/view/order/index')">
				<view class="left">
					<up-icon class="icon" color="#ec443f" name="order" size="22"></up-icon>
					<view class="name">我的订单</view>
				</view>
				<up-icon name="arrow-right" color="#9e9e9e" size="14"></up-icon>
			</view>
			<view class="item" @click="navigateToMethod('/pages/view/address/index')">
				<view class="left">
					<up-icon class="icon" color="rgb(255, 105, 0)" name="map" size="22"></up-icon>
					<view class="name">地址管理</view>
				</view>
				<up-icon name="arrow-right" color="#9e9e9e" size="14"></up-icon>
			</view>
			<view class="item" @click="navigateToMethod('/pages/view/userinfo/index')">
				<view class="left">
					<up-icon class="icon" color="rgb(76 150 239)" name="account" size="22"></up-icon>
					<view class="name">个人信息</view>
				</view>
				<up-icon name="arrow-right" color="#9e9e9e" size="14"></up-icon>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.profile {
	height: 100%;
	position: relative;
	
	.info {
		padding:0 16rpx;
		box-sizing: border-box;
		height:320rpx;
		margin:16rpx 0;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		
		.avatar {
			margin-bottom: 22rpx;
		}
		
		.username {
			font-size: 32rpx;
			color: #454444;
			font-weight: bold;
		}
	}
	
	.setting {
		padding:0 16rpx;
		box-sizing: border-box;
		
		.item {
			// background: #ecfbf6f7;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 12rpx;
			padding: 12rpx;
			box-sizing: border-box;
			height: 44px;
			border-bottom: 1px solid #e7ebec;
			font-size: 28rpx;
			
			.left {
				display: flex;
				align-items: center;
				
				.icon {
					margin-right: 12rpx;
				}
			}
			
		}
	}
	
	.logout {
		width: 25;
		margin-top: 180rpx;
	}
}
</style>