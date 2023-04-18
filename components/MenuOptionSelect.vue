<template>
    <div
        :class="optionClass"
    >
        <span>{{name}}</span>

        <select @change="e => updateValue(e.target.value)">

            <option
                v-for="item in list"
                :key="item.key"
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
    selected: {
        type: String,
    }
})


// emit
const emit = defineEmits(['update:selected'])


// variable
const {name, list} = toRefs(props)


// class
const optionClass = 'flex flex-row justify-between my-8 text-lime-500 text-2xl'


// method
const updateValue = (value) => {
    emit('update:selected', value)
}
</script>

<style scoped>
    
</style>