<template>
    <div
        :class="optionClass"
    >
        <span>{{name}}</span>

        <select :class="classes.select" @change="e => updateValue(e.target.value)">

            <option
                v-for="(item, key) in list"
                :key="key"
                :selected="isSelected(item.value ? item.value : item.name)"
                :value="item.value ? item.value : item.name"
            >
                {{item.name}}
            </option>

        </select>

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
    list: {
        type: Array,
        default: []
    },
    modelValue: [Number, String]
})


// emit
const emit = defineEmits(['update:modelValue'])


// variable
const {name, list, modelValue} = toRefs(props)


// class
const optionClass = 'flex justify-between my-8 text-lime-500 text-2xl'
const classes = reactive({
    select: 'bg-lime-500/[0.15]'
})


// method
const updateValue = (value) => {
    emit('update:modelValue', value)
}
const isSelected = (value) => value === modelValue.value
</script>

<style scoped>
</style>