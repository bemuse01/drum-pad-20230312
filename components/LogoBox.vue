<template>

    <div
        :class="boxClass"
    >

        <img :src="logoPath">

    </div>

</template>

<script setup>
import {toRefs} from 'vue'


// props
const props = defineProps({
    logoPath: String
})


// varialbe
const {logoPath} = toRefs(props)


// class
const boxClass = 'logo-box w-full p-16'
</script>

<style scoped>
img{
    max-width: 100%;
    margin: 0 auto;
}
</style>