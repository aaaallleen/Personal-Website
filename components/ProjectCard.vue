<template>
    <div class="bg-white bg-opacity-50 rounded-lg p-4">
      <h3 class="text-lg font-medium">{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Project } from '~/types'
  
  defineProps<{
    project: Project
  }>()
  </script>