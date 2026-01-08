<template>
  <MDCSlot unwrap="mj-text">
    <mj-image :src="refinedSrc" :alt :width :height />
  </MDCSlot>
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const {
  src = '',
  alt = '',
  width = undefined,
  height = undefined
} = defineProps<{
  src?: string,
  alt?: string,
  width?: number | string,
  height?: number | string
}>()

const refinedSrc = computed(() => {
  if (src?.startsWith('/') && !src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !src.startsWith(_base)) {
      return joinURL(_base, src)
    }
  }
  return src
})
</script>
