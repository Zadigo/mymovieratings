<template>
  <section id="movie" class="px-1 my-5 md:px-20 md:my-10">
    <div class="grid grid-cols-1 md:grid-cols-12 md:gap-2">
      <div id="image" class="col-span-4">
        <nuxt-card id="image" class="shadow-md border-none">
          <nuxt-img src="/img1.jpg" class="aspect-square object-cover rounded-md" />
        </nuxt-card>

        <nuxt-card id="keywords" class="shadow-md border-none my-2">
          <div class="flex justify-between">
            <h3 class="font-semibold text-1xl">Keywords</h3>

            <div class="flex justify-end mb-3">
              <nuxt-button variant="outline">
                <icon name="fa-solid:edit" />
                Edit
              </nuxt-button>
            </div>
          </div>
          
          <volt-divider />

          <div class="flex justify-start flex-wrap gap-2">
            <nuxt-button v-for="i in 10" :key="i" variant="soft" color="neutral">
              Keyword {{ i }}
            </nuxt-button>
          </div>
        </nuxt-card>

        <nuxt-card id="genres" class="shadow-md border-none">
          <div class="flex justify-between">
            <h3 class="font-semibold text-1xl">Genres</h3>

            <div class="flex justify-end mb-3">
              <nuxt-button variant="outline">
                <icon name="fa-solid:edit" />
                Edit
              </nuxt-button>
            </div>
          </div>

          <volt-divider />

          <div class="flex justify-start flex-wrap gap-2">
            <nuxt-button v-for="i in 3" :key="i" variant="soft" color="neutral">
              Genres {{ i }}
            </nuxt-button>
          </div>
        </nuxt-card>
      </div>

      <div id="infos" class="order-first md:order-0 col-span-8">
        <nuxt-card id="quick-information" class="shadow-md border-none mb-2">
          <h1 class="font-bold text-3xl uppercase">My Movie Name <span class="font-semibold">(2024)</span></h1>
          <nuxt-skeleton class="h-5 rounded-full w-2/6" />

          <div class="inline-flex gap-4 my-2">
            <nuxt-badge id="rated" color="neutral">R</nuxt-badge>
            <div id="duration">1h 24min</div>
            <div id="genre"><nuxt-link to="/" class="text-primary-500 underline">Action</nuxt-link>, Comedy</div>
            <div id="release">03 Apr 2024 (France)</div>
            <nuxt-badge id="type" color="info">Movie</nuxt-badge>
          </div>

          <div id="ratings" class="flex gap-5">
            <div id="imdb" class="inline-flex gap-2 align-middle place-items-center">
              <icon name="fa-solid:star" class="bg-primary-400" />
              <span>5,4</span>
              <span>(22 100)</span>
            </div>
            
            <nuxt-rating v-model="rating" :stars="10" />

            <nuxt-button size="sm" @click="showAdvancedRating=true">
              <icon name="fa-solid:award" />
              Advanced Rating
            </nuxt-button>
          </div>

          <nuxt-button to="/movies/1/reviews" class="mt-3" variant="soft" color="info">
            <icon name="fa-solid:comments" />
            Reviews (206)
          </nuxt-button>

          <!-- <nuxt-button class="mt-4">
            <icon name="fa-solid:comments" />
            Reviews (206)
          </nuxt-button> -->
          <!-- <div id="description" class="mt-5 font-light">
            Jamie regrets her breakup with her girlfriend, while Marian needs to relax. 
            In search of a fresh start, they embark on an unexpected road trip to Tallahassee. Things quickly 
            go awry when they cross paths with a group of inept criminals.
          </div> -->
        </nuxt-card>

        <nuxt-card id="description" class="shadow-md border-none">
          <h4 class="font-semibold">Storyline</h4>
          <div id="description" class="font-light">
            Jamie regrets her breakup with her girlfriend, while Marian needs to relax.
            In search of a fresh start, they embark on an unexpected road trip to
            Tallahassee. Things quickly go awry when they cross paths with a group of
            inept criminals.
          </div>
        </nuxt-card>

        <nuxt-card id="cast" class="shadow-md border-none my-2">
          <div class="flex justify-end mb-3">
            <nuxt-button variant="outline">
              <icon name="fa-solid:edit" />
              Edit
            </nuxt-button>
          </div>
          
          <div id="actors" class="space-y-2">
            <nuxt-card v-for="i in 25" :key="i" toggleable>
              <template #header>
                <div class="flex items-center gap-2 py-4">
                  <nuxt-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                  <nuxt-link to="/actors/1" class="font-bold underline">Amy Elsner</nuxt-link>
                </div>
              </template>

              <nuxt-button icon="pi pi-cog" severity="secondary" variant="link" rounded />
              
              <div id="socials" class="inline-flex gap-2 mb-3">
                <nuxt-button variant="soft" color="secondary">
                  <icon name="fa-brands:facebook" />
                </nuxt-button>

                <nuxt-button variant="soft" color="secondary">
                  <icon name="fa-brands:instagram" />
                </nuxt-button>
                
                <nuxt-button variant="soft" color="secondary">
                  <icon name="fa-brands:tiktok" />
                </nuxt-button>

                <nuxt-button variant="soft" color="secondary">
                  <icon name="fa-solid:external-link-alt" />
                </nuxt-button>
              </div>
            </nuxt-card>
          </div>
        </nuxt-card>
      </div>
    </div>

    <!-- Modals -->
    <client-only>
      <nuxt-modal v-model:open="showAdvancedRating">
        <template #body>
          {{ scoringTotal }}  
          <div class="flex flex-col gap-3">
            <div v-for="item in advancedRating" :key="item.field" class="inline-flex gap-2 items-center place-items-center">
              {{ item.text }}
              <base-rating v-model="requestData[item.field]" :max-stars="10" />
            </div>
          </div>
        </template>
      </nuxt-modal>
    </client-only>
  </section>
</template>

<script setup lang="ts">
import { useRound, useSum } from '@vueuse/math'
import { advancedRating } from '~/data'

definePageMeta({
  layout: 'movies'
})

useHead({
  title: "Movie Name"
})

const rating = ref(0)
const showAdvancedRating = ref<boolean>(false)

const requestData = reactive(
  Object.fromEntries(
    advancedRating.map(({ field }) => [ field, 0 ])
  )
)

const scoringTotal = computed(() => {
  const values = Object.values(requestData)
  const count = values.length
  const summedValues = useSum(values).value
  return useRound((summedValues / count)).value
})
</script>
