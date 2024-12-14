<!-- 简单通用表单组件封装 -->
<script setup lang="ts">
	import { ref } from "vue"
	import { IItemConfig } from "./config"
	interface IObject { [K : string] : any } // -- 对象类型
	
	const props = defineProps<{ 
		model: IObject
		itemsConfig: IItemConfig[]
		rules: IObject
		showLabelText?: boolean
		submitHandle?: () => {}
		submitButtonText?: string
	}>()
	
	const formRef = ref(null) // -- form ref object → use validate ....
	
	const submit = () => { // -- 表单提交
		formRef.value.validate().then((valid:any) => { // -- 表单校验
		    if (valid) props.submitHandle ? props.submitHandle() : ""
		    else {  
			  return Promise.reject(valid)
		    }  
		}).catch((err:any) => {  
		    uni.showToast({title:'参数检验失败', icon:"error" })
			console.log('参数检验失败:', err);
		});  	
	}
</script>

<template>
	<up-form class="form" :model="model" :rules="rules ?? []" ref="formRef"
		labelPosition="left"
		labelWidth="auto"
	>
		<template v-for="item in itemsConfig" :key="item.prop">
			<up-form-item :label="showLabelText ? item.label : ''" :prop="item.prop" borderBottom>
				<slot :name="item.prop">
					<!-- border: surround | none -->
					<up-input v-model="model[item.prop]" border="surround" :placeholder="item.placeholder ?? item.label" :type="item.inputType" clearable>
						<!-- 自定义表单前缀: `{{ prop }}-prefix` 插槽 -->	
						<template #prefix>
							<slot :name="item.prop + '-' + 'prefix'"></slot>
						</template>
						<!-- 自定义表单后缀 `{{ prop }}subfix` 插槽 -->
						<template #suffix>
							<slot :name="item.prop + '-' + 'subfix'"></slot>
						</template>
					</up-input>
				</slot>
			</up-form-item>
		</template>
		
		<view class="handle">
			<slot name="handle" :submit="submit">
				<up-button type="primary" :text="submitButtonText ?? '确定'" @click="submit"></up-button>
			</slot>
		</view>
	</up-form>
</template>

<style scoped lang="scss">
.form {
	.handle {
		margin-top: 12rpx;
	}
}
</style>