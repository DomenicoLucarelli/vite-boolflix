<script>

import {store} from '../store.js'

export default {

    name:'AppNavbar',

  data() {
    return {
      
        store,
    }
  },
}
</script>

<template>
  <nav>
    <div class="container">

        <div class="title">
            Boolflix
        </div>

        <div class="search-bar">
            <input v-model="store.userSearch" type="text" @keyup="$emit('search')">
            <button @click="$emit('search')">Cerca</button>
        </div>

    </div>
  </nav>
</template>

<style lang="scss" scoped>

nav{
    background-color: black;
    height: 80px;   

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 100%;
        width: 90%;
        margin: 0 auto;

        .title{
            color: red;
            font-size: 1.5em;
            font-weight: bold;
            text-transform: uppercase;
        }

        .search-bar{
            display: flex;
            gap: 5px;

            input{
                padding: 3px 6px;
                border: none;
                border-radius: 3px;
            }

            button{
                border-radius:3px ;
                border: none;
                padding: 3px 6px;

                font-size: .8em;
                font-weight: bold;
                color: darkgrey;

                cursor: pointer;

            }
        }
    }
}
  
</style>