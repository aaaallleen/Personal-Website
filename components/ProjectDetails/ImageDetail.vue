<template>
    <div>
      <img :src="detail.content" :alt="detail.caption" class="max-w-full h-auto rounded-lg">
      <p v-if="detail.caption" class="mt-2 text-sm text-gray-600">{{ detail.caption }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import type { ProjectDetail } from '~/types/type'
  
  defineProps<{
    detail: ProjectDetail
  }>()
  </script>