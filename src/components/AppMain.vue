<script>
import MainCard from './MainCard.vue';

import {store} from '../store.js'
import axios from 'axios';



export default {

    name: "AppMain",

    data() {
        return {
            store,
            
        };
    },
    components: { MainCard },

    //  funzione che mi trasforma il voto in un numero da 0 a 5
    methods: {
        howMany(element){

         let num = parseInt(element.vote_average);

         if(num == 0){
            this.store.number = 0
         }else if(num == 1 || num == 2){
            this.store.number = 1

         }else if(num == 3 || num == 4){
            this.store.number = 2
         }else if(num == 5 || num == 6){
            this.store.number = 3

         }else if(num == 7 || num == 8){
            this.store.number = 4

         }else{
            this.store.number == 5
         }
        },
        // funzione che mi permette di visuallizzare correttamente le bandiere
        image(element){
           if(element.original_language == 'en'){
               return 'gb'
           }else if(element.original_language == 'ja'){
               return 'jp'
           }else if(element.original_language == 'zh'){
            return 'cn'
           }else{
               return element.original_language
           }

        },

        // funzione per lo scroll a destra
        scrollR(){
            
            let bar = document.querySelector('.cards-container')
            bar.scrollBy(300,0)
        },
        // funzione per lo scroll a sinistra
        scrollL(){
            
            let bar = document.querySelector('.cards-container')
            bar.scrollBy(-300,0)
        },
        // funzione che mi ritorna element se non ci sono filtri sui generi altrimenti mi visualizza solo i film che appartengono a quel genere
        visual(element){
            if(store.genreID == ''){
                return element
            }else{
                return element.genre_ids.includes(store.genreID)
            }
        },
        // funzione che mi popola l'oggettto in store con le info del film/serie cliccato/a
        takeElement(element){
           
            this.store.infObject = element
            
            axios.get(`https://api.themoviedb.org/3/movie/${element.id}/credits?api_key=361c534a68c8b376ad1269bfb22f2ad7`).then((res)=>{
                let array = res.data.cast
                this.store.filmCast = array.slice(0,5)
                
            })

            this.store.isElementClick = true
        }
    },
  
}
</script>

<template>
    <div class="container">

        <h2>{{ store.isSearched == true ? 'Your Search' : 'Trendings' }}</h2>
        <div class="button btn1" @click="scrollL()"> <i class="fas fa-chevron-left"></i> </div>

        <div class="cards-container" >

            <MainCard v-for="(element, index) in store.catalogue" :key="index" @click="takeElement(element)" @isOver="howMany(element)" :image="element.poster_path" :title="element.media_type == 'movie' ? element.title : element.name" :original="element.media_type == 'movie' ? element.original_title : element.original_name" :language="image(element)" v-show="visual(element)"></MainCard>
            
        </div>

        <div class="button btn2" @click="scrollR()"> <i class="fas fa-chevron-right"></i></div>

    </div>
</template>

<style lang="scss" scoped>
.container{
    width: 90%;
    margin: auto;
    padding: 30px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    .cards-container{
        display: flex;
        gap: 10px;

        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .button{
        position: absolute;
        top: 200px;
        
        text-transform: uppercase;
        background-color: rgba(44, 43, 43, 0.897);
        font-size: .8em;
        font-weight: bold;
        padding: 10px;
        border-radius: 16px;
        cursor: pointer;
    }

    .btn1{
        left: -45px;
    }
    .btn2{
        right: -62px;
    }

}

</style>