<template>
    <div>
      <h4 class="text-lg font-semibold mb-2">{{ detail.caption }}</h4>
      <p>{{ detail.content }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import type { ProjectDetail } from '~/types/type'
  
  defineProps<{
    detail: ProjectDetail
  }>()
  </script>