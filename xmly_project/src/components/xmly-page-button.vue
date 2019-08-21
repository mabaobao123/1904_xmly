<template>
  <div class="navd">
	  <router-link to="/xmlyjdbt" class="navda">
			<a><img src="../assets/img/JDBT.png" alt=""/><span>经典必听</span></a>
	  </router-link>
			<a><img src="../assets/img/MRBT.png" alt=""/><span>每日必听</span></a>
			<a><img src="../assets/img/ZMMX.png" alt=""/><span>助眠冥想</span></a>
			<a><img src="../assets/img/JP.png" alt=""/><span class="jp">精品</span></a>
			<a><img src="../assets/img/XYSP.png" alt=""/><span>小雅新品</span></a>
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
  .navd{
    padding: 0 .1rem;
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
  }
  .navd img{
  	width: .44rem;
  	height: .44rem;
    border-radius: 50%;
  	margin-bottom: .12rem;
  }
  .navd a{
  	font-size: .1rem;
  }
  .navd .jp{
  	margin-left: .12rem;
  }
  .navda{
    color: #000000;
  }
</style>
