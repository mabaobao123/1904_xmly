<template>
  <div class="header_banner ">
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/img/1.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/img/2.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/img/3.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/img/4.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/img/5.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/img/6.jpg"></div>
        <div class="swiper-slide"><img src="../../assets/img/7.jpg"></div>
      </div>
    <div class="swiper-pagination"></div>
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
    var swiper = new Swiper('.swiper1', {
      // slidesPerView: 1,分页
      loop: true,    //无限循环
      autoplay:true,   //定时器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,   //小点的点击事件
      },
    });
  }
}

</script>

<style scoped="scoped">
  .header_banner{
		width: 3.45rem;
		height: 1.4rem;
    margin: auto;
    margin-bottom: .1rem;
	}
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }
  .swiper-pagination-bullets{
    bottom: -0.18rem!important;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    }
  .swiper-slide img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>
