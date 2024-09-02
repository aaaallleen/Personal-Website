<template>
    <div class="flex flex-col items-center">
      <svg class="w-20 h-20" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#eee"
          stroke-width="2"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#D8C8BD"
          stroke-width="2"
          :stroke-dasharray="dashArray"
          stroke-linecap="round"
          class="progress-ring__circle"
        />
        <text x="18" y="20.35" class="percentage">{{ percentage }}%</text>
      </svg>
      <span class="mt-2 text-center font-times-new-roman">{{ skillName }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  const props = defineProps<{
    percentage: number
    skillName: string
  }>()
  
  const dashArray = computed(() => {
    const circumference = 2 * Math.PI * 15.9155
    return `${props.percentage * circumference / 100} ${circumference}`
  })
  </script>
  
  <style scoped>
  .progress-ring__circle {
    transition: stroke-dasharray 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  
  .percentage {
    font-size: 0.4em;
    text-anchor: middle;
    font-weight: bold;
    fill: #333;
  }
  </style>