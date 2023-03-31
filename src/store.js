import {reactive} from 'vue'
export const store = reactive({

    
    
    catalogue : [],

    filmGenres : [],

    tvGenres : [],

    genres : [],

    APIgeneral:'https://api.themoviedb.org/3/search/multi',
    
    APIkey: '?api_key=361c534a68c8b376ad1269bfb22f2ad7',

    APIquery:'&query=',

    APItrending:'https://api.themoviedb.org/3/trending/all/week',

    userSearch:'',

    stars :[
        {
            vote: [1,2,3,4,5]
        },

        {
            vote: [2,3,4,5]
        },

        {
            vote: [3,4,5]
        },

        {
            vote: [4,5]
        },

        {
            vote: [5]
        }
    ],

    number: null,

    isSearched:false,

    click : false,

    genreID : ''
})