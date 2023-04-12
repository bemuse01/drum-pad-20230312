<template>
    <div
        :class="padCellClassByStrength"
    >
        <slot></slot>
        <!-- <img :src="pad.instSrc"> -->
    </div>
</template>

<script setup>
// props
const props = defineProps({
    strength: {
        type: Number,
        default: 0
    },
    bgColorList: {
        type: Array,
        default: []
    }
})
const {strength, bgColorList} = toRefs(props)


// class
const padCellClass = 'cell min-w-[4rem] flex-1 aspect-square rounded-lg overflow-hidden'
const padCellClassByStrength = computed(() => padCellClass + ' ' + bgColorList.value[strength.value])
 

// method
// const setCellStrength = (cell) => {
//     cell.strength = (cell.strength + 1) % bgColorList.length
// }
// const onClickCell = (key, key2) => {
//     const cell = pads.value[key].cells[key2]

//     setCellStrength(cell)
// }
</script>

<style scoped>
.cell{
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.35);
}
</style>