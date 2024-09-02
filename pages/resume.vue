<template>
  <div class="text-textColor">
    <NavBar />

    <div>
      <section id="resume" class="section bg-peachPuree">
        <div class="section-content">
          <h2 class="text-3xl font-semibold mb-4 font-times-new-roman">Curriculum Vitae</h2>
          <embed :src="resumeUrl" type="application/pdf" width="100%" height="800px" class="border border-gray-300 shadow-lg" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const baseUrl = config.app.baseURL || '/'

const resumeUrl = computed(() => `${baseUrl}resume.pdf`)
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.section-content {
  max-width: 1200px;
  width: 100%;
}
.font-times-new-roman {
  font-family: 'Times New Roman', Times, serif;
}

.font-gothic-neo {
  font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
}
</style>