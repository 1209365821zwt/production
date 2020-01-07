import Vue from 'vue'
import VueRouter from 'vue-router'
import storage from '../until/storage'
Vue.use(VueRouter)

const routes=[
  {
    path: '/main',
    component: () => import('@/views/home'),
    redirect: '/main/first',
    children: [
      {
        path: '/main/first',
        component: () => import('../views/home/Firstpage/index.vue'),
        meta:{
          required:true
        }
      },
      {
        path: '/main/production',
        component: () => import('@/views/home/Productionlist'),
        meta:{
          required:true
        }
      },
      {
        path: '/main/authlist',
        component: () => import('@/views/home/Authlist'),
        meta:{
          required:true
        }
      },
      {
        path: '/main/aboutus',
        component: () => import('@/views/home/Aboutus'),
        meta:{
          required:true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    component: () => import('@/views/register')

  },
  {
    path:'/detail',
    component:()=>import('@/views/Detail')
  },
  {
    path:'/animedetail',
    name:'Animedetail',
    component:()=>import('@/views/Animedetail')
  },
  {
    path:'/collect',
    component:()=>import('@/views/Collect')
  },
  {
    path: '/',
    redirect: '/main'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.required){
     const token=storage.getItem('token');
     if(token){
       next()
     }else{
       next({
         path:'/login',
         query:{redirect:to.path}
       })
     }
  }else{
    next()
  }
})
export default router
