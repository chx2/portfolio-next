<template>
    <div class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between p-8 md:py-8 font-xl">
        <a href="https://chrish.me/" class="text-gray-200 text-xl">
            CH
        </a>
        <nav>
            <ul class="block md:flex gap-x-3 text-gray-200">
                <li class="hover:text-white p-4 md:p-0">
                    <NuxtLink to="/resume">Resume</NuxtLink>
                </li>
                <li class="hover:text-white p-4 md:p-0">
                    <NuxtLink href="/articles">Blog</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>