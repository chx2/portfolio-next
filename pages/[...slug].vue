<template>
    <div class="bg-white shadow-inner">
        <main id="content" class="w-full md:w-4/6 mx-auto md:flex flex-row">
            <ContentDoc class="w-full" v-slot="{ doc }">
                <div class="background animate__animated animate__fadeIn animate__delay-1s ease p-32 absolute w-full shadow-2xl left-0"
                :style="`background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/blog/${doc.thumbnail}')`">
                    <h1 class="text-white hidden md:block text-6xl text-center m-4">{{ doc.title }}</h1>
                    <h2 class="text-white hidden md:block text-xl text-center">Published on {{ doc.createdAt }}</h2>
                </div>
                <div class="p-4 md:p-0 md:mt-64 md:pt-16 animate__animated animate__fadeInUp animate__slow">
                    <ContentRenderer class="mt-32 pt-32 md:pt-0 md:mt-32 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl" :value="doc" />
                </div>
            </ContentDoc>
        </main>
    </div>
</template>
<script setup lang="ts">
    const route = useRoute()
    const data = await queryContent(`${route.fullPath}`).findOne()

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