<template>
    <div
        :class="containerClass"
    >

        <logo-box :logoPath="logoPath" />

        <login-box>

            <text-box class="username-box" labelName="Username" />

            <text-box class="pw-box" labelName="Password" type="password"/>

            <text-box class="pwChk-box" labelName="Password Check" type="password"/>

            <button-box value="Sign up" margin="mt-2" />

        </login-box>

        <div 
            :class="navClass"
        >

            <NavLink href="/" name="Sign in"></NavLink>

        </div>

    </div>
</template>

<script setup>
import {getImagePath} from '~/assets/js/method.js'


// variable
const logoPath = getImagePath('logo.png')


// class
const containerClass = 'signup-container min-w-[320px] w-[75%] sm:w-[75%] md:w-[320px] mx-auto text-white'
const navClass = 'nav-box flex relative mt-2'


// head
useHead({
    title: 'Sign up - Drum Pad',
})
</script>

<style scoped>
</style>