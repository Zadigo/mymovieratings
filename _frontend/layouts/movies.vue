<template>
  <section id="site">
    <header ref="headerEl" id="header" class="p-10 md:p-20 h-[60vh] text-white relative" style="background-image: url('/img1.jpg');">
      <div class="overlay" />
      
      <div id="infos" class="relative z-10">
        <h1 class="mt-10 md:mt-0 text-5xl font-bold uppercase z-20">
          My Movie name
        </h1>
    
        <div class="inline-flex gap-3 place-items-center items-center mt-3">
          <p class="text-2xl">(2025)</p>

          <div id="stars">
            <Icon v-for="i in 5" :key="5" name="fa-solid:star" />
          </div>
        </div>
      </div>
    </header>

    <slot />
  </section>
</template>

<script setup lang="ts">
const headerEl = ref<HTMLElement>()

onMounted(() => {
  if (headerEl.value) {
    headerEl.value.style.backgroundPositionY = '-1000px'
  }
})
</script>

<style lang="scss" scoped>
#header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
}

#header > #info {
  position: relative;
  z-index: 2;
}
</style>
