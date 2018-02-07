<template>
  <div id="app">
  	<div>
  		<my-header></my-header>
  		<router-view/>
 			<my-footer></my-footer>
  	</div>
		  	
  </div>
</template>

<script>
	import myHeader from './components/myHeader'
	import myFooter from './components/myFooter'
export default {
  name: 'app',
  components:{
  	myHeader,
  	myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
