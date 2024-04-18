<script>
import { store } from '../store';
import AppCard from './AppCard.vue'

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCard,
    }
}

</script>

<template>
    <main>
        <section class="section ">
            <ul class="row justify-contenty-center align-items-center p-5" v-if="store.movieResults.length !== 0">
                <div class="text-center text-light p-5"><h1>Films</h1></div>
                <AppCard  v-for="movie in store.movieResults" :key="movie.id" :item="movie"  />
                <div class="text-center text-light p-5"><h1>Series Tv</h1></div>
                <AppCard  v-for="tv in store.tvSeriesResults" :key="tv.id" :item="tv"  />

            </ul>
        </section>
    </main>
</template>


<style scoped lang="scss">
// @use '../style/general' 
.section{
    background: rgb(230,0,0);
    background: linear-gradient(0deg, rgba(230,0,0,0.742734593837535) 8%, rgba(13,13,13,0.9444152661064426) 81%);

   
}
</style>