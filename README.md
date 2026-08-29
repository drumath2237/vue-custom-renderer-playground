# "ElemenTree" - Vue Custom Renderer Playground

## About

A practice implementation for Vue Custom Renderer.
The component `<ElemenTree/>` renders its structure of children components as a tree ASCII characters.

If you write a SFC like below,

```vue
<!-- App.vue -->

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
```

the browser running this app will render like below.

```txt
Hello

RootElement
└─ ElementA
    └─ ElementB
        ├─ ElementA
        └─ ElementB
```

These are characters that are rendered by `ElemenTree` custom characters.

## Tested Environment

- Windowns 11 Homw (Pwowes)
- Node.js 24.16.0
- pnpm

## Install & Usage

## Author

[@drumath2237](https://x.com/ninisan_drumath)
