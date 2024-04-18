<script>
import { store } from '../store';
import AppSearchBar from './AppSearchBar.vue';

export default {
    data() {
        return {
            store

        }
    },
    components:{
        AppSearchBar,
    }
}

</script>

<template>
    <AppSearchBar/>
</template>

<style scoped lang="scss">
</style>
