<template>
  <div class="content">
  	<div class="content_name">
  		<h1>第001集 宋氏三姐妹秘密档案 (谢谢大家喜欢这本书)</h1>
  	</div>
  	<div class="content_img">
  		<img src="../assets/img/img.jpg">
  	</div>
  	<div class="content_menue">
  		<img src="../assets/img/DM.png">
  		<div class="menue_right">
  			<img src="../assets/img/WYX.png">
  			<img src="../assets/img/BS.png">
  			<span>x1</span>
  		</div>
  	</div>
  	<div class="content_times">
  		<div class="content_bars">
  			<div class="content_bar"></div>
  			<div class="content_time">
  				<span>00:00</span>/<span>00:00</span>
  			</div>
  		</div>
  	</div>
  	<div class="content_buttons">
  		<div class="content_button">
  			<div class="content_button_left">
  				<img src="../assets/img/BFLB.png">
  				<span>播放列表</span>
  			</div>
  			<div class="content_button_center">
  				<img src="../assets/img/left.png">
  				<img src="../assets/img/BFAN.png">
  				<img src="../assets/img/right.png">
  			</div>
  			<div class="content_button_right">
  				<img src="../assets/img/DSGB.png">
  				<span>定时关闭</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
  name:"",
  data:function(){
    return {

    }
  },
}
</script>

<style scoped="scoped">
  .content{
  	background: #805859;
  }
  .content_name{
  	padding: 0 .2rem;
  }
  .content_name h1{
  	padding: 0 .23rem;
  	color: #fff;
  	font-size: .16rem;
  	text-align: center;
  	margin-bottom: .24rem;
  }
  .content_img{
  	width: 3.45rem;
  	padding: 0 .23rem;
  	margin-bottom: .37rem;
  }
  .content_img img{
  	display: block;
  	width: 2.12rem;
  	height: 2.12rem;
  	border-radius: 5px;
  	margin: 0 auto;
  }
  .content_menue{
  	height: .2rem;
  	padding: 0 .23rem;
  	margin-bottom: .21rem;
  	display: -webkit-flex;
  	-webkit-justify-content: space-between;
  }
  .content_menue img{
  	width: .2rem;
  	height: .2rem;
  }
  .menue_right{
  	position: relative;
  	display: -webkit-flex;
  }
  .menue_right img:nth-of-type(2){
  	margin-left: .2rem;
  }
  .menue_right span{
  	width: .17rem;
  	height: .15rem;
  	line-height: .15rem;
  	font-size: 12px;
  	background: #fff;
  	border-radius: .15rem;
  	text-align: center;
  	display: block;
  	position: absolute;
  	right: -10px;
  	top: -8px;
  }
  .content_times{
  	padding: 0 .23rem;
  	margin-bottom: .25rem;
  }
  .content_buttons{
    padding: 0 .23rem;
    padding-bottom: .25rem;
  }
  .content_bars{
  	width: 3.35rem;
  	height: 5px;
  	background: #aa8686;
  	position: relative;
  }
  .content_bar{
  	height: 5px;
  	background: #fff;
  	position: absolute;
  }
  .content_time{
  	width: .8rem;
  	height: .2rem;
  	background: #fff;
  	border-radius: .2rem;
  	position: absolute;
  	top: -8px;
  	font-size: 12px;
  	text-align: center;
  	font-weight: 700;
  }
  .content_button{
  	display: -webkit-flex;
  	-webkit-justify-content: space-around;
  }
  .content_button_left img,.content_button_right img{
  	display: block;
  	width: .22rem;
  	height: .22rem;
  	margin: 0 auto;
  }
  .content_button_left span,.content_button_right span{
  	display: block;
  	text-align: center;
  	font-size: .12rem;
  	color: #fff;
  	padding-top: 5px;
  }
  .content_button_center{
  	width: 1.78rem;
  	display: -webkit-flex;
  	-webkit-justify-content: space-around;
  	-webkit-align-items: center;
  }
  .content_button_center img:nth-of-type(1),.content_button_center img:nth-of-type(3){
  	width: .15rem;
  	height: .18rem;
  }
  .content_button_center img:nth-of-type(2){
  	width: .28rem;
  	height: .34rem;
  }
</style>
