<template>
    <div
        :class="sideClass"
    >
        
        <!-- <menu-option name="Instrument"></menu-option>
        <menu-option name="Beat"></menu-option> -->
        <menu-cancel-button v-model="menuFlag" />
        <menu-option-select name="Instrument" :list="getInsts" v-model="currentInst"/>
        <menu-option-select name="Tempo" :list="getTempos" v-model.number="tempo"/>
        <menu-option-number name="BPM" :min="minBpm" :max="maxBpm" v-model.number="bpm" />

    </div>
</template>

<script setup>
import {usePadStore} from '~/stores/pad.js'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {minBpm, maxBpm} = store
const {currentInst, getInsts, bpm, getTempos, tempo, menuFlag} = storeToRefs(store)


// class
const sideClass = 'menu-side absolute top-0 right-0 w-[24rem] max-sm:w-full h-full p-4 overflow-auto'


// watch(currentInst, (cur, pre) => {
//     console.log(currentInst.value)
// })
</script>

<style>
.menu-side{
    background: rgba(0, 0, 0, 0.75);
}
</style>