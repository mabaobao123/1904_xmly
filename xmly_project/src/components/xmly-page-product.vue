<template>
  <div class="pw">
    <h3>精品</h3>
    <div class="pw_to">
      <img src="../assets/img/img_25.png" alt=""/>
      <img src="../assets/img/img_100.png" alt=""/>
      <img src="../assets/img/img_101.png" alt=""/>
      <img src="../assets/img/img_102.png" alt=""/>
      <img src="../assets/img/img_103.png" alt=""/>
      <img src="../assets/img/img_104.png" alt=""/>
      <img src="../assets/img/img_105.png" alt=""/>
      <img src="../assets/img/img_24.png" alt=""/>
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
.pw{
	width: 3.42em;
	height: 2.22rem;
	margin: 0 auto;
}
.pw h3{
	font-size: .18rem;
	padding-top: .18rem;
	margin-left: .06rem;
}
.pw img{
	width: .92rem;
	height: 1.56rem;
	margin-right: .1rem;
	margin-top: .1rem;
}
.pw .pw_to{
	display: -webkit-flex;
	overflow-x: auto;
}
.pw_to img{
  -webkit-flex-shrink: 0;
}
.pw_to::-webkit-scrollbar{
		display:none
	}
</style>
