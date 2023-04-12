<template>
    <div 
        :class="containerClass"
    >

        <pads-box>

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
                    :strength="cell.strength"
                    :bgColorList="bgColorList"
                    @click="onClickCell(pad.key, cell.key)"
                >
                </pads-cell>

            </pads-cell-box>

        </pads-box>

        <div
            :class="controlBoxClass"
        >
        </div>

    </div>
</template>

<script setup>
// import {onMounted} from 'vue'
import {getImagePaths, getInstThumbPaths} from '~/assets/js/method.js'


// variable
const instThumbs = getInstThumbPaths()
const instCount = Object.keys(instThumbs).length
const instThumbName = 'inst_'
const instThumbPath = '/assets/src/img/instThumb/' + instThumbName
const getInstThumbPath =  (num) => instThumbs[`${instThumbPath}${num}.png`]['default']

const beats = ref(4 * 4)
const instKind = ['rock', 'jazz', 'hiphop', 'percussion']
const bgColorList = ['bg-slate-700', 'bg-rose-400', 'bg-yellow-400']

const pads = ref(Array.from({length: instCount}, (_, key) => ({
    key,
    thumbPath: getInstThumbPath(key + 1),
    cells: Array.from({length: beats.value}, (_, key2) => ({
        key: key2,
        strength: 0
    }))
})))


// class
const containerClass = 'pad-container w-[80%] h-[100vh] py-4 mx-auto flex flex-col gap-2'
const controlBoxClass = 'control-box w-full h-[4rem]'


// method
const playSoundByClick = () => {

}
const setCellStrength = (cell) => {
    cell.strength = (cell.strength + 1) % bgColorList.length
}
const onClickCell = (key, key2) => {
    const cell = pads.value[key].cells[key2]

    setCellStrength(cell)
}


// hook
// onMounted(() => {
// })


// head
useHead({
    title: 'Pad - Drum Pad',
})
</script>

<style scoped>

</style>