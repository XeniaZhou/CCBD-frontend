import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Summary from "@/views/Summary";
import Login from "@/views/Login";
import Signup from "@/views/Signup";
import UserInfoStore from '../app/user-info-store';
import UserInfoApi from '../app/user-info-api';
import auth from '../app/auth';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/summary/:id',
    name: 'Summary',
    component: Summary
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
