<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-plus/index.scss";

// h variable
:root{
	--h-primary-color: #b0352f;
	--h-primary-color-two: rgb(255, 105, 0);
	--h-primary-color-text: white;
}

// -- 公共样式
.h-flex {
	display: flex;
	flex-flow: row nowrap; 
	justify-content: space-between;
	align-items: center;
}

// .uni-modal {
// 	z-index: 99999;
// }
</style>
