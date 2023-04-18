<template>
    <div
        :class="optionClass"
    >
        <span>{{name}}</span>

        <select @change="e => updateValue(e.target.value)">

            <option
                v-for="item in computedList"
                :key="item.key"
                :selected="isSelected(item.name)"
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
    modelValue: String
})


// emit
const emit = defineEmits(['update:modelValue'])


// variable
const {name, list, modelValue} = toRefs(props)
const computedList = computed(() => list.value.map((item, key) => ({name: item, key})))


// class
const optionClass = 'flex flex-row justify-between my-8 text-lime-500 text-2xl'


// method
const updateValue = (value) => {
    emit('update:modelValue', value)
}
const isSelected = (value) => value === modelValue.value
</script>

<style scoped>
select{
    background: rgba(163, 230, 53, 0.15);
}
</style>