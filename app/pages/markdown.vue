<script setup lang="ts">
const markdown = `
# Hello World

Hi there
`
</script>

<template>
  <MDC :value="markdown" class="mdc-element" :tag="false" :toc="false" />
</template>
