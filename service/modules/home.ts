import http from "..";

export const fetchGetProductsBySearchText = async (searchText:string) => {
	const res = await http.get(`/product/search/${searchText}`)
	return res?.data?.data ?? []
}

export const fetchGetHasDiscountProducts = async () => {
	const res = await http.get("/product/discount")
	return res?.data ?? []
}