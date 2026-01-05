<template>
  <section id="actors" clas="mt-17">
    <!-- Header -->
    <header id="header" ref="headerEl" role="heading" class="relative p-20 text-primary-50 h-auto bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(/mia.jpg)` }">
      <!-- Overlay -->
      <div class="absolute top-0 left-0 w-full h-full backdrop-blur-lg bg-black/50 z-10" />

      <!-- Infos -->
      <div class="flex place-items-center gap-10 relative z-20">
        <nuxt-img src="mia.jpg" class="rounded-xl grayscale-25" />
        
        <div id="infos">
          <h1 class="text-5xl font-bold uppercase">
            Mia Goth
          </h1>

          <div class="inline-flex gap-3 place-items-center items-center mt-3">
            <p class="text-2xl">Actress . Producer . Writer</p>
            <div id="stars">
              <icon v-for="i in 5" :key="i" name="fa-solid:star" />
            </div>
          </div>
          
          <div class="w-5/6 text-2xl font-light mt-5">
            Mia Gypsy Mello da Silva Goth, was born October 25, 1993 in Southwark, London, England to a Brazilian mother and a 
            Canadian father. Aged 14, she was discovered at the Underage Festival in London by fashion photographer Gemma Booth ...
          </div>
          
          <div id="actions" class="mt-5">
            <nuxt-button class="me-2" variant="subtle" color="info">
              <icon name="fa-solid:plus" />
              Follow
            </nuxt-button>

            <nuxt-button variant="subtle" color="info">
              <icon name="fa-solid:plus" />
              Add to a list
            </nuxt-button>
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
    headerEl.value.style.backgroundPositionY = '-300px'
  }
})
</script>

<!-- <style lang="scss" scoped>
#header {
  background-image: url('/mia.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

#header > div.flex {
  position: relative;
  z-index: 2;
}
</style> -->
