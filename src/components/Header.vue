<script>
export default {

}
</script>

<template>
    <header>
        <a href="#"><img src="#" alt="Logo"></a>
        <nav>
            <ul>
                <li><router-link :to="{name: 'home'}">Inicio</router-link></li>
                <li><router-link :to="{name: 'experience'}">Experiencia</router-link></li>
                <li><router-link :to="{name: 'studies'}">Estudios</router-link></li>
                <li><router-link :to="{name: 'contact'}">Contacto</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
</style>