<template>
    <div class="bg-white bg-opacity-50 rounded-lg p-4">
      <h3 class="text-lg font-medium">{{ post.title }}</h3>
      <p>{{ post.date }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { BlogPost } from '~/types'
  
  defineProps<{
    post: BlogPost
  }>()
  </script>