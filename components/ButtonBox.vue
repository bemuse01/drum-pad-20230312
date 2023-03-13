<template>

    <div 
        :class="boxClass"
    >

        <input 
            type="button" 
            :value="value"
            :class="buttonClass"
        >

    </div>

</template>

<script setup>
import {toRefs} from 'vue'


// props
const props = defineProps({
    value: String,
    margin: {
        type: String,
        default: 'm-0'
    }
})


// variable
const {value, margin} = toRefs(props)


// class
const boxClass = `button-box w-full ${margin.value}`
const buttonClass = 'w-full'
</script>

<style scoped>

</style>