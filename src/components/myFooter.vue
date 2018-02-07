<template>
	<div class="my-footer">
		<el-row >
		  <el-col :span="4"><div class="grid-content"></div></el-col>
		  <el-col :span="4"><div class="grid-content">
		  	<ul>
		  		<h3>常用站点数据</h3>
		  		<li>BootCss</li>
		  		<li>Github</li>
		  		<li>聚合数据</li>
		  	</ul>
		  </div></el-col>
		  <el-col :span="4"><div class="grid-content">
		  	<ul>
		  		<h3>常用站点数据</h3>
		  		<li>BootCss</li>
		  		<li>Github</li>
		  		<li>聚合数据</li>
		  	</ul>
		  </div></el-col>
		  <el-col :span="4"><div class="grid-content"></div></el-col>
		  <el-col :span="4"><div class="grid-content"></div></el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:"myFooter"
	}
</script>

<style lang="less" scoped>
	.my-footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 160px;
		background-color: #333;
		color: white;
		.grid-content{
			height: 160px;
		}
	}
	h3{
		font-size:12px;
		text-align: left;
	}
	ul{
		list-style: none;
		li{
			font-size: 10px;
			text-align: left;
			margin: 5px 0px 0px 3px;
		}
	}
</style>