<template>
    <div
        :class="sideClass"
    >
        
        <!-- <menu-option name="Instrument"></menu-option>
        <menu-option name="Beat"></menu-option> -->
        <menu-option-select name="Instrument" :list="getInsts" v-model="currentInst"/>

    </div>
</template>

<script setup>
import {usePadStore} from '~/stores/pad.js'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {currentInst, getInsts} = storeToRefs(store)


// class
const sideClass = 'menu-side absolute top-0 right-0 w-[24rem] h-full p-4 overflow-auto'


// watch(currentInst, (cur, pre) => {
//     console.log(currentInst.value)
// })
</script>

<style>
.menu-side{
    background: rgba(0, 0, 0, 0.75);
}
</style>