<template>
    <p>{{ detail.content }}</p>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import type { ProjectDetail } from '~/types/type'
  
  defineProps<{
    detail: ProjectDetail
  }>()
  </script>