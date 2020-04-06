---
title: Make your own Gatsby starter (template)
description: I made a starter templte for gatsby. Checkout how to do it.
tags: [Gatsby, React, Template, JAMstack]
canonicalLink: https://dev.to/tonydiaz/make-your-own-gatsby-starter-template-349o
date: 2020-01-03
---

![Gatsby](https://thepracticaldev.s3.amazonaws.com/i/pafx0vehf6rujk9ibz4h.png)

I was recently looking to create a landing page. I have been investigating a couple of JAMstack (Javascript, APIs, Markup) static site generators (Hugo, Gatsby). There are a few others I just didn't dive into (Next.js, Nuxt, etc). Gatsby seemed interesting to me because it is based on React and I'm familiar with that.

Gatsby provides many `Starters` which are templates for websites. I was looking for a template since my design skills leave much to be desired. I wasn't able to find one that was specifically a landing page for a product. I decided to try to make one and share my experiences.


### Steps

*Install the new Gatsby project:*
 - All you need is the quickstart guide to generate a project: https://www.gatsbyjs.org/docs/quick-start/


*Customize your site:* Here you can integrate any plugins. Change the design. Use a component library etc.
 - Plugins I added:
   - Mailchimp - as a way to track interest in the product (signups).
   - Material UI - I'm not great at design so I can use all the help I can get.
   - Google analytics - track the traffic the website is getting.
 - I updated the layout to have a typical product landing page look. With the Product, Benefits, Features and Plans. I also included a few Call-to-action buttons for the Mailchimp signup.


Once you have your template at a point you like it post it to Github.

You will need to have the template hosted somewhere. It can be anywhere, Github pages, AWS, etc. I posted mine on [netlify.com](https://netlify.com) since they have a great free tier and integrates with Github making it super easy to deploy the application.


Here is my landing page on netlify: https://hopeful-ptolemy-cd840b.netlify.com/

*Publish your template to Gatsby*

This will require you to make a PR to Gatsby's repository. You can see their instruction on how to do that here: https://www.gatsbyjs.org/contributing/submit-to-starter-library/

*TL;DR:*
You just need to add an entry in their YAML file. Follow the structure of other "starters" listed in the file. You don't need to fork the repository, you can just edit the file from Github: https://github.com/gatsbyjs/gatsby/blob/master/docs/starters.yml

They prefer commits to have this title:
```
chore(starters): add my-starter-name-here
```

Once your PR is approved your template will be live on their website. That's it! I hope some folks will add some more "starters" from this post.


Kind of cool to see my templates on gatsbyjs.org. You can find my template here: https://www.gatsbyjs.org/starters/tonydiaz/gatsby-landing-page-starter/


I'm happy to see people who are enjoying it:
![Twitter post](https://thepracticaldev.s3.amazonaws.com/i/1qo0phcw53udw4lj3vbo.png)