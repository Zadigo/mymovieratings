<template>
  <section id="reviews" class="px-20 my-10">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6 col-start-2">
        <!-- Filters -->
        <div class="flex justify-between gap-2 pb-5">
          <div id="actions-left">
            <VoltButton>
              <Icon name="fa-solid:eye" />
              Show
            </VoltButton>
          </div>
          
          <div id="actions-right" class="flex justify-between gap-2">
            <VoltButton>
              <Icon name="fa-solid:sort" />
              Sort
            </VoltButton>

            <VoltButton>
              <Icon name="fa-solid:filter" />
              Filter
            </VoltButton>
          </div>
        </div>

        <!-- Reviews -->
        <VoltCard v-for="i in 30" :key="i" class="shadow-sm shadow-gray-300 mb-3">
          <template #content>
            <div class="flex gap-5 items-center place-items-center mb-2">
              <div class="inline-flex gap-2 items-center">
                <Icon name="fa-solid:star" class="bg-yellow-300" />
                <span>5 / 10</span>
              </div>
              
              <h3 class="text-2xl font-semibold">
                I am a big fan of this and that
              </h3>
            </div>
          
            <div class="flex place-items-center justify-between">
              <div class="flex gap-2 my-4 ms-5">
                <NuxtImg src="avatar1.png" width="50" height="50" class="rounded-full" />
                <div class="flex flex-col">
                  <p class="font-semibold">Julie Parvis (2 205 reviews)</p>
                  <div class="font-light">
                    <span>Expert - Writer</span>
                  </div>
                </div>
              </div>

              <VoltButton size="30">
                <Icon name="fa-solid:plus" />
                Follow
              </VoltButton>
            </div>

            <p class="font-light mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perspiciatis ullam minus mollitia iusto, temporibus ut corporis dignissimos 
              assumenda excepturi, aperiam illo quasi vero pariatur, accusamus officiis 
              dolores magni placeat recusandae?
            </p>
          

            <div id="helpful" class="flex gap-2 mt-5">
              <VoltButton>
                <Icon name="fa-regular:thumbs-up" /> 100
              </VoltButton>

              <VoltButton>
                <Icon name="fa-regular:thumbs-down" /> 30
              </VoltButton>
            </div>
          </template>
        </VoltCard>
      </div>

      <div class="col-span-4">
        <VoltCard class="shadow-none">
          <template #content>
            <NuxtLink to="/" class="text-2xl font-bold flex place-items-center gap-3">
              Explore
              <Icon name="fa-solid:link" size="15" />
            </NuxtLink>

            <VoltCard class="shadow-none">
              <template #content>
                <div class="grid grid-cols-2 grid-rows-1 gap-2">
                  <div id="other-movies" v-for="i in 4" :key="i">
                    <NuxtLink to="/movies/1">
                      <NuxtImg src="img1.jpg" class="rounded-md" />
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </VoltCard>
          </template>
        </VoltCard>

        <VoltCard class="shadow-none">
          <template #content>
            <NuxtLink to="/" class="text-2xl font-bold flex place-items-center gap-3">
              Lists
              <Icon name="fa-solid:link" size="15" />
            </NuxtLink>

            <VoltCard class="shadow-none">
              <template #content>
                <div class="grid grid-cols-1 grid-rows-4 gap-2">
                  <div id="other-movies" v-for="i in 4" :key="i">
                    <NuxtLink to="/lists/1">
                      <VoltCard>
                        <template #content>
                          <h5>List name</h5>
                        </template>
                      </VoltCard>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </VoltCard>
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
</script>
