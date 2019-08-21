<template>
  <header>
  	<img src="../assets/img/YC.png">
  	<div class="header_right">
  		<img src="../assets/img/FX_2.png">
  		<img src="../assets/img/FX.png">
  	</div>
  </header>
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
  header{
  		height: .51rem;
  		padding: 0 .2rem;
  		background: #805859;
  		display: -webkit-flex;
  		-webkit-justify-content: space-between;
  		-webkit-align-items: center;
  	}
  	header img{
  		width: .2rem;
  		height: .2rem;
  	}
  	.header_right{
  		width: .64rem;
  		display: -webkit-flex;
  		-webkit-align-items: center;
  	}
  	.header_right img:nth-of-type(1){
  		width: .2rem;
  		height: .2rem;
  	}
  	.header_right img:nth-of-type(2){
  		width: .25rem;
  		height: .08rem;
  		margin-left: .12rem;
  	}
</style>
