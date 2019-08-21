<template>
<div class="content_like">
  <div class="back">
  	<img src="../assets/img/img_14.png" class="back_q" alt=""/>
  	<p>猜你喜欢</p>
  	<h3>选择兴趣</h3>
  	<img src="../assets/img/img_S.png" class="back_t" alt=""/>
  	<h4>更多</h4>
  	<img src="../assets/img/S_YJT.png" class="back_w" alt=""/>
  </div>
	<div class="like_bottom">
		<div class="like_box">
		  <div class="like_img"></div>
		  <p>郭德纲超经典相声集【伴随入眠】</p>
		</div>
		<div class="like_box like_num">
		  <div class="like_img"></div>
		  <p>《麻衣神算子》紫襟城故事</p>
		</div>
		<div class="like_box">
		  <div class="like_img"></div>
		  <p>明朝那些事儿(当年明月著 王更新)</p>
		</div>
		<div class="like_box">
		  <div class="like_img"></div>
		  <p>《斗破苍穹》 20亿网络点击神作</p>
		</div>
		<div class="like_box like_num">
		  <div class="like_img"></div>
		  <p>摸金天师(下部)紫襟故事 |</p>
		</div>
		<div class="like_box">
		  <div class="like_img"></div>
		  <p>郭论·郭德纲品俗文化史</p>
		</div>
	</div>
  <div class="epoch_button">
    <div class="button">
      <img src="../assets/img/GH.png">
      换一批
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
  	}
  }
</script>

<style scoped="scoped">
  .content_like{
    background: #fff;
    border-radius: 6px;
    padding-bottom: 5px;
  }
  .back{
  	height: .35rem;
  	background: #ffffff;
  	display: flex;
  	border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  	border-bottom: .01rem solid #f0f0f0;
  	align-items: center;
  }
  .back_q{
  	width: .14rem;
  	height: .14rem;
  	margin-left: .18rem;
  }
  .back_t{
  	width: .02rem;
  	height: .12rem;
  	margin-left: .1rem;

  }
  .back_w{
  	width: .2rem;
  	height: .2rem;
  	margin-left: .04rem;
  }
  .back p{
    width: 1rem;
  	font-size: .13rem;
  	color: #2b2b2b;
  	margin-left: .06rem;
  }
  .back h3{
    width: 1rem;
  	font-size: .12rem;
  	color: #ff4229;
  	margin-left: 1.2rem;
  }
  .back h4{
    width: .5rem;
  	font-size: .12rem;
  	color: #817d7e;
  	margin-left: .1rem;
  }
  .like_bottom{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #fff;
		padding-top: .15rem;
		display: -webkit-flex;
		-webkit-justify-content: space-around;
		flex-wrap: wrap;
	}
	.like_box{
		width: 1.12rem;
		height: 1.58rem;
		border-radius: 5px;
		margin-bottom: 5px;
		background: #fff;
	}
	.like_img{
		width: 1.1rem;
		height: 1.1rem;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background: url(../assets/img/CNXH_1.jpg) no-repeat center center;
		background-size: 100%;
	}
	.like_box p{
		height: .48rem;
		line-height: .38rem;
		padding: 0 7px;
		font-size: .11rem;
		/*限制块元素显示的文本的行数*/
    -webkit-line-clamp: 2;
    /*将对象作为弹性伸缩盒子模型显示 ）*/
    display: -webkit-box;
    /*（ 设置或检索伸缩盒对象的子元素的排列方式 。）*/
    -webkit-box-orient:vertical;
    /* （顾名思义超出限定的宽度就隐藏内容）*/
    overflow:hidden;
    /*（规定当文本溢出时显示省略符号来代表被修剪的文本）*/
    text-overflow: ellipsis;
		/* box-shadow: 0px 0px 10px 0.3px #e6e5e5; */
	}
  .button{
      display: -webkit-flex;
      -webkit-align-items: center;
			width: .88rem;
			height: .27rem;
			margin: 0 auto;
			line-height: .27rem;
			font-size: .14rem;
		}
		.button img{
			width: .16rem;
			height: .16rem;
			margin: 0 5px;
		}
</style>
