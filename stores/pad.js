import {defineStore} from 'pinia'

export const usePadStore = defineStore('pad', () => {
    const test = ref(0)

    const increment = () => {
        test.value += 1
    }

    return{
        test, increment
    }
})