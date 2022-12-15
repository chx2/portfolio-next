<template>
    <section class="mt-4 first:mt-0">
        <div class="break-inside-avoid">
            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 text-xl print:font-normal">
                Experience
            </h2>
        </div>
        <section class="mb-4 ml-4 break-inside-avoid" v-for="experience in experiences.experiences">
            <header>
                <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                    {{ experience.name }} | {{ experience.org }} | {{ experience.start }} - {{ experience.end }}
                </h3>
            </header>
            <ul class="mt-2 ml-8 list-disc text-md text-gray-700 leading-normal">
                <li v-for="task in experience.tasks">
                    {{ task }}
                </li>
            </ul>
        </section>
    </section>
</template>

<script setup lang="ts">
import { experienceStore } from "~/stores/experience";

const experiences = experienceStore();
</script>
