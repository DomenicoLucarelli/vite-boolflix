<script>
import MainCard from './MainCard.vue';

import {store} from '../store.js'


export default {
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
    components: { MainCard },

    methods: {
        howMany(element){

         let num = parseInt(element.vote_average);

         if(num == 1 || num == 2){
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

         console.log(this.store.number)

        }
    },

  
}
</script>

<template>
    <div class="container">
        
        <MainCard v-for="(element, index) in store.catalogue" :key="index" @isOver="howMany(element)" :image="element.poster_path" :title="element.media_type == 'movie' ? element.title : element.name" :original="element.media_type == 'movie' ? element.original_title : element.original_name" :language="element.original_language"></MainCard>

    </div>
</template>

<style lang="scss" scoped>
.container{
    width: 90%;
    margin: auto;
    padding: 30px 0;

    display: flex;
    gap: 10px;

    overflow-x: auto;

}

</style>