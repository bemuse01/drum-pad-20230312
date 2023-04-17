<template>
    <div
        :class="padCellClass"
        @click="onClickCell"
    >
        <slot></slot>
        <!-- <img :src="pad.instSrc"> -->
    </div>
</template>

<script setup>
import {usePadStore} from '~/stores/pad.js'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
const {getNowPlaying, getClearFlag} = storeToRefs(store)


// props
const props = defineProps({
    idx: {
        type: Number,
    },
    instPath: {
        type: String,
        default: ''
    },
    bgColorList: {
        type: Array,
        default: []
    },
    currentBeat: {
        type: Number,
    }
})
const {idx, instPath, bgColorList, currentBeat} = toRefs(props)


// variable
const isLoaded = ref(false)
const isPathEmpty = ref(instPath.value === '' ? true : false)
const strength = ref(0)
const audio = ref(null)
const maxStrength = bgColorList.value.length
const minVolume = 0
const stepVolume = (1 - minVolume) / (maxStrength - 1)


// class
const padCellBaseClass = 'cell min-w-[4rem] flex-1 aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-[0.85]'
const currentBgColor = computed(() => currentBeat.value === idx.value && getNowPlaying.value ? 'bg-lime-200': bgColorList.value[strength.value])
const padCellClass = computed(() => padCellBaseClass + ' ' + currentBgColor.value)


// method
const resetStrength = () => {
    strength.value = 0
}
// 
const playAudioByBeat = () => {
    if(idx.value === currentBeat.value && strength.value !== 0) playAudio()
}
// 
const playAudio = () => {
    audio.value.currentTime = 0
    audio.value.play()
}
const setVolume = () => {
    audio.value.volume = (minVolume + stepVolume * strength.value) * Math.min(strength.value, 1)
}
const increaseStrength = () => {
    strength.value = (strength.value + 1) % maxStrength
}
const onClickCell = () => {
    if(!isLoaded.value || isPathEmpty.value) return

    increaseStrength()
    setVolume()
    playAudio()
}
// 
const onLoadAudio = () => {
    isLoaded.value = true
}
const initAudio = () => {
    if(isPathEmpty.value) return

    audio.value = new Audio()
    audio.value.src = instPath.value

    audio.value.addEventListener('loadedmetadata', () => onLoadAudio())
}
const init = () => {
    initAudio()
}


// watch
watch(currentBeat, (cur, pre) => {
    playAudioByBeat()
})
watch(getClearFlag, (cur, pre) => {
    resetStrength()
})


// hook
onMounted(() => {
    init()
})
</script>

<style scoped>
.cell{
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.35);
}
</style>