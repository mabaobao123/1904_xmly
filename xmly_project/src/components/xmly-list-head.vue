<template>
		<header>
			<div class="head">
				<p>我听</p>
				<img src="../assets/img/img_70.png" />
				<img src="../assets/img/img_71.png" />
				<img src="../assets/img/img_72.png" />
			</div>
		</header>
</template>

<script>
	export default{
		name:"JXheader"
	}
</script>

<style scoped="scoped">
	 header{
	 	width: 100%;
	 }
	 .head{
	 	width: 100%;
	 	height: .54rem;
	 	display: -webkit-flex;
	 	-webkit-align-items: center;
	 	border-bottom: 2px solid #f2f2f2;
	 }
	 .head p{
	 	font-size: .18rem;
	 	color: #090909;
	 	margin: 0 auto;
	 	margin-left: 1.7rem;
	 }
	 .head img{
	 	width: .21rem;
	 	height: .22rem;
	 	margin-right: .22rem;
	 }
</style>
