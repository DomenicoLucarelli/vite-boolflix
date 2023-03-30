<script>
export default {

    name:'MainCard',

  data() {
    return {
      
    }
  },

  props: {

    image: String,

  }
}
</script>

<template>
  <div class="card" scoped>
    
    <img :src=" `https://image.tmdb.org/t/p/w200${image}` " alt="">

  </div>
</template>

<style lang="scss">
  
</style>