<script setup lang="ts">
import { onShow,onReady } from '@dcloudio/uni-app'
import { ref, reactive } from "vue";
import TopBack from "../../../components/top-back/index.vue"
import PopupTitle from "../../../components/popup-title/index.vue"
import useAddressStore, { type IAddress } from "../../../stores/address";
import { columns/*🔺数据 */, changeHandler/*🔺修改处理函数 */ } from "./chinaArea"
import { confirmModal } from "../../../utils";

// -- address store
	const addressStore = useAddressStore()
	
// -- 控制是否打开添加/更新面板
	const showPopup = ref(false) 

// -- 城市选择处理(地址联动处理)
	const address = ref("") // -- 当前选择地址(行政区地址)
	const specific = ref("") // -- 详细的地址（具体地址）
	const nickname = ref("") // -- 收货人
	const phone = ref("") // -- 手机号
	const showPicker = ref(false) // -- 是否打开地址选择器面板
	
	function initAddressInfo() { // -- 初始化地址状态值
		address.value = `${columns[0][0]} ${columns[1][0]} ${columns[2][0]}`
		specific.value = ""
		nickname.value = ""
		phone.value = ""
	}
	
	// address.value = `${columns[0][0]} ${columns[1][0]} ${columns[2][0]}` // -- 初始化默认地址
	initAddressInfo() // -- 初始化默认地址信息

	// -- 确认联动地址选择: 更新选择地址 address
	const confirmPicker = (e: any) => {
		const { value, indexs } = e
		address.value = value.join(" ")  
		showPicker.value = false
	}
	
// -- 确认修改地址公共方法: 默认为添加地址信息
	const formRef = ref(null)
	const isUpdate = ref<false | number>(false) // -- 用于判断当前是否为修改地址西信息 → 当为 false 是即为添加，反之则为所要修改的地址索引
	// -- 添加或修改地址信息，如果 update 为 true 时，需要传递该地址的所在索引
	const confirmChangeAddresses = async (update?:boolean, index?:number) => { 	
		const addressData:IAddress = { // -- 所要更新的地址信息
			address: address.value,
			specific: specific.value,
			nickname: nickname.value,
			phone: phone.value,
			createTime: addressStore.addresses[index]?.createTime ?? Date.now(),
			updateTime: Date.now(),
		}
		
		// -- 表单校验: 校验信息是否通过
		formRef.value.validate().then((valid:any) => { 
		    if (!valid) return Promise.reject(valid) 
			
			// -- 判断是修改地址还是添加地址，做对应的处理
			if(update) { // -- 修改地址信息
				addressStore.updateAddress(index, addressData)
				console.log("update");
			}else { // -- 添加地址信息
				addressStore.setLocalAddress(addressData)
				console.log("create");
			}
			showPopup.value = false
		
			// -- 重置状态
			initAddressInfo() // -- 重置地址数据值 : 避免下次添加使用之前的状态缓存
		}).catch((err:any) => {  
		    uni.showToast({title:'参数检验失败', icon:"error" })
		});  
	}
	
// -- 点击地址添加/修改的确认按钮（有问题: 对应的确认弹框或再 popup 面板的下面）
	// const handleClickConfirmButton = async () => {
	// 	const confirm = await confirmModal(`是否确认${isUpdate.value !== false ? '修改' : '添加'}该地址信息`)
	// 	if (confirm) { // -- 当再次确认为 true 时，再执行修改操作
	// 		isUpdate.value === false ? confirmChangeAddresses() : confirmChangeAddresses(true, isUpdate.value)
	// 	}
	// }

// -- 修改地址信息(点击修改按钮)
	const updateLocalAddressInfo = (index:number, addressData: IAddress) => {
		// -- 地址信息回显处理
		address.value = addressData.address
		specific.value = addressData.specific
		nickname.value = addressData.nickname
		phone.value = addressData.phone

		// -- 修改 update 为对应的地址索引
		isUpdate.value = index
		
		// -- 打开表单面板
		showPopup.value = true
	}

// -- 删除地址信息
	const deleteLocalAddressInfo = async (index:number) => {
		const confirm = await confirmModal('是否确认删除该地址信息','删除提示')
		if(confirm) addressStore.deleteAddress(index)
	}
	
// -- 修改默认使用地址
	const topAddress = async (index:number) => {
		const confirm = await confirmModal('是否确认修改默认地址')
		if(confirm) addressStore.topAddress(index)
	}
	
// -- 复制地址信息
	const copyAddressInfo = (addressData: IAddress) => {
		const textToCopy = `${addressData.nickname} ${addressData.phone} ${addressData.address.split(" ").join("")} ${addressData.specific}`;
		// 使用Clipboard API将文本复制到剪贴板
		navigator.clipboard.writeText(textToCopy).then(function() {
			uni.showToast({ title:"复制成功" })
		}).catch(function(err) {
			console.error('无法复制文本: ', err);
			uni.showToast({ title:"无法复制文本\n500未知错误" })
		});	
	}
</script>

