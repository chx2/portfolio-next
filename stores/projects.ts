import { defineStore } from 'pinia'

export const projectStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                "name": "Portfolio",
                "url": "https://chrish.me",
                "url_short": "chrish.me",
                "skills": [
                    "Vue",
                    "Tailwind",
                    "Nuxt"
                ],
                "description": "Created & maintaining personal platform listing experience, projects, and my personal blog."
            },
            {
              "name": "Paid Media Support",
              "url": "https://paidmedia.support/",
              "url_short": "paidmedia.support",
              "skills": [
                "Laravel",
                "Alpine.js",
                "OpenAI"
              ],
              "description": "Created & maintaining job board for Paid Media job listings that integrates with third-party job providers alongside OpenAI technology."
            },
            {
                "name": "Tipoff",
                "url": "https://github.com/tipoff",
                "url_short": "github.com/tipoff",
                "skills": [
                    "Laravel",
                    "Inertia.js",
                    "Livewire"
                ],
                "description": "Contributed to open-source repositories that act as a full suite for escape rooms. This includes escape room management, an online ecommerce solution, and support for a main site/blog."
            }
        ]
    }),
})
