<template>
    <a :href="detail.url" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
      {{ detail.content }}
    </a>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import type { ProjectDetail } from '~/types/type'
  
  defineProps<{
    detail: ProjectDetail
  }>()
  </script>