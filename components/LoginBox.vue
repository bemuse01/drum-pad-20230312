<template>
    <div 
        :class="boxClass"
    >

        <slot />

    </div>
</template>

<script setup>
import {ref} from 'vue'

const boxClass = 'login-box w-full flex flex-col gap-4 mx-auto text-slate-300 bg-slate-900 p-4 rounded'

</script>

<style scoped>

</style>