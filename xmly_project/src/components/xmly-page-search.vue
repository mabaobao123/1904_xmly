<template>
  <div class="search_top">
    <ul class="header_search" id="search">
      <img src="../assets/img/SS.png">
      <li id="txt">
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
              <div class="swiper-slide">斗罗大陆</div>
              <div class="swiper-slide">老梁故事汇</div>
              <div class="swiper-slide">郭德纲相声集</div>
              <div class="swiper-slide">水浒传</div>
              <div class="swiper-slide">植物大战僵尸</div>
              <div class="swiper-slide">鬼吹灯</div>
              <div class="swiper-slide">100个公主故事</div>
              <div class="swiper-slide">抖音最火音乐</div>
              <div class="swiper-slide">成语故事</div>
              <div class="swiper-slide">十宗罪</div>
          </div>
        </div>
      </li>
      <img src="../assets/img/SS_HT.png">
    </ul>
    <ul class="search_right">
      <img src="../assets/img/LS.png">
      <img src="../assets/img/TJ.png">
    </ul>
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
      var swiper = new Swiper('.swiper2', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,    //无限循环
        autoplay:true,   //定时器
        // mousewheel: true
    });
    }
  }

</script>

<style scoped="scoped">
  .search_top{
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    padding: 0 .15rem;
    height: .28rem;
  }
  .header_search{
		width: 2.6rem;
		height: .28rem;
		background: #F4A460;
		border-radius: .28rem;
		display: -webkit-flex;
		-webkit-align-items: center;
		margin-bottom: .15rem;
	}
	.header_search img{
		width: .2rem;
		height: .2rem;
	}
	.header_search img:nth-of-type(1){
		margin-left: .12rem;
	}
	.header_search li{
		width: 2rem;
		height: .28rem;
    color: #fff;
		line-height: .28rem;
		font-size: .14rem;
		transition: all 0.5s;
	}
  .search_right{
    width: .85rem;
    height: .28rem;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }
  .search_right img{
    width: .22rem;
    height: .22rem;
  }
  /* 轮播样式 */
 .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
  }
  .swiper-slide {
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
