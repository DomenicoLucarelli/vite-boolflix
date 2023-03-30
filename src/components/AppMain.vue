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
    components: { MainCard }
}
</script>

<template>
    <div class="container">
        
        <MainCard v-for="(element, index) in store.catalogue" :key="index" :image="element.poster_path"></MainCard>

    </div>
</template>

<style lang="scss" scoped>
.container{
    width: 90%;
    margin: auto;
    padding: 30px 0;

    display: flex;
    gap: 5px;

    overflow-x: auto;
}
</style>