<script setup>
import { onBeforeMount } from 'vue'
import { useThemeStore } from '@/stores/theme.js'
const currentTheme = useThemeStore()

onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')

  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }

  if (theme) {
    currentTheme.theme = theme // Set the theme from the URL
    return
  }

  // If no theme parameter, use the stored theme
  if (currentTheme.theme) {
    return
  }

  // Optionally, set a default theme if no stored theme
  currentTheme.theme = 'light' // Or any default theme you like
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@use 'styles/style' as *;
@use 'styles/examples' as *;
</style>
