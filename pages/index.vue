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
            <div class="w-1/3 pr-8 sticky-container">
                <div class="sticky">
                <h2 class="text-l font-semibold mb-4">Curriculum Vitae</h2>
                <h2 class="text-3xl font-semibold mb-4 font-times-new-roman text-black">More of my credentials</h2>
                <p class="text-lg">
                    Here is my 
                    <NuxtLink to="/resume" class="text-blue-600 hover:text-blue-800 underline">Curriculum Vitae</NuxtLink>.
                </p>
                </div>
            </div>
            <div class="w-2/3 pl-8">
                <h2 class="text-3xl font-semibold mb-4 text-[#d45b61]">Work Experience</h2>
                <div class="timeline">
                <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
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
  import { Camera, Github, Linkedin, Mail, Briefcase, GraduationCap } from 'lucide-vue-next'
  
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
  interface TimelineItem {
  icon: any;
  date: string;
  title: string;
  company: string;
  description: string;
}

const timelineItems = ref([
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
    description: 'Developed iOS app called DoctorMi that visualizes user health diagnosis data based on breath analysis. Supports features such as daily health data check, real time breath analysis, looking at other health data, and sharing health data by email. Originally a final project for the class CS193P.',
    icon: Briefcase
  },
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
  .sticky-container {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sticky {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
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
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.timeline-icon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-content {
  width: 45%;
  padding-right: 20px;
  text-align: right;
}

.timeline-details {
  width: 45%;
  padding-left: 20px;
}

.timeline-date {
  font-size: 0.9em;
  color: #666;
}

.timeline-title {
  font-size: 1.2em;
  font-weight: bold;
}

.timeline-company {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.timeline-description {
  font-size: 0.9em;
}

@media (max-width: 767px) {
  .timeline::before {
    left: 40px;
  }
  
  .timeline-icon {
    left: 40px;
    margin-left: 0;
  }
  
  .timeline-content {
    width: calc(100% - 90px);
    left: 90px !important;
  }
  
  .timeline-date {
    width: 100%;
    left: 90px !important;
    text-align: left !important;
    top: -10px;
  }
}
</style>