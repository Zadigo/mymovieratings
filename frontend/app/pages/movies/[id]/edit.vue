<template>
  <section id="edit" class="px-20 my-20">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-6">
        <nuxt-card class="shadow-md border-none">
          <template #header>
            Movie information
          </template>
        
          <form class="flex flex-col gap-2" @submit.prevent>
            <div class="flex gap-2">
              <nuxt-input v-model="requestData.title" class="w-full" placeholder="Title" />
              <nuxt-input v-model="requestData.title" class="w-full" placeholder="Release year" />
            </div>

            <div class="flex gap-2">
              <nuxt-input-mask v-model="requestData.duration" mask="99:99" class="w-2/5" />
              <nuxt-auto-complete v-model="requestData.title" :suggestions="categoryTypes" class="w-full" placeholder="Type" @complete="search" />
            </div>

            <nuxt-textarea v-model="requestData.title" :rows="5" cols="30" class="w-full resize-none" placeholder="Storyline" />
          </form>
        </nuxt-card>

        <nuxt-card class="shadow-md border-none mt-2">
          <template #header>
            Cast
          </template>
          
          <form @submit.prevent>
            <nuxt-input v-model="requestData.title" class="w-full" placeholder="Director" />

            <div class="py-5">
              <p class="font-normal">Actors</p>
              <div class="flex gap-2">
                <nuxt-input v-model="requestData.title" class="w-full" placeholder="Actor" />

                <nuxt-button variant="outline">
                  <icon name="fa-solid:plus" />
                </nuxt-button>
                
                <nuxt-button variant="outline">
                  <icon name="fa-solid:minus" />
                </nuxt-button>
              </div>
            </div>
          </form>
        </nuxt-card>
      </div>

      <div class="col-span-6">
        <nuxt-card id="images" class="shadow-md border-none">
          <template #header>
            Images
          </template>

          <div class="flex flex-col gap-5">
            <nuxt-file-upload label="Poster" class="w-full" />
            <nuxt-file-upload label="Background image" class="w-full" />
          </div>
        </nuxt-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const requestData = ref({
  title: null,
  duration: '00:00:00'
})

const categoryTypes = ref([])

function search(event: Event) {
  return [...Array(10).keys()].map((item) => event.query + '-' + item)
}
</script>
