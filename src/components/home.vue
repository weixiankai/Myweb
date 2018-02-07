<template>
	<div>
<!--		<h1>home</h1>-->
		<el-carousel height="350px">
	      <el-carousel-item v-for="item in imgSrcs" :key="item">
	<!--        <h3>{{ item }}</h3>-->
	        <img :src="item" alt="" />
	      </el-carousel-item>
	    </el-carousel>
	    
	    <el-row class="my-content" >
	        	
		  <el-col :span="4" :offset="4"><div class="grid-content">
		  	<i class="el-icon-edit"></i>
		  	<h4>javascript</h4>
		  </div></el-col>
		  
		  <el-col :span="4"><div class="grid-content">
		  	<i class="el-icon-share"></i>
		  	<h4>html</h4>
		  </div></el-col>
		  
		  <el-col :span="4"><div class="grid-content">
		  	<i class="el-icon-delete"></i>
		  	<h4>css</h4>
		  </div></el-col>
		  
		  <el-col :span="4"><div class="grid-content">
		  	<i class="el-icon-upload"></i>
		  	<h4>vue</h4>
		  </div></el-col>
		  
		</el-row>
		
		<el-row class="my-content" >
		  
		  <el-col :span="6" :offset="3"><div class="grid-content">
		  <img class="grid-content-img" src="../assets/bootcdn.png" alt="" />
		  </div></el-col>
		  
		  <el-col :span="6"><div class="grid-content">
		  	<img class="grid-content-img" src="../assets/bootstrap.png"/>
		  </div></el-col>
		  
		  <el-col :span="6"><div class="grid-content">
		  	<img class="grid-content-img" src="../assets/chart.js.png"/>
		  </div></el-col>
		  
		</el-row>
		
		<h1>美国签证最新资讯</h1>
		<hr class="my-hr"></hr>
		<h4>大数据看到洛杉矶开始卡还款大恒科技道具卡实力打脸</h4>
		<el-row class="my-content">
		  
		  <el-col :span="9" :offset="3"><div class="grid-content">
			 <el-row class="my-content" :gutter="20">
			  
			  <el-col :span="8"><div class="grid-content">
			  	<img src="../assets/m1.png"/>
			  </div></el-col>
			  
			  <el-col :span="16"><div class="grid-content">
			  	<h3>92名中国民工被欠薪受困塞班岛</h3>
  				<h5>时间：2017-05-09</h5>
  				<p>他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作...</p>

			  </div></el-col>	  
			</el-row>
		 
		  </div></el-col>
		  
		  <el-col :span="9"><div class="grid-content">
		  	
		  	 <el-row class="my-content" >
			  
			  <el-col :span="8"><div class="grid-content">
			  	<img src="../assets/m1.png"/>
			  </div></el-col>
			  
			  <el-col :span="16"><div class="grid-content">
			  	<h3>92名中国民工被欠薪受困塞班岛</h3>
  				<h5>时间：2017-05-09</h5>
  				<p>他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作...</p>
			  </div></el-col>	  
			</el-row>
		  	
		  </div></el-col>
		  
		</el-row>
		<el-row class="my-content" >
		  
		  <el-col :span="9" :offset="3"><div class="grid-content">
			 <el-row class="my-content" :gutter="20">
			  
			  <el-col :span="8"><div class="grid-content">
			  	<img src="../assets/m1.png"/>
			  </div></el-col>
			  
			  <el-col :span="16"><div class="grid-content">
			  	<h3>92名中国民工被欠薪受困塞班岛</h3>
  				<h5>时间：2017-05-09</h5>
  				<p>他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作...</p>

			  </div></el-col>	  
			</el-row>
		 
		  </div></el-col>
		  
		  <el-col :span="9"><div class="grid-content">
		  	
		  	 <el-row class="my-content" :gutter="20">
			  
			  <el-col :span="8"><div class="grid-content">
			  	<img src="../assets/m1.png"/>
			  </div></el-col>
			  
			  <el-col :span="16"><div class="grid-content">
			  	<h3>92名中国民工被欠薪受困塞班岛</h3>
  				<h5>时间：2017-05-09</h5>
  				<p>他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作...</p>
			  </div></el-col>	  
			</el-row>
		  	
		  </div></el-col>
		  
		</el-row>
		
		<el-row >
		  
		  <el-col :span="6" :offset="4">
		  	<img src="../assets/m2.png" alt="" />
		  </el-col>
		  
		  <el-col :span="10">
		  	<h3>我的简介</h3>
		  	<h4>我的技能包</h4>
		  	<p>Lorem ipsum dolor sit.</p>
		  	<el-row  :gutter="5">
		  		<el-col :span="12">
		  			<el-row  :gutter="5" class="my-skill">
				  		<el-col :span="6">
				  			<span class="fa fa-car"></span>
				  	 	</el-col>
				  			  
			  			<el-col :span="18">
			  				<h5>网站项目</h5>
			  				<h5>Lorem ipsum dolor sit.</h5>
			  			</el-col>
				  	</el-row>
		  			
		  	 	</el-col>
		  			  
	  			<el-col :span="12">
	  				<el-row  :gutter="5" class="my-skill">
				  		<el-col :span="6">
				  			<span class="fa fa-car"></span>
				  	 	</el-col>
				  			  
			  			<el-col :span="18">
			  				<h5>网站项目</h5>
			  				<h5>Lorem ipsum dolor sit.</h5>
			  			</el-col>
				  	</el-row>
	  			</el-col>
		  	</el-row>
		  	<el-row  :gutter="5">
		  		<el-col :span="12">
		  			<el-row  :gutter="5" class="my-skill">
				  		<el-col :span="6">
				  			<span class="fa fa-car"></span>
				  	 	</el-col>
				  			  
			  			<el-col :span="18">
			  				<h5>网站项目</h5>
			  				<h5>Lorem ipsum dolor sit.</h5>
			  			</el-col>
				  	</el-row>
		  			
		  	 	</el-col>
		  			  
	  			<el-col :span="12">
	  				<el-row  :gutter="5" class="my-skill">
				  		<el-col :span="6">
				  			<span class="fa fa-car"></span>
				  	 	</el-col>
				  			  
			  			<el-col :span="18">
			  				<h5>网站项目</h5>
			  				<h5>Lorem ipsum dolor sit.</h5>
			  			</el-col>
				  	</el-row>
	  			</el-col>
		  	</el-row>
		  	<el-row  :gutter="5">
		  		<el-col :span="12">
		  			<el-row  :gutter="5" class="my-skill">
				  		<el-col :span="6">
				  			<span class="fa fa-car"></span>
				  	 	</el-col>
				  			  
			  			<el-col :span="18">
			  				<h5>网站项目</h5>
			  				<h5>Lorem ipsum dolor sit.</h5>
			  			</el-col>
				  	</el-row>
		  			
		  	 	</el-col>
		  			  
	  			<el-col :span="12">
	  				<el-row  :gutter="5" class="my-skill">
				  		<el-col :span="6">
				  			<span class="fa fa-car"></span>
				  	 	</el-col>
				  			  
			  			<el-col :span="18">
			  				<h5>网站项目</h5>
			  				<h5>Lorem ipsum dolor sit.</h5>
			  			</el-col>
				  	</el-row>
	  			</el-col>
		  	</el-row>
		  </el-col>
		  
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"home",
		data(){
			return{
					imgSrcs:[
		  			"http://www.jq22.com/demo/jquery-h5lb-150428202436/images/beforeafter/1before.jpg",
		  			"http://www.jq22.com/demo/jquery-h5lb-150428202436/images/beforeafter/2before.jpg",
		  			"http://www.jq22.com/demo/jquery-h5lb-150428202436/images/beforeafter/3before.jpg",
		  			"http://www.jq22.com/demo/jquery-h5lb-150428202436/images/beforeafter/4before.jpg"
		  		]
			}
		}
	}
