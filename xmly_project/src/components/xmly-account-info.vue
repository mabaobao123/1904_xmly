<template>
	<div class="info">
		<div class="info_left">
			<img src="../assets/img/ban_c.png" alt="">
		</div>
		<div class="info_right">
			<p>听友159294771281213131321313</p>
			<div class="info_right_bottom">
				<span>粉丝<i>0</i></span>
				<span>关注<i>0</i></span>
			</div>
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
	}
	.info_right p{
		width: 1rem;
		font-size: .16rem;
		line-height: .3rem;
		overflow:hidden;
			/*（规定当文本溢出时显示省略符号来代表被修剪的文本）*/
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.info_right_bottom{
		font-size: .12rem;
		color: #b0b0b0;
	} 
	.info_right_bottom span{
		display: inline-block;
		padding: 0 .1rem;
	}
	.info_right_bottom span:nth-of-type(1){
		border-right: 1px solid #b0b0b0;
	}
</style>