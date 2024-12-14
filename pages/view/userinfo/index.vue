<script setup lang="ts">
import { onShow } from "@dcloudio/uni-app";
import { ref } from "vue";
import TopBack from "../../../components/top-back/index.vue"
import PopupTitle from "../../../components/popup-title/index.vue"
import Form from "../../../components/form/index.vue"
import { BASER_URL } from "../../../service";
import useAuthStore from '../../../stores/auth';
import { confirmModal } from "../../../utils";
import { fetchUpdateUserAvatar, fetchUpdateUserBaseInfo, fetchApplyForMerchantUser, fetchQueryUsernameInMerchantRegistryExist } from "../../../service/modules/profile";
import useUpdateBaseInfoFormConfig from "./useUpdateBaseInfoFormConfig";
import useApplyForMerchantFormConfig from "./useApplyForMerchantFormConfig";

const autoStore = useAuthStore()
if(!autoStore.userInfo) autoStore.queryUserInfo()
const ITEMNAME_MAP_BY_USERINFO_KEY = {
	"username": "账号",
	"name": "姓名",
	"nickname": "昵称",
	"phone": "手机号",
	"id_card": "身份证",
	"sex": "性别",	
	"age": "年龄",
}

const normalUser_and_inMerchantRegistryExist = ref(false)
onShow(async () => {
	normalUser_and_inMerchantRegistryExist.value = await fetchQueryUsernameInMerchantRegistryExist()
})

// -- ↑ 数据基本展示
// ---------------------------- ↓ 处理数据请求（如: 修改信息、退出登录.....）----------------------------

// -- 修改头像信息
	const showAvatarPopup = ref(false)
	const fileList = ref([]) // -- 显示已上传的文件列表	
	const updateUserAvatar = async () => {
		const file = fileList.value[0]
		if(!file) return uni.showToast({ title:"请先选择图片", icon:"error" })
		await fetchUpdateUserAvatar(file.file)
		showAvatarPopup.value = false
		fileList.value = [] // -- 清空已选择图片信息
	}
	const handleUploadAfterRead = e => fileList.value = [e.file] // -- 修改选择的图片信息
	const handleUploadDelete = e => fileList.value = [] // -- 清空选择的图片信息

// -- 跳转至后台管理系统界面
	const navigateToBackManagementWebside = () => {
		// location.href = "http://127.0.0.1:5173/#/user_info"
		return "http://127.0.0.1:5173/#/user_info"
	}
	
// -- 申请成为商家用户（普通用户）
	const showApplyForMerchantPopup = ref(false)
	const AFM_FormConfig = useApplyForMerchantFormConfig()
	const applyForBecomeMerchantUser = async () => {
		await fetchApplyForMerchantUser({...AFM_FormConfig.formData  })		
		showApplyForMerchantPopup.value = false
		// -- 更新页面状态
		normalUser_and_inMerchantRegistryExist.value = await fetchQueryUsernameInMerchantRegistryExist()
	}
	
	
// -- 修改用户基本信息
	const showBaseInfoPopup = ref(false)
	const { formData, itemsConfig, rules } = useUpdateBaseInfoFormConfig()
	const updateUserBaseInfo = async () => {
		await fetchUpdateUserBaseInfo(formData)
		showBaseInfoPopup.value = false
	}
	
// -- 修改当前账号密码
	const updateUserPassword = () => {}
	
// -- 退出登录
	const dispatchLogout = async () => {
		const confirm = await confirmModal('是否确定退出当前账号','退出登录')
		if(confirm) {
			autoStore.dispatchLogout()
		}
	}
</script>

<template>
	<TopBack title="用户信息"/>
	<!-- 用户信息展示 -->
	<view class="userinfo">
		<!-- 特殊字段的特殊展示: 头像 -->
		<view class="item">
			<div class="name">头像:</div>
			<div class="value arvtar">
				<image class="image" :src="BASER_URL + autoStore.userInfo?.avatar_url" mode="heightFix"></image>
				<up-button class="button" type="primary" text="修改头像" size="small" snape="circle" :disabled="!autoStore.userInfo" 
					@click="showAvatarPopup = true"
				/>
			</div>
		</view>
		<!-- 特殊字段的特殊展示: 用户类型 -->
		<view class="item">
			<div class="name">用户类型:</div>
			<div class="value user-type">
				<template v-if="!autoStore.userInfo">
					<up-tag text="未登录任何账号" plain size="mini" type="info"></up-tag>
				</template>
				<template v-else-if="autoStore.userInfo?.user_type_id === 2">
					<up-tag text="商家用户" plain size="mini" type="error"></up-tag>
					<!-- <up-button class="button" type="primary" text="跳转至后台管理系统界面" size="small" snape="circle" @click="navigateToBackManagementWebside"/> -->
					<view class="back-management-href">
						<view class="name">PC后台地址:</view>
						<view class="value">localhost:5174</view>
					</view>
				</template>
				<template v-else>
					<up-tag text="普通用户" plain size="mini" type="warning"></up-tag>
					<!-- normalUser_and_inMerchantRegistryExist -->
					<up-button class="button" type="primary"  size="small" snape="circle" @click="
						async () => { 
							if(await confirmModal('是否确认申请商家用户')) showApplyForMerchantPopup = true
						}"
						:text="normalUser_and_inMerchantRegistryExist ? '申请为商家(审核中)' : '申请为商家'" :disabled="normalUser_and_inMerchantRegistryExist"
					/>
				</template>
			</div>
		</view>
		<!-- 基本用户信息展示 -->
		<view class="item" v-for="(value,key) in ITEMNAME_MAP_BY_USERINFO_KEY" :key="key">
			<div class="name">{{ value }}:</div>
			<div class="value">
				{{ 
					autoStore.userInfo?.[key] && autoStore.userInfo?.[key] !== 'null' 
					?  autoStore.userInfo[key] 
					: '无' 
				}}
			</div>
		</view>
	</view>
	<!-- 操作按钮 -->
	<view class="handle-button-area">
		<up-button class="button update" type="info" text="修改用户基本信息" snape="circle" :disabled="!autoStore.userInfo"
			@click="showBaseInfoPopup = true; Object.assign(formData,autoStore.userInfo)"
		/>
		<!-- <up-button class="button update-pwd" type="warning" text="修改当前账号密码" snape="circle" :disabled="!autoStore.userInfo"
			@click=""
		/> -->
		<up-button class="button logout" type="error" text="退出登录" snape="circle" :disabled="!autoStore.userInfo"
			 @click="dispatchLogout"
		/>
	</view>
	
