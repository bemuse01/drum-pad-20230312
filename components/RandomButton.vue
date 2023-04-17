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
const {toggleRandomFlag} = store
// const {} = storeToRefs(store)


// variable
const imgPath = getImagePath('random.png')


// class
const imgClass = 'w-[55%] aspect-square'


// method
const onClickButton = () => {
    toggleRandomFlag()
}
</script>

<style scoped>

</style>