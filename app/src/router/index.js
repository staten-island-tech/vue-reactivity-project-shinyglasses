import { createRouter, createWebHistory } from 'vue-router'
import HabitPage from '../views/HabitPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ {
      path: '/',
      name: 'home',
      component: HabitPage,
    }
], 
})

export default router