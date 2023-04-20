<template>
    <div
    
    >
        <div :class="classes.wrapper">
            <input type="number" v-model="bpm" :class="classes.input"/>
            <button :class="classes.button">+</button>
            <button :class="classes.button">-</button>
        </div>
    </div>
</template>

<script setup>
import {usePadStore} from '~/stores/pad.js'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {increaseBpm, decreaseBpm} = store
const {bpm} = storeToRefs(store)


const classes = reactive({
    wrapper: 'h-[60%] flex',
    input: 'w-[4rem] h-full text-xl',
    button: 'w-[2rem] h-full text-white bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500'
})
</script>

<style scoped>
input{
    text-align: center;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
</style>