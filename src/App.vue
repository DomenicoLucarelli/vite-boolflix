<script>
import {store} from './store';

import axios from 'axios';

import AppNavbar from './components/AppNavbar.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {
          store,
        };
    },

    components: { AppNavbar, AppMain },

    created() {
      axios.get(this.store.APItrending + this.store.APIkey).then((res)=>{

        
        this.store.catalogue = res.data.results
        
      })
    },

   methods: {
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
    }
   }
}


</script>

<template>
  <AppNavbar @search="filter()"></AppNavbar>
  <AppMain></AppMain>
  
</template>

<style lang="scss">
  
</style>