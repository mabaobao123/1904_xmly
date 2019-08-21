<template>
  <div class="nav">
    <ul class="nav_left">
      <li>
        <div class="swiper-container swiper3">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <p><img src="../assets/img/nav_logo.png"><span>头条</span>郭德纲相声集郭德纲相声集</p></div>
              <div class="swiper-slide">
                <p><img src="../assets/img/nav_logo.png"><span>悬疑</span>老梁故事汇斗罗大陆郭德纲相声集郭德纲相声集</p></div>
              <div class="swiper-slide">
                <p><img src="../assets/img/nav_logo.png"><span>情感</span>郭德纲相声集郭德纲相声集郭德纲相声集郭德纲相声集</p></div>
          </div>
        </div>
      </li>
    </ul>
    <div class="nav_right">
      私人FM
      <img src="../assets/img/nav_YJT.png">
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
  	name:"",
  	data:function(){
  		return {

  		}
  	},
    mounted:()=>{
      var swiper = new Swiper('.swiper3', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,    //无限循环
        autoplay:true,   //定时器
        mousewheel: true
    });
    }
  }

</script>

<style scoped="scoped">
  .nav{
    width: 3.45rem;
    height: .28rem;
    background: #FFFFFF;
    margin-bottom: .15rem;
    border-radius: 5px;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .nav_left{
  	width: 2.45rem;
  	height: .28rem;
  	/* background: #F4A460; */
  	display: -webkit-flex;
  	-webkit-align-items: center;
  	margin-bottom: .15rem;
  }
  .nav_left li{
  		width: 2.78rem;
  		height: .28rem;
  		line-height: .28rem;
  		font-size: .14rem;
  		transition: all 0.5s;
  	}
    .nav_right{
      display: -webkit-flex;
      -webkit-align-items: center;
      font-size: .12rem;

    }
    .nav_right img{
      width: .12rem;
      height: .12rem;
    }
   /* 轮播样式 */
  .swiper-container {
       width: 100%;
       height: 100%;
       margin-left: auto;
       margin-right: auto;
   }
   .swiper-slide img{
     width: .2rem;
     height: .2rem;
     /* margin-left: 5px; */
     display: inline-block;
     vertical-align: middle;
     margin-right: 5px;
   }
   .swiper-slide span{
     color: #FF4229;
     font-size: .14rem;
     margin-right: 6px;
   }
   .swiper-slide p{
     vertical-align: middle;
     overflow:hidden;
     			/*（规定当文本溢出时显示省略符号来代表被修剪的文本）*/
     text-overflow: ellipsis;
     white-space: nowrap;
   }
   .swiper-slide {


     font-size: .14rem;
     /* Center slide text vertically */
     display: -webkit-box;
     display: -ms-flexbox;
     display: -webkit-flex;
     display: flex;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     text-indent: .1rem;
     -webkit-box-align: center;
     -ms-flex-align: center;
     -webkit-align-items: center;
     align-items: center;
   }
</style>
