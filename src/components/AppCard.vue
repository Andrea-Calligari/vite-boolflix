<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: Object,
        required: true,

    },
    methods:{
        getFullStars(n){
            return Math.floor(n / 2);
        }
        // getEmptyStars(){
        //     return Math.floor(5 * 0.2)
        // },
        // getFlagPath(language) {
        //     return '/imgs/flags/it.jpg';
        // }
    }

}

</script>




<template>
    <li class="col-4 ">
        <div class="card-header">
            <h1 class="fs-4">{{ item.title }}</h1>
            <h2 class="fs-5">{{ item.original_title }}</h2>
        </div>
        <div class="card-body">
            <img :src="`//image.tmdb.org/t/p/w300/${item.poster_path}`" alt="">
            <div class="fs-3">{{ item.original_language }}</div>
            <div class="d-inline" v-for="star in getFullStars(item.vote_average)"><i class="fa-solid fa-star"></i></div>
             <!-- <h1 v-for="i in getEmptyStars()">T</h1>  -->
            <!-- <img :src="getFlagPath(item.original_language)" alt=""> -->
        </div>

    </li>
</template>




<style scoped lang="scss">
.content {
    font-size: 16px;
}
</style>