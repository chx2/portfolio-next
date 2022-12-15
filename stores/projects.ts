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
              "name": "Ponder",
              "url": "https://ponder-app.org/",
              "url_short": "ponder-app.org",
              "skills": [
                "Vue(Composition)",
                "Tailwind",
                "Supabase"
              ],
              "description": "Created & maintaining open-source application for creating and playing randomized trivia."
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
