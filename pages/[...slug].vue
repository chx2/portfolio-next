<template>
    <div class="bg-white shadow-inner" v-if="data.title">
        <main id="content" class="w-full md:w-4/6 mx-auto md:flex flex-row">
            <ContentDoc class="w-full" v-slot="{ doc }">
                <div class="background animate__animated animate__fadeIn animate__delay-1s ease p-32 absolute w-full shadow-2xl left-0"
                :style="`background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/blog/${doc.thumbnail}')`">
                    <h1 class="text-white hidden md:block text-6xl text-center m-4">{{ doc.title }}</h1>
                    <h2 class="text-white hidden md:block text-xl text-center">Published on {{ doc.createdAt }}</h2>
                </div>
                <div class="p-4 md:p-0 md:mt-64 md:pt-16 animate__animated animate__fadeInUp animate__slow max-w-full">
                    <ContentRenderer class="mt-32 pt-32 md:pt-0 md:mt-32 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl" :value="doc" />
                </div>
            </ContentDoc>
        </main>
        <hr class="w-full md:w-4/6 mx-auto mt-8" />
        <footer class="w-full md:w-4/6 mx-auto mt-8 justify-center rounded outline outline-transparent hover:outline-gray-800 hover:drop-shadow-2xl">
            <NuxtLink
                :to="next()._path"
                class="cursor-pointer"
            >
                <h2 class="text-4xl py-4 text-center">Continue Reading</h2>
                <img class="h-64 w-11/12 mx-auto my-4" :src="`/images/blog/${next().thumbnail}`" alt="Thumbnail Image"/>
                <h3 class="text-xl font-bold px-8">{{ next().title }}</h3>
                <p class="px-8 py-4">{{ next().description }}</p>
            </NuxtLink>
        </footer>
    </div>
    <div v-else class="w-full flex flex-col justify-center items-center">
        <h1 class="text-white text-4xl mb-4 animate__animated animate__fadeInDown animate__delay-2s">404 Not Found</h1>
        <img class="w-128 h-128 rounded text-center animate__animated animate__fadeIn slow" src="~/assets/images/404.gif" alt="404 Not Found" />
    </div>
</template>
<script setup lang="ts">
    const route = useRoute()
    const articles = await queryContent('/')
        .sort({
            createdAt: 1
        })
        .find()
    const data = await queryContent(`${route.fullPath}`).findOne()

    const next = () => {
        return articles.findIndex(article => article.slug === data.slug) !== articles.length - 1
            ? articles[articles.findIndex(article => article.slug === data.slug) + 1]
            : articles[0]
    }

    definePageMeta({
        layout: 'blog'
    })

    useHead({
        titleTemplate: '%s | Chris Hackett',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: data.description
            },
            {
                hid: "twitter:url",
                name: "twitter:url",
                content: "https://bobross.com",
            },
            { name: "twitter:label1", content: "Written by" },
            { name: "twitter:data1", content: "Chris Hackett" },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: data.title
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: data.description
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: data.thumbnail
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: data.title
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: data.description
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: `https://chrish.me/images/blog/${data.thumbnail}`
            },
        ],
        link: [
            {
                hid: "canonical",
                rel: "canonical",
                href: `https://chrish.me${route.path}`,
            },
        ],
    })
</script>
