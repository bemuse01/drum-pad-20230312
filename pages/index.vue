<template>
    <div 
        :class="containerClass"
    >

        <logo-box :logoPath="logoPath" />

        <login-box>

            <text-box class="username-box" labelName="Username" />

            <text-box class="pw-box" labelName="Password" />

            <button-box value="Sign in" margin="mt-2" />

        </login-box>

    </div>
</template>

<script setup>
import {ref} from 'vue'


// 
const glob = import.meta.glob('~/assets/src/*', {eager: true})
const getImageAbsolutePath = imageName => glob[`/assets/src/${imageName}`]['default']


// variable
const logoPath = getImageAbsolutePath('logo.png')


// class
const containerClass = 'home-container'


// head
useHead({
    title: 'Home - Drum Pad',
})
</script>

<style scoped>
.home-container{
    width: 320px;
    margin: 0 auto;
}
</style>