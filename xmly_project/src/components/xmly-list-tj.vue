<template>
	<nav>
		<div class="men">
			<div class="menu">
				<a href="#">
					<img src="../assets/img/img_73.png" alt="" />
					<span>下载</span>
				</a>
				<a href="#">
					<img src="../assets/img/img_74.png" alt="" />
					<span>历史</span>
				</a>
				<a href="#">
					<img src="../assets/img/img_75.png" alt="" />
					<span>已购</span>
				</a>
				<a href="#">
					<img src="../assets/img/img_76.png" alt="" />
					<span>听单</span>
				</a>
			</div>
		</div>
		<div class="sub">
			<p>订阅</p>
			<h3>推荐</h3>
			<img src="../assets/img/img_77.png" />
			<img src="../assets/img/img_78.png" />
			<span>收到</span>
		</div>
		<div class="rec">
			<p>最近更新</p>
			<p>最新订阅</p>
			<p>最近常听</p>
		</div>

		<ul class="list">

		</ul>
	</nav>
</template>

<script>
	export default{
		name:"JXheader"
	}
</script>

<style scoped="scoped">
	nav{
		width: 100%;
	}
	.men{
		width: 100%;
		height: 1.1rem;
		background: #f7f7f7;
	}
	.menu{

		border-radius: .06rem;
		margin: 0 auto;
		background: #FFFEFF;
		width: 3.5rem;
		height: 1.04rem;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-around;
	}
	.menu a{
		width: 25%;
	}
	.menu img{
		width: .35rem;
		height: .36rem;
		margin: 0 auto;
	}
	.menu span{
		font-size: .12rem;
		display: block;
		color: #101010;
		margin-top: .08rem;
		text-align: center;
	}
	.sub{
		width: 100%;
		height: .5rem;
		display: -webkit-flex;
		-webkit-align-items: center;
		border-bottom: 2px solid #e2e2e2;
	}
	.sub p{
		font-size: .16rem;
		color: #181818;
		margin-left: .15rem;
		font-weight: 600;
		border-bottom: 4px solid #ee6552;
		line-height: .5rem;

	}
	.sub h3{
		color: #5b5b5b;
		font-size: .12rem;
		margin-left: .27rem;
		margin-right: 1.89rem;
	}
	.sub img{
		width: .16rem;
		height: .16rem;

	}
	.sub span{
		font-size: .13rem;
		color: #939393;
	}
	.sub img:nth-of-type(2){
			margin-left:.15rem;
		}
	.rec{
		width: 100%;
		height: .57rem;
		border-bottom: 2px solid #e2e2e2;
		display: -webkit-flex;
	}
	.rec p{
		font-size: .12rem;
		color: #949494;
		margin-left: .29rem;
		margin-top: .17rem;
	}
	.rec p:nth-of-type(1){
			color: #e56e4c;
		}
</style>
