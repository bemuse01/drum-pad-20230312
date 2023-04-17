<template>
    <div
        :class="controlBoxClass"
    >

        <play-button :class="buttonClass" />
        <clear-button :class="buttonClass" />
        <random-button :class="buttonClass" />

    </div>
</template>

<script setup>
// class
const controlBoxClass = 'control-box w-full h-[4rem] flex flex-row gap-2 overflow-auto'
const buttonClass = 'h-full aspect-square bg-zinc-700 hover:bg-zinc-600 rounded-md overflow-hidden flex justify-center items-center cursor-pointer'
</script>

<style scoped>
</style>