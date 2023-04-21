import {defineStore} from 'pinia'

export const usePadStore = defineStore('pad', () => {
    const insts = ref([
        {name: 'rock'}, 
        {name: 'jazz'}, 
        {name: 'hiphop'}, 
        {name: 'percussion'}
    ])
    const currentInst = ref('rock')
    const tempos = ref([
        {
            name: '3/4',
            value: 3 * 4
        },
        {
            name: '4/4',
            value: 4 * 4
        }
    ])
    const tempo = ref(4 * 4)
    const currentBeat = ref(0)
    const bpm = ref(100)
    const minBpm = 53
    const maxBpm = 197
    const nowPlaying = ref(false)
    const clearFlag = ref(true)
    const randomFlag = ref(true)
    const menuFlag = ref(false)
    const instPaths = ref([])


    // getters
    const getTempoCount = computed(() => tempo.value)
    const intervalTime = computed(() => 60000 / bpm.value / (getTempoCount.value / 4))
    const getCurrentBeat = computed(() => currentBeat.value)
    const getNowPlaying = computed(() => nowPlaying.value)
    const getClearFlag = computed(() => clearFlag.value)
    const getRandomFlag = computed(() => randomFlag.value)
    const getInsts = computed(() => insts.value)
    const getMenuFlag = computed(() => menuFlag.value)
    const getCurrentInst = computed(() => currentInst.value)
    const getInstPaths = computed(() => instPaths.value)
    const getBpm = computed(() => bpm.value)
    const getTempos = computed(() => tempos.value)


    // actions
    const resetBeat = () => {
        currentBeat.value = 0
    }
    const increaseCurrentBeat = () => {
        currentBeat.value = (currentBeat.value + 1) % getTempoCount.value
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
        currentBeat,
        tempo,
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
        getTempoCount,
        getTempos,
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