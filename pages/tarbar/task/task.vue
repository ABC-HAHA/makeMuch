<template>
	<div>
		<navigator class="taskbox" url="../../help/help">
			<image src="../../../static/bangzhu.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">帮助中心</view>
				<view class="task_content">为您提供各种任务教程,不懂点这里</view>
			</view>
		</navigator>
		<navigator class="taskbox" url="../../tuwenPromoting/tuwenPromoting">
			<image src="../../../static/tuwen.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">图文推广</view>
				<view class="task_content">分享图文信息到朋友圈，赚取佣金</view>
			</view>
		</navigator>
		<navigator class="taskbox" url="../../lianjiePromoting/lianjiePromoting">
			<image src="../../../static/lianjie.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">链接推广</view>
				<view class="task_content">分享链接信息到朋友圈，赚取佣金</view>
			</view>
		</navigator>
		<navigator class="taskbox" url="../../shipinPromoting/shipinPromoting">
			<image src="../../../static/shipin.png" mode=""></image>
			<view class="task_list">
				<view class="task_title">视频推广</view>
				<view class="task_content">分享图文信息到朋友圈，赚取佣金</view>
			</view>
		</navigator>
	</div>
</template>

<script>
export default {
	
};
</script>

<style lang="less" scoped>
.taskbox {
	margin: 25upx;
	background: #ffffff;
	display: flex;
	image {
		width: 120upx;
		height: 120upx;
		margin: 35upx 40upx;
	}
	.task_list {
		margin: 58upx 0upx 20upx;
		.task_title {
			font-size: 30upx;
			color: #25a39c;
		}
		.task_content {
			font-size: 24upx;
		}
	}
}
</style>
