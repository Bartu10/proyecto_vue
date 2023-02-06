import {createRouter, createWebHashHistory} from "vue-router";
const routes = [
    { path: '/', component: () => import('../pages/home.vue') },
    { path: '/pilots', component: () => import('../pages/pilots.vue') },
    { path: '/races', component: () => import('../pages/races.vue') },
    { path: '/login', component: () => import('../pages/login.vue') },
    { path: '/leaderboard', component: () => import('../pages/leaderboard.vue')},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../shared/NoPageFound.vue') }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router