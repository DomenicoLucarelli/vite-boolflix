<script>
import {store} from './store';

import axios from 'axios';

import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';
import NavbarFilter from './components/NavbarFilter.vue'


export default {
    data() {
        return {
          store,
        };
    },

    components: { AppNavbar, AppMain, NavbarFilter,},

    created() {
      // chiamata API che genera un oggetto di trending film
      axios.get(this.store.APItrending + this.store.APIkey).then((res)=>{

        // riempio l'array con l'oggetto API
        this.store.catalogue = res.data.results
        
      })

      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=361c534a68c8b376ad1269bfb22f2ad7').then((res) =>{

        this.store.filmGenres = res.data.genres
        console.log(this.store.filmGenres)
        
      })

      axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=361c534a68c8b376ad1269bfb22f2ad7').then((res)=>{
        
        this.store.tvGenres = res.data.genres
        console.log(this.store.tvGenres)
      })

     
    },

   methods: {
    // funzione che cambia la chiamata API al click 
    filter(){

      store.isSearched = true

      if(this.store.userSearch != ''){

        let newAPI = this.store.APIgeneral + this.store.APIkey + this.store.APIquery + this.store.userSearch

        axios.get(newAPI).then((res)=>{

          
          this.store.catalogue = res.data.results

        })

      }else{
        axios.get(this.store.APItrending + this.store.APIkey).then((res)=>{

        
        this.store.catalogue = res.data.results

        store.isSearched = false

      })
      }
    },

    getID(genre){
      
      this.store.genreID = genre.id
      
    }
   }
}


</script>

<template>
  <AppNavbar @search="filter()"></AppNavbar>
  <NavbarFilter :style="store.click == true ? {display: 'flex'} : {display: 'none'}" @genre="getID"></NavbarFilter>
  <AppMain></AppMain>
  
</template>

<style lang="scss">
  
</style>