<template>
    <div
        :class="classes.wrapper"
    >

        <div :class="classes.button" @click="() => onClickButton()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" :class="classes.svg">
                <line x1="0" y1="100" x2="100" y2="0" />
                <line x1="0" y1="0" x2="100" y2="100" />
            </svg>
        </div>

    </div>
</template>

<script setup>
// emit
const emit = defineEmits(['update:modelValue'])


const classes = reactive({
    wrapper: 'flex flex-row justify-end w-full h-[2.5rem]',
    button: 'h-full aspect-square cursor-pointer hover:opacity-[0.6]',
    svg: 'stroke-lime-400 stroke-[4px]'
})


const updateValue = () => {
    emit('update:modelValue', false)
}
const onClickButton = () => {
    updateValue()
}
</script>

<style scoped>
    
</style>