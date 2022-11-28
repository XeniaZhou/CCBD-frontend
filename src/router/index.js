import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Summary from "@/views/Summary";
import Loggedin from "@/views/Loggedin";
import Signup from "@/views/Signup";
import Loggedout from "@/views/Loggedout";

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
    name: 'Loggedin',
    component: Loggedin
  },
  {
    path: '/logout',
    name: 'Loggedout',
    component: Loggedout
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
