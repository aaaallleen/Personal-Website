<template>
    <h2 class="text-3xl font-semibold mb-4">{{ title }}</h2>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    title: string
  }>()
  </script>