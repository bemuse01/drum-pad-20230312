<template>
    <div 
        :class="containerClass"
    >

        <div 
            :class="wrapperClass"
        >


            <pads-box :instPaths="instPaths" :thumbPaths="instThumbPaths"/>

            <control-box />

            <transition name="fade">
                <menu-box v-if="getMenuFlag" />
            </transition>

        </div>

    </div>
</template>

<script setup>
import {getImageGlob, getInstGlob} from '~/assets/js/method.js'
import {usePadStore} from '~/stores/pad.js'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {getMenuFlag} = storeToRefs(store)


// variable
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'})
const instThumbGlob = getImageGlob('instThumb')
const instThumbPaths = Object.keys(instThumbGlob).sort(collator.compare).map(e => instThumbGlob[e]['default'])
const instGlob = getInstGlob('rock')
const instPaths = ref(Object.keys(instGlob).sort(collator.compare).map(e => instGlob[e]['default']))
const interval = ref(null)


// class
const containerClass = 'pad-container w-[80%] h-[100vh] mx-auto flex justify-center items-center'
const wrapperClass = 'flex flex-col gap-2 w-full h-[98vh] relative overflow-hidden'


// head
useHead({
    title: 'Pad - Drum Pad',
})
</script>

<style scoped>
</style>