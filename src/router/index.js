import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'//重定向，默认进入推荐页
    },
    {
      path:'/recommend',
      component:Recommend//推荐
    },
    {
      path:'/singer',
      component:Singer//歌手
    },
    {
      path:'/rank',
      component:Rank//排行
    },
    {
      path:'/search',
      component:Search//搜索
    }
  ]
})
