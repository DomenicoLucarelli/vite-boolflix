<script>
import {store} from '../store.js'
export default {
    name: 'AppInfo',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <div class="container" :style="store.isElementClick ? {display : 'flex'} : {display: 'none'} ">
        
        <div class="left-section">

            <div class="image">

                <img :src="`https://image.tmdb.org/t/p/w200${store.infObject.poster_path}`" alt="">

            </div>

            <div class="info">

                <span><strong>Titolo:</strong> {{ store.infObject.media_type == 'movie' ? store.infObject.title : store.infObject.name}}</span>

                <span><strong>Data di rilascio:</strong> {{ store.infObject.media_type == 'movie' ? store.infObject.release_date : store.infObject.first_air_date }}</span>

                <span><strong>Voto:</strong> {{ store.infObject.vote_average}}</span>

                <span><strong>Descrizione:</strong> {{ store.infObject.overview}}</span>

            </div>

        </div>

        <div class="right-section">

            <i class="fas fa-xmark" @click="store.isElementClick = false "></i>

            <h2>Cast</h2>

            <div class="cast-members">

                <ul>

                    <li v-for="(actor, index) in store.filmCast" :key="index">{{ actor.name }}</li>

                </ul>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
    .container{
        width: 90%;
        height: 90vh;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        background-color: rgba(0, 0, 0, 0.945);
        border-radius: 20px;
        z-index: 99;
        

        .fas{
            position: absolute;
            top: 15px;
            right: 16px;
            font-size: 22px;
            cursor: pointer;
        }
    

        

        .left-section , .right-section{
            height: 100%;
            
            width: 50%;
            
            
        }
    }

    .left-section{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .info{
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            padding: 0 10px;
        }
    }

    .right-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        .cast-members{
            ul{

                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: center;
            }
        }
    }
</style>