import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MusicStore from '../views/MusicStore.vue'
import MusicCategory from "../views/MusicCategory.vue";
import Friends from "../views/Friends.vue";
import MusicPanel from "../views/MusicPanel.vue";
import SearchResult from '../views/SearchResult.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
      
      children: [
        {
          path: "/MusicStore",
          name: "MusicStore",
          component: MusicStore,
        },
        {
          path: "/MusicCategory",
          name: "MusicCategory",
          component: MusicCategory,
        },
        {
          path: "/Friends",
          name: "Friends",
          component: Friends,
        },
      ],
    },
    {
      path: "/MusicPanel",
      name: "MusicPanel",
      component: MusicPanel,
      // meta: {
      //   keepAlive: true, // 需要被缓存
      // },
    },
    {
      path: "/SearchResult",
      name: "SearchResult",
      component: SearchResult,
      // meta: {
      //   keepAlive: true, // 需要被缓存
      // },
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ];

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
