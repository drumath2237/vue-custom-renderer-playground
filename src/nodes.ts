type NodeBase = {
  type: "NODE";
  parent: Elements | null;
};

type ElementBase = {
  type: "ELEMENT";
  parent: Elements | null;
  id: string;
  children: Nodes[];
};

export type RootElement = ElementBase & {
  nodeType: "RootElement";
};

export type ElementA = ElementBase & {
  nodeType: "ElementA";
};

export type ElementB = ElementBase & {
  nodeType: "ElementB";
};

export type InvalidElement = ElementBase & {
  nodeType: "InvalidElement";
  reason?: string;
};

export type TextNode = NodeBase & {
  nodeType: "TextNode";
  text: string;
};

export type InvalidNode = NodeBase & {
  nodeType: "InvalidNode";
  reason?: string;
};

export type NullNode = NodeBase & {
  nodeType: "NullNode";
};

export type Elements = RootElement | ElementA | ElementB | InvalidElement;
export type Nodes = Elements | TextNode | InvalidNode | NullNode;

type NodeTypeRecords<T extends Nodes> = {
  [K in T["nodeType"]]: true;
};

const nodeTypeRecords: NodeTypeRecords<Nodes> = {
  ElementA: true,
  ElementB: true,
  InvalidElement: true,
  TextNode: true,
  InvalidNode: true,
  NullNode: true,
  RootElement: true,
};

export function isNodeTypeString(type: string): type is Nodes["nodeType"] {
  return type in nodeTypeRecords;
}

const elementTypeRecords: NodeTypeRecords<Elements> = {
  ElementA: true,
  ElementB: true,
  InvalidElement: true,
  RootElement: true,
};

export function isElementTypeString(type: string): type is Elements["nodeType"] {
  return type in elementTypeRecords;
}
