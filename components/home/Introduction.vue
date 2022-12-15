<template>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 my-32">
        <div>
            <div class="flex mb-4">
                <h1 class="text-gray-200 text-4xl animate__animated animate__fadeInLeft animate__delay-1s">Hello, my name is <span class="text-red-500">Chris</span></h1>
                <img class="ml-2 w-8 h-8 animate__animated animate__fadeInRight" src="~/assets/images/waving.gif" alt="Waving Hand Emoji" />
            </div>
            <p class="text-gray-200 text-xl mb-2 animate__animated animate__fadeInLeft animate__delay-2s">
                I do work in full stack web development. I have experience
                working with implementing this technology in small businesses, education, insurance, and personal use.
            </p>
            <p class="text-gray-200 text-xl animate__animated animate__fadeInUp animate__delay-3s">
                I love to
                <NuxtLink class="text-red-500" to="/articles">share these experiences</NuxtLink>
                along my journey if any of this interests you!
            </p>
            <div class="mt-4 flex animate__animated animate__jackInTheBox animate__delay-4s">
                <a class="cursor-pointer transition duration-100 hover:scale-125" href="mailto:crishack8@gmail.com">
                    <svg class="h-8 w-8 m-2 text-white" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                </a>
                <a class="cursor-pointer transition duration-100 hover:scale-125" href="https://github.com/chx2/">
                    <svg class="h-8 w-8 m-2 text-white" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </a>
                <a class="cursor-pointer transition duration-100 hover:scale-125" href="https://www.linkedin.com/in/chris-o-hackett/">
                    <svg class="h-8 w-8 m-2 text-white" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                </a>
            </div>
        </div>
        <div class="justify-self-center animate__animated animate__fadeInUp animate__delay-4s animate__slower">
            <div class="justify-self-center rocket">
                <img class="w-64 z-50 relative" src="~/assets/images/avataaars.png" alt="Avatar" />
                <div class="container z-0 relative">
                    <div class="red flame"></div>
                    <div class="orange flame"></div>
                    <div class="yellow flame"></div>
                    <div class="white flame"></div>
                    <div class="blue circle"></div>
                    <div class="black circle"></div>
                </div>
            </div>
        </div>
    </div>
</template>