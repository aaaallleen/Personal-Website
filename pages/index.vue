<template>
    <div class="text-textColor">
      <NavBar />
  
      <div>
        <section id="home" class="section bg-cover bg-center flex flex-col items-center justify-center text-center">
          <div class="section-content bg-grey-700 bg-opacity-70 p-8 rounded-lg">
            <h1 class="text-6xl font-bold mb-4 font-gothic-neo text-white">{{ name }}</h1>
            <p class="text-2xl mb-6 font-times-new-roman text-white">{{ tagline }}</p>
            <p class="text-xl mb-6 font-times-new-roman text-white">background pc: The Dune by Allen Lu</p>
            <div class="flex justify-center space-x-20">
              <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" class="btn">
                <component :is="link.icon" />
              </a>
            </div>
          </div>
        </section>
  
        <section id="about" class="section bg-honeyPeach">
          <div class="section-content">
            <h2 class="text-3xl font-semibold mb-4">About Me</h2>
            <p>{{ about }}</p>
          </div>
        </section>
  
        <section id="resume" class="section bg-peachPuree">
        <div class="section-content flex">
          <div class="w-1/2 pr-8 sticky top-0 self-start" style="height: fit-content;">
            <h2 class="text-l font-semibold mb-4">Curriculum Vitae</h2>
            <h2 class="text-3xl font-semibold mb-4 font-times-new-roman text-black">More of my credentials</h2>
            <p class="text-lg">
              Here is my 
              <NuxtLink to="/resume" class="text-blue-600 hover:text-blue-800 underline">Curriculum Vitae</NuxtLink>.
            </p>
          </div>
          <div class="w-1/2 pl-8">
            <div class="timeline">
              <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
                <div class="timeline-content">
                  <h3 class="text-xl font-semibold">{{ item.title }}</h3>
                  <p class="text-sm text-gray-600">{{ item.date }}</p>
                  <p class="mt-2">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
        <section id="projects" class="section bg-peachPink">
          <div class="section-content">
            <h2 class="text-3xl font-semibold mb-4">Projects</h2>
            <ul class="space-y-4">
              <li v-for="project in projects" :key="project.id" class="bg-white bg-opacity-50 rounded-lg p-4">
                <h3 class="text-lg font-medium">{{ project.name }}</h3>
                <p>{{ project.description }}</p>
              </li>
            </ul>
          </div>
        </section>
  
        <section id="blog" class="section bg-peachPearl">
          <div class="section-content">
            <h2 class="text-3xl font-semibold mb-4">Blog Posts</h2>
            <ul class="space-y-4">
              <li v-for="post in blogPosts" :key="post.id" class="bg-white bg-opacity-50 rounded-lg p-4">
                <h3 class="text-lg font-medium">{{ post.title }}</h3>
                <p>{{ post.date }}</p>
              </li>
            </ul>
          </div>
        </section>
  
        <section id="contact" class="section bg-pristine">
          <div class="section-content">
            <h2 class="text-3xl font-semibold mb-4">Contact Me</h2>
            <p>Email: {{ email }}</p>
            <!-- Add more contact information or a contact form here -->
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Camera, Github, Linkedin, Mail } from 'lucide-vue-next'
  
  interface Project {
    id: number;
    name: string;
    description: string;
  }
  
  interface BlogPost {
    id: number;
    title: string;
    date: string;
  }
  
  const name = ref('Chia-En (Allen) Lu')
  const tagline = ref('CS Masters student | Machine Learning Engineer | Software Developer')
  const about = ref('I am a passionate CS student with a love for web development...')
  const email = ref('chiaen119@gmail.com')
  
  const projects = ref<Project[]>([
    { id: 1, name: 'Project 1', description: 'Description of project 1' },
    { id: 2, name: 'Project 2', description: 'Description of project 2' },
  ])
  
  const blogPosts = ref<BlogPost[]>([
    { id: 1, title: 'My First Blog Post', date: '2023-08-01' },
    { id: 2, title: 'Learning TypeScript', date: '2023-08-15' },
  ])
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aaaallleen', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/aaaallleen119', icon: Linkedin },
    { name: 'Email', url: 'mailto:chiaen119@gmail.com', icon: Mail },
  ]
  const timelineItems = ref([
    {
        title: 'Master\'s Degree',
        date: '2022 - Present',
        description: 'Pursuing a Master\'s degree in Computer Science at XYZ University.'
    },
    {
        title: 'Software Developer Internship',
        date: 'Summer 2021',
        description: 'Worked as a Software Developer Intern at ABC Tech, focusing on web development projects.'
    },
    {
        title: 'Bachelor\'s Degree',
        date: '2018 - 2022',
        description: 'Completed a Bachelor\'s degree in Computer Science at DEF University.'
    },
    // Add more items as needed
    ])
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
  
  #home {
    background-image: url('~/assets/images/background.jpg');
    min-height: 100vh;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: grey;
    color: white;
    transition: all 0.2s;
  }
  
  .btn:hover {
    background-color: #333;
    transform: scale(1.1);
  }
  .timeline {
  position: relative;
  padding: 20px 0;
}

    .timeline::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: -1px;
    }

    .timeline-item {
    padding: 20px 30px;
    position: relative;
    background-color: inherit;
    width: 100%;
    }

    .timeline-item::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    left: -8px;
    background-color: white;
    border: 2px solid #333;
    top: 24px;
    border-radius: 50%;
    z-index: 1;
    }

    .timeline-content {
    padding: 20px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    @media (min-width: 768px) {
    .sticky {
        position: sticky;
        top: 100px;
    }
    }
</style>