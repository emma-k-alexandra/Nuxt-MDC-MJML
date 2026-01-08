<script setup lang="ts">
const slots = defineSlots<{
  default(): any
}>()
</script>
<template>
  <slot v-if="slots.default()[0]?.type?.tag === 'img'" />
  <mj-text v-else>
    <slot />
  </mj-text>
</template>
