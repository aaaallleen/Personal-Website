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
          <h2 class="text-3xl font-semibold mb-8 text-center">About Me</h2>
          <div class="flex">
            <div class="w-1/3 pr-8">
              <img src="~/assets/images/about.jpg" alt="About Me" class="w-full h-auto object-cover rounded-lg" />
            </div>
            <div class="w-2/3">
              <p class="text-lg">{{ about }}</p>
            </div>
          </div>
        </div>
      </section>
          
      <section id="resume" class="section bg-peachPuree relative">
        <div class="section-content flex">
          <div class="w-1/3 pr-8 sticky-sidebar">
            <div class="sticky-content">
              <div class="cv-section">
                <h2 class="text-l font-semibold mb-4">Curriculum Vitae</h2>
                <h2 class="text-3xl font-semibold mb-4 font-times-new-roman text-black">More of my credentials</h2>
                <p class="text-lg">
                  Here is my 
                  <NuxtLink to="/resume" class="text-blue-600 hover:text-blue-800 underline">Curriculum Vitae</NuxtLink>.
                </p>
              </div>
            </div>
          </div>
          <div class="w-2/3 pl-8">
            <h2 class="text-3xl font-semibold mb-4 text-[#d45b61]">Work Experience</h2>
            <div class="timeline">
              <div v-for="(item, index) in workTimelineItems" :key="index" class="timeline-item">
                <div class="timeline-icon">
                  <component :is="item.icon" size="24" />
                </div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ item.date }}</div>
                  <h3 class="timeline-title text-black">{{ item.company }}</h3>
                </div>
                <div class="timeline-details">
                  <h4 class="timeline-company">{{ item.title }}</h4>
                  <p class="timeline-description">{{ item.description }}</p>
                </div>
              </div>
            </div>
            
            <h2 class="text-3xl font-semibold mb-4 mt-8 text-[#4a90e2]">Education</h2>
            <div class="timeline">
              <div v-for="(item, index) in educationTimelineItems" :key="index" class="timeline-item">
                <div class="timeline-icon">
                  <component :is="item.icon" size="24" />
                </div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ item.date }}</div>
                  <h3 class="timeline-title text-black">{{ item.institution }}</h3>
                </div>
                <div class="timeline-details">
                  <h4 class="timeline-company">{{ item.degree }}</h4>
                  <p class="timeline-description">{{ item.description }}</p>
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
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Github, Linkedin, Mail, Briefcase, GraduationCap } from 'lucide-vue-next'
import type { Project, BlogPost, TimelineItem, EducationTimelineItem } from '~/types/type'

const name = ref('Chia-En (Allen) Lu')
const tagline = ref('CS Masters student | Machine Learning Engineer | Software Developer')
const about = ref('cool things about me. I have a long dick')
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

const workTimelineItems = ref<TimelineItem[]>([
  {
    title: 'Machine Learning Engineering Intern',
    company: 'Taiwan AI Labs',
    date: 'June 2024 - August 2024',
    description: 'Worked in blockchain company. Performed network performance test between AWS centers located in Asia. Created GOPAX API monitoring tool that would test GOPAX API, create error digest, then would send email alert. Studied zcash transaction after Overwinter Hardfork.',
    icon: Briefcase
  },
  {
    title: 'Research Assistant',
    company: 'Academia Sinica',
    date: 'July 2023 - November 2023',
    description: 'Updated python package called DNAplotlib, a project under National Resource for Network Biology. Integrated pySBOL2 which supports hierarchical and complex interaction visualizion of synthetic biocircuits. Rendered Synthetic Biology Open Language (SBOL) visual standard glyph in python.',
    icon: Briefcase
  },
  {
    title: 'Research Assistant',
    company: 'National Tsing Hua University Human Machine Interaction Lab',
    date: 'April 2023 - December 2023',
    description: 'Developed iOS app called DoctorMi that visualizes user health diagnosis data based on breath analysis. Supports features such as daily health data check, real time breath analysis, looking at other health data, and sharing health data by email. Originally a final project for the class CS193P.',
    icon: Briefcase
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'National Tsing Hua University TCLab',
    date: 'January 2022 - March 2023',
    description: 'Under the supervision of Prof. Ting-Chi Wang, I participated in the 2022 ICCAD Contest where I achieved a Global Top 10 in the contest.',
    icon: Briefcase
  },
])

const educationTimelineItems = ref<EducationTimelineItem[]>([
  {
    icon: GraduationCap,
    date: 'September 2022 - Present',
    institution: 'Stanford University',
    degree: 'Master of Science in Computer Science',
    description: 'Focusing on Machine Learning and Artificial Intelligence. Participating in research projects related to natural language processing.'
  },
  {
    icon: GraduationCap,
    date: 'September 2018 - June 2022',
    institution: 'National Tsing Hua University',
    degree: 'Bachelor of Science in Computer Science',
    description: 'Graduated with honors. Completed a thesis on optimizing neural network architectures for edge devices.'
  },
])
</script>

<style scoped>
.section {
  @apply min-h-screen flex items-center justify-center p-8;
}

.section-content {
  @apply max-w-7xl w-full;
}

#about {
  @apply pt-32 pb-16; /* Increased top padding */
}

#resume {
  @apply items-start pt-32; /* Increased top padding */
}

.sticky-sidebar {
  height: auto;
  min-height: 100vh;
  position: relative;
}

.sticky-content {
  position: sticky;
  top: 96px; /* Adjusted to account for navbar height */
  transform: translateY(-30%);
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  padding-bottom: 2rem;
}

.cv-section {
  margin-top: 100%;
}

#home {
  background-image: url('~/assets/images/background.jpg');
  @apply min-h-screen;
}

.btn {
  @apply inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-500 text-white transition-all duration-200;
}

.btn:hover {
  @apply bg-gray-700 scale-110;
}

.timeline {
  @apply relative py-5 mt-8;
}

.timeline::before {
  content: '';
  @apply absolute w-0.5 bg-gray-700 top-8 bottom-0 left-1/2 -ml-px;
}

.timeline-item {
  @apply py-5 relative flex justify-between;
}

.timeline-item:first-child {
  @apply pt-8;
}

.timeline-icon {
  @apply absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-gray-700 flex items-center justify-center z-10;
}

.timeline-content {
  @apply w-5/12 pr-5 text-right;
}

.timeline-details {
  @apply w-5/12 pl-5;
}

.timeline-date {
  @apply text-sm text-gray-600;
}

.timeline-title {
  @apply text-lg font-bold;
}

.timeline-company {
  @apply text-base font-bold mb-2;
}

.timeline-description {
  @apply text-sm;
}

@media (max-width: 767px) {
  .timeline::before {
    @apply left-10;
  }
  
  .timeline-icon {
    @apply left-10 ml-0;
  }
  
  .timeline-content,
  .timeline-details {
    @apply w-full pl-20 text-left;
  }
  
  .timeline-date {
    @apply -top-2.5;
  }
}
</style>