<template>
		<div class="foot">
			<a href="#" :class="{foot_sp:'/'===$route.path}" @click="goTo('/')">
				<span class="iconfont icon-shouye"></span>
				<span>首页</span>
			</a>
			<a href="#" :class="{foot_sp:'/xmlylist'===$route.path}" @click="goTo('/xmlylist')">
				<span class="iconfont icon-xingxing"></span>
				<span>我听</span>
			</a>
			<a href="#" :class="{foot_sp:'/xmlyplayer'===$route.path}" @click="goTo('/xmlyplayer')">
				<span class="iconfont icon-bofang"></span>
			</a>
			<a href="#" :class="{foot_sp:'/xmlydisco'===$route.path}" @click="goTo('/xmlydisco')">
				<span class="iconfont icon-faxian"></span>
				<span>发现</span>
			</a>
			<a href="#" :class="{foot_sp:'/xmlyaccount'===$route.path}" @click="goTo('/xmlyaccount')">
				<span class="iconfont icon-wode"></span>
				<span>账号</span>
			</a>
		</div>
</template>

<script>
	export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
	}
</script>

<style scoped="scoped">
.foot{
  background: #fff;
	display: -webkit-flex;
	-webkit-justify-content: space-around;
  -webkit-align-items: center;
}
.foot img{
	width: .21rem;
	height: .21rem;
}
.foot span{
	font-size: .1rem;
	display: block;
	text-align: center;
}
.foot .foot_to{
	width: .41rem;
	height: .41rem;
}
.foot_sp{
	color: #f4574e;
}
.player{
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
}
.player img{
  width: .3rem;
  height: .3rem;
  margin: 0 auto;
}
a span:nth-child(1){
  font-size: .22rem;
}
.foot a:nth-child(3) span{
  font-size: .32rem;
}
</style>
