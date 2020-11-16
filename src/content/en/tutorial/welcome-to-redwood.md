# Welcome to Redwood

Welcome to Redwood! If you haven't yet, check out the [Redwood README](https://github.com/redwoodjs/redwood/blob/main/README.md) to get a little background on why we created Redwood and the problems it's meant to solve. Redwood brings several existing technologies together for the first time into what we think is the future of database-backed single page applications.

In this tutorial we're going to build a blog engine. In reality a blog is probably not the ideal candidate for a Redwood app: blog articles can be stored in a CMS and statically generated to HTML files and served as flat files from a CDN. But as most developers are familiar with a blog and it uses all of the features we want to demonstrate, we decided to build one anyway.

Want to watch this tutorial instead? Start here:

<div class="relative pb-9/16">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/tiF9SdM1i7M?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

<div class="relative pb-9/16 mt-4">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/SP5vbsWf5Yg?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

<div class="relative pb-9/16 mt-4">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/eT7iIy0F8Tk?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

<div class="relative pb-9/16 mt-4">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/UpD3HyuZkvY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

## Prerequisites

This tutorial assumes you are already familiar with a few core concepts:

- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [The Jamstack](https://jamstack.org/)

You could work through this tutorial without knowing anything about these technologies but you may find yourself getting lost in terminology that we don't stop and take the time to explain. It also helps knowing where the line is between what is built into React and what additional features Redwood brings to the table.

### Node.js and Yarn Versions

During installation, RedwoodJS checks if your system meets version requirements for Node and Yarn:

- node: ">=12"
- yarn: ">=1.15"

👉 **Heads Up:** If your system versions do not meet both requirements, _the installation bootstrap will result in an ERROR._ To check, please run the following from your terminal command line:

```
node --version
yarn --version
```

Please do upgrade accordingly. Then proceed to the RedwoodJS installation when you're ready!

> **Installing Node and Yarn**
>
> There are many ways to install and manage both Node.js and Yarn. If you're installing for the first time, we recommend the following:
>
> **Yarn**
>
> - We recommend following the [instructions via Yarnpkg.com](https://classic.yarnpkg.com/en/docs/install/).
>
> **Node.js**
>
> - For **Linux** and **Mac** users, `nvm` is a great tool for managing multiple versions of Node on one system. It takes a bit more effort to set up and learn, however, in which case getting the latest [installation from Nodejs.org](https://nodejs.org/en/) works just fine.
>   - For **Mac** users, if you already have Homebrew installed, you can use it to [install `nvm`](https://formulae.brew.sh/formula/nvm) as well. Otherwise, follow the [installation instructions from `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).
>   - For **Linux** users, you can follow the [installation instructions from `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).
> - We recommend **Windows** users visit [Nodejs.org](https://nodejs.org/en/) for installation.
>
> If you're confused about which of the two current Node versions to use, we recommend using the most recent "even" LTS, which is currently v14.
