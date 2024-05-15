import { createRouter, createWebHistory } from 'vue-router'
import index from "@/views/Index.vue"
import notpage from "@/views/404.vue"
import details from "@/views/blogdetail.vue"
import addblog from "@/views/Addblog.vue"
import editblog from "@/views/Editblog.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    },
    {
      path: "/blogdet/:id",
      name: 'blogdetail',
      component: details,
      props:  true
    },
    {
      path:'/addblog',
      component: addblog
    },
    {
      path:"/edit/:id",
      name:"edit",
      component: editblog,
      props: true
    },
    {
      path:'/:catchAll(.*)',
      component: notpage 
    }
  ]
})

export default router
