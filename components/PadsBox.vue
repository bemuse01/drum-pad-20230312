<template>
    <div 
        :class="boxClass"
    >

        <div
            :class="padClass"
            v-for="pad in pads"
            :key="pad.key"
        >

            <div
                :class="padCellClass"
                v-for="cell in pad.cells"
                :key="cell.key"
            >
            </div>

        </div>

    </div>
</template>

<script setup>
import {toRefs, computed} from 'vue'


// props
const props = defineProps({
    count: Number,
    beats: Number,
})


// variable
const {count, beats} = toRefs(props)
const pads = computed(() => Array.from({length: count.value}, (_, key) => ({
    key,
    cells: Array.from({length: beats.value}, (_, key2) => ({key: key2}))
})))


// class
const boxClass = 'pads-box pr-1 flex-1 flex flex-col overflow-auto gap-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
const padClass = 'flex gap-1'
const padCellClass = 'flex-1 aspect-square bg-slate-700 rounded-lg'
</script>

<style>

</style>