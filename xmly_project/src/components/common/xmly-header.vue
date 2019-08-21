<template>
  <div class="header">
      <ul class="header_left">
        <li>推荐</li>
        <li><img src="../../assets/img/vip.png"> </li>
        <li>小说</li>
        <li>直播</li>
        <li>70年</li>
        <li>儿童</li>
        <li>西安</li>
        <li>广播</li>
      </ul>
      <div class="header_right">
        <img src="../../assets/img/FL_2.png">
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped="scoped">
	.header{
    padding: 0 .15rem;
		display: flex;
		font-size: .14rem;
		color: #F4A460;
    /* background: #13387F; */
	}
	.header_left{
		width: 3.11rem;
		height: .51rem;
		display: -webkit-flex;
		overflow-y: auto;
	}
	/*清除滚动条*/
	.header_left::-webkit-scrollbar{
		display:none
	}
	.header_left li{
		width: .35rem;
		height: .51rem;
		line-height: .51rem;
		margin-right: .2rem;
		-webkit-flex-shrink:0;
		display: -webkit-flex;
		-webkit-align-items: center;
	}
	.header_left li img{
		height: .23rem;
	}
	.header_right{
		width: .35rem;
		height: .51rem;
		line-height: .51rem;
		display: -webkit-flex;
		-webkit-align-items: center;
	}
	.header_right img{
		width: .2rem;
		height: .2rem;
		margin-left: .1rem;
	}
</style>
