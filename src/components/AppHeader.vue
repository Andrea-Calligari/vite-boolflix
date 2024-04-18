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
    <header class="header_page">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between ">
                <div class="col-6">
                    <h1>Boolflix</h1>
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
    background-color: rgb(14, 119, 204);

    h1 {
        font-size: 60px;
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
