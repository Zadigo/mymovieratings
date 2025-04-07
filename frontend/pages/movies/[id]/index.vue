<template>
  <section id="movie" class="px-1 my-5 md:px-20 md:my-10">
    <div class="grid grid-cols-1 md:grid-cols-12 md:gap-2">
      <div id="image" class="col-span-4">
        <VoltCard id="image" class="shadow-sm shadow-gray-200">
          <template #content>
            <NuxtImg src="/img1.jpg" />
          </template>
        </VoltCard>

        <VoltCard id="keywords" class="shadow-sm shadow-gray-200 my-2">
          <template #content>
            <h3 class="font-semibold text-1xl">Keywords</h3>

            <div class="flex justify-end mb-3">
              <VoltButton>
                <Icon name="fa-solid:edit" />
                Edit
              </VoltButton>
            </div>

            <VoltDivider />

            <div class="flex justify-start flex-wrap gap-2">
              <VoltButton v-for="i in 10" :key="i">
                Keyword {{ i }}
              </VoltButton>
            </div>
          </template>
        </VoltCard>

        <VoltCard id="genres" class="shadow-sm shadow-gray-200">
          <template #content>
            <h3 class="font-semibold text-1xl">Genres</h3>

            <div class="flex justify-end mb-3">
              <VoltButton>
                <Icon name="fa-solid:edit" />
                Edit
              </VoltButton>
            </div>

            <VoltDivider />

            <div class="flex justify-start flex-wrap gap-2">
              <VoltButton v-for="i in 3" :key="i">
                Genres {{ i }}
              </VoltButton>
            </div>
          </template>
        </VoltCard>
      </div>

      <div id="infos" class="order-first md:order-none col-span-8">
        <VoltCard id="quick-information" class="shadow-sm shadow-gray-200">
          <template #content>
            <h1 class="font-bold text-3xl uppercase">My Movie Name <span class="font-semibold">(2024)</span></h1>

            <div class="inline-flex gap-4 my-2">
              <div id="rated">R</div>
              <div id="duration">1h 24min</div>
              <div id="genre"><NuxtLink to="/" class="text-blue-500 underline">Action</NuxtLink>, Comedy</div>
              <div id="release">03 Apr 2024 (France)</div>
              <div id="type">Movie</div>
            </div>

            <div id="ratings" class="flex gap-5">
              <div id="imdb" class="inline-flex gap-2 align-middle place-items-center">
                <Icon name="fa-solid:star" class="bg-blue-400" />
                <span>5,4</span>
                <span>(22 100)</span>
              </div>
              <VoltRating v-model="rating" :stars="10" />
              <VoltButton rounded raised>
                <Icon name="fa-solid:award" />
                Advanced Rating
              </VoltButton>
            </div>

            <RouterLink to="/movies/1/reviews" class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-3 py-2 gap-2 rounded-md font-medium focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
              <Icon name="fa-solid:comments" />
              Reviews (206)
            </RouterLink>

            <!-- <VoltButton class="mt-4">
              <Icon name="fa-solid:comments" />
              Reviews (206)
            </VoltButton> -->
            <!-- <div id="description" class="mt-5 font-light">
              Jamie regrets her breakup with her girlfriend, while Marian needs to relax. 
              In search of a fresh start, they embark on an unexpected road trip to Tallahassee. Things quickly 
              go awry when they cross paths with a group of inept criminals.
            </div> -->
          </template>
        </VoltCard>

        <VoltCard id="description" class="shadow-sm shadow-gray-200">
          <template #content>
            <h4 class="font-semibold">Storyline</h4>
            <div id="description" class="font-light">
              Jamie regrets her breakup with her girlfriend, while Marian needs to relax.
              In search of a fresh start, they embark on an unexpected road trip to
              Tallahassee. Things quickly go awry when they cross paths with a group of
              inept criminals.
            </div>
          </template>
        </VoltCard>

        <VoltCard id="cast" class="shadow-sm shadow-gray-200">
          <template #content>
            <div class="flex justify-end mb-3">
              <VoltButton>
                <Icon name="fa-solid:edit" />
                Edit
              </VoltButton>
            </div>
            
            <VoltAccordion value="0">
              <VoltAccordionPanel v-for="i in 25" :key="i" :value="i">
                <VoltAccordionHeader><span>Margaret Qualley <span class="font-light">(Jamie)</span></span></VoltAccordionHeader>
                <VoltAccordionContent>
                  <div class="flex place-items-start gap-2">
                    <NuxtImg src="img1.jpg" width="80" class="rounded-md" />

                    <div class="flex flex-col">
                      <div id="socials" class="inline-flex gap-2 mb-3">
                        <VoltButton>
                          <Icon name="fa-brands:facebook" />
                        </VoltButton>

                        <VoltButton>
                          <Icon name="fa-brands:instagram" />
                        </VoltButton>
                        
                        <VoltButton>
                          <Icon name="fa-brands:tiktok" />
                        </VoltButton>

                        <VoltButton>
                          <Icon name="fa-solid:external-link-alt" />
                        </VoltButton>
                      </div>

                      <div id="actions" class="inline-flex gap-2">
                        <VoltButton>
                          <Icon name="fa-solid:plus" />
                          Follow
                        </VoltButton>
                        
                        <RouterLink to="/actors/1" class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-3 py-2 gap-2 rounded-md font-medium focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary">
                          <Icon name="fa-solid:user" />
                          Page
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </VoltAccordionContent>
              </VoltAccordionPanel>
            </VoltAccordion>
          </template>
        </VoltCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'movies'
})

useHead({
  title: "Movie Name"
})

const rating = ref(0)
</script>
