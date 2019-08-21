<template>
  <div class="hood_to">
		<img src="../assets/img/img_17.png" alt=""/>
		<div class="hood_go">
			<p>绝世战神杨家将绝世战神杨家将绝世战神杨家将</p>
			<p  class="hood_f"><span>经典杨家将全传</span></p>
			<p class="hood_bottom">
        <span><img src="../assets/img/BFL.png">88.8万</span>
        <span><img src="../assets/img/BFJS.png">30集</span></p>
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
  .hood_to{
      padding: .1rem;
			width: 3.22em;
			background: #FFFFFF;
			margin: 0 auto;
			border-radius: .1rem;
			display: flex;
			margin-top: .12rem;
		}
		.hood_to img{
			width: .92rem;
			height: .92rem;
		}
		.hood_go{
			width: 2.5rem;
			padding-left: .1rem;
		}
		.hood_go p{
			font-size: .14rem;
			color: #363636;
			font-weight: 550;
			line-height: .23rem;
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
		}
		.hood_f{
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
		}
    .hood_f span{
      display: inline-block;
      font-size: .1rem;
      color: #76726f;
      background: #f0f0f1;
      padding: 0 .1rem;
    }
		.hood_bottom{
			padding: .1rem;
		}
		.hood_bottom img{
			display: inline-block;
			width: .12rem;
			height: .12rem;
			margin-right: .1rem;
		}
		.hood_bottom span{
			font-size: .12rem;
      margin-right: .1rem;
		}
</style>
