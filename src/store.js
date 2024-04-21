import { reactive } from 'vue'
import axios from 'axios';


export const store = reactive({
   api_key: 'aee8abb5e92b485f2f2a264464ed0c94',
   inputSearch: '',
   movieResults: [],
   tvSeriesResults: [],

   SearchingContents() {
      // API MOVIE
      axios.get('https://api.themoviedb.org/3/search/movie',
         {
            params: {
               api_key: this.api_key,
               query: this.inputSearch

            },
         }).then((res) => {
            const results = res.data.results;

            if (this.movieResults.length !== 0) {
               this.movieResults = []
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

               this.movieResults.push(
                  tmp
               );
            }


            console.log(results, 'movie')

            // API SERIE TV
            axios.get('https://api.themoviedb.org/3/search/tv',
               {
                  params: {
                     api_key: this.api_key,
                     query: this.inputSearch
                  }
               }).then((res) => {
                  const results = res.data.results

                  if (this.tvSeriesResults.length !== 0) {
                     this.tvSeriesResults = []
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

                     this.tvSeriesResults.push(
                        tmp
                     );
                  }
                  this.inputSearch = ''
                  console.log(results)
               })
         })

   }
})
