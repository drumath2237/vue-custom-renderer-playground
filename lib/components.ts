import { defineComponent, h } from "vue";

function createElementComponent<T = {}>(tag: string) {
  return defineComponent<T>({
    name: tag,
    inheritAttrs: false,
    setup(props, { attrs, slots }) {
      return () => {
        return h(tag, { ...attrs, ...props }, slots.default?.() ?? []);
      };
    },
  });
}

export const ElementA = createElementComponent("ElementA");
export const ElementB = createElementComponent("ElementB");
