
const routes = [
  {
    path: '/review',
    component: () => import('layouts/ReviewLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Review.vue')
      },
      {
        path: 'flip',
        component: () => import('pages/Flip.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
