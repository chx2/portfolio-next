<template>
    <h1 class="text-gray-200 text-4xl my-4 animate__animated animate__fadeInDown">Things I've Written</h1>
    <hr class="mb-4 animate__animated animate__fadeInUp">
    <NuxtLink
        class="grid grid-cols-1 gap-6 md:grid-cols-7 mb-4 bg-gray-900 transition duration-100 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s"
        v-for="article in articles" :to="article._path"
    >
        <img class="md:col-span-3 h-full" :src="`/images/blog/${article.thumbnail}`" alt="Thumbnail Image"/>
        <div class="p-4 md:col-start-4 md:col-span-4">
            <h1 class="text-gray-200 text-lg p-2">{{ article.title }}</h1>
            <hr>
            <p class="text-gray-200 p-2">{{ article.description }}</p>
            <h2 class="text-gray-200 p-2 bold">Posted: {{ article.createdAt }}</h2>
        </div>
    </NuxtLink>
</template>
<script setup lang="ts">
    const articles = await queryContent('articles')
        .sort({
            createdAt: -1
        })
        .find()

    useHead({
        title: "Articles",
        titleTemplate: '%s | Chris Hackett',
        meta: [
            {
                hid: "description",
                name: "description",
                content: "View articles I have posted here.",
            },
            {
                hid: "og:title",
                name: "og:title",
                content: "Home",
            },
            {
                hid: "og:description",
                name: "og:description",
                content: "View articles I have posted here.",
            },
            {
                hid: "og:url",
                property: "og:url",
                content: `https://chrish.me/articles`,
            },
            {
                hid: "twitter:url",
                name: "twitter:url",
                content: `https://chrish.me/articles`,
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "Home",
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "View articles I have posted here.",
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
                href: `https://chrish.me/articles`,
            },
        ],
    })
</script>