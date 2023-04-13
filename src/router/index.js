import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: "/search",
        name: "/search",
        component: Search,
      },
      {
        path: "/login",
        name: "/login",
        component: Login,
      },
      {
        path: "/register",
        name: "/register",
        component: Register,
      },
      
    ]
  },
  // {path:'/login',component:Login},
  // {path:'/register',component:Register},
  // {path:'/search',component:Search},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router