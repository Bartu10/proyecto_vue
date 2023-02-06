import {createRouter, createWebHashHistory} from "vue-router";
const routes = [
    { path: '/', component: () => import('../pokemon/pages/ListPage.vue') },
    { path: '/pilots', component: () => import('../pages/login.vue') },
    { path: '/races', component: () => import('../pages/PokemonPage.vue') },
    { path: '/login', component: () => import('../pages/login.vue') },
    { path: '/leaderboard', component: () => import('../')},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../shared/NoPageFound.vue') }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  export default router