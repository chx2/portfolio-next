---
title: 'OpenAI: A high-level implementation of chat completion'
description: Less than a year after when I had allowed ChatGPT to write a blog post for me, I finally decided to give the OpenAI API a chance in a realistic project integration!
slug: 'implementing-chat-gpt'
thumbnail: chatgpt.png
createdAt: 2023/5/21
---

Less than a year after when I let ChatGPT [write a blog post for me](https://chrish.me/articles/chat-gpt),
I decided to give the OpenAI API a shot after finally giving into peer pressure and hearing a few too many people say 'we should try using AI'. While the topic of AI is a pretty interesting topic to consider, I think the conversation usually stops there because that's when the brainstorming has to begin. How would one go about implementing AI into their projects? What areas could this be helpful in? Where would it not be?

## OpenAI API
What most people do when they try ChatGPT for the first time is they assume the chatbot is the only tool available via OpenAI. Truth is, there are many different input data capabilities along with language models provided by OpenAI beyond just ChatGPT. While I found the model that's used for the chatbot to be the cheapest and easiest to use out-of-the-box, there are many different options out there depending on your needs for your integration:

<img src="/images/blog/openai-tools.png" alt="OpenAI Tool Options" />

In terms of [pricing](https://openai.com/pricing), usage primarily depends on what OpenAI tool you are using. Since I'll primarily be talking about language models, pricing is by 'token':

> Multiple models, each with different capabilities and price points. Prices are per 1,000 tokens. You can  think of tokens as pieces of words, where 1,000 tokens is about 750 words. This paragraph is 35 tokens.<br>
> ~ OpenAI

As previously stated, I found the `gpt-3.5-turbo` model to be the cheapest while involving the least amount of work having its usage set at $0.002 per 1k tokens, meaning one dollar would equate to a half-million text characters. There are several models that also allow for custom training(I.E. you provide data to train the model on what it should provide) that run even cheaper than this. You can additionally choose the higher tier `GPT-4` model which appears to be the most expensive of all the language models, yet without a doubt is the most powerful tool for this area of usage.

## How can OpenAI be used?
As I previously stated, usually when I've heard the idea of 'we should implement AI', there's rarely follow-up on what that really means. To think about what AI could do, think of tasks that might involve looking over existing datasets. As an example, let's say we are a car manufacturer looking to add a chat bot to our website to help people find a car they would like. Here are some ideas of what we could do simply with OpenAI language models:

- Collect [keywords](https://platform.openai.com/examples/default-keywords) from a given conversation to search existing website data on cars to determine what type of a car a user might be looking for
- Adapt to the [user](https://platform.openai.com/examples/default-summarize) and have the bot respond in a tone that is better suited to the specific user rather than hard-coded responses that would be sent to everyone
- Provide Q&A [options](https://platform.openai.com/examples/default-qa) based on existing dataset of answers for basic questions that people typically ask when looking for a car
- Since the users sometimes may have questions not necessarily tied to your products, you're already integrating with a tool that provides [chat completion features](https://platform.openai.com/examples/default-chat), have the bot try to answer questions about cars in general!

While this list is only a few to start with, hopefully it's a little easier to make sense of some ways on how implementing OpenAI at JUST the text level can be helpful to your project or business.

## Example
It would only make sense to suggest there's some valuable usage of OpenAI in general if I had an example myself to show. I've recently been working on a side project involving fetching jobs from a specific field across several job boards and pull them into this singular app. I've been using an API on RapidAPI called [JSearch](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch), which checks LinkedIn, Indeed, Glassdoor, ZipRecruiter, BeBee and many others while providing a singular API format for me for next to nothing for price. While I've already found a lot of value in using this API, there is a colossal downside hidden within it; content.

<img src="/images/blog/intial-content.png" alt="Job Description Before" />

I've found that while most of the data comes across pretty well, all fields but the title are not guaranteed to return something in all concurrent requests. Typically, I could forgo this oversight if the content pulled directly from the job listing came across, and it does! The problem however is that every single job board likes to format their job listing pages differently and the field by default does not format anything to HTML. Jsearch basically dumps whatever it finds on the web page it crawls into the description field with no modifications. Since I want users to be able to post jobs in my project along with pulling jobs from these platforms, I need to have data in HTML format so it can be later parsed into a WYSIWYG editor on my side for additional modification of listings.

I have found that this scenario has proven to be a fantastic use-case of the ChatGPT language model! Since I'm writing in Laravel, I am able to make use of Nuno Maduro's [OpenAI integration for Laravel](https://github.com/openai-php/laravel) to directly use the `gpt-3.5-turbo` to solve my problem. I have a daily scheduled job that queries the JSearch API first, then, for each job listing pulled back that does not exist yet, I write the following completion request:

<img src="/images/blog/chatgpt-completion.png" alt="ChatGPT Completion" />

Note that I had to alter to mention omitting head and body tags(not looking to store an entire HTML document rather just content you would find in the body) as the results sometimes would have them appended. Ideally I could make use of another language model to make OpenAI do this by default but like I said, I wanted to go for the quickest implementation possible. After fine-tuning my prompt, every single time(over 500 results tested to-date), the `gpt-3.5-turbo` model would provide the HTML formatted response of this field in its entirety; perfect for what I needed!

<img src="/images/blog/job-completed.png" alt="Job Description After" />

## Conclusion
It's easy to be skeptical when someone says 'AI will change everything'. While I don't personally believe in doomsday scenarios like some people like to talk about, I do understand how some might worry after seeing some of the capabilities that these tools have proven to show. While it can be a little overwhelming at first to understand what benefits it can provide, hopefully I've helped show how you can consider integrating language(or other) models into your projects. While they aren't going to write the logic for you, in many cases, they can take care of the daunting tasks involving parsing data for you with a single prompt :)

Thanks for reading!