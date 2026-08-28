<script setup>
import { ElementA, ElementB, ElemenTree } from "../lib/";
</script>

<template>
  <p>Hello</p>

  <ElemenTree>
    <ElementA>
      <ElementB>
        <ElementA />
        <ElementB />
      </ElementB>
    </ElementA>
  </ElemenTree>
</template>
