<script>
import {store} from '../store.js'
export default {

    name:'MainCard',

  data() {
    return {
      
        store,
    }
  },

  props: {

    image: String,
    title: String,
    original: String,
    language:String,

  }
}
</script>

<template>
  <div class="card" @mouseover="$emit('isOver')">
    
      
      <img :src=" `https://image.tmdb.org/t/p/w200${image}` " alt="">
      
      <div class="info">
          <span><strong>Titolo:</strong>{{ title }}</span>
          <span><strong>Titolo Originale:</strong>{{ original }}</span>
          <span><strong>Lingua:</strong> {{ language }}</span>
          <span><strong>Voto:</strong><i class="fas fa-star" v-for="(item, index) in store.stars" :style="item.vote.includes(store.number) ? {color: 'yellow'} : '' "></i></span>
      </div>

  </div>
</template>

<style lang="scss" scoped >
  .card{
    position: relative;

    &:hover img{
        z-index: 0;
    }

    &:hover .info{
        display: flex;
    }
      img{
        position: relative;
        z-index: 1;
      }
      .info{
        width: 200px;
        height: 300px;
        background-color: black;
        padding: 10px 5px;
        overflow: hidden;
        

        position: absolute;
        top: 0;

        display: none;
        flex-direction: column;
      }

  }

  .fa-star{
    color: grey;
    font-size: 18px;
  }

</style>