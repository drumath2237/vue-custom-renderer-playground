<script setup lang="ts">
import { ref, onMounted } from "vue";

const foo = ref(0);

onMounted(() => {
  setTimeout(() => {
    foo.value = 42;
  }, 1000);
});
</script>

<template>
  <ElementA :foo="foo">
    <ElementB />
    <ElementB />
  </ElementA>
  <ElementA>
    <ElementB>
      <ElementA />
    </ElementB>
  </ElementA>
  <ElementA />
</template>
