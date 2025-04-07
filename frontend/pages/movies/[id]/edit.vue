<template>
  <section id="edit" class="px-20 my-20">
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-6">
        <TailCard class="shadow-md border-none">
          <TailCardHeader>
            <TailCardTitle>
              Movie information
            </TailCardTitle>
          </TailCardHeader>
        
          <TailCardContent>
            <form class="flex flex-col gap-2" @submit.prevent>
              <div class="flex gap-2">
                <TailInput v-model="requestData.title" class="w-full" placeholder="Title" />
                <TailInput v-model="requestData.title" class="w-full" placeholder="Release year" />
              </div>

              <div class="flex gap-2">
                <VoltInputMask v-model="requestData.duration" mask="99:99" class="w-2/5" />
                <VoltAutoComplete v-model="requestData.title" :suggestions="categoryTypes" class="w-full" placeholder="Type" @complete="search" />
              </div>

              <TailTextarea v-model="requestData.title" rows="5" cols="30" class="w-full resize-none" placeholder="Storyline" />
            </form>
          </TailCardContent>
        </TailCard>

        <TailCard class="shadow-md border-none mt-2">
          <TailCardHeader>
            <TailCardTitle>
              Cast
            </TailCardTitle>
          </TailCardHeader>
          
          <TailCardContent>
            <form @submit.prevent>
              <TailInput v-model="requestData.title" class="w-full" placeholder="Director" />

              <div class="py-5">
                <p class="font-normal">Actors</p>
                <div class="flex gap-2">
                  <TailInput v-model="requestData.title" class="w-full" placeholder="Actor" />
                  <TailButton variant="outline">
                    <Icon name="fa-solid:plus" />
                  </TailButton>
                  <TailButton variant="outline">
                    <Icon name="fa-solid:minus" />
                  </TailButton>
                </div>
              </div>
            </form>
          </TailCardContent>
        </TailCard>
      </div>

      <div class="col-span-6">
        <TailCard class="shadow-md border-none">
          <TailCardHeader>
            <TailCardTitle>
              Images
            </TailCardTitle>
          </TailCardHeader>
        </TailCard>
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