<template>
	<view class="container">
		<TopBack title="地址管理">
			<template #right>
				<up-button type="primary" text="添加" size="small" snape="circle" :hairline="false" @click="() => {
					showPopup = true
					isUpdate = false // -- 添加状态
				}"></up-button>
			</template>
		</TopBack>
		
		<!-- 地址展示 -->
		<view class="address">
			<view class="item" v-for="(address,index) in addressStore.addresses" :key="index">
				<view class="user-info">{{ address.nickname + "，" + address.phone }}</view>
				<view class="address-info">{{ address.address + " " + address.specific  }}</view>
				<view class="handle-line">
					<view class="default">
						<text v-if="index === 0">默认地址</text>
						<up-button v-else type="error" text="设为默认" size="mini" plain snape="circle" @click="topAddress(index)"/>
					</view>
					<view class="button">
						<up-button type="info" text="复制" size="mini" plain snape="circle" @click="copyAddressInfo(address)"></up-button>
						<up-button type="primary" text="修改" size="mini" plain snape="circle" @click="updateLocalAddressInfo(index,address)"/>
						<up-button type="error" text="删除" size="mini" plain snape="circle" @click="deleteLocalAddressInfo(index)"/>
					</view>
				</view>
			</view>
			<view class="not-more">暂无更多</view>
		</view>
	</view>
	
	<!-- 弹出层: 添加与修改地址弹出层 -->
	<up-popup :show="showPopup" mode="top" @close="showPopup = false" @open="showPopup = true">
		<up-form class="popup" :model="{ specific, nickname, phone }" :rules="
			{
				specific: { required: true, min:4, message: '请输入详细的地址信息，且长度不小于4位', trigger: ['blur'] },
				nickname: { required: true, message: '昵称的长度应在 2-15 个字符', pattern: /^.{2,15}$/, trigger: ['blur'] },
				phone: { required: true, message: '请输入合法的手机号', pattern: /^1[3-9]\d{9}$/, trigger: ['blur'] }
			}
		" ref="formRef">
			<!-- <view class="title">{{ isUpdate === false ? '添加地址' : '修改地址' }}</view> -->
			<PopupTitle :title="isUpdate === false ? '添加地址' : '修改地址'"/>
			<!-- 收货人 -->
			<up-form-item label="收货人" labelWidth="auto" prop="nickname">
				<up-input v-model="nickname" border="surround" placeholder="请输入更具体的地址信息" clearable></up-input>
			</up-form-item>
			<!-- 手机号 -->
			<up-form-item label="手机号" labelWidth="auto" prop="phone">
				<up-input v-model="phone" border="surround" placeholder="请输入更具体的地址信息" clearable></up-input>
			</up-form-item>
			<!-- 地址联动选择 -->
			<up-form-item label="地址选择" labelWidth="auto">
				<up-input v-model="address" border="surround" readonly>
					<template #suffix>
						<up-button type="primary" text="选择" size="small" snape="circle" :hairline="false" @click="showPicker = true"></up-button>
					</template>
				</up-input>
			</up-form-item>
			<!-- 详细地址 -->
			<up-form-item label="详细地址" labelWidth="auto" prop="specific">
				<up-input v-model="specific" border="surround" placeholder="请输入更具体的地址信息" clearable></up-input>
			</up-form-item>
			<!-- 处理按钮 : 确认/取消 -->
			<up-form-item labelWidth="auto" >
				<up-button class="handle-button" type="primary" text="确认" size="small" snape="circle" :hairline="false" 
					@click="isUpdate === false ? confirmChangeAddresses() : confirmChangeAddresses(true, isUpdate)"
				/>
				
				<up-button class="handle-button" type="error" text="取消" size="small" snape="circle" :hairline="false" 
					@click="() => {
						showPopup = false;
						initAddressInfo() // -- 重置地址数据值 : 避免点击修改后，在进行添加新地址时，存在前面地址的回显状态
					}"
				/>
			</up-form-item>
		</up-form>
	</up-popup>
	
	<!-- 地址联动选择框 -->
	<up-picker
		:show="showPicker" :columns="columns" closeOnClickOverlay
		@change="changeHandler" @confirm="confirmPicker" @cancel="showPicker = false" @close="showPicker = false" 
	/>
</template>

<style scoped lang="scss">
.container {
	// -- TopBack 固定标题空间
	padding-top: 44px;
	box-sizing: border-box;
	background: #d3d3d373;
	height: 100vh;
}
	
.address {
	.item {
		padding:14rpx 0;
		box-sizing:border-box;
		font-size: 24rpx;
		background-color: white;
		margin-bottom: 14rpx;
		// margin-top: 12rpx;
		
		> * {
			margin: 10rpx 0;
			padding:0 16rpx;
			box-sizing:border-box;
		}
		
		.handle-line {
			margin-top: 24rpx;
			border-top: 1px solid #80808047;
			padding-top: 20rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.default {
				font-size: 20rpx;
				color: gray;
			}
			
			.button {
				display: flex;
				gap: 12rpx;
			}
		}
	}

	.not-more {
		margin-top: 28rpx;
		font-size: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: gray;
	}	
}

.popup {
	// width: 88vw;
	padding: 24rpx 48rpx;
	box-sizing: border-box;
	
	.handle-button {
		margin: 0 24rpx;
	}
}
</style>

