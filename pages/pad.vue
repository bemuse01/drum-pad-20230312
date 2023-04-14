<template>
    <div 
        :class="containerClass"
    >

        <pads-box :instPaths="instPaths" :thumbPaths="instThumbPaths"/>

        <control-box />

    </div>
</template>

<script setup>
import {getImageGlob, getInstGlob} from '~/assets/js/method.js'


// variable
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'})
const instThumbGlob = getImageGlob('instThumb')
const instThumbPaths = Object.keys(instThumbGlob).sort(collator.compare).map(e => instThumbGlob[e]['default'])
const instGlob = getInstGlob('rock')
const instPaths = ref(Object.keys(instGlob).sort(collator.compare).map(e => instGlob[e]['default']))
const interval = ref(null)


// class
const containerClass = 'pad-container w-[80%] h-[100vh] py-4 mx-auto flex flex-col gap-2'


// head
useHead({
    title: 'Pad - Drum Pad',
})
</script>

<style scoped>
</style>