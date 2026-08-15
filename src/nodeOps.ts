import { createRenderer, h, type RendererOptions } from "@vue/runtime-dom";
import { compile } from "vue";

interface INode {
  id?: string;
}
interface IElement extends INode {
  elementName?: string;
}

interface ITextNode extends INode {
  text: string;
}

interface ICommentNode extends INode {
  commentText?: string;
}

type NodeOps = RendererOptions<INode, IElement>;

export const nodeOps: NodeOps = {
  insert(el, parent) {
    console.log(`inserted: ${el.id}, ${parent.elementName}`);
  },

  createComment(type): ICommentNode {
    const comment = { commentText: type } satisfies ICommentNode;
    console.log(`comment: ${comment.commentText}`);
    return comment;
  },

  createElement(type) {
    const elm = { elementName: type } satisfies IElement;
    console.log(`create element: ${elm.elementName}`);
    return elm;
  },

  createText(text): ITextNode {
    console.log(`create text: ${text}`);
    return { text };
  },

  nextSibling(_node) {
    return null;
  },

  parentNode(_node) {
    return null;
  },

  patchProp(_el, _key, _prevValue, _nextValue) {},

  remove(_el) {},

  setElementText(node, text) {
    console.log(`set element text: element:${node.elementName} to ${text}`);
  },

  setText(node, text) {
    console.log(`set element text: node:${node.id} to ${text}`);
  },
};

export function render() {
  const renderer = createRenderer<INode, IElement>(nodeOps);
  renderer.render(
    h(
      compile(`
        <Foo>
          a
        </Foo>
      `),
    ),
    {},
  );
}
