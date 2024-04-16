<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import axios from 'axios';


let api_key = 'aee8abb5e92b485f2f2a264464ed0c94';
let query = '';

export default {
  data() {
    return {


    }
  },
  
  components: {
    AppHeader,
    AppContent
  },

  methods: {
    fetchFilm() {
      axios.get('https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key,
            query

          },
        }).then((res) => {
          console.log(res.data.result)


        })
    }
  },
  created() {
    this.fetchFilm()

  }

}
</script>

<template>
  <AppHeader />
  <AppContent />

</template>

<style lang="scss"></style>
