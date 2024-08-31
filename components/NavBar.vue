<template>
  <nav class="bg-white-swan shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-black">Allen Lu</NuxtLink>
        </div>
        <div class="flex h-full">
          <NuxtLink 
            v-for="section in sections" 
            :key="section.id" 
            :to="{ path: '/', hash: `#${section.id}` }"
            class="nav-link"
          >
            {{ section.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'resume', name: 'Resume' },
  { id: 'projects', name: 'Projects' },
  { id: 'blog', name: 'Blog' },
  { id: 'contact', name: 'Contact' },
]
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  color: var(--text-color);
  transition: all 0.2s;
  position: relative;
}

.bg-white-swan {
  background-color: #E4DAC9;
}

.nav-link:hover {
  background-color: var(--hover-color);
  border-radius: 0;
  color: black;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--text-color);
  transform: scaleX(0);
  transition: transform 0.2s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>