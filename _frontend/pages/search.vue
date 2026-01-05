<template>
  <section id="search" class="px-10">
    <div class="grid grid-cols-12 gap-2">
      <aside class="col-span-2 col-start-3">
        <TailCard class="shadow-sm border-none">
          <TailCardContent>
            <form @submit.prevent>
              <TailInput v-model="movieData.title" placeholder="Dune: Part Two" />

              <TailInput v-model="movieData.country" placeholder="France" />

              <TailInput v-model="movieData.keywords" placeholder="Keywords" />

              <h2>Movie Types</h2>
              <div class="flex justify-start flex-wrap gap-1">
                <TailButton v-for="item in movieTypesList" :key="item" variant="secondary" size="sm" @click="setMovieType(item)">
                  {{ item }}
                </TailButton>
              </div>

              <h2>Release date</h2>
              <div class="flex gap-1">
                <TailInput v-model="movieData.release_date.min" type="date" />
                <TailInput v-model="movieData.release_date.max" type="date" />
              </div>

              <div class="flex items-center space-x-2">
                <TailLabel for="release-date" />
                <TailSwitch v-model="movieData.use_year" is="release-date" label="Use year" />
              </div>

              <h2>Rating</h2>
              <div class="flex gap-1">
                <TailInput v-model="movieData.rating.min" type="number" min="1" max="10" placeholder="1-10" />
                <TailInput v-model="movieData.rating.max" type="number" min="1" max="10" placeholder="1-10" />
              </div>

              <h2>Genres</h2>
              <div class="flex justify-start flex-wrap gap-1">
                <TailButton v-for="item in movieGenresList" :key="item" variant="secondary" size="sm" @click="setMovieGenre(item)">
                  {{ item }}
                </TailButton>
              </div>

              <h2>Languages</h2>
              <TailInput v-model="movieData.languages" placeholder="Languages" />
            </form>
          </TailCardContent>
        </TailCard>
      </aside>

      <section id="search-items" class="col-span-6">
        <TailCard class="shadow-sm border-none">
          <TailCardContent>
            Search
          </TailCardContent>
        </TailCard>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { movieGenresList, movieTypesList, type MovieGenres, type MovieTypes } from '~/data/search'

interface MovieData {
  title: string
  country: string
  keywords: string[]
  movie_type: MovieTypes | string
  release_date: { min: string, max: string }
  use_year: boolean
  rating: { min: number, max: number }
  languages: string[]
  movie_genres: MovieGenres[]
}

useHead({
  title: 'Search'
})

const movieData = ref<MovieData>({
  title: '',
  country: '',
  keywords: [],
  movie_type: '',
  release_date: {
    min: '',
    max: ''
  },
  use_year: false,
  rating: {
    min: 1,
    max: 10
  },
  languages: [],
  movie_genres: []
})

function setMovieType(value: MovieTypes) {
  movieData.value.movie_type = value
}

function setMovieGenre(value: MovieGenres) {
  if (movieData.value.movie_genres.includes(value)) {
    const index = movieData.value.movie_genres.indexOf(value)
    movieData.value.movie_genres.splice(index, 1)
  } else {
    movieData.value.movie_genres.push(value)
  }
}
</script>
