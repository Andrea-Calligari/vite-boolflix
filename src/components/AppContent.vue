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
        <section class="movie__section  ">
            <h1>Section Film</h1>
            <ul class="row p-5" v-if="store.movieResults.length !== 0">
                <AppCard class="p-3" v-for="movie in store.movieResults" :key="movie.id" :item="movie" />
            </ul>
        </section>
        <section class="tv__section  ">
            <h1>Section seires Tv</h1>
            <ul class="row p-5" v-if="store.tvSeriesResults.length !== 0">
                <AppCard class="p-3" v-for="movie in store.tvSeriesResults" :key="tv.id" :item="tv" />
            </ul>
        </section>


    </main>

</template>

<style scoped lang="scss">
// @use '../style/general' ;</style>