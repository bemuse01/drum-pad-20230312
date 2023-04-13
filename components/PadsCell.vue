<template>
    <div
        :class="padCellClassByStrength"
        @click="onClickCell()"
    >
        <slot></slot>
        <!-- <img :src="pad.instSrc"> -->
    </div>
</template>

<script setup>
// props
const props = defineProps({
    instPath: {
        type: String,
        default: ''
    },
    bgColorList: {
        type: Array,
        default: []
    }
})
const {instPath, bgColorList} = toRefs(props)


// variable
const strength = ref(0)
const audio = ref(null)
const maxStrength = bgColorList.value.length
const minVolume = 0.3
const stepVolume = (1 - minVolume) / (maxStrength - 1)

// class
const padCellClass = 'cell min-w-[4rem] flex-1 aspect-square rounded-lg overflow-hidden'
const padCellClassByStrength = computed(() => padCellClass + ' ' + bgColorList.value[strength.value])


// method
const onLoadAudio = () => {
    // isLoaded.value = true
    console.log('loaded')
}
const initAudio = () => {
    audio.value = new Audio()
    audio.value.src = instPath.value

    audio.value.addEventListener('loadedmetadata', () => onLoadAudio())
}
// 
const playAudio = () => {
    audio.value.currentTime = 0
    audio.value.play()
}
const setVolume = () => {

}
const setStrength = () => {
    strength.value = (strength.value + 1) % maxStrength
}
const onClickCell = () => {
    setStrength()
    playAudio()
}


// hook
onMounted(() => {
    initAudio()
})
</script>

<style scoped>
.cell{
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.35);
}
</style>