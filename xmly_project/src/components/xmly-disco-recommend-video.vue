<template>
	<div>
		<div class="vid">
			<div class="vid_to">
				<img src="../assets/img/img_37.png" alt="" />
				<div class="vid_toa">
					<p>混沌大学</p>
					<h4>大家都在看</h4>
				</div>
				<div class="vid_tow">
					<img src="../assets/img/img_38.png" />
					<p>关注</p>
				</div>
				<img src="../assets/img/img_39.png" class="vid_kk" />
			</div>
			<h3>新东方三驾马车怎样看待《中国合伙人》</h3>
			<div class="vide">
				<video width="320" height="240" controls="controls">
					<source src="../assets/img/276b93f371cc3defaf9bda90a517cea9.mp4" type="video/mp4" />
				</video>
				<div class="ho">
					<div class="ho_1">
						<img src="../assets/img/img_41.png" />
						<p>分享</p>
					</div>
					<div class="ho_1">
						<img src="../assets/img/img_42.png" />
						<p>评论</p>
					</div>
					<div class="ho_1">
						<img src="../assets/img/img_43.png" />
						<p>3</p>
					</div>
				</div>
			</div>
		</div>
		<div class="vid">
			<div class="vid_to">
				<img src="../assets/img/img_37.png" alt="" />
				<div class="vid_toa">
					<p>混沌大学</p>
					<h4>大家都在看</h4>
				</div>
				<div class="vid_tow">
					<img src="../assets/img/img_38.png" />
					<p>关注</p>
				</div>
				<img src="../assets/img/img_39.png" class="vid_kk" />
			</div>
			<h3>新东方三驾马车怎样看待《中国合伙人》</h3>
			<div class="vide">
				<video width="320" height="240" controls="controls">
					<source src="../assets/img/276b93f371cc3defaf9bda90a517cea9.mp4" type="video/mp4" />
				</video>
				<div class="ho">
					<div class="ho_1">
						<img src="../assets/img/img_41.png" />
						<p>分享</p>
					</div>
					<div class="ho_1">
						<img src="../assets/img/img_42.png" />
						<p>评论</p>
					</div>
					<div class="ho_1">
						<img src="../assets/img/img_43.png" />
						<p>3</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { videoPlayer } from 'vue-video-player'
	import 'video.js/dist/video-js.css'

	export default {
	  
	}
</script>

<style scoped="scoped">

	.vid{
		width: 100%;
		margin-bottom: .15rem;
	}
	.vid_to{
		width: 100%;
	/* 	height: .93rem; */
		display: -webkit-flex;
		-webkit-align-items: center;
	}
	.vid_to img{
		width: .41rem;
		height: .41rem;
		margin-left: .15rem;
		margin-top: .18rem;
	}
	.vid h3{
		font-size: .15rem;
		color: #3e3e3e;
		margin-left: .15rem;
		margin-top: .11rem;
	}
	.vid_toa p{
		font-size: .14rem;
		color: #0b0b0b;
		margin-left: .1rem;
		margin-top: .17rem;
	}
	.vid_toa h4{
		font-size: .12rem;
		color: #a5a5a5;
		margin-left: .1rem;
		margin-top: .09rem;
	}
	.vid_tow{
		width: .57rem;
		height: .24rem;
		border: 2px solid #dadada;
		border-radius: .1rem;
		margin-left: 1.5rem;
		margin-top: .2rem;
		display: -webkit-flex;
		-webkit-justify-content: center;
		-webkit-align-items: center;
	}
	.vid_tow img{
		width: .12rem;
		height: .12rem;
		margin-top: -.02rem;
		margin-left: -.01rem;
	}
	.vid_tow p{
		font-size: .13rem;
		color: #cecece;
		margin-left: .08rem;
	}
	.vid_to .vid_kk{
		width: .19rem;
		height: .12rem;
	}
/*	.vide{
		background: #27282e;
		height: 2.76rem;
		width: 3.45rem;
		margin: 0 auto;
		border-radius: .06rem;
		margin-top: .11rem;
	}*/
	.vide video{
		display: block;
		margin: 0 auto;
	}
	.ho{
		display: -webkit-flex;
		-webkit-align-items: center;
		margin-top: .25rem;
		margin-bottom: .15rem;
		
	}
	.ho_1{
		width: 33%;
	}
	.ho_1:nth-of-type(2){
		border-left: 1px solid #b2b2b2;
		border-right: 1px solid #b2b2b2;
	}
	.ho img{
		width: .18rem;
		height: .18rem;
		margin: 0 auto 3px;		
	}
	.ho p{
		font-size: .13rem;
		color: #a3a3a3;
		text-align: center;
	}
	.kong{
		width: 100%;
		height: .04rem;
		background: #f2f6f9;
	}
</style>