<script>
import { mapActions } from 'pinia';
import { useDataStore } from './stores/store';
export default {
  components: {
  },
  methods: {
    ...mapActions(useDataStore, ['']),
  },
  mounted() {
  }
}
</script>

<template>
  <RouterView />
</template>


<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>