<!-- ________________________________________ 弹出层 ↓ ________________________________________ -->
	<!-- 头像修改 -->
	<up-popup :show="showAvatarPopup" mode="top" closeOnClickOverlay  @close="showAvatarPopup = false">
		<view class="popup avatar-popup">
			<PopupTitle title="修改头像"/>
			<up-upload
				class="upload" :fileList="fileList" :maxCount="1"  uploadText="头像上传" width="120" height="120"
				@afterRead="handleUploadAfterRead"
				@delete="handleUploadDelete"		
			/>
			<view class="handle-line">
				<up-button class="button logout" type="primary" text="确认" snape="circle" size="small" @click="updateUserAvatar"/>
				<up-button class="button logout" type="error" text="取消" snape="circle" size="small" 
					@click="() => {
						fileList = []
						showAvatarPopup = false
					}"
				/>
			</view>
		</view>
	</up-popup>

	<!-- 修改基本信息 -->
	<up-popup :show="showBaseInfoPopup" mode="top" closeOnClickOverlay  @close="showBaseInfoPopup = false">
		<view class="popup userinfo-popup">
			<PopupTitle title="修改用户信息"/>
			<Form class="form"
				:model="formData" 
				:items-config="itemsConfig" 
				:rules="rules"
				:submit-handle="updateUserBaseInfo"
				showLabelText
			>	
				<template #handle="{submit}">
					<view class="handle-line">
						<up-button class="button logout" type="primary" text="确认" snape="circle" size="small" @click="submit"/>
						<up-button class="button logout" type="error" text="取消" snape="circle" size="small" @click="showBaseInfoPopup = false"/>
					</view>
				</template>
			</Form>
		</view>
	</up-popup>
	
	<!-- 申请为商家用户 -->
	<up-popup :show="showApplyForMerchantPopup" mode="top" closeOnClickOverlay  @close="showApplyForMerchantPopup = false">
		<view class="popup apply-for-merchant">
			<PopupTitle title="申请为商家"/>
			<Form class="form"
				:model="AFM_FormConfig.formData" 
				:items-config="AFM_FormConfig.itemsConfig" 
				:rules="AFM_FormConfig.rules"
				:submit-handle="applyForBecomeMerchantUser"
				showLabelText
			>	
				<template #handle="{submit}">
					<view class="handle-line">
						<up-button class="button logout" type="primary" text="确认" snape="circle" size="small" @click="submit"/>
						<up-button class="button logout" type="error" text="取消" snape="circle" size="small" @click="showApplyForMerchantPopup = false"/>
					</view>
				</template>
			</Form>
		</view>
	</up-popup>
</template>



<style scoped lang="scss">
.userinfo {
	// -- TopBack 固定标题空间
	padding-top: 44px;
	box-sizing: border-box;
	.item {
		display: flex;
		align-items: center;
		color: gray;
		font-size: 28rpx;
		// background-color: red;
		padding:16rpx 16rpx;
		box-sizing: border-box;
		// margin-bottom: 12rpx;
		border-bottom: 1px solid #80808047;
		.name {
			margin-right: 14rpx;
			display: flex;
			align-items: center;
		}
		.value {
			flex: 1;
			color: #434141;
			display: flex;
			align-items: center;
		}
		.button { // -- commom
			width: auto;
			margin: 0 !important;
		}
		.arvtar {
			display: flex;
			justify-content: space-between;
			.image {
				width: auto;
				height: 100rpx;
				border-radius: 6rpx;
			}
		}
		.user-type {
			display: flex;
			justify-content: space-between;
			
			.back-management-href {
				display: flex;
				align-items: center;
				font-size: 22rpx;
				.name { margin-right: 6rpx; color: gray; }
				.value { color: #f56c6c; }
			}
		}
		&:last-of-type {
			border-bottom: none
		}
	}
}

.handle-button-area {
	margin-top: 56rpx;
	
	.button {
		width: 60vw;
		min-width: fit-content;
		margin-bottom: 24rpx;
	}
}

// -- 弹出层公共样式
.popup {
	padding: 16rpx;
	box-sizing: border-box;
	.handle-line { // -- 所有 popup 公共 handle-line 样式
		display: flex;
		justify-content: space-between;
		padding: 0 28rpx;
		box-sizing: border-box;
		margin:24rpx 0;
		.button {
			margin: 0 22rpx;
		}
	}
}

// -- 头像弹出层
.avatar-popup {
	display: flex;
	flex-direction: column;
	.upload {
		// display: flex;
		// justify-content: center;
		margin: auto;
	}
}

// -- 用户信息
.userinfo-popup {
	.form {
		margin: auto;
		width: 80vw;
		margin-top: 48rpx;
	}
}
</style>
