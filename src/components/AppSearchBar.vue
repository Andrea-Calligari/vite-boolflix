<script>
import { store } from '../store'

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
            <div class="row align-items-center ">
                <div class="col-6">
                    <h1> Boolflix &#128039;</h1>
                </div>
                <div class="col-6 d-flex gap-2 ">
                    <input class="form-control mr-sm-2" @keyup.enter="$emit('search')" v-model.trim="store.inputSearch"
                        type="text" placeholder="Cerca un Film o una Serie Tv...">
                    <button :class="store.inputSearch.length === 0 ? 'disabled' : ''"  class="btn btn-outline-danger " @click="$emit('search')" type="button"
                        value="Cerca">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped lang="scss">
.header_page {
    width: 100vw;
    padding: 16px;
    background: rgb(195, 117, 34);
    background: linear-gradient(180deg, rgba(195, 117, 34, 1) 0%, rgba(253, 195, 45, 1) 100%);

    h1 {
        font-size: 60px;

    }

}

.d-flex {
    justify-content: space-between;
    align-items: center;
}

input[type="text"] {
    min-width: 80%;
    padding: 4px;
}
.disabled{
    opacity: 0.6;
    cursor: not-allowed;
}
</style>