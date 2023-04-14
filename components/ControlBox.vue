<template>
    <div
        :class="controlBoxClass"
    >

        <play-button :class="buttonClass" />

    </div>
</template>

<script setup>
// class
const controlBoxClass = 'control-box w-full h-[4rem] flex flex-row gap-2'
const buttonClass = 'h-full aspect-square bg-zinc-700 rounded-md overflow-hidden flex justify-center items-center'
</script>

<style scoped>
</style>