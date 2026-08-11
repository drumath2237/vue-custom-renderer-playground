import { createRenderer, defineComponent, h, type RendererOptions } from "@vue/runtime-dom";

interface INode {}
interface IElement extends INode {}

type NodeOps = RendererOptions<INode, IElement>;

export const nodeOps: NodeOps = {
  insert(_el, _parent) {},
  createComment(_text) {
    return {};
  },
  createElement(_type) {
    return {};
  },
  createText(_text) {
    return {};
  },
  nextSibling(_node) {
    return null;
  },
  parentNode(_node) {
    return null;
  },
  patchProp(_el, _key, _prevValue, _nextValue) {},
  remove(_el) {},
  setElementText(_node, _text) {},
  setText(_node, _text) {},
};

export function render() {
  const renderer = createRenderer<INode, IElement>(nodeOps);
  renderer.render(h(defineComponent({})), {});
}
