<template>
  <div class="content_similar">
  	<div class="similar_top">
  		<h4>听了本节目的人也在听</h4>
  	</div>
  	<div class="similar_bottom">
  		<div class="similar_bottom_box">
  			<div class="similar_bottom_img"></div>
  			<p>岳云鹏孙越相声集</p>
  		</div>
  		<div class="similar_bottom_box">
  			<div class="similar_bottom_img"></div>
  			<p>岳云鹏孙越相声集</p>
  		</div>
  		<div class="similar_bottom_box">
  			<div class="similar_bottom_img"></div>
  			<p>岳云鹏孙越相声集</p>
  		</div>
  		<div class="similar_bottom_box">
  			<div class="similar_bottom_img"></div>
  			<p>岳云鹏孙越相声集</p>
  		</div>
  		<div class="similar_bottom_box">
  			<div class="similar_bottom_img"></div>
  			<p>岳云鹏孙越相声集</p>
  		</div>
  		<div class="similar_bottom_box">
  			<div class="similar_bottom_img"></div>
  			<p>岳云鹏孙越相声集</p>
  		</div>
  	</div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  .content_similar{
    padding: 0 .15rem;
    background: #fff;
  }
  .similar_top{
  	margin-bottom: .12rem;
  }
  .similar_top h4{
  	line-height: .16rem;
  	font-size: .16rem;
  	font-weight: 550;
  	padding: .13rem 0;
  }
  .similar_box{
  	font-size: .12rem;
  }
  .similar_box span{
  	display: inline-block;
  	width: .68rem;
  	height: .28rem;
  	line-height: .28rem;
  	text-indent: .12rem;
  	border-radius: .28rem;
  	background: url(../assets/img/S_YJT.png) no-repeat right center;
  	background-size: .16rem;
  	border: 1px solid #d2d2d2;
  	margin-right: .08rem;
  }
  .similar_bottom{
  	display: -webkit-flex;
  	-webkit-justify-content: space-around;
  	-webkit-flex-wrap: wrap;
  }
  .similar_bottom_box{
  	width: 1.12rem;
  	height: 1.58rem;
  	border-radius: 5px;
  	margin-bottom: .1rem;
  }
  .similar_bottom_img{
  	width: 1.1rem;
  	height: 1.1rem;
  	border-top-left-radius: 5px;
  	border-top-right-radius: 5px;
  	background: url(../assets/img/CNXH_1.jpg) no-repeat center center;
  	background-size: 100%;
  }
  .similar_bottom_box p{
  	height: .48rem;
  	line-height: .38rem;
  	padding: 0 7px;
  	font-size: .11rem;
  	overflow: hidden;
  	text-overflow:ellipsis;
  	white-space: nowrap;
  	box-shadow: 0px 0px 10px 0.3px #e6e5e5;
  }
</style>
