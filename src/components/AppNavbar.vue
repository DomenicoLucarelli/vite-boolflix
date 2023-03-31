<script>

import {store} from '../store.js'


export default {

    name:'AppNavbar',

  data() {
    return {
      
        store,

         links : [ 
         'Home',
         'Serie Tv',
         'Film',
         'Originali',
         'Aggiunti di recente', 
         'La mia lista'
        ]
    }
  },

  methods: {
    // funzione che toggla il click sull'icona filter
    genresFilter(){
        
        this.store.click = !this.store.click
    },

    // funzione che rimuove i filtri
    removeFilter(){
        this.store.genreID = ''
    }
  },
}
</script>

<template>
  <nav>
    <div class="container">

        <div class="left-section">

           <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">

            <ul>

            <li v-for="(link, index) in links" :key="index">{{ link}}</li>

            </ul>  

        </div>

        <div class="search-bar">

            <i class="fas fa-filter" @click="genresFilter()"></i>

            <strong @click="removeFilter()">x</strong>

            <input v-model="store.userSearch" type="text" @keyup.enter="$emit('search')">

            <button @click="$emit('search')">Cerca</button>

        </div>

    </div>
  </nav>
</template>

<style lang="scss" scoped>

    nav{
        background-color: black;
        height: 80px;   

        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 100%;
            width: 90%;
            margin: 0 auto;

            .left-section{
                height: 100%;
                display: flex;
                gap: 10px;

                img{

                    width: 100px;
                }

                ul{
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    list-style-type: none;
                }
            }
            

            .search-bar{
                display: flex;
                gap: 10px;
                
                position: relative;
                input{
                    padding: 3px 6px;
                    border: none;
                    border-radius: 3px;
                }

                button{
                    border-radius:3px ;
                    border: none;
                    padding: 3px 6px;

                    font-size: .8em;
                    font-weight: bold;
                    color: darkgrey;

                    cursor: pointer;

                }

                .fa-filter{
                    font-size: 18px;
                }

            }
        }
    }
  
</style>