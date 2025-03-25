<script>
import { mapActions } from 'pinia';
import { useDataStore } from './stores/store';
import Header from './components/Header.vue';
export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(useDataStore, ['']),
  },
  mounted() {
  }
}
</script>

<template>
  <Header />
  <RouterView />
</template>


<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>