import { _ as __nuxt_component_0 } from "./NavBar-6AWSFbY1.js";
import { defineComponent, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { u as useRuntimeConfig } from "../server.mjs";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./nuxt-link-BkJVxiVx.js";
import "ufo";
import "hookable";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
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
export {
  resume as default
};
//# sourceMappingURL=resume-CwbIaEvl.js.map
