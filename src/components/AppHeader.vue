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
        <div class="title d-flex align-items-center justify-content-between">
            <div class="col-6">
                <h1>Boolflix</h1>
            </div>
            <div class="col-6">
                <input @keyup.enter="$emit('search')" v-model="store.inputSearch" type="text">
                <input @click="$emit('search')" type="submit" value="Cerca">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">

.header_page {
    padding: 32px;
    background-color: rgb(14, 119, 204);

}

input[type="text"] {
    width: 80%;
}
</style>
