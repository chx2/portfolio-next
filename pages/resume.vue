<template>
    <main class="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
        <Logo class="hidden md:block" />
        <TitleBar />
        <hr />
        <Socials />
        <hr />
        <Summary />
        <hr />
        <Education />
        <hr />
        <Experience />
        <hr />
        <ResumeProjects />
        <button class="text-gray-600 fixed top-4 right-4 animate-pulse hidden md:block" @click="print">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
        </button>
    </main>
</template>
<script setup lang="ts">
    import TitleBar from "~/components/resume/TitleBar.vue";
    import Socials from "~/components/resume/Socials.vue";
    import Summary from "~/components/resume/Summary.vue";
    import Education from "~/components/resume/Education.vue";
    import Experience from "~/components/resume/Experience.vue";

    const print = () => {
        window.print()
    }

    definePageMeta({
        layout: 'blank'
    })

    useHead({
        title: "Articles",
        titleTemplate: '%s | Chris Hackett',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'View my personal portfolio'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'View Resume'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'View my personal portfolio'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'View Resume'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'View my personal portfolio'
            },
        ],
        link: [
            {
                hid: "canonical",
                rel: "canonical",
                href: `https://chrish.me/resume`,
            },
        ],
    })
</script>