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
      // API MOVIE
      axios.get('https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: this.store.api_key,
            query: this.store.inputSearch

          },
        }).then((res) => {
          const results = res.data.results;

          for (let i = 0; i < results.length; i++) {
            let tmp = {
              title: results[i].original_title,
              name: results[i].title,
              rating: Math.floor(results[i].vote_average / 2),
              id: results[i].id,
              image: results[i].poster_path,
              language: results[i].original_language
            };

            this.store.movieResults.push(
              tmp
            );
          }


          // console.log(this.store.movieResults)

          // API SERIE TV
          axios.get('https://api.themoviedb.org/3/search/tv',
            {
              params: {
                api_key: this.store.api_key,
                query: this.store.inputSearch
              }
            }).then((res) => {
              const results = res.data.results

              for (let i = 0; i < results.length; i++) {
                const tmp = {
                  title: results[i].original_name,
                  name: results[i].name,
                  rating: Math.floor(results[i].vote_average / 2),
                  id: results[i].id,
                  image: results[i].poster_path,
                  language: results[i].original_language
                };

                this.store.tvSeriesResults.push(
                  tmp
                );
              }
              // console.log( store.tvSeriesResults)
            })
        })

    }
  }
}
</script>

<template>
  
  <AppHeader @search="SearchingContents()" />
  <AppContent />

</template>

<style lang="scss">
@use './style/partials/reset';
@use 'bootstrap';
#app{
  background: rgb(230,0,0);
background: radial-gradient(circle, rgba(230,0,0,0.742734593837535) 30%, rgba(13,13,13,0.8599089293920693) 100%);
}
</style>