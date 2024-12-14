import { reactive, ref} from 'vue';
import { createItemConfig, type IItemConfig } from "../../../components/form/config"

export default function useUpdateBaseInfoFormConfig() {
	const formData = reactive({ // -- 表单双向绑定数据
		username: "",
		name: "",
		nickname: "",
		phone: "",
		id_card: "",
		sex: "",
		age: "",
	})

	const itemsConfig:IItemConfig[] = [ // -- 表单相配置
		createItemConfig('username','用户名','请输入用户名'),
		createItemConfig('name','姓名','请输入姓名'),
		createItemConfig('nickname','昵称','请输入昵称'),
		createItemConfig('phone','手机号','请输入手机号'),
		createItemConfig('id_card','身份证','请输入身份证'),
		createItemConfig('sex','性别','请输入性别(仅支持:"男 | 女 | 未知")'),
		createItemConfig('age','年龄','请输入年龄'),
	]
	
	const rules = { // -- 表单项校验规则
		username: { 
			required: true, min: 6, message: '请输入6位以上的账号', trigger: ['blur']
		},
		name: { required: true, message: '姓名的长度应在 2-15 个字符', pattern: /^.{2,15}$/, trigger: ['blur'] },
		phone: { required: true, message: '请输入合法的手机号', pattern: /^1[3-9]\d{9}$/, trigger: ['blur'] },
		id_card: { required: true, message: '请输入合法的身份证信息', pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/, trigger: ['blur'] },
		nickname: { required: true, message: '昵称不能为空', trigger: ['blur'] },
		age: { required: true, message: '请输入有效的符合注册要求的年龄 <0-120>', pattern: /^(?:[1-9]\d?|0|1[01]\d|120)$/, trigger: ['blur'] },
		shop_name: { required: true, message: '店铺名称的长度应在 4-15 个字符', pattern: /^.{2,15}$/, trigger: ['blur'] },
		sex: { required: true, message: '性别只能输入 "男 | 女 | 未知"', pattern: /^(男|女|未知)$/, trigger: ['blur'] },
	}
	
	return {
		formData,
		itemsConfig,
		rules
	}
}

