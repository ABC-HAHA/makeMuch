<template>
	<div class="box">
		<view class="tuwenbox" v-for="(item, index) in shareList" :key="index" @tap="toDetail(item.esaId)">
			<image :src="item.esaPicUrl" mode=""></image>
			<view class="tuwen_title">
				<view class="task_group">{{taskTitle[item.taskLevel]}}</view>
				<view class="">{{ item.esaAppName }}</view>
			</view>
			<view class="tuwen_bottom">
				<view class="tuwen_left">￥{{ item.esaUnitPrice }}.00元</view>
				<view class="tuwen_right">{{ item.esaUsedCount }}/{{ item.esaTotalCount }}</view>
			</view>
		</view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			taskTitle: ['低级', '中级', '高级']
		};
	},
	methods: {
		// 跳转详情
		toDetail(id) {
			console.log(id);
			uni.navigateTo({
				url: 'detail/detail?esaId=' + id
			});
		}
	},
	props: {
		shareList: {
			type: Array
		}
	}
};
</script>

<style lang="less" scoped>
.box {
	width: 750upx;
	display: flex;
	// justify-content: space-around;
	flex-wrap: wrap;
	.tuwenbox {
		margin-left: 10upx;
		font-size: 0;
		image {
			margin: 20upx 10upx 10upx 20upx;
			width: 330upx;
			height: 330upx;
		}
		.tuwen_title {
			font-size: 30upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(34, 34, 34, 1);
			display: flex;
			justify-content: space-around;
			.task_group{
				background: #F0E68C;
				color: #F5F5F5;
				padding: 3upx;
				border-radius: 20%;
				box-shadow: 1px 1px 5px #F0E68C;
			}
		}
		.tuwen_bottom {
			font-size: 30upx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(227, 52, 52, 1);
			display: flex;
			justify-content: space-between;
			padding: 15upx;
			// justify-content: space-around;
		}
	}
}
</style>
