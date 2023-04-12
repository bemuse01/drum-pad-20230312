<template>
    <div
        :class="cellBoxClass"
    >

        <slot></slot>

    </div>
</template>

<script setup>
// class
const cellBoxClass = 'flex gap-1'
</script>

<style scoped>
</style>