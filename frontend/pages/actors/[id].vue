<template>
  <section id="actor" class="px-20">
    <div class="grid grid-cols-12 gap-5 my-10">
      <div class="col-span-6">
        <VoltCard id="images" class="shadow-none">
          <template #content>
            <div class="flex justify-between mb-4">
              <h3 class="text-3xl font-bold mb-4">Images</h3>
              <VoltButton>
                <Icon name="fa-solid:edit" />
                Edit
              </VoltButton>
            </div>

            <div class="grid grid-cols-2 grid-rows-1 gap-2">
              <NuxtImg v-for="i in 4" :key="i" src="mia.jpg" class="rounded-md" />
            </div>
          </template>
        </VoltCard>

        <VoltCard id="movies">
          <template #content>
            <div class="flex justify-between mb-4">
              <h3 class="text-3xl font-bold mb-4">Movies</h3>
              <VoltButton>
                <Icon name="fa-solid:edit" />
                Edit
              </VoltButton>
            </div>

            <div class="">
              <div v-for="i in 10" :key="i" class="p-4">
                <h5 class="mb-3"><NuxtLink :to="`/movies/${i}`">Some movie title (2005)</NuxtLink></h5>
                <p><Icon name="fa-solid:star" /> 5/10</p>
                <VoltDivider />
              </div>
            </div>
          </template>
        </VoltCard>
      </div>

      <aside class="col-span-6">
        <VoltCard>
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Beatae non, est eum velit aspernatur qui excepturi sint amet dolorem quam 
            nostrum officiis tempore aperiam, perferendis nemo repudiandae ex vero rerum?
          </template>
        </VoltCard>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'actors'
})
</script>
