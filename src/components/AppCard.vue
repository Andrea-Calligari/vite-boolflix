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
    methods: {
        getFullStars(n) {
            return Math.round(n);
        },
        getEmptyStars(n) {
            return (5 - n)
        },
        getFlagPath(language) {
            if (language === 'it') {
                return '/italia.png';
            } else if (language === 'en') {
                return '/england.webp';

            } else if (language === 'es') {
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
                <img v-if="item.image !== null" :src="`//image.tmdb.org/t/p/w300/${item.image}`" alt="">
                <img v-else
                    src="https://th.bing.com/th/id/R.4496e4e335a14615f8973ab5134b4bbd?rik=HiCikuHSYtJlBw&riu=http%3a%2f%2fskribi.it%2fwp-content%2fuploads%2f2016%2f12%2fpuntointerrogativo.jpg&ehk=SODumYdSTgIOFphyKtHtZNCsA2GADuNZAoJIbgho9kM%3d&risl=&pid=ImgRaw&r=0"
                    alt="">
                <ul class="overlay">
                    <li class="fs-4">
                        <h3>Titolo: {{ item.name }}</h3>
                    </li>
                    <li class="fs-4">
                        <h3>Titolo Originale: {{ item.title }}</h3>
                    </li>
                    <li class="fs-3 position-relative">
                        <img class="logo " :src="getFlagPath(item.language)" alt="">
                    </li>
                    <li v-if="item.backdrop !== null">
                        <figure>
                            <figcaption>Retro-copertina:</figcaption>
                            <img v-if="item.backdrop !== null" :src="`//image.tmdb.org/t/p/w400/${item.backdrop}`"
                                alt="">

                        </figure>
                    </li>
                    <li><span>Voto:</span></li>
                    <li class="d-inline text-warning" v-for="i in getFullStars(item.rating)"><i
                            class="fa-solid fa-star"></i></li>
                    <li class="d-inline " v-for="star in getEmptyStars(item.rating)"><i class="fa-regular fa-star"></i>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>




<style scoped lang="scss">
.overlay:hover {
    transform: rotateZ(360deg);
    opacity: 1;
    background-color: rgba(88, 88, 88, 0.954);
    color: white;
    border: 2px solid rgba(255, 61, 61, 0.959);
    // box-shadow: 50px 50px rgb(214, 82, 6);


}

.overlay {
    padding: 40px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: 800ms;
    text-align: center;

    * {
        margin-bottom: 18px;
    }

}

.logo {
    width: 50px;
}
</style>