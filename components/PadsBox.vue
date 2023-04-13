<template>
    <div 
        :class="boxClass"
    >

        <pads-cell-box
            v-for="pad in pads"
            :key="pad.key"
        >

            <pads-cell>
                <img :src="pad.thumbPath">
            </pads-cell>

            <pads-cell
                v-for="cell in pad.cells"
                :key="cell.key"
                :instPath="pad.instPath"
                :bgColorList="bgColorList"
            >
            </pads-cell>

        </pads-cell-box>

    </div>
</template>

<script setup>
// import {usePadStore} from '~/stores/pad.js'


// store
// const store = usePadStore()
// store.increment()
// console.log(store.test)


// props
const props = defineProps({
    // count: Number,
    instPaths: Array,
    thumbPaths: Array,
    beats: Number,
})
const {instPaths, thumbPaths, beats} = toRefs(props)


// variable
const isInstsLoaded = ref(false)
const bgColorList = ['bg-slate-700', 'bg-yellow-400', 'bg-rose-400']
const pads = ref(thumbPaths.value.map((thumbPath, key) => ({
    key,
    thumbPath,
    instPath: instPaths.value[key],
    cells: Array.from({length: beats.value}, (_, key2) => ({
        key: key2,
    }))
})))


// class
const boxClass = 'pads-box pr-1 pb-1 flex-1 flex flex-col overflow-auto gap-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
 

// hook
onMounted(() => {
})
</script>

<style scoped>
</style>