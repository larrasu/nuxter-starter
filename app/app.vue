<script setup lang="ts">
const { site } = useAppConfig()

useHead({
  titleTemplate: title => title ? `${title} | ${site.name}` : site.name,
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
