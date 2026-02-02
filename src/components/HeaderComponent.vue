<script setup>
  let name = 'Our website'
  let links = ['Home','About','services','Contact']
</script>

<template>
    <header 
    style="
    background-color: wheat;
    color: black;
    padding: 1px;
    text-align: center;
    font-family: Arial, sans-serif;
    ">
        <h1>{{ name }}</h1>
        <nav style="background-color: #8d5d5d; padding: 10px;">
            <a v-for="link in links" :key="link" href="#" style="color: white; text-decoration: none; margin-right: 150px;">
                {{ link }}
            </a>
        </nav>
    </header>
</template>

<style scoped>

</style>