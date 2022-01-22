---
title: Custom container
icon: customize
tags:
  - container
  - markdown
---

The plugin adds tip, note, info, warning, danger and detail container.

<!-- more -->

## Config

```js {5}
module.exports = {
  themeConfig: {
    mdEnhance: {
      // this is the default option, so you can use it directly
      container: true,
    },
  },
};
```

## Demo

::: info
Information container
:::

::: note
Note container
:::

::: tip
Tip container
:::

::: warning
Warning container
:::

::: danger
Dangerous container
:::

::: details
Details container
:::

::: info custom title
A custom information container
:::

::: note custom title
A custom note container
:::

::: tip custom title
A custom tip container
:::

::: warning custom title
A custom warning container
:::

::: danger custom Title
A custom danger container
:::

::: details custom title
A custom details container
:::

```md
::: info
Information container
:::

::: note
Note container
:::

::: tip
Tip container
:::

::: warning
Warning container
:::

::: danger
Dangerous container
:::

::: details
Details container
:::

::: info custom title
A custom information container
:::

::: note custom title
A custom note container
:::

::: tip custom title
A custom tip container
:::

::: warning custom title
A custom warning container
:::

::: danger custom Title
A custom danger container
:::

::: details custom title
A custom details container
:::
```