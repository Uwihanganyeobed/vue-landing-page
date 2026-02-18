<script setup>


</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/shop">Shop</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>

  </nav>
  

</template>

<style scoped>
nav{
  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
}
a{
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
}
</style>
