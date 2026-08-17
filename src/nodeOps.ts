import { createRenderer, h, type RendererOptions } from "@vue/runtime-dom";

import Foo from "./Foo.vue";

import {
  isElementTypeString,
  type ElementA,
  type ElementB,
  type Elements,
  type InvalidElement,
  type Nodes,
  type NullNode,
  type RootElement,
  type TextNode,
} from "./nodes";

type NodeOps = RendererOptions<Nodes, Elements>;

export const nodeOps: NodeOps = {
  insert(el, parent) {
    el.parent = parent;
    parent.children.push(el);
    console.log(`inserted:`, el, "parent:", parent);
  },

  createComment(_type): NullNode {
    const nullNode = {
      nodeType: "NullNode",
      parent: null,
      type: "NODE",
    } satisfies NullNode;
    return nullNode;
  },

  createElement(type): Elements {
    console.log("create element:", type);
    const invalidElement = {
      nodeType: "InvalidElement",
      children: [],
      parent: null,
      reason: `invalid node type string:${type}`,
      id: "invalid",
      type: "ELEMENT",
    } satisfies InvalidElement;
    if (!isElementTypeString(type)) {
      return invalidElement;
    }

    switch (type) {
      case "ElementA":
        return {
          nodeType: "ElementA",
          children: [],
          parent: null,
          id: crypto.randomUUID(),
          type: "ELEMENT",
        } satisfies ElementA;
      case "ElementB":
        return {
          nodeType: "ElementB",
          children: [],
          parent: null,
          id: crypto.randomUUID(),
          type: "ELEMENT",
        } satisfies ElementB;
      default:
        return invalidElement;
    }
  },

  createText(text): TextNode {
    console.log(`create text: ${text}`);
    return { text, nodeType: "TextNode", parent: null, type: "NODE" };
  },

  nextSibling(node) {
    console.log("next sibling:", node);
    return null;
  },

  parentNode(node) {
    return node.parent;
  },

  patchProp(_el, _key, _prevValue, _nextValue) {
    console.log("patch prop", _el, _key, _prevValue, _nextValue);
  },

  remove(_el) {},

  setElementText(node, text) {
    console.log(`set element text:`, text, "to", node);
  },

  setText(node, text) {
    console.log(`set element text: node:`, text, "to", node);
  },
};

export function render() {
  const renderer = createRenderer<Nodes, Elements>(nodeOps);

  const rootElement = {
    id: "root",
    parent: null,
    children: [],
    nodeType: "RootElement",
    type: "ELEMENT",
  } satisfies RootElement;
  renderer.render(h(Foo), rootElement);
  return rootElement;
}

export function showdownNodeTree(prop: {
  node: Nodes;
  depth?: number;
  lastInChildren?: boolean;
}): string {
  const { node, depth, lastInChildren } = { depth: 0, lastInChildren: false, ...prop };

  let output = "";

  for (let i = 0; i < depth - 1; i++) {
    output += "│    ";
  }

  let indexingChar = "";
  if (depth === 0) {
    indexingChar = "";
  } else if (lastInChildren) {
    indexingChar = "└─";
  } else {
    indexingChar = "├─";
  }
  output += `${indexingChar} ${node.nodeType}\n`;

  if (node.type === "NODE") {
    return output;
  }

  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const isLast = i === node.children.length - 1;
      output += showdownNodeTree({ node: child, depth: depth + 1, lastInChildren: isLast });
    }
  }

  return output;
}
