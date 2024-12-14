
// -- 确认弹窗
export const confirmModal: (content?:string,titlt?:string) => Promise<boolean> = ( 
	content = '这是一个模态弹窗',
	title = '提示'
) => {
	return new Promise((resolve,reject) => {
		uni.showModal({
			title,
			content,
			success: function (res) {
				if (res.confirm) resolve(true)
				else resolve(false)
			}
		});
	})
}