import {reactive} from 'vue'
export const store = reactive({

    
    // array che si popola con le varie API
    catalogue : [],
    // array che contiene i generi con i rispettivi ID
    filmGenres : [],
    // api per la ricerca di film o serie
    APIgeneral:'https://api.themoviedb.org/3/search/multi',
    // api key
    APIkey: '?api_key=361c534a68c8b376ad1269bfb22f2ad7',
    // parametro da aggiungere dopo api key per ottenere l'api completo per la ricerca dei film o serie
    APIquery:'&query=',
    // api che mi da l'oggetto dei trends film/serie
    APItrending:'https://api.themoviedb.org/3/trending/all/week',
    // variabile che contiene la ricerca dell'utente
    userSearch:'',
    // array per le stelle
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
    // variabile booleana che cambia al click sull'icona filter
    click : false,
    // variabile che contiene l'id del genere del film cliccato
    genreID : ''
})