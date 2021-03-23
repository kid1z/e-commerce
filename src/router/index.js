import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login'
import Admin from '@/components/pages/Admin'
import Category from '@/components/pages/Category'
import Supplier from '@/components/pages/Supplier'
import Product from '@/components/pages/Product'
import Shop from '@/components/pages/Shop'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: {
      path: 'login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children : [
      {
        path: 'category',
        name: 'admin.category',
        component: Category
      },
      {
        path: 'supplier',
        name: 'admin.supplier',
        component: Supplier
      },
      {
        path: 'product',
        name: 'admin.product',
        component: Product
      },
      {
        path: 'shop',
        name: 'admin.shop',
        component: Shop
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
