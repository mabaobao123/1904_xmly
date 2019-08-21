<template>
  <nav>
    <div class="nav">
    	<div class="nav_a">
    		<p>验证码登录</p>
    	</div>
    	<div class="nav_b">
    		<p>密码登录</p>
    	</div>
    </div>
    <div class="sec">
    	<div class="sec_a">
    		<div class="sec_b">
    			<img src="../assets/img/10-4.png" >
    			<p>86</p>
    			<img src="../assets/img/10-3.png" class="secr">
    		</div>
    		<div class="sec_c">
    			<div class="mui-input-row">
    				<label></label>
    				<input type="text" class="mui-input-clear" placeholder="请输入手机号">
    			</div>
    		</div>

    	</div>
    	<div class="sec_box">
    		<div class="mui-input-row">
    			<label></label>
    			<input type="text" class="mui-input-clear" placeholder="请输入验证码">
    			<button type="button">获取验证码</button>
    		</div>

    	</div>
    	<div class="sec_d">
    		<p>登录</p>
    	</div>
    </div>
   </nav>
</template>

<script>
</script>

<style scoped="scoped">
  .nav{
  	height: .27rem;
  	display: flex;
  }
  .nav .nav_a{
  	width: 1.37rem;
  	height: .25rem;
  	margin-left: .5rem;
  	border-bottom: 2px solid #f36a3c;
  }
  .nav_a p{
  	font-size: .125rem;
  	text-align: center;
  	color: #e06b48;
  }
  .nav .nav_b{
  	width: 1.37rem;
  	height: .25rem;
  }
  .nav_b p{
  	font-size: .125rem;
  	text-align: center;
  }
  /* sec */
  .sec{
  	height: 3.79rem;
  }
   .sec_a{
  	width: 2.76rem;
  	height: .57rem;
  	margin: 0 auto;
  	display: -webkit-flex;
  	border-top: 1px solid #cccccc;
  }
  .sec_b{
  	width: .71rem;
  	height: .57rem;
  	display: flex;
  }
  .sec_b img:nth-child(1){
  	width: .07rem;
  	height: .07rem;
  	margin-top: .32rem;
  	margin-left: .11rem;
  }
  .sec_b p{
  	font-size: .11rem;
  	margin-top: .27rem;
  	margin-left: 4px;
  }
  .sec_b .secr{
  	width: .08rem;
  	height: .05rem;
  	margin-left: .06rem;
  	margin-top: .34rem;
  }
  .sec_c{
  	width: 2.03rem;
  	height: .2rem;
  	margin-top: .24rem;
  	border-left: 2px solid #d9d9d9;
  	display: -webkit-flex;
  }
  .sec_c input{
  	border:none;
  }
  .sec_c .mui-input-row{
  	display: -webkit-flex;
  }
  .sec_box{
  	height: .35rem;
  	/* margin: 0 auto; */
  	border-bottom: 1px solid #cccccc;
  }
  .sec_box input{
  	border:none;
  }
  .sec_box .mui-input-row{
  	display: -webkit-flex;
  	margin-left: .6rem;
  }
  .sec_box button{
  	width: ;
  }
  .sec_d{
  	width: 2.76rem;
  	height: .4rem;
  	margin: .175rem auto 0 auto;
  	background: #cccccc;
  	border-radius: .17rem;
  }
  .sec_d p{
  	font-size: .14rem;
  	color: white;
  	margin-left: 1.22rem;
  	padding-top: .13rem;
  }
</style>
