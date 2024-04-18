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
        },
         getEmptyStars(n){
             return Math.floor( 10 - n  / 2 ) 
         },
         getFlagPath(language) {
            if(language === 'it'){
                return '../public/italia.png';
            }else if(language === 'en'){
                return '../public/england.webp';

            }else if(language === 'es'){
                return '../public/esp.png';

            }
         }
    }

}

</script>




<template>
    <li class="col-4 p-4 ">
        <div class="position-relative">
            <img :src="`//image.tmdb.org/t/p/w300/${item.poster_path}`" alt="">
            <div class="overlay">
                <h1 class="fs-4">Titolo:  {{ item.title }}</h1>
                <h1 class="fs-4">Titolo Originale:  {{ item.original_title }}</h1> 
                <div class="fs-3 position-relative" >
                    <img class="logo " :src="getFlagPath(item.original_language)" alt=""> 
                </div>
                <div class="d-inline text-warning" v-for="i in getFullStars(item.vote_average)"><i class="fa-solid fa-star"></i></div>
                <div class="d-inline "  v-for="star in getEmptyStars(item.vote_average)"><i class="fa-regular fa-star"></i></div>  

            </div>
        </div>
        <!-- <div class="card-header">
        </div>
        <div class="card-body">
            
        </div> -->

    </li>
</template>




<style scoped lang="scss">

.overlay:hover{
    opacity: 1;
    background-color: rgba(59, 57, 57, 0.9);
    color: white;

}
.overlay{
    padding-top: 80px  ;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: 500ms;
    text-align: center;

    *{
        margin-bottom: 30px;
    }
    
}
.logo{
    width: 50px;
    
    

    
}
</style>