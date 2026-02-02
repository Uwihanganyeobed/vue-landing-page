<script setup>
let features = [
  { title: "Hardworking", paragraph: "Our team always gives its best effort." },
  { title: "Creative", paragraph: "We bring innovative ideas to every project." },
  { title: "Reliable", paragraph: "You can count on us to submit quality work" }
]
</script>

<template>
  <div class="features">
    <div class="feature" v-for="feature in features" :key="feature.title">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.paragraph }}</p>
    </div>
  </div>
</template>

<style scoped>
.features {
  display: flex;
  justify-content: space-around;
  padding: 50px 90px;
  background-color: rgb(169, 152, 120);
}

.feature {
  text-align: center;
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  background-color: white;
}
</style>
