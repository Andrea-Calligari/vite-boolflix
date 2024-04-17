<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import axios from 'axios';
import { store } from '../src/store';



export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppContent
  },

  methods: {
    SearchingContents() {
      axios.get('https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: store.api_key,
            query: store.inputSearch

          },
        }).then((res) => {
          store.movieResults = res.data.results
          console.log( store.movieResults)


          axios.get('https://api.themoviedb.org/3/search/tv',
            {
              params: { 
                api_key: store.api_key,
                query: store.inputSearch
              }
            }).then((res) => {
              store.tvSeriesResults = res.data.results
              console.log( store.tvSeriesResults)
            })
        })

    },
    getImage(){
      
      
    }
  },


}
</script>

<template>
  <AppHeader @search="SearchingContents()"/>
  
  <AppContent />

</template>

<style lang="scss">
@use './style/partials/reset';
@use 'bootstrap';
</style>
