---
layout: post
section-type: post
title: Chatbot with React native and Watson Assistant
description: Check out how to make a mobile chatbot using React native and Watson Assistant
category: learning
date: 2018-12-21
canonicalLink: https://dev.to/tonydiaz/building-a-chatbot-using-react-native-and-watson-assistant-3adj
tags: [ Chatbot, Watson Assistant ]
---

**Note** This post was originally posted on [dev.to](https://dev.to).

I recently sat in a talk about React Native while at the All things open conference (allthingsopen.org) in Raleigh, NC. I wanted to try out this new framework on a simple project. Since I work on a project that provides conversational AI assistants I decided to combine them both.

*Disclaimer:* I work on Watson Assistant at IBM...

I needed a simple conversational flow to use for this project so I decided to use the "Are you rob base?" flow chart

![Flow chart](https://thepracticaldev.s3.amazonaws.com/i/uq2eryer8gq28ok8ak3s.jpg "Are you Rob Base")

# Training the Assistant

I won't dive into much of Watson Assistant. There is plenty of documentation on that if you are intrested. (https://console.bluemix.net/docs/services/conversation/)

## Intents

Since this is a flowchart our bot needs to understand just two responses Yes and No.

I defined the #Yes and #No intents in the tool. You can provide more examples of what that might look like as shown in the screenshot, this will help better train the assistant to recognize other ways your users might answer the question.

![Intents](https://thepracticaldev.s3.amazonaws.com/i/aqf4df7t0tavwq1rbmsq.png "Intents")

## Entities:
They aren't needed in this use case.

## Dialog:
Here is where you build the conversation flow. Since it is a flowchart it is fairly straightforward on how to structure it. I nested the flow within each node so one response will lead to the next. Any incorrect response will send you a "cathc all" response informing you that you are not Rob Base.
![Dialog](https://thepracticaldev.s3.amazonaws.com/i/m80q5do4sv6dqofrr5r2.png "Dialog")

Now that I have a bot that is responding according to the flowchart. I need to have a way users can interface with it. This is where the React Native code comes in.

# React Native:

As a noob to react native I noticed the documentation for [getting started](https://facebook.github.io/react-native/docs/getting-started) now points to using expo.io. I followed those instructions and setup a bolierplate app. Expo provides some nice ways to run you app both locally during develop, on a iOS/Andriod simulator or through their app that you can view on your phone.

I checked to see if there is any package that would provide a chat UI in React Native. I was pleasantly surprised to see there is one. This is a huge timesaver to not have to develop a UI chat panel from scratch. The package is called `react-native-gifted-chat`. I installed that as well as the package for Watson `watson-developer-cloud` to interface with Watson Assistant APIs eaiser. After some integration of the chatbot and Watson APIs I has a working chatbot, show below. That's it!

![Rob Base Chat](https://thepracticaldev.s3.amazonaws.com/i/asdfsowfu6jilkizuudc.gif)

In a short amount of time anyone can have a powerful bot deployed to both Andriod and iOS using Expo.io and Watson Assistant. It really allows for a lot of possible applications without having to know much about Objective-C, Java, or Swift.

## Check out the source code:
https://github.com/tonydiaz/wa-react-native-minimal

###  Of course this article wouldn't be complete without a link to listen to some Rob Base!

[![It takes two](https://i.ytimg.com/vi/phOW-CZJWT0/maxresdefault.jpg)](https://www.youtube.com/watch?v=phOW-CZJWT0)

