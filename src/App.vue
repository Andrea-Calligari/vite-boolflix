<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from '../src/store';



export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppContent
  }
}

 
</script>

<template>
  <div class="bg">

    <AppHeader @search="this.store.SearchingContents()" />
    <AppContent />

  </div>

</template>

<style lang="scss">
@use './style/partials/reset';
@use 'bootstrap';

body {
  background: rgba(253, 195, 45, 0.954)
}
</style>