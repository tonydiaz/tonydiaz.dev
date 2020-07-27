---
title: "Planning poker chatbot"
description: "Using Watson Assistant, I'm  experimenting on use cases a chatbot can handle, this one being as a tool for planning poker"
tags:  [AI, Chatbot, Planning, Watson]
canonicalLink: ttps://dev.to/tonydiaz/planning-poker-chatbot-59n1
date: 2020-07-27
---

## What is planning poker?
Planning poker is a technique to size work that is consensus-based. Used mostly in agile software development planning poker has been determined to provide a more accurate estimate of the effort.  [Wikipedia](https://en.wikipedia.org/wiki/Planning_poker)

The typical sizing values are Fibonacci numbers, including a zero. Although the values can be determined by the team doing the sizing.

## How to run planning poker
Typically a product owner runs the session although any team member familiar with the user stories can moderate. This moderator would take a user story to be sized and walks through an overview. The team asks questions and provides relevant details that may affect the sizing. Once all questions have been answered and comments made the moderator will ask the team to size the story. After the participants have made their estimates, team members have the opportunity to justify their estimate. Justification can be limited to the outlier estimates that are high or low. After the justifications have been made the moderator will ask the team to size the story again or ask for a consensus across the team on an estimate. Once the consensus has been made the moderator will log the size and move to the next one. This process can repeat for however many stories there are to size or it can be time-boxed to size only the stories the team can within the meeting duration.

## Why I made a planning poker chatbot
I've been interested in identifying use cases where chatbots using AI technology can handle tasks outright and serve as an alternative to other tools. Many people are already using virtual assistant AI technology. Siri, Alexa, Google Home, and many of the chat widgets on webpages are using by AI technology. I wrote about how I use [Amazon Alexa while working from home](https://dev.to/tonydiaz/working-from-home-with-amazon-alexa-4hko). As more advance meant of AI technology is made these virtual assistants will be able to handle more complex tasks. With the examples showing GPT-3 capability the use cases for virtual assistants will significantly increase.

{% twitter 1282676454690451457 %}

While the planning poker chatbot doesn't leverage much AI capability it was an interesting use case for me to experiment with.

## How I made the planning poker chatbot
I used a product called Watson Assistant to construct the entire chatbot. Watson Assistant is a conversational AI platform. Using the tools within the application I was able to build this chatbot in about 30 minutes. For this use case, I started with a new skill.

**Full disclosure: I work on Watson Assistant**

This is the dialog flow I came up with. I exported the skill and uploaded it to a [Github repo](https://github.com/tonydiaz/watson-assistant-planning-poker-skill). If you would like to use it just import it into a new skill.
![Dialog Page](https://dev-to-uploads.s3.amazonaws.com/i/k5n6m2ow5vzk878z2jsg.png)


The moderator controls the user story numbers within Watson assistant and the team has access to the chatbot. When the chatbot loads this is how the conversation operates for a planning poker session
![Chatbot preview](https://dev-to-uploads.s3.amazonaws.com/i/voqpw66s13qky14wgnzz.gif)


Once the team sizes a story the moderator can use the User conversations page to see what estimates were made and continue the discussion.
![User conversation page](https://dev-to-uploads.s3.amazonaws.com/i/lc14v280lr4se0sjy0re.png)



This implementation was meant to show a different use case from the typical chatbot using Watson Assistant. If you need a tool for planning poker I would suggest using websites specifically made for it, not the chatbot. Those websites have a lot more features you may need.

Again, here is a link to [Github repo](https://github.com/tonydiaz/watson-assistant-planning-poker-skill) with additional instructions on setting it up. Happy sprint planning!