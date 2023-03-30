import {reactive} from 'vue'
export const store = reactive({

    // istanzio un array vuoto che conterrà l'oggetto dell'API

    catalogue : [],

    APIgeneral:'https://api.themoviedb.org/3/search/multi',
    
    APIkey: '?api_key=361c534a68c8b376ad1269bfb22f2ad7',

    APIquery:'&query=',

    APItrending:'https://api.themoviedb.org/3/trending/all/week',

    userSearch:'',
})