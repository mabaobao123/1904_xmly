<template>
	<div class="vip_info">
		<div class="sec_a">
			<div class="sec_left">
				<img src="../assets/img/VIP_B.png" >
				<p>VIP会员</p>
			</div>
			<div class="sec_right">
				<h3>VIP首月仅6元</h3>
				<img src="../assets/img/nav_YJT.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped="scoped">
  .vip_info{
    margin: .1rem 0;
  }
	.sec_a{
		width: 3.45rem;
		height: .44rem;
		margin-top: .2rem;
		margin-left: .15rem;
		border-radius: .06rem;
		display: -webkit-flex;
		-webkit-justify-content: space-between;
		background: #fcf4f1;
	}
	.sec_left,.sec_right{
		width: 50%;
		display: -webkit-flex;
		-webkit-align-items: center;
	}
	.sec_right{
		-webkit-justify-content: flex-end;
	}
	.sec_a img{
		width: .15rem;
		height: .15rem;
	}
  .sec_left img{
    margin-right: 5px;
  }
  .sec_right img,.sec_left img{
    margin-left: 5px;
  }
	.sec_a p{
		font-size: .12rem;
		color: #977768;
	}
	.sec_a h3{
		font-size: .12rem;
		color: #977768;
	}
</style>
