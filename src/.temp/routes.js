export default [
  {
    path: "/spanish/",
    component: () => import(/* webpackChunkName: "page--src-pages-spanish-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\Spanish.vue")
  },
  {
    path: "/portuguese/",
    component: () => import(/* webpackChunkName: "page--src-pages-portuguese-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\Portuguese.vue")
  },
  {
    path: "/italian/",
    component: () => import(/* webpackChunkName: "page--src-pages-italian-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\Italian.vue")
  },
  {
    path: "/french/",
    component: () => import(/* webpackChunkName: "page--src-pages-french-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\French.vue")
  },
  {
    path: "/english/",
    component: () => import(/* webpackChunkName: "page--src-pages-english-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\English.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\AndréSantosAlmeida\\Desktop\\ArcosdeFatimaMenu\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

