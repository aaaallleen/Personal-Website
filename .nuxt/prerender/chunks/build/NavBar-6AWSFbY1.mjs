import { _ as __nuxt_component_0$1 } from './nuxt-link-BkJVxiVx.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/macbook_pro_16/Desktop/personal-website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { id: "home", name: "Home" },
      { id: "about", name: "About" },
      { id: "resume", name: "Resume" },
      { id: "projects", name: "Projects" },
      { id: "blog", name: "Blog" },
      { id: "contact", name: "Contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white-swan shadow-md fixed w-full z-50" }, _attrs))} data-v-65a4a306><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-65a4a306><div class="flex justify-between h-16" data-v-65a4a306><div class="flex items-center" data-v-65a4a306>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-bold text-black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Allen Lu`);
          } else {
            return [
              createTextVNode("Allen Lu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex h-full" data-v-65a4a306><!--[-->`);
      ssrRenderList(sections, (section) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: section.id,
          to: { path: "/", hash: `#${section.id}` },
          class: "nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(section.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(section.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65a4a306"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=NavBar-6AWSFbY1.mjs.map
