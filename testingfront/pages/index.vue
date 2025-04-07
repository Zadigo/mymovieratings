<template>
  <section class="px-10 my-10">
    <TailButton @click="isOpen=!isOpen">
      Google
    </TailButton>

    <NuxtLink @click.prevent="isOpen=!isOpen">Press</NuxtLink>

    <TailDrawer v-model:open="isOpen">
      <TailDrawerContent>
        <TailDrawerHeader>
          <TailDrawerTitle>Are you absolutely sure?</TailDrawerTitle>
          <TailDrawerDescription>This action cannot be undone.</TailDrawerDescription>
        </TailDrawerHeader>
        <TailDrawerFooter>
          <TailButton>Submit</TailButton>
          <TailDrawerClose>
            <TailButton variant="outline">
              Cancel
            </TailButton>
          </TailDrawerClose>
        </TailDrawerFooter>
      </TailDrawerContent>
    </TailDrawer>
  </section>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
