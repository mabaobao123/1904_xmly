<template>
	<header>
		<div class="menu">
			<a href="#">
				<img src="../assets/img/img_30.png" alt=""/>
				<span>全名朗诵</span>
			</a>
			<a href="#">
				<img src="../assets/img/img_31.png" alt=""/>
				<span>K歌房</span>
			</a>
			<a href="#">
				<img src="../assets/img/img_32.png" alt=""/>
				<span>喜马土扒鼠</span>
			</a>
			<a href="#">
				<img src="../assets/img/img_33.png" alt=""/>
				<span>活动</span>
			</a>
		</div>
	</header>
</template>

<script>
	export default{
		// name:"JXheader"
	}
</script>

<style scoped="scoped">
	.menu{
		height: .9rem;
		display: -webkit-flex;
		-webkit-align-items: center;
		-webkit-justify-content: space-around;
		margin-bottom: .09rem;
	}
	.menu a{
		width: .6rem;
	}
	.menu img{
		width: .35rem;
		height: .36rem;
		margin: 0 auto;
	}
	.menu span{
		font-size: .12rem;
		display: block;
		color: #645f65;
		margin-top: .08rem;
		text-align: center;
	}
</style>
