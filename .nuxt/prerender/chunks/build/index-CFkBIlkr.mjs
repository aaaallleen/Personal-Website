import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0 } from './NavBar-6AWSFbY1.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, createVNode, resolveDynamicComponent, ref, withCtx, createTextVNode } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderComponent } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BkJVxiVx.mjs';
import { Briefcase, GraduationCap, Github, Linkedin, Mail } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/h3/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/devalue/index.js';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/destr/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/klona/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/scule/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unhead/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/@unhead/shared/dist/index.mjs';
import './server.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CircularProgress",
  __ssrInlineRender: true,
  props: {
    percentage: {},
    skillName: {}
  },
  setup(__props) {
    const props = __props;
    const dashArray = computed(() => {
      const circumference = 2 * Math.PI * 15.9155;
      return `${props.percentage * circumference / 100} ${circumference}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center" }, _attrs))} data-v-b345b7b5><svg class="w-20 h-20" viewBox="0 0 36 36" data-v-b345b7b5><path d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="2" data-v-b345b7b5></path><path d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#D8C8BD" stroke-width="2"${ssrRenderAttr("stroke-dasharray", dashArray.value)} stroke-linecap="round" class="progress-ring__circle" data-v-b345b7b5></path><text x="18" y="20.35" class="percentage" data-v-b345b7b5>${ssrInterpolate(_ctx.percentage)}%</text></svg><span class="mt-2 text-center font-times-new-roman" data-v-b345b7b5>${ssrInterpolate(_ctx.skillName)}</span></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CircularProgress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b345b7b5"]]);
const _imports_0 = "" + buildAssetsURL("about.Vmrc8-0Z.jpg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TextDetail",
  __ssrInlineRender: true,
  props: {
    detail: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(_attrs)}>${ssrInterpolate(_ctx.detail.content)}</p>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectDetails/TextDetail.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImageDetail",
  __ssrInlineRender: true,
  props: {
    detail: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><img${ssrRenderAttr("src", _ctx.detail.content)}${ssrRenderAttr("alt", _ctx.detail.caption)} class="max-w-full h-auto rounded-lg">`);
      if (_ctx.detail.caption) {
        _push(`<p class="mt-2 text-sm text-gray-600">${ssrInterpolate(_ctx.detail.caption)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectDetails/ImageDetail.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LinkDetail",
  __ssrInlineRender: true,
  props: {
    detail: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.detail.url,
        target: "_blank",
        rel: "noopener noreferrer",
        class: "text-blue-600 hover:underline"
      }, _attrs))}>${ssrInterpolate(_ctx.detail.content)}</a>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectDetails/LinkDetail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TechDetail",
  __ssrInlineRender: true,
  props: {
    detail: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h4 class="text-lg font-semibold mb-2">${ssrInterpolate(_ctx.detail.caption)}</h4><p>${ssrInterpolate(_ctx.detail.content)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectDetails/TechDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectPopup",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean },
    Project: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const getDetailComponent = (type) => {
      switch (type) {
        case "text":
          return _sfc_main$5;
        case "image":
          return _sfc_main$4;
        case "link":
          return _sfc_main$3;
        case "techDetail":
          return _sfc_main$2;
        default:
          return _sfc_main$5;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" }, _attrs))} data-v-bc5d17c2><div class="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" data-v-bc5d17c2><h2 class="text-2xl font-bold mb-4" data-v-bc5d17c2>${ssrInterpolate(_ctx.Project.name)}</h2><p class="mb-4" data-v-bc5d17c2>${ssrInterpolate(_ctx.Project.description)}</p>`);
        if (_ctx.Project.technologies) {
          _push(`<div class="mb-4" data-v-bc5d17c2><h3 class="text-xl font-semibold mb-2" data-v-bc5d17c2>Technologies Used:</h3><div class="flex flex-wrap" data-v-bc5d17c2><!--[-->`);
          ssrRenderList(_ctx.Project.technologies, (tech) => {
            _push(`<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2 text-sm" data-v-bc5d17c2>${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(_ctx.Project.details, (detail, index2) => {
          _push(`<div class="mb-4" data-v-bc5d17c2>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getDetailComponent(detail.type)), { detail }, null), _parent);
          _push(`</div>`);
        });
        _push(`<!--]--><div class="flex justify-center mt-6" data-v-bc5d17c2><button class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors" data-v-bc5d17c2> Close </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectPopup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc5d17c2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("Chia-En (Allen) Lu");
    const tagline = ref("CS Masters student | Machine Learning Engineer | Software Developer");
    const about = ref("As a passionate master's student in Computer Science at UC San Diego (class of 2026), I'm on the hunt for a cutting-edge internship in the Quant/Tech industry. My journey began at National Tsing Hua University, where I earned my B.S. in Computer Science (class of 2023), minoring in Arts and Design. My passion lies in pushing the boundaries of machine learning deployment. I've already dived deep into diverse fields like healthcare, natural language processing, and recommendation systems \u2013 and I'm hungry for more!");
    const email = ref("chiaen119@gmail.com");
    const projects = ref([
      {
        id: 1,
        name: "Project 1",
        description: "Description of project 1.",
        technologies: ["Vue.js", "TypeScript", "Tailwind CSS"],
        details: [
          { type: "text", content: "This is a detailed explanation of Project 1." },
          { type: "image", content: "about.jpg", caption: "Project 1 Screenshot" },
          { type: "link", content: "GitHub Repository", url: "https://github.com/aaaallleen" },
          { type: "techDetail", content: "This project uses advanced Vue.js features like...", caption: "Technical Details" }
        ]
      },
      {
        id: 2,
        name: "Project 2",
        description: "Description of project 2. Another longer description for demonstration purposes.",
        details: [
          "Developed custom algorithm",
          "Created responsive design",
          "Implemented CI/CD pipeline"
        ],
        technologies: ["React", "Node.js", "MongoDB"]
      }
      // Add more projects as needed
    ]);
    const blogPosts = ref([
      { id: 1, title: "My First Blog Post", date: "2023-08-01" },
      { id: 2, title: "Learning TypeScript", date: "2023-08-15" }
    ]);
    const socialLinks = [
      { name: "GitHub", url: "https://github.com/aaaallleen", icon: Github },
      { name: "LinkedIn", url: "https://linkedin.com/in/aaaallleen119", icon: Linkedin },
      { name: "Email", url: "mailto:chiaen119@gmail.com", icon: Mail }
    ];
    const skillsWithLevels = ref([
      { name: "Python", level: 90 },
      { name: "C/C++", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 60 }
    ]);
    const otherSkills = ref([
      "Vue.js",
      "Node.js",
      "Machine Learning",
      "Deep Learning",
      "SQL",
      "Git",
      "Docker",
      "Kubernetes",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ]);
    const workTimelineItems = ref([
      {
        title: "Machine Learning Engineering Intern",
        company: "Taiwan AI Labs",
        date: "June 2024 - August 2024",
        description: "Developed a neural machine transaltion model to translate a Austronesian language - Truku. Utilized LLM and retrieval methods to augment domain data.",
        icon: Briefcase
      },
      {
        title: "Research Assistant",
        company: "Academia Sinica",
        date: "July 2023 - November 2023",
        description: "Under the supervision of Prof. De-Nian Yang, I developed a query system on top of a large-scale knowledge graph. The system is able to answer complex queries with high accuracy. The system could also match two knowledge graphs based on their schema, entity, and relation.",
        icon: Briefcase
      },
      {
        title: "Research Assistant",
        company: "National Tsing Hua University Human Machine Interaction Lab",
        date: "April 2023 - December 2023",
        description: "Under the supervision of Prof. Po-Chi Kuo, I designed a novel system that annotates breast mammogram images for regions highly suspisious of breast cancer. This system annotates breast masses and calcifications with a high accuracy.",
        icon: Briefcase
      },
      {
        title: "Undergraduate Research Assistant",
        company: "National Tsing Hua University TCLab",
        date: "January 2022 - March 2023",
        description: "Under the supervision of Prof. Ting-Chi Wang, I participated in the 2022 ICCAD Contest where I achieved a Global Top 10 in the contest.",
        icon: Briefcase
      }
    ]);
    const educationTimelineItems = ref([
      {
        icon: GraduationCap,
        date: "September 2024 - June 2026 (Projected)",
        institution: "University of California, San Diego",
        degree: "Master of Science in Computer Science and Engineering",
        description: "Focusing on Machine Learning and Artificial Intelligence."
      },
      {
        icon: GraduationCap,
        date: "September 2019 - June 2023",
        institution: "National Tsing Hua University",
        degree: "Bachelor of Science in Computer Science",
        description: "Participated in the 2022 ICCAD Contest where I achieved a Global Top 10 in the contest. Focused on Machine Learning and Artificial Intelligence."
      }
    ]);
    const showPopup = ref(false);
    const selectedProject = ref(null);
    const closePopup = () => {
      showPopup.value = false;
    };
    const truncateDescription = (description, maxLength = 100) => {
      if (description.length <= maxLength)
        return description;
      return description.slice(0, maxLength) + "...";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_CircularProgress = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-textColor" }, _attrs))} data-v-fa2d4a37>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<div data-v-fa2d4a37><section id="home" class="section bg-cover bg-center flex flex-col items-center justify-center text-center" data-v-fa2d4a37><div class="section-content bg-grey-700 bg-opacity-70 p-4 sm:p-8 rounded-lg max-w-4xl mx-auto" data-v-fa2d4a37><h1 class="text-4xl sm:text-6xl font-bold mb-4 font-gothic-neo text-white" data-v-fa2d4a37>${ssrInterpolate(name.value)}</h1><p class="text-xl sm:text-2xl mb-6 font-times-new-roman text-white" data-v-fa2d4a37>${ssrInterpolate(tagline.value)}</p><p class="text-lg sm:text-xl mb-6 font-times-new-roman text-white" data-v-fa2d4a37>background pc: The Dune by Allen Lu</p><div class="flex justify-center space-x-4 sm:space-x-20" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="btn" data-v-fa2d4a37>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.icon), null, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></section><section id="about" class="section bg-honeyPeach" data-v-fa2d4a37><div class="section-content" data-v-fa2d4a37><h2 class="text-2xl sm:text-3xl font-semibold mb-6 text-center" data-v-fa2d4a37>About Me</h2><div class="flex flex-col lg:flex-row" data-v-fa2d4a37><div class="w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0" data-v-fa2d4a37><img${ssrRenderAttr("src", _imports_0)} alt="About Me" class="w-full h-auto object-cover rounded-lg mb-4" data-v-fa2d4a37><div class="text-center" data-v-fa2d4a37><p class="mb-2 font-times-new-roman" data-v-fa2d4a37>I am actively seeking 2025 summer internships!</p><p class="mb-2 font-times-new-roman" data-v-fa2d4a37> Connect with me on <a href="https://linkedin.com/in/aaaallleen119" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-times-new-roman" data-v-fa2d4a37> LinkedIn </a></p><p class="mb-2 font-times-new-roman" data-v-fa2d4a37> Contact me via <a href="mailto:chiaen119@gmail.com" class="text-blue-600 hover:text-blue-800 underline font-times-new-roman" data-v-fa2d4a37> chiaen119@gmail.com </a></p></div></div><div class="w-full lg:w-2/3" data-v-fa2d4a37><p class="text-lg font-times-new-roman mt-4 lg:mt-12" data-v-fa2d4a37>${ssrInterpolate(about.value)}</p><p class="text-lg font-times-new-roman flex flex-wrap mt-8 lg:mt-12" data-v-fa2d4a37>I am a driven worker that strives under pressure. I work well both individually and as a team. My areas of expertise are computer science, machine learning application, and design. Below are highlights of my technical skills:</p><div class="flex flex-wrap justify-between mb-6 mt-8 lg:mt-12" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(skillsWithLevels.value, (skill) => {
        _push(`<div class="w-1/2 sm:w-1/4 mb-4" data-v-fa2d4a37>`);
        _push(ssrRenderComponent(_component_CircularProgress, {
          percentage: skill.level,
          skillName: skill.name
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex flex-wrap" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(otherSkills.value, (skill) => {
        _push(`<span class="bg-[#D8C8BD] text-gray-800 px-3 py-1 rounded-full mr-2 mb-2 text-sm" data-v-fa2d4a37>${ssrInterpolate(skill)}</span>`);
      });
      _push(`<!--]--></div></div></div></div></section><section id="resume" class="section bg-peachPuree relative" data-v-fa2d4a37><div class="section-content flex flex-col lg:flex-row" data-v-fa2d4a37><div class="w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0" data-v-fa2d4a37><div class="sticky-content" data-v-fa2d4a37><div class="cv-section" data-v-fa2d4a37><h2 class="text-l font-semibold mb-4" data-v-fa2d4a37>Curriculum Vitae</h2><h2 class="text-2xl sm:text-3xl font-semibold mb-4 font-times-new-roman text-black" data-v-fa2d4a37>More of my credentials</h2><p class="text-lg" data-v-fa2d4a37> Here is my `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resume",
        class: "text-blue-600 hover:text-blue-800 underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Curriculum Vitae`);
          } else {
            return [
              createTextVNode("Curriculum Vitae")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></div></div></div><div class="w-full lg:w-2/3 lg:pl-8" data-v-fa2d4a37><h2 class="text-2xl sm:text-3xl font-semibold mb-4 text-[#d45b61]" data-v-fa2d4a37>Work Experience</h2><div class="timeline" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(workTimelineItems.value, (item, index2) => {
        _push(`<div class="timeline-item" data-v-fa2d4a37><div class="timeline-icon" data-v-fa2d4a37>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { size: "24" }, null), _parent);
        _push(`</div><div class="timeline-content" data-v-fa2d4a37><div class="timeline-date" data-v-fa2d4a37>${ssrInterpolate(item.date)}</div><h3 class="timeline-title text-black" data-v-fa2d4a37>${ssrInterpolate(item.company)}</h3></div><div class="timeline-details" data-v-fa2d4a37><h4 class="timeline-company" data-v-fa2d4a37>${ssrInterpolate(item.title)}</h4><p class="timeline-description" data-v-fa2d4a37>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><h2 class="text-2xl sm:text-3xl font-semibold mb-4 mt-8 text-[#4a90e2]" data-v-fa2d4a37>Education</h2><div class="timeline" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(educationTimelineItems.value, (item, index2) => {
        _push(`<div class="timeline-item" data-v-fa2d4a37><div class="timeline-icon" data-v-fa2d4a37>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { size: "24" }, null), _parent);
        _push(`</div><div class="timeline-content" data-v-fa2d4a37><div class="timeline-date" data-v-fa2d4a37>${ssrInterpolate(item.date)}</div><h3 class="timeline-title text-black" data-v-fa2d4a37>${ssrInterpolate(item.institution)}</h3></div><div class="timeline-details" data-v-fa2d4a37><h4 class="timeline-company" data-v-fa2d4a37>${ssrInterpolate(item.degree)}</h4><p class="timeline-description" data-v-fa2d4a37>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section id="projects" class="section bg-peachPink" data-v-fa2d4a37><div class="section-content" data-v-fa2d4a37><h2 class="text-2xl sm:text-3xl font-semibold mb-8 text-center" data-v-fa2d4a37>Projects</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(projects.value, (project) => {
        _push(`<div class="bg-white bg-opacity-50 rounded-lg p-6 aspect-square flex flex-col justify-between cursor-pointer transform transition-transform duration-300 hover:scale-105" data-v-fa2d4a37><h3 class="text-xl font-semibold mb-4" data-v-fa2d4a37>${ssrInterpolate(project.name)}</h3><p class="text-sm mb-4 flex-grow" data-v-fa2d4a37>${ssrInterpolate(truncateDescription(project.description))}</p><div class="flex flex-wrap" data-v-fa2d4a37><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2 text-xs" data-v-fa2d4a37>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(ProjectPopup, {
        show: showPopup.value,
        Project: selectedProject.value,
        onClose: closePopup
      }, null, _parent));
      _push(`<section id="blog" class="section bg-peachPearl" data-v-fa2d4a37><div class="section-content" data-v-fa2d4a37><h2 class="text-2xl sm:text-3xl font-semibold mb-4" data-v-fa2d4a37>Blog Posts</h2><ul class="space-y-4" data-v-fa2d4a37><!--[-->`);
      ssrRenderList(blogPosts.value, (post) => {
        _push(`<li class="bg-white bg-opacity-50 rounded-lg p-4" data-v-fa2d4a37><h3 class="text-lg font-medium" data-v-fa2d4a37>${ssrInterpolate(post.title)}</h3><p data-v-fa2d4a37>${ssrInterpolate(post.date)}</p></li>`);
      });
      _push(`<!--]--></ul></div></section><section id="contact" class="section bg-pristine" data-v-fa2d4a37><div class="section-content" data-v-fa2d4a37><h2 class="text-2xl sm:text-3xl font-semibold mb-4" data-v-fa2d4a37>Contact Me</h2><p data-v-fa2d4a37>Email: ${ssrInterpolate(email.value)}</p></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa2d4a37"]]);

export { index as default };
//# sourceMappingURL=index-CFkBIlkr.mjs.map
