<template>
  <div>
    <Nav/>
    <div class="blog-card-cont" v-if="this.blogs">
        <router-link  v-for="(blog,index) in blogs" :key="index" class="blog-card" :to="{name: 'blogdetail', params:{id: blog.id}}">
            <div class="blog-child" >
                <h1>{{ blog.title }}</h1>
                <div class="blog-child-1">
                    <h3> written by :{{ blog.author }}</h3>
                    <h3> on: {{ blog.date }}</h3>
                </div>
            </div>
        </router-link>
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue'
import Footer from "@/components/footer.vue"
export default {
components:{
    Nav,
    Footer
},
data() {
    return {
        blogs:[]
    }
},
mounted(){
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then(data => this.blogs = data.reverse())
    .catch(err => console.log(err))
}
}
</script>

<style>

</style>