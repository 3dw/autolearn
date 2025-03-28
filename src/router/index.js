import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import('../views/DocView.vue'),
    },
    {
      path: '/doc_teens',
      name: 'doc_teens',
      component: () => import('../views/Doc_Teens_View.vue'),
    },
    {
      path: '/doc_parents',
      name: 'doc_parents',
      component: () => import('../views/Doc_Parents_View.vue'),
    },
    {
      path: '/doc_educators',
      name: 'doc_educators',
      component: () => import('../views/Doc_Educators_View.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
