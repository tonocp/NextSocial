import { createRouter, createWebHistory } from 'vue-router';

function removeHash(to: { hash: any; path: any; query: any }) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' };
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: () => import('@/modules/home/HomePage.vue'),
      beforeEnter: [removeHash],
    },
    // /**
    //  * USERS ROUTES
    //  */
    {
      path: '/user',
      name: 'Users',
      beforeEnter: [removeHash],
      children: [
        {
          path: 'profile',
          name: 'MyProfile',
          props: true,
          component: () => import('@/modules/users/views/MyProfile.vue'),
          beforeEnter: [removeHash],
        },
        {
          path: 'friends',
          name: 'FriendList',
          props: true,
          component: () => import('@/modules/users/views/FriendsList.vue'),
          beforeEnter: [removeHash],
        },
      ],
    },
  ],
});

export default router;
