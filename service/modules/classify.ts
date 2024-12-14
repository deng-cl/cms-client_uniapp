import http from "..";


export const fetchGetTags: () => Promise<{
	id:number
	name: string
}[]> = async () => {
	const res = await http.get("/product/tags")
	if(res.data) {
		return res.data.map(item => ({ id:item.id, name: item.tag_name })) // -- 处理成对应想要的格式
	}
	return []
} 

export interface IProductData {
	id?: number
	product_name?: string
	pics?: {imgUrl:string,id:number}[]
	product_count?: number
	product_desc?: string 
	product_is_show?: "true" | "false" // -- 是否为商家状体
	product_price?: number
	product_discount?: string // -- 折扣
	user_id?: string // -- 所属商家 id
	tag_name?: string // -- 商品标签
	sales_count?: number // -- 销售量
	username?: string // -- 商家用户名（账号）
}

export const fetchGetProductByTagname:(tagId?: false | number, limit?:number ,offset?:Number) => Promise<IProductData[]> 
= async (tagId = false, limit = 99999999,offset = 0 ) => {
	const url = tagId ? `/product/list/${tagId}` : `/product/list`
	const res = await http.get(url + `?limit=${limit}&offset=${offset}`,{},true)
	return res.data?.data ?? []
}

export const fetchGetSingleProductById: (id:number) => Promise<IProductData> = async (id:number) => {
	const res = await http.get('/product/single/'+id)
	if(res.state === 200) {
		return res.data ?? {}
	}else {
		uni.showToast({
			title:"商品数据请求失败", icon:"error"
		})
		return {}
	}
}

