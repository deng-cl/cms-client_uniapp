import { reactive } from 'vue';
import { createItemConfig, type IItemConfig } from "../../../components/form/config"

export default function useFormConfig() {
	const formData = reactive({ // -- 表单双向绑定数据
		username: "",
		password: ""
	})
	
	const itemsConfig:IItemConfig[] = [ // -- 表单相配置
		createItemConfig('username','用户名','请输入用户名'),
		createItemConfig('password','密码','请输入密码', "password")
	]
	
	const rules = { // -- 表单项校验规则
		username: { 
			required: true, min: 6, message: '请输入6位以上的账号', trigger: ['blur']
		},
		password: {
			required: true, min: 6, message: '请输入6位以上的密码', trigger: ['blur']
		}
	}
	
	return {
		formData,
		itemsConfig,
		rules
	}
}

