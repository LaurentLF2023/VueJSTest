<script>

import { getSome } from "../API"
import { mounted, ref, provide } from 'vue'

export default {
   setup(){
        const users= ref(null)
        const user= ref(null)
        // provide('userId', user)
        return{
            users,
            user
        }
    },
    name: "UserSelect",
    // provide: ['userId'],
    mounted(){
        getSome('https://jsonplaceholder.typicode.com/users')
         .then(r => {
           this.users = r
        //    console.log(r)
        //    console.log(this.posts)
        })
    }
}
</script>

<template>
    <div>
        <label for="user-select">Choose a user's blog : </label>
        <select v-model="user" name="user" id="user-select">
        <option v-for="user in users" v-bind:value="user.id" :key="user.id"> {{user.username}}</option>
        </select>
    </div>
</template>