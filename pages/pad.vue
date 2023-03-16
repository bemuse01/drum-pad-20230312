<template>
    <div 
        :class="containerClass"
    >

        <pads-box :count="count" :beats="beats" />

        <div
            :class="controlBoxClass"
        >
        </div>

    </div>
</template>

<script setup>
import {} from 'vue'


// variable
const instruments = ['rock', 'jazz', 'hiphop', 'percussion']
const count = 12
const beats = ref(4 * 4)


// class
const containerClass = 'pad-container w-[80%] h-[100vh] py-4 mx-auto flex flex-col gap-2'
const controlBoxClass = 'control-box w-full h-[4rem]'


// head
useHead({
    title: 'Pad - Drum Pad',
})
</script>

<style scoped>

</style>