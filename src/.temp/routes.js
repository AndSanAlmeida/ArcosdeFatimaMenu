export default [
  {
    path: "/spanish/",
    component: () => import(/* webpackChunkName: "page--src-pages-spanish-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\Spanish.vue")
  },
  {
    path: "/portuguese/",
    component: () => import(/* webpackChunkName: "page--src-pages-portuguese-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\Portuguese.vue")
  },
  {
    path: "/italian/",
    component: () => import(/* webpackChunkName: "page--src-pages-italian-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\Italian.vue")
  },
  {
    path: "/french/",
    component: () => import(/* webpackChunkName: "page--src-pages-french-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\French.vue")
  },
  {
    path: "/english/",
    component: () => import(/* webpackChunkName: "page--src-pages-english-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\English.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Andre\\Desktop\\menu-arcosdefatima\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

