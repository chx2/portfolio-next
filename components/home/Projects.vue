<template>
    <div class="mb-16">
        <h2 class="text-4xl text-red-500 mb-4">Projects</h2>
        <NuxtLink
            class="grid grid-cols-1 gap-6 md:grid-cols-6 mb-4 bg-gray-900 p-4 transition duration-100 hover:scale-105"
            v-for="project in projects.projects" :to="project.url"
        >
            <div class="justify-self-center">
                <img
                    class="w-64" src="~/assets/images/avataaars.png"
                    alt="Avatar"
                />
            </div>
            <div class="col-start-2 col-span-4">
                <h3 class="text-red-500 p-2">{{ project.name }}</h3>
                <p class="text-gray-200 p-2">{{ project.description }}</p>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import { projectStore } from "~/stores/projects";

const projects = projectStore();
</script>