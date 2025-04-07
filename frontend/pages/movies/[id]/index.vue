<template>
  <section id="movie" class="px-1 my-5 md:px-20 md:my-10">
    <div class="grid grid-cols-1 md:grid-cols-12 md:gap-2">
      <div id="image" class="col-span-4">
        <TailCard id="image" class="shadow-md border-none">
          <TailCardContent>
            <NuxtImg src="/img1.jpg" />
          </TailCardContent>
        </TailCard>

        <TailCard id="keywords" class="shadow-md border-none my-2">
          <TailCardContent>
            <div class="flex justify-between">
              <h3 class="font-semibold text-1xl">Keywords</h3>

              <div class="flex justify-end mb-3">
                <TailButton variant="outline">
                  <Icon name="fa-solid:edit" />
                  Edit
                </TailButton>
              </div>
            </div>

            <VoltDivider />

            <div class="flex justify-start flex-wrap gap-2">
              <TailButton v-for="i in 10" :key="i">
                Keyword {{ i }}
              </TailButton>
            </div>
          </TailCardContent>
        </TailCard>

        <TailCard id="genres" class="shadow-md border-none">
          <TailCardContent>
            <div class="flex justify-between">
              <h3 class="font-semibold text-1xl">Keywords</h3>

              <div class="flex justify-end mb-3">
                <TailButton variant="outline">
                  <Icon name="fa-solid:edit" />
                  Edit
                </TailButton>
              </div>
            </div>

            <VoltDivider />

            <div class="flex justify-start flex-wrap gap-2">
              <TailButton v-for="i in 3" :key="i" severity="info">
                Genres {{ i }}
              </TailButton>
            </div>
          </TailCardContent>
        </TailCard>
      </div>

      <div id="infos" class="order-first md:order-none col-span-8">
        <TailCard id="quick-information" class="shadow-md border-none my-2">
          <TailCardContent>
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

              <TailButton rounded raised>
                <Icon name="fa-solid:award" />
                Advanced Rating
              </TailButton>
            </div>

            <TailButton to="/movies/1/reviews" variant="outline">
              <Icon name="fa-solid:comments" />
              Reviews (206)
            </TailButton>

            <!-- <TailButton class="mt-4">
              <Icon name="fa-solid:comments" />
              Reviews (206)
            </TailButton> -->
            <!-- <div id="description" class="mt-5 font-light">
              Jamie regrets her breakup with her girlfriend, while Marian needs to relax. 
              In search of a fresh start, they embark on an unexpected road trip to Tallahassee. Things quickly 
              go awry when they cross paths with a group of inept criminals.
            </div> -->
          </TailCardContent>
        </TailCard>

        <TailCard id="description" class="shadow-md border-none">
          <TailCardContent>
            <h4 class="font-semibold">Storyline</h4>
            <div id="description" class="font-light">
              Jamie regrets her breakup with her girlfriend, while Marian needs to relax.
              In search of a fresh start, they embark on an unexpected road trip to
              Tallahassee. Things quickly go awry when they cross paths with a group of
              inept criminals.
            </div>
          </TailCardContent>
        </TailCard>

        <TailCard id="cast" class="shadow-md border-none my-2">
          <TailCardContent>
            <div class="flex justify-end mb-3">
              <TailButton variant="outline">
                <Icon name="fa-solid:edit" />
                Edit
              </TailButton>
            </div>
            
            <div id="actors">
              <VoltPanel v-for="i in 25" :key="i" toggleable>
                <template #header>
                  <div class="flex items-center gap-2 py-4">
                    <VoltAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                  </div>
                </template>

                <template #icons>
                  <VoltSecondaryButton icon="pi pi-cog" severity="secondary" variant="text" rounded />
                </template>
                
                <div id="socials" class="inline-flex gap-2 mb-3">
                  <TailButton variant="secondary">
                    <Icon name="fa-brands:facebook" />
                  </TailButton>

                  <TailButton variant="secondary">
                    <Icon name="fa-brands:instagram" />
                  </TailButton>
                  
                  <TailButton variant="secondary">
                    <Icon name="fa-brands:tiktok" />
                  </TailButton>

                  <TailButton variant="secondary">
                    <Icon name="fa-solid:external-link-alt" />
                  </TailButton>
                </div>
              </VoltPanel>
            </div>
          </TailCardContent>
        </TailCard>
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
