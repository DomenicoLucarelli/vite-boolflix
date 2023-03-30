<script>
export default {

    name:'MainCard',

  data() {
    return {
      
    }
  },

  props: {

    image: String,
    title: String,
    original: String,
    overview:String,

  }
}
</script>

<template>
  <div class="card" scoped>
    
      
      <img :src=" `https://image.tmdb.org/t/p/w200${image}` " alt="">
      
      <div class="info">
          <span><strong>Titolo:</strong>{{ title }}</span>
          <span><strong>Titolo Originale:</strong>{{ original }}</span>
          <span><strong>Voto:</strong>stelle</span>
          <span><strong>Overview:</strong> {{ overview }}</span>
      </div>

  </div>
</template>

<style lang="scss" scoped>
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
        font-size: 0.8em;

        position: absolute;
        top: 0;

        display: none;
        flex-direction: column;
      }

  }

</style>