<template>
  <section id="reviews" class="px-20 my-10">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6 col-start-2">
        <!-- Filters -->
        <div class="flex justify-between gap-2 pb-5">
          <div id="actions-left">
            <TailDropdownMenu>
              <TailDropdownMenuTrigger as-child>
                <TailButton variant="secondary">
                  <Icon name="fa-solid:eye" />
                  Show
                </TailButton>
              </TailDropdownMenuTrigger>

              <TailDropdownMenuContent>
                <TailDropdownMenuItem v-for="i in 10" :key="i">
                  {{ i }} star
                </TailDropdownMenuItem>
              </TailDropdownMenuContent>
            </TailDropdownMenu>
          </div>
          
          <div id="actions-right" class="flex justify-between gap-2">
            <TailDropdownMenu>
              <TailDropdownMenuTrigger as-child>
                <TailButton variant="secondary">
                  <Icon name="fa-solid:sort" />
                  Sort
                </TailButton>
              </TailDropdownMenuTrigger>

              <TailDropdownMenuContent>
                <TailDropdownMenuItem>
                  <Icon name="fa-solid:sort-alpha-up" /> Title A-Z
                </TailDropdownMenuItem>
                
                <TailDropdownMenuItem>
                  <Icon name="fa-solid:sort-alpha-down" /> Title Z-A
                </TailDropdownMenuItem>

                <TailDropdownMenuSeparator />

                <TailDropdownMenuItem>
                  <Icon name="fa-solid:sort-numeric-up" /> Score 1-10
                </TailDropdownMenuItem>

                <TailDropdownMenuItem>
                  <Icon name="fa-solid:sort-numeric-down" /> Score 10-1
                </TailDropdownMenuItem>
              </TailDropdownMenuContent>
            </TailDropdownMenu>

            <TailButton variant="secondary">
              <Icon name="fa-solid:filter" />
              Filter
            </TailButton>
          </div>
        </div>

        <TailCard class="shadow-none mb-5">
          <TailCardContent>
            <div class="flex justify-content-between gap-2">
              <TailInput placeholder="Field" />
              <TailInput placeholder="Conditions" />
              <TailInput placeholder="Value" />
              <TailButton variant="secondary"><Icon name="fa-solid:plus" /></TailButton>

              <TailDropdownMenu>
                <TailDropdownMenuTrigger as-child>
                  <TailButton variant="secondary">
                    And
                  </TailButton>
                </TailDropdownMenuTrigger>

                <TailDropdownMenuContent>
                  <TailDropdownMenuItem>
                    And
                  </TailDropdownMenuItem>

                  <TailDropdownMenuItem>
                    Or
                  </TailDropdownMenuItem>
                </TailDropdownMenuContent>
              </TailDropdownMenu>  
            </div>
          </TailCardContent>
        </TailCard>

        <!-- Reviews -->
        <TailCard v-for="i in 30" :key="i" class="shadow-md border-none mb-3">
          <TailCardContent>
            <div class="flex gap-5 items-center place-items-center mb-2">
              <div class="inline-flex gap-2 items-center">
                <Icon name="fa-solid:star" class="bg-yellow-300" />
                <span>5 / 10</span>
              </div>
              
              <h3 class="text-2xl font-semibold">
                I am a big fan of this and that n°{{ i }}
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

              <TailButton :variant="isFollowed ? 'default' : 'outline'" @click="isFollowed=!isFollowed">
                <Icon name="fa-solid:plus" />
                Follow
              </TailButton>
            </div>

            <p class="font-light mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Perspiciatis ullam minus mollitia iusto, temporibus ut corporis dignissimos 
              assumenda excepturi, aperiam illo quasi vero pariatur, accusamus officiis 
              dolores magni placeat recusandae?
            </p>
          

            <div id="helpful" class="flex gap-2 mt-5">
              <TailButton variant="secondary" @click="isLiked=!isLiked">
                <Icon v-if="isLiked" name="fa-solid:thumbs-up" />
                <Icon v-else name="fa-regular:thumbs-up" /> 100
              </TailButton>

              <TailButton variant="secondary" @click="isDisliked=!isDisliked">
                <Icon v-if="isDisliked" name="fa-solid:thumbs-down" />
                <Icon v-else name="fa-regular:thumbs-down" /> 30
              </TailButton>
            </div>
          </TailCardContent>
        </TailCard>
      </div>

      <div class="col-span-4">
        <TailCard id="explore" class="shadow-none border-none">
          <TailCardContent class="px-2">
            <NuxtLink to="/" class="text-2xl font-bold flex place-items-center gap-3">
              Explore
              <Icon name="fa-solid:link" size="15" />
            </NuxtLink>
          </TailCardContent>

          <TailCardContent class="px-2">
            <div class="grid grid-cols-2 grid-rows-1 gap-2">
              <article id="other-movies" v-for="i in 4" :key="i">
                <NuxtLink to="/movies/1">
                  <NuxtImg src="img1.jpg" class="rounded-md" />
                </NuxtLink>
              </article>
            </div>
          </TailCardContent>
        </TailCard>

        <TailCard class="shadow-none border-none">
          <TailCardContent class="px-2">
            <NuxtLink to="/" class="text-2xl font-bold flex place-items-center gap-3">
              Lists
              <Icon name="fa-solid:link" size="15" />
            </NuxtLink>
          </TailCardContent>

          <TailCardContent id="user-lists" class="px-2">
            <div class="grid grid-cols-1 grid-rows-4 gap-2">
              <div id="other-movies" v-for="i in 4" :key="i">
                <NuxtLink to="/lists/1">
                  <TailCard class="border-none shadow-md">
                    <TailCardContent>
                      <h5>List name</h5>
                    </TailCardContent>
                  </TailCard>
                </NuxtLink>
              </div>
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

const isLiked = ref<boolean>(false)
const isDisliked = ref<boolean>(false)
const isFollowed = ref<boolean>(false)
</script>
