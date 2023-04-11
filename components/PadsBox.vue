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
            >
                <img :src="pad.instSrc">
            </div>

            <div
                v-for="cell in pad.cells"
                :class="padCellClassByStrength(cell.strength)"
                :key="cell.key"
                @click="onClickCell(pad.key, cell.key)"
            >
            </div>

        </div>

    </div>
</template>

<script setup>
import {ref, toRefs, computed} from 'vue'
import {getImagePaths} from '~/assets/js/method.js'
import {usePadStore} from '~/stores/pad.js'


// store
const store = usePadStore()


// props
const props = defineProps({
    count: Number,
    beats: Number,
})
const {count, beats} = toRefs(props)


// variable
const instSrcName = 'inst_'
const instSrcNames = Array.from({length: count.value}, (_, idx) => instSrcName + (idx + 1) + '.png')
const instSrcs = getImagePaths(instSrcNames)
const pads = ref(Array.from({length: count.value}, (_, key) => ({
    key,
    instSrc: instSrcs[key],
    cells: Array.from({length: beats.value}, (_, key2) => ({
        key: key2,
        strength: 0
    }))
})))
const bgColorList = ['bg-slate-700', 'bg-rose-300', 'bg-yellow-300']


// class
const boxClass = 'pads-box pr-1 pb-1 flex-1 flex flex-col overflow-auto gap-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
const padClass = 'flex gap-1'
const padCellClass = 'cell min-w-[4rem] flex-1 aspect-square rounded-lg overflow-hidden'
const padCellClassByStrength = computed(() => (strength) => padCellClass + ' ' + bgColorList[strength])
 

// method
const setCellStrength = (cell) => {
    cell.strength = (cell.strength + 1) % bgColorList.length
}
const onClickCell = (key, key2) => {
    const cell = pads.value[key].cells[key2]

    setCellStrength(cell)
}
</script>

<style scoped>
.cell{
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.35);
}
</style>