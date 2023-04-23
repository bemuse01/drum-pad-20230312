<template>
    <div 
        :class="boxClass"
    >

        <pads-cell-box
            class="max-sm:min-w-[60rem]"
            v-for="pad in pads"
            :key="pad.key"
        >

            <pads-cell
                class="left-0 sticky"
                :currentBeat="-1"
            >
                <img :src="pad.thumbPath">
            </pads-cell>

            <pads-cell
                v-for="cell in pad.cells"
                :key="cell.key"
                :idx="cell.key"
                :padKey="pad.key"
            >
            </pads-cell>

        </pads-cell-box>

    </div>
</template>

<script setup>
import {usePadStore} from '~/stores/pad.js'
// import {v4 as uuidv4} from 'uuid'
import {storeToRefs} from 'pinia'


// store
const store = usePadStore()
// const {} = store
const {getTempoCount} = storeToRefs(store)


// props
const props = defineProps({
    thumbPaths: Array,
})
const {thumbPaths} = toRefs(props)


// variable
const pads = computed(() => thumbPaths.value.map((thumbPath, key) => ({
    key,
    thumbPath,
    cells: Array.from({length: getTempoCount.value}, (_, key2) => ({
        key: key2,
    }))
})))


// class
const boxClass = 'pads-box pr-1 pb-1 flex-1 flex flex-col overflow-auto gap-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
</script>

<style scoped>
</style>