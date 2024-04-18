<script>
import { store } from '../store';

export default {
    data() {
        return {
            store

        }
    }
}

</script>

<template>
    <header class="header_page ">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between ">
                <div class="col-6">
                    <h1 >Boolflix</h1>
                </div>
                <div class="col-6">
                    <input @keyup.enter="$emit('search')" v-model="store.inputSearch" type="text">
                    <input @click="$emit('search')" type="submit" value="Cerca">
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header_page {
    padding: 16px ;
    background: rgb(230,0,0);
background: radial-gradient(circle, rgba(230,0,0,0.742734593837535) 30%, rgba(13,13,13,0.8599089293920693) 100%);

    h1 {
        font-size: 60px;
        color: white;
    }
}

.d-flex {
    justify-content: space-between;
    align-items: center;
}

input[type="text"] {
    width: 80%;
}


</style>
