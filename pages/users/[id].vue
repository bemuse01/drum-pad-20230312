<template>
    <div class="w-[720px] mx-auto">
        <div>{{path}}</div>
        <div>{{currentId}}</div>
        <div>{{meta}}</div>
        <test-button />
    </div>
</template>

<script setup>
import {computed} from 'vue'

const route = useRoute()

const currentId = computed(() => route.params.id)
const path = computed(() => route.fullPath)
const meta = computed(() => route.meta.title)

definePageMeta({
    title: 'users'
})
useHead({
  title: 'nuxt app - users',
})
</script>

<style scoped>

</style>