<template>
    <div
        @click="onClickButton"
    >
        <img :class="imgClass" :src="setImgPath">
    </div>
</template>

<script setup>
import {getImagePath} from '~/assets/js/method.js'
import {usePadStore} from '~/stores/pad.js'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {increaseCurrentBeat, toggleNowPlaying, resetBeat} = store
const {intervalTime, getNowPlaying} = storeToRefs(store)
// console.log(intervalTime.value)


// variable
const interval = ref(null)
const playImgPath = getImagePath('play.png')
const stopImgPath = getImagePath('stop.png')
const setImgPath = computed(() => getNowPlaying.value ? stopImgPath : playImgPath)


// class
const imgClass = 'w-[50%] aspect-square'


// method
const stop = () => {
    clearTimeout(interval.value)
    resetBeat()
}
// 
const setInterval = () => {
    increaseCurrentBeat()
    interval.value = setTimeout(setInterval, intervalTime.value)
}
const play = () => {
    setTimeout(setInterval, intervalTime.value)
}
// 
const toggleState = () => {
    toggleNowPlaying()
}
const onClickButton = () => {
    if(getNowPlaying.value){
        stop()
    }else{
        play()
    }

    toggleState()
}
</script>

<style>

</style>