# Jamstack Portfolio Template

1. [Summary](#summary)
    1. [Key Notes](#key-notes)
    2. [Tech Stack](#tech-stack)
2. [How does it work?](#in-short-how-does-it-work)
3. [Getting Started](#getting-started)
    1. [Requirements](#requirements)
    2. [Project Setup](#setup)
    3. [Setup Netlify Hosting and CMS](#setup-netlify-hosting-and-cms)
4. [Theme for Code in Markdown](#theme-for-code-in-markdown)
5. [Links To Useful Resources](#links-to-useful-resources)


## Summary

This is not a personal website, but a template or guide for anyone wants to build an easily customizable static website using the [Jamstack](https://jamstack.org/) architecture.

> *"The core principles of pre-rendering, and decoupling, enable sites and applications to be delivered with greater confidence and resilience than ever before"* - (Jamstack, 2021)

This is based on my implementation of the tech stack and is not the only way or technologies. I hope this can provide some help on your project.

### Key Notes
- The following project template provides free hosting and CMS through Netlify.
- *publish_mode* has been set to *editorial_workflow*, this allows to save drafts and provide preview deploy links.
- SEO has been integrated with user customizability.
- All content used is copyright free.

### Tech Stack

I found the following tech stack very easy to use and understand, especially for a beginner.
1. Nodejs (*back-end*)
2. Eleventy (*static site generator*)
3. Nunjucks (*templating language*)
4. Netlify (*hosting*)
5. Netlify CMS (*headless CMS*)

#### More info the about the tech stack

- [Static Site Generators](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)
- [Templating Language](https://en.wikipedia.org/wiki/Template_processor)
- [Headless CMS](https://www.sanity.io/blog/headless-cms-explained)

## In Short, how does it work?

The pre-compiled content sits in a folder named 'src'. In this folder is all the content you modify as a developer. 

When you 'build' the project using 'npm start' or 'eleventy --serve', all the data and content in the 'src' folder is processed and compiled into another folder called 'public', which can be accessed by the public. If you open this folder, you will see that all the templating done in the src folder is outputted as html files. 

The 'admin' folder contains a config.yml file, which netlify CMS uses to identify which content is customizable and properties associated with it.

## Getting Started

There is a great tutorial video I started off from by Kevin Powell on [YouTube](https://www.youtube.com/watch?v=4wD00RT6d-g). He explains the entire system quite thoroughly and provides a good base understanding.

For help, view [Links to useful Resources](#links-to-useful-resources)

### Requirements

- [Github account](https://github.com/)
- [Netify Account](https://app.netlify.com/)
- [nodejs](https://nodejs.org/en/download/)
- Code Editor (*VSCode recommended*)

### Setup

1. Click [Use Tempalate](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) to create a repository from the repo.
2. In VSCode (or another code editor), install app's dependencies using the following CLI command
> npm install
3. Run the following in the CLI
> npm start
4. Validate the website is working with the dummy data provided already in the project.

### Setup Netlify (Hosting and CMS)

#### Adding Site to Netlify

1. In Netlify, in your 'Team Overview', click the 'New Site from Git' button.
2. Select 'GitHub' and choose the repository of the forked/cloned repo.
3. Under 'Basic build settings', make sure to change the 'Publish Directory' to 'public'
4. Click 'Deploy site'.
5. Open '/src/admin/config.yml' file in your project.
6. Update the site url for 'site_url' & 'logo_url' to your published site name.
7. Push the latest changes to 'master'.

#### Setup access to CMS

1. In your team, select the site you just deployed.
2. Select 'Identity' in the top menu bar.
3. Select 'Invite users' and enter your own email address.
    1. *NOTE: if you are using OAuth providers, make sure to use the email address of the provider.*
4. Navigate to 'Site Settings' in the top menu bar.
5. Select 'Identity' in the left menu bar.
6. Scroll all the way down until you find 'Git Gateway' and make sure its enabled.

#### Setup external OAuth providers *(Optional)*

1. Select 'Site Settings' in the top menu bar.
2. Select 'Identity' in the left menu bar.
3. Scroll down until you reach 'External Providers' and click 'Add Provider'.

#### Setup Form Notification *(Optional)*

1. Select 'Site Settings' in the top menu bar.
2. Select 'Forms' in the left menu bar.
3. Scroll down to 'Form Notifications' and select 'Add notification'.

## Theme for Code in Markdown

I used a [prism.js](https://prismjs.com/) to automatically stylize the code block in the markdown file and a custom script to wrap code tags with &lt;pre> if non-existent. 

More themes and options can be found at [prism.js downloads](https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript). Make sure to delete the existing 'prism.css' & 'prism.js' in 'src\assets\themes\\'.

## Links To Useful Resources

Here are some resources that helped me along the way.

1. [Eleventy](https://www.11ty.dev/docs/)
    1. [Template and Directory Specific Data Files](https://www.11ty.dev/docs/data-template-dir/)
    2. [Global Data Files](https://www.11ty.dev/docs/data-global/)
    3. [Computed Data](https://www.11ty.dev/docs/data-computed/)
    4. [Pagination](https://www.11ty.dev/docs/pagination/nav/)
    5. [Custom Data File Formats](https://www.11ty.dev/docs/data-custom/)
2. [11ty Rocks](https://11ty.rocks/)
3. [Netlify CMS](https://www.netlifycms.org/docs/intro/)
    1. [Adding to your Site](https://www.netlifycms.org/docs/add-to-your-site/)
    2. [Collection Types](https://www.netlifycms.org/docs/collection-types/)
    3. [Widgets](https://www.netlifycms.org/docs/widgets/#header)
4. [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
5. [Github - webstoemp (jeromecoup personal website)](https://github.com/jeromecoupe/webstoemp)
