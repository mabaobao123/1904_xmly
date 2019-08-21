<template>
	<div class="nav_go">
		<p>热门话题</p>
		<div class="nav_to">
			<img src="../assets/img/img_34.png" alt="" />
			<img src="../assets/img/img_35.png" alt="" />
			<img src="../assets/img/img_34.png" alt="" />
			<img src="../assets/img/img_35.png" alt="" />
			<img src="../assets/img/img_34.png" alt="" />
			<img src="../assets/img/img_35.png" alt="" />
			<img src="../assets/img/img_36.png" alt="" />
		</div>
	</div>
</template>

<script>
	export default{
		// name:"JXheader"
	}
</script>

<style scoped="scoped">
	.nav_go p{
		font-size: .16rem;
		color: #121212;
		font-weight: 600;
		margin-left: .15rem;
		margin-top: .14rem;
		margin-bottom: .13rem;
	}
	.nav_to{
		display: -webkit-flex;
		overflow-x: auto;
		padding-left: .14rem;
		margin-bottom: .11rem;
	}
  .nav_to::-webkit-scrollbar{
		display:none
	}
	.nav_to img{
		-webkit-flex-shrink:0;
		width: 1.6rem;
		height: 0.9rem;
		margin-right: .09rem;

	}
</style>
