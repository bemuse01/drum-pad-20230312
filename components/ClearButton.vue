<template>
    <div
        @click="onClickButton"
    >
        <img :src="imgPath" :class="imgClass">   
    </div>
</template>

<script setup>
import {getImagePath} from '~/assets/js/method.js'
import {usePadStore} from '~/stores/pad.js'
// import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {toggleClearFlag} = store
// const {} = storeToRefs(store)


// variable
const imgPath = getImagePath('reset.png')


// class
const imgClass = 'w-[55%] aspect-square'


// method
const onClickButton = () => {
    toggleClearFlag()
}
</script>

<style scoped>

</style>