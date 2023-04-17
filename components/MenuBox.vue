<template>
    <div
        :class="boxClass"
    >

        <div :class="bgClass" @click="onClickBg"></div>

        <menu-side />
        
    </div>
</template>

<script setup>
import {usePadStore} from '~/stores/pad.js'


// store
const store = usePadStore()
const {toggleMenuFlag} = store


// class
const boxClass = 'menu-box w-full h-full absolute'
const bgClass = 'w-full h-full absolute'


// method
const onClickBg = () => {
    toggleMenuFlag()
}
</script>

<style scoped>
</style>