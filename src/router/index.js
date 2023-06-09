import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Add from '../views/Add.vue'
import Homepage from '../views/Homepage.vue'
import Recommend from '../views/Recommend.vue'
import HighRating from '../views/HighRating.vue'
import Hot from '../views/Hot.vue'
import Moviedetails from '../views/Moviedetails.vue'
import Userpage from '../views/Userpage.vue'

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
      {
        path: "/homepage",
        name: "/homepage",
        component: Homepage,
      },
      {
        path: "/recommend/:page",
        name: "/recommend",
        component: Recommend,
      },
      {
        path: "/highrating/:page",
        name: "/highrating",
        component: HighRating,
      },
      {
        path: "/hot/:page",
        name: "/hot",
        component: Hot,
      },
      {
        path: "/moviedetails/:id",
        name: "/moviedetails",
        component: Moviedetails,
      },
      {
        path: "/userpage",
        name: "/userpage",
        component: Userpage,
      },
    ]
  },
  {path:'/add',component:Add},
  // {path:'/login',component:Login},
  // {path:'/register',component:Register},
  // {path:'/search',component:Search},
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router