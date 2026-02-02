<script setup>
let head= "Welcome to Our Platform"
let description = "Our group works very hard to create applications that are easy to use and do what people need. We make sure they are simple, clear, and useful for everyone."
</script>

<template>
  <div class="hero">
    <h2>{{ head }}</h2>
    <p>{{ description }}</p>
    <button>Get Started</button>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 10px 450px;
  background-color: rgb(254, 237, 205);
}

.hero button {
  padding: 20px 50px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 20px;
}

.hero button:hover {
  background-color: #8e5959;
}
</style>
