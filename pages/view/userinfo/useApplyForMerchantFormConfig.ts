import { reactive, ref} from 'vue';
import { createItemConfig, type IItemConfig } from "../../../components/form/config"
// {
// 	"username":"2039377326", // -- 用户名 / 账号
// 	"phone":"134987373893", // -- 手机号
// 	"password":"123456", // -- 密码
// 	"name":"xiao long", // -- 姓名
// 	"nickname":"long", // -- 昵称
// 	"sex":"女", // -- 性别
// 	"age":"18", // -- 年龄
// 	// ---- 
// 	"id_card":"4412242003331324123", // -- 身份证（商家需要）
// 	"shop_name":"小 long 杂货铺" // -- 店铺名称（商家需要）
// }
export default function useApplyForMerchantFormConfig() {
	const formData = reactive({ // -- 表单双向绑定数据
		id_card: "",
		shop_name: ""
	})

	const itemsConfig:IItemConfig[] = [ // -- 表单相配置
		createItemConfig('id_card','身份证','请输入身份证'),
		createItemConfig('shop_name','店铺名','请输入店铺名称'),
	]
	
	const rules = { // -- 表单项校验规则
		id_card: { required: true, message: '请输入合法的身份证信息', pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/, trigger: ['blur'] },
		shop_name: { required: true, message: '店铺名称的长度应在 4-15 个字符', pattern: /^.{2,15}$/, trigger: ['blur'] },
	}
	
	return {
		formData,
		itemsConfig,
		rules
	}
}

