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

These are the characters rendered at `div.textContent` by `ElemenTree`.

## Tested Environment

- Windowns 11 Homw (Pwowes)
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

- `lib/` folder contains custom renderer implementations
- `src/` folder icontains Application logics that uses custom renderer in its App component.

## Author

[@drumath2237](https://x.com/ninisan_drumath)
