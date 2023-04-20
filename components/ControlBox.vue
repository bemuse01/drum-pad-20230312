<template>
    <div
        :class="controlBoxClass"
    >

        <play-button :class="buttonClass" />
        <clear-button :class="buttonClass" />
        <random-button :class="buttonClass" />
        <menu-button :class="buttonClass + menuButtonClass" />

    </div>
</template>

<script setup>
// class
const controlBoxClass = 'control-box w-full h-[4rem] flex flex-row gap-2'
const buttonClass = 'h-full aspect-square bg-zinc-700 hover:bg-zinc-600 rounded-md flex justify-center items-center cursor-pointer'
const menuButtonClass = ' ml-[auto]'
</script>

<style scoped>
</style>