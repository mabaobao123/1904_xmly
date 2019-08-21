<template>
	<div class="info">
		<div class="info_left">
			<img src="../assets/img/ban_c.png" alt="">
		</div>
		<div class="info_right">
			<p>立即登录</p>
			<p>登录后，自动同步所有记录哦~</p>
		</div>
	</div>
</template>

<script>
	export default{
		// name:"JXheader"
	}
</script>

<style scoped="scoped">
	.info{
		height: .7rem;
		padding: 0 .15rem;
		display: -webkit-flex;
		-webkit-align-items: center;
	}
	.info_left{
		width: .7rem;
		height: .7rem;
		margin-right: .15rem;
		border-radius: 50%;
		display: -webkit-flex;
		-webkit-justify-content: space-between;
		-webkit-align-items: center;
	}
	.info_left img{
		width: 100%;
		height: 100%;
    border-radius: 50%;
	}
	.info_right p:nth-of-type(1){
		width: 1rem;
		height: .3rem;
		line-height: .3rem;
		border-radius: .3rem;
		text-align: center;
		border: 1px solid #FF0000;
		font-size: .16rem;
		color: #FF0000;
		margin-bottom: 5px;
	}
	.info_right p:nth-of-type(2){
		font-size: .12rem;
	}
</style>
