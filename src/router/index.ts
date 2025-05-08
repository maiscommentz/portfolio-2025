import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: ""
  },
  {
    path: "",
    name: "home",
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: "/project/:projectId",
    name: "project",
    component: () => import('@/views/ProjectView.vue')
  },
  {
    path: "/:notFound",
    name: "notFound",
    component: () => import("../views/NotFoundView.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from) {
    if (to.hash) {
      if (from.name === to.name) {
        return { el: to.hash, behavior: 'smooth' }
      } else {
        return { el: to.hash }
      }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.hash) {
    setTimeout(() => {
      history.replaceState(null, '', to.path);
    }, 500);
  }
});

export default router