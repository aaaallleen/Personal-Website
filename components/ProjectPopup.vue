<template>
    <transition name="fade">
      <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="close">
        <div class="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" @click.stop>
          <h2 class="text-2xl font-bold mb-4">{{ Project.name }}</h2>
          <p class="mb-4">{{ Project.description }}</p>
          
          <div v-if="Project.technologies" class="mb-4">
            <h3 class="text-xl font-semibold mb-2">Technologies Used:</h3>
            <div class="flex flex-wrap">
              <span v-for="tech in Project.technologies" :key="tech" class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2 text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
  
          <div v-for="(detail, index) in Project.details" :key="index" class="mb-4">
            <component :is="getDetailComponent(detail.type)" :detail="detail" />
          </div>
  
          <div class="flex justify-center mt-6">
            <button @click="close" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import type { Project, ProjectDetail } from '~/types/type'
  import TextDetail from '~/components/ProjectDetails/TextDetail.vue'
  import ImageDetail from '~/components/ProjectDetails/ImageDetail.vue'
  import LinkDetail from '~/components/ProjectDetails/LinkDetail.vue'
  import TechDetail from '~/components/ProjectDetails/TechDetail.vue'

  const props = defineProps<{
    show: boolean,
    Project: Project
  }>()
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  
  const getDetailComponent = (type: ProjectDetail['type']) => {
    switch (type) {
      case 'text': return TextDetail;
      case 'image': return ImageDetail;
      case 'link': return LinkDetail;
      case 'techDetail': return TechDetail;
      default: return TextDetail;
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>