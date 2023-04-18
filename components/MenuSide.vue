<template>
    <div
        :class="sideClass"
    >
        
        <!-- <menu-option name="Instrument"></menu-option>
        <menu-option name="Beat"></menu-option> -->

    </div>
</template>

<script setup>
// class
const sideClass = 'menu-side absolute top-0 right-0 w-[24rem] h-full p-4 overflow-auto'
</script>

<style>
.menu-side{
    background: rgba(0, 0, 0, 0.75);
}
</style>