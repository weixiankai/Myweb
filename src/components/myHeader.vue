<template>
	<div class="my-header">
		<div class="logo"></div>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
	  <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
	  <el-menu-item index="2"><router-link to="/info">我的简介</router-link></el-menu-item>
	  <el-menu-item index="3"><router-link to="/project">我的作品</router-link></el-menu-item>
	  <el-menu-item index="4"><router-link to="/experience">我的经历</router-link></el-menu-item>
	  <el-menu-item index="5"><router-link to="/hobby">我的兴趣</router-link></el-menu-item>
	</el-menu>
	</div>
</template>

<script>
export default{
	name:'myHeader',
	data(){
		return{
			activeIndex:"1"
		}
	}
}
</script>

<style lang="less" scoped>
	.my-header{
		width:800px;
		position:relative;
		height: 60px;
		.logo{
			position:absolute;
			width: 40px;
			height: 40px;
			top: 10px;
			left:10px;
			background: url(../assets/logo.png) no-repeat;
			background-size: 100%;
		}
		.el-menu-demo{
			left: 100px;
			border:none;
		}
		li{
			padding: 0;
		}
		a{
			text-decoration: none;
			display: inline-block;
			height:60px;
			padding: 0 20px;
		}
	}

</style>