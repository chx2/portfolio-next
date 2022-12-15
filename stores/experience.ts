import { defineStore } from 'pinia'

export const experienceStore = defineStore('experiences', {
    state: () => ({
        experiences: [
            {
                "name": "Full-Stack Developer",
                "org": "IMT Insurance",
                "start": "2020",
                "end": "Current",
                "tasks": [
                    "Building full-stack applications using Vue to tie into backend microservices built in Laravel and Django",
                    "Contributing reusable components into in-house component framework to align with brand styling",
                    "Participating in bi-weekly retrospective meetings to discuss development strengths and weaknesses to improve development existing projects",
                    "Providing feedback to other developers through a code review process from both a developer and quality assurance perspective",
                    "Working with legacy development teams to advocate for modern programming practices"
                ]
            },
            {
              "name": "Teaching Assistant",
              "org": "Trilogy Education",
              "start": "2020",
              "end": "Current",
              "tasks": [
                "Assisting students with coursework in full-stack JavaScript courses",
                "Working with fellow TA’s and professor to craft lesson plans",
                "Providing helpful feedback for students through coursework and in-class assignments"
              ]
            },
            {
              "name": "Web Application Developer",
              "org": "Amplimark LLC",
              "start": "2019",
              "end": "2020",
              "tasks": [
                "Converted wireframes/markups into functioning websites/applications",
                "Consulted clients to discuss requirements during application planning phases",
                "Maintained existing client sites/applications through request updates to layout and/or functionality"
              ]
            },
            {
                "name": "Website Coordinator",
                "org": "Choice Genetics USA",
                "start": "2018",
                "end": "2019",
                "tasks": [
                    "Presented website statistics in monthly status reports",
                    "Trained editors on basics of WordPress, SEO, and content writing",
                    "Developed solutions in HTML/CSS to enhance site design"
                ]
            }
        ]}),
})
