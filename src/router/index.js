import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import LoginView from '../views/Login.vue';
import OAuthCallback from '../components/OAuthCallback.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/callback',
    name: 'OAuthCallback',
    component: OAuthCallback
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;