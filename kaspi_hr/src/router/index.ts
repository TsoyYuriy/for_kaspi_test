import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'active-link',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/',
      name: 'log-in',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('@/views/Feed/FeedView.vue'),
      meta: { auth: true }
    },
    {
      path: '/content/:id',
      name: 'content',
      component: () => import('@/views/Content/ContentView.vue'),
      meta: { auth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile/ProfileView.vue'),
      meta: { auth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
      meta: { auth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useAuthStore()

  if (!userStore.isLogin && to.name !== 'log-in' && to.name !== 'sign-up') {
    // Если пользователь не вошел и пытается перейти на страницу, отличную от входа или регистрации, перенаправляем его на страницу входа
    next({ name: 'log-in' })
  } else {
    if (to.name === 'log-in' || to.name === 'sign-up') {
      // Если пользователь переходит на страницу входа или регистрации, сбрасываем данные о входе
      userStore.setIsLogin(false)
    }
    next()
  }

})

export default router
