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

  
}
</script>

<template>
    <div class="container">
        
        <MainCard v-for="(element, index) in store.catalogue" :key="index" :image="element.poster_path" :title="element.media_type == 'movie' ? element.title : element.name" :original="element.media_type == 'movie' ? element.original_title : element.original_name" :language="element.original_language"></MainCard>

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