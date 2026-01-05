<template>
  <section id="site">
    <!-- Header -->
    <client-only>
      <use-mouse v-slot="{ x, y }">
        <header id="header" ref="headerEl" class="p-10 md:p-20 h-[60vh] text-primary-50 relative bg-no-repeat bg-cover bg-center overflow-hidden transition-all ease-in-out" :style="{ backgroundImage: 'url(/img1.jpg)' }">
          <div class="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/50 via-black/30 to-black/10" />
          
          <div id="infos" class="relative z-10">
            <h1 class="mt-10 md:mt-0 text-7xl font-bold uppercase z-20">
              My Movie name {{ x }} {{ y }}
            </h1>
        
            <div class="inline-flex gap-3 place-items-center items-center mt-3">
              <p class="text-2xl">(2025)</p>
    
              <div id="stars">
                <icon v-for="i in 5" :key="i" name="fa-solid:star" />
              </div>
            </div>
            
            <div id="actions" class="mt-5 flex gap-2">
              <nuxt-button variant="solid">
                <icon name="lucide:check-circle" />
                Watched
              </nuxt-button>
    
              <nuxt-button variant="solid">
                <icon name="lucide:share" />
                Share
              </nuxt-button>
            </div>
          </div>
        </header>
      </use-mouse>
    </client-only>

    <slot />
  </section>
</template>

<script setup lang="ts">
import { UseMouse } from '@vueuse/components'

const headerEl = useTemplateRef<HTMLElement | null>('headerEl')

const isHovered = ref(false)

if (import.meta.client) {
  const _isHovered = useElementHover(headerEl)
  syncRef(isHovered, _isHovered, { immediate: true, direction: 'rtl' })
}

function backgroundPositionX(x: number) {
  if (headerEl.value && isHovered.value) {
    const rect = headerEl.value.getBoundingClientRect()
    const posX = ((x - rect.left) / rect.width) * 100
    return `${posX}%`
  }
}

function backgroundPositionY(y: number) {
  if (headerEl.value && isHovered.value) {
    const rect = headerEl.value.getBoundingClientRect()
    const posY = ((y - rect.top) / rect.height) * 100
    return `${posY}%`
  }
}

/**
 * Background adjustment
 */

onMounted(() => {
  if (headerEl.value) {
    headerEl.value.style.backgroundPositionY = '-1000px'
  }
})
</script>
