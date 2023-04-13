<template>
    <div
        :class="cellBoxClass"
    >

        <slot></slot>

    </div>
</template>

<script setup>
// class
const cellBoxClass = 'cell-box flex gap-1'
</script>

<style scoped>
</style>