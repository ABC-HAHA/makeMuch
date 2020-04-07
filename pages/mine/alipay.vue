<template>
	<view>
		<view class="page_block">
            <view class="page_top">
				<view class="registered_account">
				    <input class="" v-model="userName" maxlength="11" placeholder="真实姓名" placeholder-class="placeholder_style" @blur="checkName"/>
				</view>
				<view class="registered_account">
				    <input type="number" v-model="alipay" placeholder="支付宝账号" placeholder-class="placeholder_style" @blur="checkCode"/>
				</view>
                <view class="block_btn" @click="commitAlipay">提交</view>
				<!-- <view class="block_tips">温馨提示:请正确填写支付宝真实姓名和支付宝账号,绑定之后尽可修改一次</view> -->
            </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 userName: '',
				alipay: '',
			}
		},
		 methods: {
			    checkName(){
			      if (this.userName != '') {
			         return true
			     } else {
			         uni.showToast({
			             title: '用户名不能为空',
			             icon: 'none',
			             mask: true
			         });
			         setTimeout(function(){
			             uni.hideToast();
			         },2000)
			         return false
			     }
			 },
			 checkCode(){
			      if (this.alipay != '') {
			         return true;
			     } else {
			         uni.showToast({
			             title: '支付宝账号不能为空',
			             icon: 'none',
			             mask: true
			         });
			         setTimeout(function(){
			             uni.hideToast();
			         },2000)
			         return false
			     }
			 },
			 commitAlipay(){
				
				 if(this.checkName() && this.checkCode()){
					 console.log(8888888888);
					  uni.request({
					 	url: this.websiteUrl +'/api/user/bindingAlipay',
							 method: 'POST',
							 header: {
							 	Authorization:this.$store.state.userInfo.token
							 },
							 data: {
								 actualName:this.userName,
								 alipayNu: this.alipay,
							 },
					 	success: (res) => {
							console.log(res);
							if(res.data.code == 200){
								plus.nativeUI.toast("绑定成功!");
								 uni.switchTab({
									url: '/pages/tarbar/mine/mine',
								    animationType: 'slide-in-right'
								})
								
							}else{
								 plus.nativeUI.toast(res.data.data);
							}    
					 	}
					 });
				 }
				
			 }
		 }
	}
</script>

<style lang="less" scoped>
</style>
