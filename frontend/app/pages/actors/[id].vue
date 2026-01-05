<template>
  <section id="actor" class="px-20">
    <div class="grid grid-cols-12 gap-5 my-10">
      <div class="col-span-6">
        <nuxt-card id="images" class="shadow-md border-none mb-2">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-3xl font-bold mb-4">Images</h3>
            <nuxt-button variant="outline">
              <icon name="fa-solid:edit" />
              Edit
            </nuxt-button>
          </div>

          <div class="grid grid-cols-2 grid-rows-1 gap-2">
            <div v-for="i in 4" :key="i" class="overflow-hidden rounded-md">
              <nuxt-img src="mia.jpg" class="rounded-md transition-all duration-75 hover:scale-105" />
            </div>
          </div>
        </nuxt-card>

        <nuxt-card id="movies" class="shadow-md border-none">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-3xl font-bold mb-4">Movies</h3>
            <nuxt-button variant="outline">
              <icon name="fa-solid:edit" />
              Edit
            </nuxt-button>
          </div>

          <div class="">
            <nuxt-timeline :items="moviesTimeline">
              <template #title="{ item }">
                <nuxt-link :to="`/movies/${item.slug}`">
                  {{ item.title }}
                </nuxt-link>
              </template>
            </nuxt-timeline>
          </div>
        </nuxt-card>
      </div>

      <aside class="col-span-6">
        <nuxt-card class="shadow-md border-none">
          Mia Goth is an American actress known for her roles in horror films such as "X" and "Pearl." 
          She has gained recognition for her unique style and captivating performances, making her a rising star 
          in the film industry.
        </nuxt-card>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import type { Arrayable } from '~/types';

const moviesTimeline: Arrayable<TimelineItem> = [
  {
    date: '2024-06-01',
    title: 'X',
    description: '',
    slug: 'x',
    icon: 'i-lucide-film'
  },
  {
    date: '2023-10-15',
    title: 'Pearl',
    description: '',
    slug: 'pearl',
    icon: 'i-lucide-film'
  },
  {
    date: '2022-09-14',
    title: 'Emma',
    description: '',
    slug: 'emma',
    icon: 'i-lucide-film'
  },
  {
    date: '2019-10-11',
    title: 'Suspiria',
    description: '',
    slug: 'suspiria',
    icon: 'i-lucide-film'
  },
  {
    date: '2018-09-07',
    title: 'The Dark Side of the Moon',
    description: '',
    slug: 'the-dark-side-of-the-moon',
    icon: 'i-lucide-film'
  }
]

definePageMeta({
  layout: 'actors'
})
</script>
