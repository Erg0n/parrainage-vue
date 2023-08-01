import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/Home.vue";
import LoginForm from "@/views/Login.vue";
import RegisterForm from "@/views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  {path:'/', component: HomeView},
  {path:'/login', component: LoginForm},
  {path:'/register', component: RegisterForm},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
