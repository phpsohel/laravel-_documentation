<template>
        <h1>Post API USE</h1>
        <input type="search" v-model="vue_search">
        <ul>
            <li v-for="post in searchfilter" :key="post.id">
                <p>{{ post.title   }}</p>
                <p>{{ post.body }}</p>
            </li>
        </ul>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: 'sohel',
            posts: [],
            vue_search:''
        }
    },
    computed: {
        searchfilter() {
            return this.posts.filter(post =>{
             return post.title.match(this.vue_search)
          })  
        }   
    },
    methods: {
        
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.data
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>
<style>
</style>
