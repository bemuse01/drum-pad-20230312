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

        <div 
            :class="navClass"
        >

            <NavLink href="/signup" name="Sign up" :class="signupClass"></NavLink>
            <NavLink href="/pad" name="As a Guest" :class="guestClass"></NavLink>

        </div>

    </div>
</template>

<script setup>
import {getImagePath} from '~/assets/js/method.js'


// variable
const logoPath = getImagePath('logo.png')


// class
const containerClass = 'home-container min-w-[320px] w-[75%] sm:w-[75%] md:w-[320px] mx-auto text-white'
const navClass = 'nav-box flex relative mt-2'
const signupClass = 'absolute left-0'
const guestClass = 'absolute right-0'


// head
useHead({
    title: 'Home - Drum Pad',
})
</script>

<style scoped>
</style>