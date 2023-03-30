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

      if(this.store.userSearch != ''){

        let newAPI = this.store.APIgeneral + this.store.APIkey + this.store.APIquery + this.store.userSearch

        axios.get(newAPI).then((res)=>{

          console.log(res.data.results)
          this.store.catalogue = res.data.results

        })

      }else{
        axios.get(this.store.APIpopular + this.store.APIkey).then((res)=>{

        
        this.store.catalogue = res.data.results

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