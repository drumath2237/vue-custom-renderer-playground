<script setup lang="ts">
import { Fragment, h, onMounted, useTemplateRef } from "vue";
import { render, showdownNodeTree } from "./nodeOps";

const slots = defineSlots<{ default?: () => any }>();

const renderDiv = useTemplateRef("renderDiv");

onMounted(() => {
  if (renderDiv.value) {
    const rootElement = render(h(Fragment, null, slots.default?.() ?? []));
    renderDiv.value.textContent = showdownNodeTree({ node: rootElement });
  }
});
</script>

<template>
  <div ref="renderDiv"></div>
  <slot></slot>
</template>
