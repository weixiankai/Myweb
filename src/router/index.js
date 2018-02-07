import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Hobby from '../components/hobby'
import Info from '../components/info'
import Experience from '../components/experience'
import Project from '../components/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:"/",name:"home",component:Home
    },
    {
    	path: '/info',name: 'info',component: Info
    },
    {
    	path:"/hobby",name:"hobby",component:Hobby
    },
    {
    	path:"/experience",name:"experience",component:Experience
    },
    {
    	path: '/project',name: 'project',component: Project
    }
  ]
})
