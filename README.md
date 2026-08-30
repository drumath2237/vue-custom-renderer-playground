# "ElemenTree" - Vue Custom Renderer Playground

[![Deploy](https://github.com/drumath2237/vue-custom-renderer-playground/actions/workflows/deploy.yml/badge.svg)](https://github.com/drumath2237/vue-custom-renderer-playground/actions/workflows/deploy.yml)

## About

A playground using Vue Custom Renderer.
The component `<ElemenTree/>` shows the structure of its children as a tree made up of ASCII characters.

[Demo](https://drumath2237.github.io/vue-custom-renderer-playground/)

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

the app will render like below.

```txt
Hello

RootElement
└─ ElementA
    └─ ElementB
        ├─ ElementA
        └─ ElementB
```

These are the characters rendered at `div.textContent` by `ElemenTree`.

## Tested Environment

- Windowns 11 Home (Powershell)
- Node.js 24.16.0
- pnpm 11.21.0
- Vite+ 0.3.0
- Vue 3.5.42

## Install & Usage

```sh
# install deps
vp i

# launch vite dev server
vpr dev

# build project
vpr build
```

## Project Structure

```txt
/
├─ lib/
│    ├─ nodeOps.ts
│    └─ ElemenTree.vue
├─ src/
│    ├─ App.vue
│    └─ main.ts
├─ index.html
└─ package.json
```

- The `lib/` folder contains custom renderer implementations
- The `src/` folder contains application logic that uses a custom renderer in its App component

## Author

[@drumath2237](https://x.com/ninisan_drumath)
