<template>
    <NuxtLink :to="href" :class="linkClass">{{name}}</NuxtLink>
</template>

<script setup>
import {toRefs} from 'vue'


// props
const props = defineProps({
    href: String,
    name: String
})


// variable
const {href, name} = toRefs(props)


// class
const linkClass = 'hover:underline hover:underline-offset-2'
</script>

<style>

</style>