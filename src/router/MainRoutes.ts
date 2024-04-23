const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'JKMA search - home',
      path: '/',
      component: () => import('@/views/HomePage.vue')
    },
    {
      name: 'JKMA search - results',
      path: '/search/:query',
      component: () => import('@/views/SearchPage.vue')
    },
    {
      name: 'JKMA search - view pdf',
      path: '/view/:id',
      component: () => import('@/views/PdfPage.vue'),
      props: true
    }
  ]
};

export default MainRoutes;
