<template>
    <div 
        :class="containerClass"
    >

        <div 
            :class="wrapperClass"
        >


            <pads-box :thumbPaths="instThumbPaths"/>

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
const {setInstPaths} = store
const {getMenuFlag, getCurrentInst} = storeToRefs(store)


// variable
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'})

const instThumbGlob = getImageGlob('instThumb')
const instThumbPaths = ref(Object.keys(instThumbGlob).sort(collator.compare).map(e => instThumbGlob[e]['default']))


// class
const containerClass = 'pad-container w-auto h-[100vh] mx-auto flex justify-center items-center'
const wrapperClass = 'flex flex-col gap-2 w-auto h-[100vh] relative overflow-hidden p-3'


// method
const loadInst = () => {
    const instGlob = getInstGlob(getCurrentInst.value)
    const instPaths = Object.keys(instGlob).sort(collator.compare).map(e => instGlob[e]['default'])
    setInstPaths(instPaths)
}


// watch
watch(getCurrentInst, (cur, pre) => {
    loadInst()
})


// hook
onBeforeMount(() => {
    loadInst()
})


// head
useHead({
    title: 'Pad - Drum Pad',
})
</script>

<style scoped>
</style>