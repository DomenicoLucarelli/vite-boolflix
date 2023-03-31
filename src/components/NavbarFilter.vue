<script>
import {store} from '../store.js'
export default {

    name: 'NavbarFilter',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="film-container">

            <span v-for="(genre, index) in store.filmGenres " :key="index" @click="$emit('genre',genre)">{{ genre.name }}</span>

        </div>

    </div>
</template>

<style lang="scss" scoped>
    .container{
        width: 40%;
        height: 200px;
        background-color: black;

        position: absolute;
        right:5%;
        top: 80px;
        z-index: 2;

        justify-content: space-evenly;
        
        .film-container, .tv-container{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: space-between;
            width: 400px;
        }
        
        
    }
    
</style>