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

          if (this.store.movieResults.length !== 0) {
            this.store.movieResults = []
          }
          for (let i = 0; i < results.length; i++) {
            let tmp = {
              title: results[i].original_title,
              name: results[i].title,
              rating: Math.floor(results[i].vote_average / 2),
              id: results[i].id,
              image: results[i].poster_path,
              language: results[i].original_language,
              backdrop: results[i].backdrop_path

            };

            this.store.movieResults.push(
              tmp
            );
          }


          console.log(results, 'movie')

          // API SERIE TV
          axios.get('https://api.themoviedb.org/3/search/tv',
            {
              params: {
                api_key: this.store.api_key,
                query: this.store.inputSearch
              }
            }).then((res) => {
              const results = res.data.results

              if (this.store.tvSeriesResults.length !== 0) {
                this.store.tvSeriesResults = []
              }

              for (let i = 0; i < results.length; i++) {
                const tmp = {
                  title: results[i].original_name,
                  name: results[i].name,
                  rating: Math.floor(results[i].vote_average / 2),
                  id: results[i].id,
                  image: results[i].poster_path,
                  language: results[i].original_language,
                  backdrop: results[i].backdrop_path
                };

                this.store.tvSeriesResults.push(
                  tmp
                );
              }
              this.store.inputSearch = ''
              console.log(results)
            })
        })

    }
  }
}
</script>

<template>
  <div class="bg">

    <AppHeader @search="SearchingContents()" />
    <AppContent />

  </div>

</template>

<style lang="scss">
@use './style/partials/reset';
@use 'bootstrap';

body {
  background: rgba(253, 195, 45, 0.954)
}
</style>