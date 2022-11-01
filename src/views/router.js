const routes = [
  {
    name: 'main',
    path: '/main/:component',
    component: () => import('@/views/compName.vue'),
  },
  {
    name: 'edit-data',
    path: '/edit-data',
    component: () => import('@/views/edit-data.vue'),
    meta: {
      title: 'mymarket - Редактирование данных',
    },
  },
]

export default routes
