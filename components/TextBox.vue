<template>
    <div :class="boxClass">

        <p
            :class="labelClass"
        >
            {{labelName}}
        </p>
        <input 
            type="text" 
            :class="inputClass"
        >

    </div>
</template>

<script setup>
import {ref, toRefs} from 'vue'


// props
const props = defineProps({
    labelName: String,
})


// variable
const {labelName} = toRefs(props)


// class
const boxClass = 'text-box w-full h-[60px] flex flex-col gap-1'
const labelClass = 'text-base'
const inputClass = 'w-full h-full'


</script>

<style scoped>

</style>