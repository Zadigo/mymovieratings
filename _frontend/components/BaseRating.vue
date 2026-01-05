<template>
  <div data-slot="stars" class="inline-flex gap-1">
    <template v-for="i in maxStars" :key="i">
      <button type="button" @click="setRating(i)" @mouseover="hoverRating = i" @mouseleave="hoverRating = 0" class="cursor-pointer focus:outline-none">
        <Icon :name="getStarIcon(i)" :class="[ 'w-6 h-6 transition-colors duration-200', { 'text-yellow-400': isStarActive(i), 'text-gray-300': !isStarActive(i) }]" />
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: number
    maxStars?: number
    onIcon?: string
    offIcon?: string
  }>(),
  {
    modelValue: 0,
    maxStars: 5,
    onIcon: 'fa-solid:star',
    offIcon: 'fa-regular:star'
  }
)

const emit = defineEmits({
  'update:modelValue'(_value: number) {
    return true
  }
})

const hoverRating = ref(0)

const currentRating = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

function setRating (value: number) {
  currentRating.value = value
}

function isStarActive (index: number) {
  return index <= (hoverRating.value || currentRating.value)
}

function getStarIcon (index: number) {
  return isStarActive(index) ? props.onIcon : props.offIcon
}
</script>
