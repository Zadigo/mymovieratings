<template>
  <section id="reviews" class="px-20 my-10">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6 col-start-2">
        <!-- Filters -->
        <div class="flex justify-between gap-2 pb-5">
          <div id="actions-left">
            <nuxt-dropdown-menu>
              <nuxt-button variant="subtle" color="info">
                <icon name="fa-solid:eye" />
                Show
              </nuxt-button>
            </nuxt-dropdown-menu>
          </div>
          
          <div id="actions-right" class="flex justify-between gap-2">
            <nuxt-dropdown-menu :items="sortOptions">
              <nuxt-button variant="subtle" color="info">
                <icon name="fa-solid:sort" />
                Sort
              </nuxt-button>
            </nuxt-dropdown-menu>

            <nuxt-button variant="subtle" color="info">
              <icon name="fa-solid:filter" />
              Filter
            </nuxt-button>
          </div>
        </div>

        <nuxt-card class="shadow-none mb-5">
          <form @submit.prevent>
            <div v-for="(itemCondition, i) in conditions" :key="i" class="flex items-start justify-around gap-2 mb-1">
              <nuxt-select :items="fieldNames" class="min-w-40" />
              <nuxt-input placeholder="Conditions" />
              <nuxt-input v-model="itemCondition.value" placeholder="Value" />

              <nuxt-button class="min-h-8" variant="subtle" color="info" @click="addCondition">
                <icon name="fa-solid:minus" />
              </nuxt-button>

              <nuxt-button class="min-h-8" variant="subtle" color="info" @click="addCondition">
                <icon name="fa-solid:plus" />
              </nuxt-button>

              <nuxt-dropdown-menu :items="operatorOptions">
                <nuxt-button variant="subtle" color="info">
                  {{ itemCondition.condition }}
                </nuxt-button>
              </nuxt-dropdown-menu>  
            </div>
          </form>
        </nuxt-card>

        <!-- Reviews -->
        <nuxt-card v-for="i in 30" :key="i" class="shadow-md border-none mb-3">
          <div class="flex gap-5 items-center place-items-center mb-2">
            <nuxt-popover placement="bottom">
              <div class="inline-flex gap-2 items-center cursor-pointer">
                <icon name="fa-solid:star" class="bg-yellow-300" />
                <span>5 / 10</span>
              </div>

              <template #content>
                <div class="p-5">
                  <div v-for="item in advancedRating" :key="item.text" class="flex justify-between">
                    <span>{{ item.text }}</span>
                    <span><icon v-for="i in 3" :key="i" name="fa-solid:star" /></span>
                  </div>
                </div>
              </template>
            </nuxt-popover>
            
            <h3 class="text-2xl font-semibold">
              I am a big fan of this and that n°{{ i }}
            </h3>
          </div>
        
          <div class="flex place-items-center justify-between">
            <div class="flex gap-2 my-4 ms-5">
              <nuxt-img src="avatar1.png" width="50" height="50" class="rounded-full" />
              <div class="flex flex-col">
                <p class="font-semibold">Julie Parvis (2 205 reviews)</p>
                <div class="font-light">
                  <span>Expert - Writer</span>
                </div>
              </div>
            </div>

            <nuxt-button :variant="isFollowed ? 'solid' : 'outline'" @click="isFollowed=!isFollowed">
              <icon name="fa-solid:plus" />
              Follow
            </nuxt-button>
          </div>

          <p class="font-light mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis ullam minus mollitia iusto, temporibus ut corporis dignissimos 
            assumenda excepturi, aperiam illo quasi vero pariatur, accusamus officiis 
            dolores magni placeat recusandae?
          </p>
        

          <div id="helpful" class="flex gap-2 mt-5">
            <nuxt-button variant="subtle" color="info" @click="isLiked=!isLiked">
              <icon v-if="isLiked" name="fa-solid:thumbs-up" />
              <icon v-else name="fa-regular:thumbs-up" /> 100
            </nuxt-button>

            <nuxt-button variant="subtle" color="info" @click="isDisliked=!isDisliked">
              <icon v-if="isDisliked" name="fa-solid:thumbs-down" />
              <icon v-else name="fa-regular:thumbs-down" /> 30
            </nuxt-button>
          </div>
        </nuxt-card>
      </div>

      <div class="col-span-4 space-y-3">
        <nuxt-card id="explore" class="shadow-none border-none">
          <TailCardContent class="px-2">
            <nuxt-link to="/" class="text-2xl font-bold flex place-items-center gap-3">
              Explore
              <icon name="fa-solid:link" size="15" />
            </nuxt-link>
          </TailCardContent>

          <TailCardContent class="px-2">
            <div class="grid grid-cols-2 grid-rows-1 gap-2">
              <article v-for="idx in 4" id="other-movies" :key="idx">
                <nuxt-link to="/movies/1">
                  <nuxt-img src="img1.jpg" class="rounded-md" />
                </nuxt-link>
              </article>
            </div>
          </TailCardContent>
        </nuxt-card>

        <nuxt-card class="shadow-none border-none">
          <nuxt-link to="/" class="text-2xl font-bold flex place-items-center gap-3">
            Lists
            <icon name="fa-solid:link" size="15" />
          </nuxt-link>

          <div class="grid grid-cols-1 grid-rows-4 gap-2">
            <div v-for="idx in 4" id="other-movies" :key="idx">
              <nuxt-link to="/lists/1">
                <nuxt-card class="border-none shadow-md">
                  <TailCardContent>
                    <h5>List name</h5>
                  </TailCardContent>
                </nuxt-card>
              </nuxt-link>
            </div>
          </div>
        </nuxt-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { advancedRating } from '~/data'
import { operatorOptions, sortOptions } from '~/data/constans'

definePageMeta({
  layout: 'movies'
})

const isLiked = ref<boolean>(false)
const isDisliked = ref<boolean>(false)
const isFollowed = ref<boolean>(false)

const fieldNames = [
  'Title',
  'Rating',
  'Reviews'
]

const conditions = ref([
  {
    field: 'Title',
    condition: 'And',
    value: ''
  }
])

function addCondition() {
  conditions.value.push({
    field: '',
    condition: 'And',
    value: ''
  })
}
</script>
