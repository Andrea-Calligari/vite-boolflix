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
            return Math.round(n);
        },
         getEmptyStars(n){
             return (5 - n)
         },
         getFlagPath(language) {
            if(language === 'it'){
                return '../public/italia.png';
            }else if(language === 'en'){
                return '/england.webp';

            }else if(language === 'es'){
                return '/esp.png';

            }
         }
    }

}

</script>




<template>
    <li class="col-4 p-3 ">
        <div class="container">
            <div class="position-relative">
                <img  :src="`//image.tmdb.org/t/p/w300/${item.image}`" alt="">
                <div class="overlay">
                    <h1 class="fs-4">Titolo:  {{ item.name }}</h1>
                    <h1 class="fs-4">Titolo Originale:  {{ item.title }}</h1> 
                    <div class="fs-3 position-relative" >
                        <img class="logo " :src="getFlagPath(item.language)" alt=""> 
                    </div>
                    <div class="d-inline text-warning" v-for="i in getFullStars(item.rating)"><i class="fa-solid fa-star"></i></div>
                    <div class="d-inline "  v-for="star in getEmptyStars(item.rating)"><i class="fa-regular fa-star"></i></div>  
    
                </div>
            </div>

        </div>
    </li>
</template>




<style scoped lang="scss">
.overlay:hover{
    opacity: 1;
    background-color: rgba(59, 57, 57, 0.9);
    color: white;

}
.overlay{
    padding: 80px  ;
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