import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@views/About.vue")
  },
  {
    path: "/dream/index",
    name: "dream",
    component: () =>
      import(/* webpackChunkName: "dream/index" */ "@views/Dream/index.vue")
  },
  {
    path: "/dream/detail",
    name: "dream/detail",
    component: () =>
      import(/* webpackChunkName: "dream/index" */ "@views/Dream/detail.vue")
  },
  {
    path: "/movie/index",
    name: "movie/index",
    component: () =>
      import(/* webpackChunkName: "dream/index" */ "@views/Movie/index.vue")
  },
  {
    path: "/wbug/index",
    name: "wbug/index",
    component: () =>
      import(/* webpackChunkName: "dream/index" */ "@views/Wbug/index.vue")
  },
  {
    path: "/cihai/index",
    name: "cihai/index",
    component: () =>
      import(/* webpackChunkName: "dream/index" */ "@views/Cihai/index.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
