<template>
    <div>
        <title>Light Page</title>
        <h2>This page is forced with light mode</h2>
        <p>
            Forcing a color mode is greate to implement dark mode to a website
            incrementally,
            <a href="https://color-mode.nuxtjs/#force-a-color-mode">learn more</a>
            about it.
        </p>
        <p>
            <NuxtLink to="/">Home</NuxtLink>
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    colorMode: 'light'
})
</script>