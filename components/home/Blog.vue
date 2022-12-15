<template>
    <div class="my-48">
        <h1 class="text-gray-200 text-4xl mb-4">Recent <span class="text-red-500">Blog</span> Posts</h1>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <NuxtLink
                v-for="article in articles"
                :to="article._path"
                class="bg-gray-900 transition duration-200 hover:scale-105 cursor-pointer"
            >
                <img class="h-48 w-full" :src="`/images/blog/${article.thumbnail}`" alt="Thumbnail Image"/>
                <h3 class="text-gray-200 font-bold p-2">{{ article.title }}</h3>
                <hr class="m-2">
                <p class="text-gray-200 p-2">{{ article.description }}</p>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
    const articles = await queryContent('articles')
        .sort({
            createdAt: -1
        })
        .limit(3)
        .find()
</script>