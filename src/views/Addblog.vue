<template>
  <div>
    <Navbar/>
    <div class="form-cont">
      <form action="" class="form" @submit.prevent="addblog">
        <label for="">title:</label>
        <input type="text" required v-model="blog.title">
        <label for="">author:</label>
        <input type="text" required v-model="blog.author">
        <label for="">date:</label>
        <input type="datetime-local" required v-model="blog.date">
        <label for="">blog</label>
        <textarea required v-model="blog.des"></textarea>
        <button>addblog</button>
    </form>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components:{
    Navbar
  },
  data() {
    return {
      blog:{
        title:'',
        author:'',
        date:'',
        des:''
      } 
    }
  },
  methods:{
    addblog(){
      console.log('you submiteed');
      fetch('http://localhost:3000/blogs',{
        method: 'POST',
        headers:{
          "content-type" : "aplication/json"
        },
        body: JSON.stringify(this.blog)
      })
      .then(res => res.json())
      .then(data => {
        this.blog.title = ""
        this.blog.author = ""
        this.blog.date = ""
        this.blog.des = ""
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style>

</style>