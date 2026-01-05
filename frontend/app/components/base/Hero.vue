<template>
  <section class="flex flex-col items-center text-white text-sm pb-20">
      <nuxt-img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" class="absolute inset-0 -z-10 size-full opacity" alt="" />

      <a href="https://prebuiltui.com" class="flex items-center gap-2 border border-slate-700 rounded-full p-1 pr-3 text-sm mt-20">
        <span class="bg-indigo-600 text-xs px-3 py-1 rounded-full">
          NEW
        </span>

        <p class="flex items-center gap-2">
          <span>Try 30 days free trial option</span>
          <svg class="mt-px" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 4 3.5L1 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </p>
      </a>

      <h1 class="text-center text-[40px] leading-12 md:text-6xl md:leading-17.5 mt-4 font-semibold max-w-3xl">
        Turn thoughts into slides instantly, with AI.
      </h1>
      
      <p class="text-center text-base max-w-md mt-2">
        Create, customize and present faster than ever with intelligent design powered by AI.
      </p>
      
      <div class="bg-white/10 max-w-2xl w-full rounded-xl p-4 mt-10 border border-indigo-600/70">
        <textarea class="bg-transparent outline-none text-gray-300 resize-none w-full" rows="4" placeholder="Describe your presentation in details" />
        <nuxt-button to="/movies/1" class="ms-auto rounded-full">
          <icon name="lucide:sparkles" />
          Search with AI
        </nuxt-button>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-16">
          <nuxt-img class="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/framer.svg" alt="" />
          <nuxt-img class="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg" alt="" />
          <nuxt-img class="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg" alt="" />
          <nuxt-img class="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg" alt="" />
          <nuxt-img class="max-w-28 md:max-w-32" src="https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg" alt="" />
      </div>
  </section>
</template>

<script lang="ts" setup>

</script>
