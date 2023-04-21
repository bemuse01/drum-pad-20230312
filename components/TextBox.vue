<template>
    <div :class="classes.box">

        <p
            :class="classes.label"
        >
            {{labelName}}
        </p>
        <input 
            :type="type" 
            :class="classes.input"
        >

    </div>
</template>

<script setup>
import {ref, toRefs} from 'vue'


// props
const props = defineProps({
    labelName: String,
    type: {
        type: String,
        default: 'text'
    }
})


// variable
const {labelName, type} = toRefs(props)


// class
const classes = reactive({
    box: 'text-box w-full h-[60px] flex flex-col gap-1',
    label: 'text-base',
    input: 'w-full h-full bg-slate-700 rounded py-1 px-3 focus:border-sky-400 focus:border-2'
})


</script>

<style scoped>
input{
    outline: none;
}
</style>