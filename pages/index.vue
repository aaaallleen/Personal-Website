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
          <h2 class="text-3xl font-semibold mb-6 text-center">About Me</h2>
          <div class="flex">
            <div class="w-1/3 pr-8">
              <img src="~/assets/images/about.jpg" alt="About Me" class="w-full h-auto object-cover rounded-lg mb-4" />
              <div class="text-center">
                <p class="mb-2 font-times-new-roman">I am actively seeking 2025 summer internships!</p>
                <p class="mb-2 font-times-new-roman">
                  Connect with me on 
                  <a href="https://linkedin.com/in/aaaallleen119" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-times-new-roman">
                    LinkedIn
                  </a>
                </p>
                <p class = "mb-2 font-times-new-roman">
                  Contact me via 
                  <a href="mailto:chiaen119@gmail.com" class="text-blue-600 hover:text-blue-800 underline font-times-new-roman">
                    chiaen119@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div class="w-2/3">
              <p class="text-lg font-times-new-roman mt-12">{{ about }}</p>
              <p class="text-lg font-times-new-roman flex flex-wrap mt-12">I am a driven worker that strives under pressure. I work well both individually and as a team. My areas of expertise are computer science, machine learning application, and design. Below are highlights of my technical skills:</p>
              <div class="flex flex-wrap justify-between mb-6 mt-12">
                <div v-for="skill in skillsWithLevels" :key="skill.name" class="w-1/2 sm:w-1/4 mb-4">
                  <CircularProgress :percentage="skill.level" :skillName="skill.name" />
                </div>
              </div>
              
              <div class="flex flex-wrap">
                <span v-for="skill in otherSkills" :key="skill" class="bg-[#D8C8BD] text-gray-800 px-3 py-1 rounded-full mr-2 mb-2 text-sm">
                  {{ skill }}
                </span>
              </div>
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
const about = ref("As a passionate master's student in Computer Science at UC San Diego (class of 2026), I'm on the hunt for a cutting-edge internship in the Quant/Tech industry. My journey began at National Tsing Hua University, where I earned my B.S. in Computer Science (class of 2023), minoring in Arts and Design. My passion lies in pushing the boundaries of machine learning deployment. I've already dived deep into diverse fields like healthcare, natural language processing, and recommendation systems – and I'm hungry for more!")
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


const skillsWithLevels = ref([
  { name: 'Python', level: 90 },
  { name: 'C/C++', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'TypeScript', level: 60 },
])

const otherSkills = ref([
  'Vue.js', 'Node.js', 'Machine Learning', 'Deep Learning', 'SQL', 'Git', 'Docker', 'Kubernetes',
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'
])
const workTimelineItems = ref<TimelineItem[]>([
  {
    title: 'Machine Learning Engineering Intern',
    company: 'Taiwan AI Labs',
    date: 'June 2024 - August 2024',
    description: 'Developed a neural machine transaltion model to translate a Austronesian language - Truku. Utilized LLM and retrieval methods to augment domain data.',
    icon: Briefcase
  },
  {
    title: 'Research Assistant',
    company: 'Academia Sinica',
    date: 'July 2023 - November 2023',
    description: 'Under the supervision of Prof. De-Nian Yang, I developed a query system on top of a large-scale knowledge graph. The system is able to answer complex queries with high accuracy. The system could also match two knowledge graphs based on their schema, entity, and relation.',
    icon: Briefcase
  },
  {
    title: 'Research Assistant',
    company: 'National Tsing Hua University Human Machine Interaction Lab',
    date: 'April 2023 - December 2023',
    description: 'Under the supervision of Prof. Po-Chi Kuo, I designed a novel system that annotates breast mammogram images for regions highly suspisious of breast cancer. This system annotates breast masses and calcifications with a high accuracy.',
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
    date: 'September 2024 - June 2026 (Projected)',
    institution: 'University of California, San Diego',
    degree: 'Master of Science in Computer Science and Engineering',
    description: 'Focusing on Machine Learning and Artificial Intelligence.'
  },
  {
    icon: GraduationCap,
    date: 'September 2019 - June 2023',
    institution: 'National Tsing Hua University',
    degree: 'Bachelor of Science in Computer Science',
    description: 'Participated in the 2022 ICCAD Contest where I achieved a Global Top 10 in the contest. Focused on Machine Learning and Artificial Intelligence.'
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
  @apply pt-8 pb-32 ; /* Increased top padding */
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

.font-times-new-roman {
    font-family: 'Times New Roman', Times, serif;
  }
  
.font-gothic-neo {
  font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
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