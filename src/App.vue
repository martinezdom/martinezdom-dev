<script>
import { mapActions } from 'pinia';
import { useDataStore } from './stores/store';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        NavBar,
        Footer,
    },
    methods: {
        ...mapActions(useDataStore, ['']),
    },
    mounted() {
    }
}
</script>

<template>
    <div class="container">
        <NavBar />
        <RouterView />
        <Footer />
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>