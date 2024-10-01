import { _ as __nuxt_component_0 } from './NavBar-6AWSFbY1.mjs';
import { useSSRContext, defineComponent, computed, mergeProps } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue/server-renderer/index.mjs';
import { u as useRuntimeConfig } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-BkJVxiVx.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/h3/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/devalue/index.js';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
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
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "resume",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const baseUrl = config.app.baseURL || "/";
    const resumeUrl = computed(() => `${baseUrl}resume.pdf`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-textColor" }, _attrs))} data-v-fe7c3c1f>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<div data-v-fe7c3c1f><section id="resume" class="section bg-peachPuree" data-v-fe7c3c1f><div class="section-content" data-v-fe7c3c1f><h2 class="text-3xl font-semibold mb-4 font-times-new-roman" data-v-fe7c3c1f>Curriculum Vitae</h2><embed${ssrRenderAttr("src", resumeUrl.value)} type="application/pdf" width="100%" height="800px" class="border border-gray-300 shadow-lg" data-v-fe7c3c1f></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resume = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fe7c3c1f"]]);

export { resume as default };
//# sourceMappingURL=resume-CwbIaEvl.mjs.map
