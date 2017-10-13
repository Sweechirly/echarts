import Vue from 'vue'
import Router from 'vue-router'
import scatter from '@/components/scatter'
import pie from '@/components/pie'
import line from '@/components/line'
import bar from '@/components/bar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/scatter'
    },
    {
      path: '/scatter',
      component:scatter
    },
    {
      path: '/pie',
      component:pie
    },
    {
      path: '/line',
      component:line
    },
    {
      path: '/bar',
      component:bar
    }
  ]
})
