<template>
	<li class="list_f">
		<img src="../assets/img/img_79.png" />
		<div class="list_to">
			<div class="list_go">
				<p>我们一起聊健康</p>
				<p>我们说说老寒腿</p>
				<p>50分钟前</p>
			</div>
			<div class="list_pp">
				<p>更新</p>
				<img src="../assets/img/img_80.png" />
			</div>
		</div>
	</li>
</template>

<script>
	export default{
		name:"JXheader"
	}
</script>

<style scoped="scoped">
	.list{

	}
	.list_f{
		display: -webkit-flex;
		margin-top: .2rem;
		margin-bottom: .16rem;
	}
	.list_f img{
		width: .66rem;
		height: .66rem;
		margin-left: .15rem;
	}
	.list_to{
		display: -webkit-flex;
		border-bottom: 2px solid #e7e7e7;
	}
	.list_go{
		margin-right: 1.2rem;
		margin-bottom: .19rem;
	}
	.list_go p{
		margin-bottom: .07rem;
		margin-left: .1rem;
	}
	.list_go p:nth-of-type(1){
			color: #151515;
			font-size: .16rem;
		}
	.list_go p:nth-of-type(2){
			color: #a4a4a4;
			font-size: .12rem;
		}
	.list_go p:nth-of-type(3){
			color: #a4a4a4;
			font-size: .12rem;

		}
	.list_pp p{
		font-size: .12rem;
		color: #f5b0a0;
		margin-left: .12rem;
		margin-bottom: .5rem;
	}
	.list_pp img{
		width: .23rem;
		height: .08rem;

	}
</style>
