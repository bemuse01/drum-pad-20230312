<template>
    <div
        :class="classes.option"
    >
        <span>{{name}}</span>

        <label :class="classes.label">
            <input type="checkbox" v-model="internalValue">
            <span :class="classes.switchName">{{on}}</span>
            <span :class="classes.switchName">{{off}}</span>
            <span :class="classes.switch + ' ' + classes.switchPosition"></span>
            <!-- <span class="slider"></span> -->
        </label>

    </div>
</template>

<script setup>
import {toRefs} from 'vue'


const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    on: {
        type: String,
        default : 'ON',
    },
    off: {
        type: String,
        default: 'OFF',
    },
    modelValue: Number
})
const {name, on, off, modelValue} = toRefs(props)


// emit
const emit = defineEmits(['update:modelValue'])


// class
const classes = reactive({
    option: 'flex flex-row justify-between my-8 text-lime-500 text-2xl',
    label: 'h-auto flex justify-center items-center relative bg-lime-500/[0.15]',
    switchName: 'text-xl px-2',
    switch: 'switch w-[50%] h-full bg-lime-300 absolute transition',
    switchPosition: 'left-0',
    // button: 'px-2 h-full text-lg bg-lime-500/[0.35] hover:bg-lime-600 active:bg-lime-500'
})


// switch
const setSwitchPosition = (val) => {
    if(val) classes.switchPosition = 'left-0'
    else classes.switchPosition = 'right-0'
}


// model
const internalValue = ref(modelValue.value === on.value ? true : false)
const updateValue = (value) => {
    emit('update:modelValue', value)
}
watch(internalValue, (cur, pre) => {
    setSwitchPosition(cur)

    // if(internalValue.value){
    // }else{
    // }
})
</script>

<style scoped>
input{
    display: none;
}
.switch{
    transition: all 0.3s;
}
</style>