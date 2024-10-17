<script setup lang="ts">
const features = [
  'Nuxt 4',
  'Nuxt ESLint',
  'NuxtHub',
  'Nuxt Auth',
  'Nuxt Content',
  'Nuxt UI v3',
  'Nuxt Fonts',
  'Nuxt Image',
  'VueUse',
]
</script>

<template>
  <UContainer class="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-5xl md:text-7xl font-black text-[--ui-primary]">
      Nuxter Starter
    </h1>
    <p class="text-lg md:text-xl text-[--ui-text-muted]">
      My personal go-to starter for building Nuxt projects with essential official modules.
    </p>
    <p class="text-lg md:text-xl text-[--ui-text-muted]">
      Perfect for quickly bootstrapping your next Nuxt app!
    </p>

    <div class="flex flex-wrap justify-center gap-2 mt-6">
      <UBadge v-for="(feature, index) in features" :key="index" variant="subtle" size="lg">
        {{ feature }}
      </UBadge>
    </div>
  </UContainer>
</template>
