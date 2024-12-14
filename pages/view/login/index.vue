<script setup lang="ts">
import { ref } from "vue";
import TopBack from "../../../components/top-back/index.vue"
import Form from "../../../components/form/index.vue"
import useFormConfig from "./useFormConfig";
import useRegistryFormConfig from "./useRegistryFormConfig";
import { fetchLogin, fetchRegistryUser } from "../../../service/modules/profile";

// -- 当前为登录还是注册
const isLogin = ref(true)

// -- 登录部分
const { formData, itemsConfig, rules } = useFormConfig()
const submit = () => { // -- 表单体检处理函数 / 登录操作
	fetchLogin({
		username: formData.username.trim(),
		password: formData.password.trim()
	})
}

// -- 注册部分
const registryFormCG = useRegistryFormConfig()
const submitRegistry = async () => {
	const flag = await fetchRegistryUser(registryFormCG.formData)
	if(flag) {
		setTimeout(() => {
			isLogin.value = true
		}, 300)
	}
}

</script>

<template>
	<TopBack title="登录"/>
	<view class="login">
		<!-- Form 登录表单的配置 -->
		<Form class="form" v-if="isLogin" 
			:model="formData" 
			:items-config="itemsConfig" 
			:rules="rules"
			:submit-handle="submit"
			submit-button-text="登录"
		></Form>
		<!-- Form 注册表单 -->
		<Form class="form" v-else
			:model="registryFormCG.formData" 
			:items-config="registryFormCG.itemsConfig" 
			:rules="registryFormCG.rules"
			:submit-handle="submitRegistry"
			submit-button-text="注册"
		></Form>
		<!-- 切换到注册表单 -->
		<view class="to-registry" @click="isLogin = !isLogin">
			<text>{{ isLogin ? '暂无账号，前往注册!!' : '已有账号，前往登录!!' }}</text>
		</view>
	</view>
</template>

<style scoped lang="scss">
.login {
	padding:0 16rpx;
	// -- TopBack 固定标题空间
	padding-top: 44px;
	box-sizing: border-box;
	
	.form {
		margin: auto;
		width: 80vw;
		margin-top: 48rpx;
	}
	
	.to-registry {
		margin: auto;
		width: 80vw;
		margin-top: 6rpx;
		font-size: 20rpx;
		text-align: right;
		text-decoration: underline;
		color: #3c9cff;
		&:hover { color: #3c9cff; }
	}
}
</style>