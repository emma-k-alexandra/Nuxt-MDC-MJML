<script setup lang="ts">
const markdown = `
# Hello World

Hi there

## Lists

- Thing 1
- Thing 2
- Thing 3

1. First
2. Second
3. Third

### Lists with links

- Hi there
- Hello [World](https://google.com)
- How ya doin'?

1. First place [prize](https://google.com)
2. Second place [prize](https://google.com)
3. [Third place prize](https://google.com)

## Horizontal Rule

Hi

---

Hello

## Text

Hi **there** _this_ *is* ~~emma~~ \`who would do this\`

## Images

![Bucky Fucking Dent by David Duchovny](/bucky-dent.jpg)

Hello world

## Table

| Name | Description |
| - | - |
| Hello | World this is a longer piece of text |
| Hi | there |

## Code

Some \`inline code\` here

\`\`\`ts-lang [my-code.ts]
interface Hello {
  world: string
  there: number
}
\`\`\`

## Quotes

> This is a blockquote

Hello


`


</script>

<template>
  <MDC :value="markdown" class="mdc-element" :tag="false" :toc="false" />
</template>
