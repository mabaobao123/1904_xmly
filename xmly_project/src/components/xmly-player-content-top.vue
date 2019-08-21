<template>
  <div class="content_brief">
  	<div class="content_brief_top">
  		<div class="left_box">
  			<img src="../assets/img/img.jpg" alt="">
  			<div class="brief_right">
  				<h3>宋氏三姐妹</h3>
  				<h6>5.9万人订阅</h6>
  			</div>
  		</div>
  		<div class="right_box">
  			免费订阅
  		</div>
  	</div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .content_brief{
  	padding: 0 .13rem;
  	background: #fff;
  	margin-bottom: .1rem;
  }
  .content_brief_top{
  	padding: .2rem 0;
  	display: -webkit-flex;
  	-webkit-justify-content: space-between;
  	-webkit-align-items: center;
  }
  .left_box{
  	display: -webkit-flex;
  }
  .left_box img{
  	width: .37rem;
  	height: .37rem;
  	border-radius: 5px;
  	margin-right: .1rem;
  }
  .brief_right{
  	width: .85rem;
  	font-size: .14rem;
  }
  .brief_right h6{
  	font-size: .12rem;
  	color: #b4b4b4;
  }
  .right_box{
  	width: .79rem;
  	height: .29rem;
  	background: pink;
  	border-radius: .29rem;
  	color: #ff4977;
  	font-size: .14rem;
  	text-align: center;
  	line-height: .29rem;
  }
</style>
