<script>
import MainCard from './MainCard.vue';

import {store} from '../store.js'



export default {

    name: "AppMain",

    data() {
        return {
            store,
            // variabile che cambia al click di .button
            isClick: false
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

        // funzione per il toggle di .button
        dropDown(){
            this.isClick = !this.isClick
        },
        // funzione che mi ritorna element se non ci sono filtri sui generi altrimenti mi visualizza solo i film che appartengono a quel genere
        visual(element){
            if(store.genreID == ''){
                return element
            }else{
                return element.genre_ids.includes(store.genreID)
            }
        }

    },

  
}
</script>

<template>
    <div class="container">

        <h2>{{ store.isSearched == true ? 'Your Search' : 'Trendings' }}</h2>

        <div class="cards-container" :style="isClick == true ? {flexWrap:'wrap'} : {flexWrap:'nowrap'}">

            <MainCard v-for="(element, index) in store.catalogue" :key="index" @isOver="howMany(element)" :image="element.poster_path" :title="element.media_type == 'movie' ? element.title : element.name" :original="element.media_type == 'movie' ? element.original_title : element.original_name" :language="image(element)" v-show="visual(element)"></MainCard>
            
        </div>

        <div class="button" @click="dropDown()">drop</div>
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
    }

    .button{
        position: absolute;
        top: 200px;
        right: -62px;

        text-transform: uppercase;
        background-color: rgba(44, 43, 43, 0.897);
        font-size: .8em;
        font-weight: bold;
        padding: 10px;
        border-radius: 16px;
        cursor: pointer;
    }

}

</style>