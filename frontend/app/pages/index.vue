<template>
  <section id="home" class=" px-10 mt-5">
    <nuxt-card>
      Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Eos quae et corrupti! Natus facilis 
      ad numquam quo necessitatibus praesentium labore, incidunt, 
      quibusdam omnis, consequuntur corporis dolores. Provident fuga vel illo!
      <nuxt-button to="/movies/my-movie">
        Movies
      </nuxt-button>
    </nuxt-card>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Home Page'
})
</script>
