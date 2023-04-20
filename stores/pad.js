import {defineStore} from 'pinia'

export const usePadStore = defineStore('pad', () => {
    const insts = ref(['rock', 'jazz', 'hiphop', 'percussion'])
    const currentInst = ref('rock')
    const currentBeat = ref(0)
    const beats = ref(4 * 4)
    const bpm = ref(100)
    const minBpm = 53
    const maxBpm = 197
    const nowPlaying = ref(false)
    const clearFlag = ref(true)
    const randomFlag = ref(true)
    const menuFlag = ref(false)
    const instPaths = ref([])


    // getters
    const intervalTime = computed(() => 60000 / bpm.value / (beats.value / 4))
    const getCurrentBeat = computed(() => currentBeat.value)
    const getNowPlaying = computed(() => nowPlaying.value)
    const getClearFlag = computed(() => clearFlag.value)
    const getRandomFlag = computed(() => randomFlag.value)
    const getInsts = computed(() => insts.value)
    const getMenuFlag = computed(() => menuFlag.value)
    const getCurrentInst = computed(() => currentInst.value)
    const getInstPaths = computed(() => instPaths.value)
    const getBpm = computed(() => bpm.value)


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
    const setInstPaths = (value) => {
        instPaths.value = value
    }
    const setBpm = (value) => {
        bpm.value = value
    }
    const increaseBpm = () =>{ 
        if(bpm.value < maxBpm) bpm.value++
    }
    const decreaseBpm = (value) => {
        if(bpm.value > minBpm) bpm.value--
    }

    // const test = ref(0)
    // const increment = () => {
    //     test.value += 1
    // }

    return{
        beats,
        bpm,
        maxBpm,
        minBpm,
        currentBeat,
        currentInst,
        intervalTime,
        getCurrentBeat,
        getNowPlaying,
        getClearFlag,
        getRandomFlag,
        getInsts,
        getMenuFlag,
        getCurrentInst,
        getInstPaths,
        getBpm,
        increaseCurrentBeat,
        toggleNowPlaying,
        resetBeat,
        toggleClearFlag,
        toggleRandomFlag,
        toggleMenuFlag,
        setInstPaths,
        setBpm,
        increaseBpm,
        decreaseBpm
    }
})