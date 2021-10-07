import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/propsEmit',
    name: 'propsEmit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "propsEmit" */ '@/components/propsEmit/Parent.vue'),
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import(/* webpackChunkName: "propsEmit" */ '@/components/ref/Parent.vue'),
  },
  {
    path: '/parentChildren',
    name: 'parentChildren',
    component: () => import(/* webpackChunkName: "propsEmit" */ '@/components/parentChildren/Parent.vue'),
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    component: () => import(/* webpackChunkName: "propsEmit" */ '@/components/provideInject/Parent.vue'),
  },
  {
    path: '/eventBus',
    name: 'eventBus',
    component: () => import(/* webpackChunkName: "propsEmit" */ '@/components/eventBus/Index.vue'),
  },
  {
    path: '/attrsListeners',
    name: 'attrsListeners',
    component: () => import(/* webpackChunkName: "propsEmit" */ '@/components/attrsListeners/Parent.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
