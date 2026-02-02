<script setup>
let year = 2026
let email = ['israelnishimwe@gmail.com','uwababyeyikellia@gmail.com','iansafari@gmail.com','kezaaudrey@gmail.com','phidia@gmail.com']
</script>

<template>
  <footer class="footer">
    <p>&copy;{{ year }} Our website</p>
    <p>Contact:</p>
    <ul>
      <li v-for="mail in email" :key="mail">{{ mail }}</li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #322b2b;
  color: white;
  text-align: center;
  padding: 5px;
}
</style>
