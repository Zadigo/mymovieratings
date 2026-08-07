<template>
  <section id="google">
    <go-testing />
    
    <span>{{ talent }}</span>
  </section>
</template>

<script setup lang="ts">
const { talent } = useForTesting()
</script>
