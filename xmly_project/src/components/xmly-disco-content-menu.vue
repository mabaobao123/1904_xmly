<template>
	<div class="content">
		<div class="recm">
			<p>关注</p>
			<p class="recm_to">推荐</p>
			<p>趣配音</p>
		</div>
	</div>
</template>

<script>
	export default{
		// name:"JXheader"
	}
</script>

<style scoped="scoped">
	.content{
		padding: 0 .15rem;
	}
	.recm{
		width: 100%;
		height: .5rem;
		display: -webkit-flex;
		-webkit-align-items: center;
		border-bottom: 2px solid #e4e4e4;
		margin-top: .1rem;
	}
	.recm p{
		font-size: .14rem;
		margin: 0 auto;
	}
	.recm .recm_to{
		font-size: .18rem;
		color: #101010;
		font-weight: 600;
		border-bottom: .02rem solid #ee6552;
		line-height: .5rem;
		
	}
</style>