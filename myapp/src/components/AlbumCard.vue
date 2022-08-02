<script>

import { getSome } from "../API"
import { mounted, ref, provide } from 'vue'

export default {
    setup(){
        const albums = ref(null)
        // const album = ref(null)
        
        return{
            albums
        }
        
    },
    name: "AlbumCard",
    mounted(){
        getSome('https://jsonplaceholder.typicode.com/albums')
        .then(r => {
            // console.log('coucou2')
           this.albums = r
        //    console.log(r)
        //    console.log(this.albums[0])
        })
    }
}
</script>

<template>
    <div class="flex justify-evenly flex-wrap">
        <div class="flex flex-col justify-center w-1/5 h-52 bg-sky-500 border-slate-200 mx-3 my-4" v-for="album in albums" :key="album.id">
            <p> album Id=={{album.id}} </p>
            <p> album user Id=={{album.userId}} </p>
            <h3>album title =={{album.title}}</h3>
        </div>
    </div>
</template>