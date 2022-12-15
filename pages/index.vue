<template>
    <div>
        <HomeIntroduction />
        <HomeBlog />
    </div>
</template>
<script setup lang="ts">
    useHead({
        title: "Home",
        titleTemplate: '%s | Chris Hackett',
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Hello, I'm Chris. I'm a Full-Stack Developer.",
            },
            {
                hid: "og:title",
                name: "og:title",
                content: "Home",
            },
            {
                hid: "og:description",
                name: "og:description",
                content: "Hello, I'm Chris. I'm a Full-Stack Developer.",
            },
            {
                hid: "og:url",
                property: "og:url",
                content: `https://chrish.me`,
            },
            {
                hid: "twitter:url",
                name: "twitter:url",
                content: `https://chrish.me`,
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "Home",
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "Hello, I'm Chris. I'm a Full-Stack Developer.",
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: "https://chrish.me/images/code.png",
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "https://chrish.me/images/code.png",
            },
        ],
        link: [
            {
                hid: "canonical",
                rel: "canonical",
                href: `https://chrish.me`,
            },
        ],
    })
</script>