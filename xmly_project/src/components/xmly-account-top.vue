<template>
	<div class="head_a">
		<img src="../assets/img/1_1.png" class="head_to"/>
		<div class="head_right">
			<img src="../assets/img/2_2.png" class="head_two"/>
			<img src="../assets/img/3_3.png" class="head_thr"/>
		</div>
	</div>
</template>

<script>
	export default{
		// name:"JXheader"
	}
</script>

<style scoped="scoped">
	.head_a{
		height: .51rem;
		padding: 0 .15rem;
		display: -webkit-flex;
		-webkit-justify-content: space-between;
		-webkit-align-items: center;
	}
	img{
		width: .2rem;
		height: .2rem;
	}
	.head_right{
		display: -webkit-flex;
    -webkit-justify-content: flex-end;
		width: .8rem;
	}
	.head_right img:nth-of-type(2){
		margin-left: .15rem;
	}
</style>
