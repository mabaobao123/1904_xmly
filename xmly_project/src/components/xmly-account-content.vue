<template>
	<div class="account_content">
		<div class="fun_a">
			<div class="fun_b">
				<img src="../assets/img/LY_1.png" >
				<p>我要录音</p>
			</div>
			<div class="fun_b">
				<img src="../assets/img/ZB_1.png" >
				<p>我要直播</p>
			</div>
			<div class="fun_b">
				<img src="../assets/img/ZP_1.png" >
				<p>我的作品</p>
			</div>
			<div class="fun_b">
				<img src="../assets/img/CZ_1.png">
				<p>创作中心</p>
			</div>
		</div>
		<!-- 服务 -->
		<div class="ser_a">
			<div class="ser_b">
				<h3>我的服务</h3>
			</div>
			<div class="ser_c">
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>我的钱包</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/YG_1.png" >
					<p>我的已购</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/DJ_1.png" >
					<p>我的等级</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/TY_1.png" >
					<p>我的听友圈</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/KF_1.png" >
					<p>我的客服</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/TJ_1.png" >
					<p>推荐有礼</p>
				</div>
			</div>
		</div>
		<!-- 工具 -->
		<div class="ser_a">
			<div class="ser_b">
				<h3>必备工具</h3>
			</div>
			<div class="ser_c">
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>扫一扫</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>定时关闭</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>未成年模式</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>驾车模式</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>夜间模式</p>
				</div>
			</div>
		</div>
		<!-- 其他服务 -->
		<div class="ser_a">
			<div class="ser_b">
				<h3>其他服务</h3>
			</div>
			<div class="ser_c">
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>知识大使</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>联名信用卡</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>免流量特权</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>官方商城</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>喜马福利社</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>商家福利</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>助眠冥想</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>版权登记</p>
				</div>
			</div>
		</div>
		<!-- 商务服务 -->
		<div class="ser_a">
			<div class="ser_b">
				<h3>商务合作与服务</h3>
			</div>
			<div class="ser_c">
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>配音服务</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>开放平台</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>广告合作</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>万物声合作</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>企业版</p>
				</div>
				<div class="ser_d">
					<img src="../assets/img/QB_1.png" >
					<p>会员合作</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		// name:"JXheader"
	}
</script>

<style scoped="scoped">
/* .content{
	background: #ccc;
} */
.fun_a{
	width: 3.45rem;
	height: .88rem;
	margin: 0 auto;
	display: flex;
	background: #ffffff;
	border-radius: .06rem;
}
.fun_b{
	width: .87rem;
	height: .88rem;
}
.fun_b img{
	width: .26rem;
	height: .26rem;
	margin-top: .19rem;
	margin-left: .34rem;
}
.fun_b p{
	margin-top: .075rem;
	text-align: center;
	font-size: .11rem;
	color: #4c4b49;
}
/* ser */
.ser_a{
	width: 3.45rem;
	margin: .15rem auto 0 auto;
	background: #ffffff;
	border-radius: .06rem;
	padding-bottom: .1rem;
}
.ser_b h3{
	font-size: .13rem;
	margin-left: .19rem;
	padding-top: .20rem;
}
.ser_c{
	width: 3.45rem;
	display: -webkit-flex;
	flex-wrap: wrap;
}
.ser_d{
	width: 25%;
	height: .83rem;
}
.ser_d img{
	width: .25rem;
	height: .25rem;
  margin: .27rem auto 0;
}
.ser_d p{
	font-size: .11rem;
	color: #4a4747;
	display: block;
  text-align: center;
	margin-top: .1rem;
}
</style>
