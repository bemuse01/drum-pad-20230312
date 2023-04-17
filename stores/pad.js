import {defineStore} from 'pinia'

export const usePadStore = defineStore('pad', () => {
    const insts = ['rock', 'jazz', 'hiphop', 'percussion']
    const currentInstNum = ref(0)
    const currentBeat = ref(0)
    const beats = ref(4 * 4)
    const bpm = ref(100)
    const nowPlaying = ref(false)
    const clearFlag = ref(true)
    const randomFlag = ref(true)
    const menuFlag = ref(false)


    // getters
    const intervalTime = computed(() => 60000 / bpm.value / (beats.value / 4))
    const getCurrentBeat = computed(() => currentBeat.value)
    const getNowPlaying = computed(() => nowPlaying.value)
    const getClearFlag = computed(() => clearFlag.value)
    const getRandomFlag = computed(() => randomFlag.value)
    const getInsts = computed(() => insts)
    const getMenuFlag = computed(() => menuFlag.value)


    // actions
    const resetBeat = () => {
        currentBeat.value = 0
    }
    const increaseCurrentBeat = () => {
        currentBeat.value = (currentBeat.value + 1) % beats.value
    }
    const toggleNowPlaying = () => {
        nowPlaying.value = !nowPlaying.value
    }
    const toggleClearFlag = () => {
        clearFlag.value = !clearFlag.value
    }
    const toggleRandomFlag = () => {
        randomFlag.value = !randomFlag.value
    }
    const toggleMenuFlag = () => {
        menuFlag.value = !menuFlag.value
    }

    // const test = ref(0)
    // const increment = () => {
    //     test.value += 1
    // }

    return{
        beats,
        intervalTime,
        getCurrentBeat,
        getNowPlaying,
        getClearFlag,
        getRandomFlag,
        getInsts,
        getMenuFlag,
        increaseCurrentBeat,
        toggleNowPlaying,
        resetBeat,
        toggleClearFlag,
        toggleRandomFlag,
        toggleMenuFlag
    }
})