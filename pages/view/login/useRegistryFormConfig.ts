import { reactive } from 'vue';
import { createItemConfig, type IItemConfig } from "../../../components/form/config"

export default function useRegistryFormConfig() {
	const formData = reactive({ // -- 表单双向绑定数据
		username: "",
		password: "",
		phone: "",
		name: "",
		nickname: "",
		sex: "",
		age: ""
	})
	
	const itemsConfig:IItemConfig[] = [ // -- 表单相配置
		createItemConfig('username','用户名','请输入用户名'),
		createItemConfig('password','密码','请输入密码'),
		createItemConfig('phone','手机号','请输入手机号'),
		createItemConfig('name','姓名','请输入姓名'),
		createItemConfig('nickname','昵称','请输入昵称'),
		createItemConfig('sex','性别','请输入性别(男|女|未知)'),
		createItemConfig('age','年龄','请输入年龄'),
	]
	
	const rules = { // -- 表单项校验规则
		username: { 
			required: true, min: 6, message: '请输入6位以上的账号', trigger: ['blur']
		},
		password: {
			required: true, min: 6, message: '请输入6位以上的密码', trigger: ['blur']
		},
		name: { required: true, message: '姓名的长度应在 2-15 个字符', pattern: /^.{2,15}$/, trigger: ['blur'] },
		phone: { required: true, message: '请输入合法的手机号', pattern: /^1[3-9]\d{9}$/, trigger: ['blur'] },
		nickname: { required: true, message: '昵称不能为空', trigger: ['blur'] },
		age: { required: true, message: '请输入有效的符合注册要求的年龄 <0-120>', pattern: /^(?:[1-9]\d?|0|1[01]\d|120)$/, trigger: ['blur'] },
		sex: { required: true, message: '性别只能输入 "男 | 女 | 未知"', pattern: /^(男|女|未知)$/, trigger: ['blur'] },
	}
	
	return {
		formData,
		itemsConfig,
		rules
	}
}

