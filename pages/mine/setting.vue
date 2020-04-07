<template>
	<view class="setting_page">
		<view class="other_list" @tap="briefIntroduction">
			<image class="mine_other_list_icon" src="../../static/guanyu.png"></image>
			<view class="mine_other_list_content">关于网赚</view>
			<image class="mine_other_list_image" src="../../static/jiantou.png"></image>
		</view>
		<view class="other_list" @tap.once="update()">
			<image class="mine_other_list_icon" :class="flag ? 'active' : ''" src="../../static/banbengengxin.png"></image>
			<view class="mine_other_list_one">更新版本</view>
			<view class="mine_other_list_two">{{ version }}</view>
			<image class="mine_other_list_image" src="../../static/jiantou.png"></image>
		</view>
		<view class="block_btn" @tap="loginOut">退出登录</view>
	</view>
</template>

<script>
import update from 'common/update.js';
export default {
	data() {
		return {
			flag: false,
			updateType: 2
		};
	},
	methods: {
		briefIntroduction() {
			uni.navigateTo({
				url: '/pages/mine/briefIntroduction',
				animationType: 'slide-in-right'
			});
		},
		loginOut() {
			let that = this;
			// if (!this.$store.state.isLogin) {
			//     return
			// }
			console.log(this.$store.state.userInfo);
			if (this.$store.state.userInfo && !this.$store.state.userInfo.userId) {
				that.$store.commit('logout');
				uni.showToast({
					title: '退出成功',
					mask: true
				});
				setTimeout(function() {
					uni.hideToast();
					uni.switchTab({
						url: '/pages/tarbar/mine/mine',
						animationType: 'slide-in-right'
					});
				}, 2000);
				return;
			}
			uni.showModal({
				title: '确认退出？',
				content: '温馨提示：退出后会影响某些功能使用，确认退出？',
				showCancel: true,
				cancelText: '取消',
				confirmText: '确定',
				success: res => {
					if (res.confirm) {
						uni.request({
							url: that.websiteUrl + '/api/user/logout?userId=' + this.$store.state.userInfo.userId,
							method: 'POST',
							header: {
								Authorization: this.$store.state.userInfo.token
							},
							success: res => {
								if (res.data.code == 200) {
									that.$store.commit('logout');
									uni.showToast({
										title: '退出成功',
										mask: true
									});
									setTimeout(function() {
										uni.hideToast();
										uni.switchTab({
											url: '/pages/tarbar/mine/mine',
											animationType: 'slide-in-right'
										});
									}, 2000);
								} else if (res.data.code == 600) {
									that.$store.commit('logout');
								} else {
									plus.nativeUI.toast(res.data.msg);
								}
							},
							fail: () => {},
							complete: () => {}
						});
					}
				}
			});
		},
		flagUpdate() {
			// #ifdef APP-PLUS
			let self = this;
			let systemName = plus.os.name.toUpperCase();
			let versionNum;
			let appid = plus.runtime.appid;
			plus.runtime.getProperty(appid, function(wgtinfo) {
				versionNum = plus.storage.getItem('app-id'); // wgtinfo.versionCode;
				console.log(versionNum);
				if (!versionNum) {
					versionNum = wgtinfo.versionCode;
				} else {
					versionNum = versionNum.replace(/\./g, '');
				}
				console.log(systemName, versionNum);
				uni.request({
					url: self.websiteUrl + '/sys/checkversion',
					method: 'POST',
					data: {
						systemName: systemName,
						versionCode: versionNum
					},
					success: res => {
						let data = res.data;
						// console.log(111,data);
						if (data.data == null) {
							self.flag = false;
						} else if (data.data.path != '' || data.data.versionWgtPath != '') {
							self.flag = true;
						}
					}
				});
			});
			// #endif
		},
		update() {
			update.update(this.websiteUrl, this.updateType);
		}
	},
	onShow() {
		// // #ifdef APP-PLUS
		// this.version = plus.storage.getItem('app-id');
		// console.log(this.version);
		// // #endif
	},
	computed: {
		// #ifdef APP-PLUS
		version: function() {
			return plus.storage.getItem('app-id') ? plus.storage.getItem('app-id') : '1.0.0';
		}
		// #endif
	},
	onLoad() {
		this.flagUpdate();
	}
};
</script>

<style lang="less" scoped>
.setting_page {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20upx;

	.other_list {
		width: 750upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 10upx;
		line-height: 100upx;
		background-color: #ffffff;
		.mine_other_list_icon {
			margin-left: 30upx;
			width: 36upx;
			height: 36upx;
		}
		.mine_other_list_image {
			width: 17upx;
			height: 29upx;
		}
		.mine_other_list_content {
			width: 600upx;
			font-size: 40upx;
			color: rgba(40, 40, 40, 1);
			margin-left: 30upx;
		}
		.mine_other_list_one {
			width: 350upx;
			font-size: 40upx;
			color: rgba(40, 40, 40, 1);
			margin-left: 30upx;
		}
		.mine_other_list_two {
			width: 215upx;
			font-size: 40upx;
			color: rgba(40, 40, 40, 1);
			margin-left: 30upx;
		}
	}
	.block_btn {
		width: 504upx;
		height: 82upx;
		line-height: 82upx;
		margin-top: 50upx;
		font-size: 30upx;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		background: rgba(63, 138, 240, 1);
		border-radius: 40upx;
	}
}

.active {
	border-radius: 50%;
	background-color: #dd524d;
}
</style>
