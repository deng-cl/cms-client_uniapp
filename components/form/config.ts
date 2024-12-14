	export interface IItemConfig {
		label: string
		prop: string
		placeholder?: string
		inputType?: 'number' | 'idcard' | 'digit' | 'password' | 'text' // -- 是否为密码
	}
	
	export const createItemConfig:(prop:string,label:string,placeholder?:string,inputType?: 'number' | 'idcard' | 'digit' | 'password' | 'text') => IItemConfig 
	= (prop, label, placeholder,inputType = "text") => ({ // -- 外部使用该方法创建 item 对应的数据（同意规范）
		 prop, label, placeholder, inputType
	})