</script>

<style lang="less" scoped>
	.el-carousel__item{
		img{
			width: 100%;
			height: 100%;
		}
	}
	.el-carousel__item:nth-of-type(1){
		background-color: red;
	}
	.el-carousel__item:nth-of-type(2){
		background-color: blue;
	}
	.el-carousel__item:nth-of-type(3){
		background-color: green;
	}
	.el-carousel__item:nth-of-type(4){
		background-color: yellow;
	}	
	.grid-content{
		/*height: 200px;
		background-color: lightblue;*/
		i{
			font-size: 64px;
			transition: all .8s;
			&:hover{
				color: orange;
			}
		}
		
		.grid-content-img{
			width: 100%;
			transition:all .8s; 
			border-radius: 0!important;
			&:hover{
				transform: translateY(-10px);
				box-shadow: 0px 0px 10px 0px darkslateblue;
			}
		}
	}
	.my-content{
		margin: 20px 0;
		img{
			/*padding: 10px;*/
			width: 100%;
			border: 1px solid lightgray;
			border-radius: 50%;
		}
		h3{
			font-size: 14px;
			margin: 0;
			padding: 0 10px;
			color: lightblue;
			text-align: left;			
		}
		h5{
			font-size: 10px;
			margin: 5px 0px;
			padding: 0 10px;
			color: gray;
			text-align: left;	
		}
		p{
			font-size: 10px;
			margin: 0px;
			padding: 0 10px;
			color:#ccc;
			text-align: left;	
		}
	}
	.my-hr{
		width: 10%;
		height: 4px;
		border: none;
		background-color: darkblue;
	}
	.my-skill{
		span{
			font-size: 24px;
			color: white;	
			display: inline-block;
			background-color:#bbb ;
			padding: 12px;
			border-radius: 50%;
			position:relative; 
			&:after{
				content: "";
				position: absolute;
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				background-color:lightgreen ;
				opacity: .5;
				transition: .6s;
				left: 0;
				top: 0;
				transform: scale(0);
			}
			&:hover:after{
				transform: scale(1);
					
			}
		}
		h5,p{
			margin: 0;
			text-align: left;
			padding-left: 10px;
		}
		p{
			margin-top: 10px;
		}
		
	}
</style>