<script>
import {store} from './store';

import axios from 'axios';

import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';
import NavbarFilter from './components/NavbarFilter.vue';
import AppInfo from './components/AppInfo.vue'


export default {
    data() {
        return {
          store,
        };
    },

    components: { AppNavbar, AppMain, NavbarFilter,AppInfo,},

    created() {
      // chiamata API che genera un oggetto di trending film
      axios.get(this.store.APItrending + this.store.APIkey).then((res)=>{

        // riempio l'array con l'oggetto API
        this.store.catalogue = res.data.results
        
      })

      // chiamo API che mi genera un oggetto con tutti i generi
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=361c534a68c8b376ad1269bfb22f2ad7').then((res) =>{

        // riempio un array con l'oggetto che mi restituisce l'API
        this.store.filmGenres = res.data.genres
        console.log(this.store.filmGenres)
        
      })
     
    },

   methods: {
    // funzione che cambia la chiamata API al click 
    filter(){

      store.isSearched = true

      // se la userSearch è diversa da '' 
      if(this.store.userSearch != ''){
        // compongo il nuov link API e lo chiamo riempiendo poi l'array catalogue
        let newAPI = this.store.APIgeneral + this.store.APIkey + this.store.APIquery + this.store.userSearch

        axios.get(newAPI).then((res)=>{

          
          this.store.catalogue = res.data.results

        })

      }else{
        // altrimenti lascia l'array catalogue riempito con i trends
        axios.get(this.store.APItrending + this.store.APIkey).then((res)=>{

        
        this.store.catalogue = res.data.results

        store.isSearched = false

      })
      }
    },

    // funzione che mi da un valore a store.ID
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
  <AppInfo></AppInfo>
  
</template>

<style lang="scss">
  
</style>