<template>
    <div
        :class="classes.option"
    >
        <span>{{name}}</span>

        <div :class="classes.wrapper">
            <input type="number" @input="e => updateValue(e.target.value)" :class="classes.input" :value="modelValue" disabled/>
            <button :class="classes.button" @click="onClickIncrease(10)">+10</button>
            <button :class="classes.button" @click="onClickDecrease(10)">-10</button>
            <button :class="classes.button" @click="onClickIncrease()">+1</button>
            <button :class="classes.button" @click="onClickDecrease()">-1</button>
        </div>

    </div>
</template>

<script setup>
import {toRefs} from 'vue'


// props
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    min: {
        type: Number,
        default : 0,
    },
    max: {
        type: Number,
        default: 100,
    },
    modelValue: Number
})


// emit
const emit = defineEmits(['update:modelValue'])


// variable
const {name, modelValue, min, max} = toRefs(props)
const classes = reactive({
    option: 'flex flex-row justify-between my-8 text-lime-500 text-2xl',
    wrapper: 'h-auto flex',
    input: 'w-[4rem] block h-full text-xl text-lime-500 bg-lime-500/[0.15]',
    button: 'px-2 h-full text-lg bg-lime-500/[0.35] hover:bg-lime-600 active:bg-lime-500'
})


// method
const updateValue = (value) => {
    emit('update:modelValue', value)
}
const onClickIncrease = (value = 1) => {
    let val = modelValue.value + value

    if(val > max.value) val = max.value

    emit('update:modelValue', val)
}
const onClickDecrease = (value = 1) => {
    let val = modelValue.value - value

    if(val < min.value) val = min.value

    emit('update:modelValue', val)
}
</script>

<style scoped>
input{
    text-align: center;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
</style>