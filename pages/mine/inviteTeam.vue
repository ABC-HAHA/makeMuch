<template>
	<view  class="invite_page">
		<image class="invite_one" src="../../static/invite_head.png" ></image>
		<image class="invite_two" src="../../static/invite_one.png" ></image>
		<image class="invite_three" src="../../static/invite_two.png" ></image>
		<image class="invite_four" src="../../static/invite_three.png" ></image>
		<view class="invite_butt">
				<image  src="../../static/invite_butt.png"  @tap="displayPopup"></image>
		</view>
	
		<uni-popup :show="type === 'bottom_share'" position="bottom"  :shareStatus =true   @hidePopup="hidePopup" >
			<view class="shareGroup">
				<share-page  class = "share_popup" @failShareEvent = "failShare"  @successShareEvent="successShare"  @togglePopupEvent = "hidePopup"></share-page>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/pages/mine/uni-popup.vue';
	import sharePage from '@/pages/mine/share.vue';
	export default {
		components: {
			uniPopup,sharePage
		},
		data() {
			return {
				 phoneNum: '',
				 type:""
			}
		},
		 methods: {
			 hidePopup(){
				 this.type="";
			 },
			 displayPopup(){
				  this.type="bottom_share";
			 },
			 successShare(){
			 	uni.showToast({
			 		title: '分享成功！！！',
			 		mask: true
			 	});
			 },
			 failShare(){
			 	uni.showToast({
			 		title: '分享失败！！！',
			 		mask: true
			 	});
			 },
			 login(){ 
			 }
		 }
	}
</script>

<style lang="less" scoped>
	.invite_page{
		background:rgba(235,221,248,1);
		font-size: 0;
		text-align: center;
		.invite_one{
			width:750upx;
			height:629upx;
		}
		.invite_two{
			width:750upx;
			height:628upx;
		}
		.invite_three{
			width:750upx;
			height:629upx;
		}
		.invite_four{
			width:750upx;
			height:180upx;
			padding-bottom: 160upx;
		}
		.invite_butt{
			position:fixed;
			width:750upx;
			text-align: center;
			// top:0upx;
			>image{
				width:649upx;
				height:110upx;
			}
			
			// padding: 50upx;
			bottom: 0upx;
		}
		.shareGroup{
			margin-top:40upx;
		}
		
	}
</style>
