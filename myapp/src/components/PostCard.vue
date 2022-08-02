<script>

import { getSome } from "../API"
import { mounted, ref, inject } from 'vue'

export default {
    setup(){
        const posts = ref(null)
        const comments = ref(null)
        const showComments = ref(false)
        // const userId = inject('userId') 
        // const userId = ref('userId')

        return{
            posts,
            comments,
            showComments,
            // userId
        }
    },
    name: "PostCard",
    // inject: ['userId'],
    methods: {
        toggleSwitch(){
        this.showComments = !this.showComments;
        console.log(this.showComments)
        }
    },
    mounted(){
        getSome(`https://jsonplaceholder.typicode.com/posts?userId=1`)
        .then(r => {
           this.posts = r
        //    console.log(r)
        //    console.log(this.posts)
        })
        getSome('https://jsonplaceholder.typicode.com/comments')
        .then(r => {
           this.comments = r
           console.log(r)
        //    console.log(this.comments)
        //    console.log(r[0])
        })
    }
}
</script>

<template>
    <div class="flex flex-wrap items-center">
        <div>
            <div class="bg-slate-100 border-4 border-slate-200 mb-2" v-for="post in posts" :key="post.id">
                <div class="border-2 border-slate-400">
                    <h3 class="p-4 pl-4 font-semibold">{{post.title}}</h3>
                </div>
                <p class="p-6">{{post.body}}</p>
                <button @click="this.toggleSwitch">Commentaries</button>
            </div>
        </div> 
    </div>
</template>


