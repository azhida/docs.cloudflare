# Get started guide

This guide will instruct you through setting up and deploying your first Worker.

::: info Try the Playground

The quickest way to experiment with Cloudflare Workers is in the Playground. The Playground does not require any setup. It is an instant way to preview and test a Worker directly in the browser.
:::

::: info Workers Learning Path
Review the Workers Learning Path for a step-by-step guide to understanding essential Workers concepts and building on the Cloudflare Developer Platform.
:::

## Get started in the dashboard

To create your first Worker using the Cloudflare dashboard:

1. Log in to the Cloudflare dashboard and select your account.
1. Select Workers & Pages > Create application.
1. Select Create Worker > Deploy.

## Prerequisites

1. Sign up for a `Cloudflare account`.
1. Install `npm`.
1. Install `Node.js`.

::: info Node.js version manager
Use a Node version manager like `Volta` or `nvm` to avoid permission issues and change Node.js versions. `Wrangler`, discussed later in this guide, requires a Node version of `16.17.0` or later.
:::

## 1. Create a new Worker project

`C3 (create-cloudflare-cli)` is a command-line tool designed to help you set up and deploy new applications to Cloudflare. In addition to speed, it leverages officially developed templates for Workers and framework-specific setup guides to ensure each new application that you set up follows Cloudflare and any third-party best practices for deployment on the Cloudflare network.
Open a terminal window and run C3 to create your Worker project:

::: code-group

```sh [npm]
npm create cloudflare@latest
```

```sh [yarn]
yarn create cloudflare
```

:::


This will prompt you to install the `create-cloudflare` package, and lead you through setup.

For this guide, set up a basic Worker:

1. Name your new Worker directory by specifying where you want to create your application.
1. Select `"Hello World" Worker` as the type of application you want to create.
1. Answer `yes` or `no` to using TypeScript.

::: info 
The rest of this guide assumes that you will create a JavaScript project. If you are creating a TypeScript project, the files will be .ts, a .tsconfig file will be created, and proper dependencies will be added.
:::


You will be asked if you would like to deploy the project to Cloudflare.

- If you choose to deploy, you will be asked to authenticate (if not logged in already), and your project will be deployed to the Cloudflare global network.
- If you choose not to deploy, go to the newly created project directory to begin writing code. Deploy your project by following the instructions in `step 4`.

In your project directory, C3 has generated the following:

1. `wrangler.toml`: Your `Wrangler` configuration file.
2. `index.js` (in `/src`): A minimal `'Hello World!'` Worker written in `ES module` syntax.
3. `package.json`: A minimal Node dependencies configuration file.
4. `package-lock.json`: Refer to `npm documentation on package-lock.json`.
5. `node_modules`: Refer to `npm documentation node_modules`.

### Create a new Worker Project from an external source

In addition to creating new projects from C3 templates, C3 also supports creating new projects from Git repositories. To create a new project from a Git repository, open your terminal and run:

```sh
npm create cloudflare@latest -- --template <SOURCE>
```

`<SOURCE>` may be any of the following:

- user/repo (GitHub)
- `git@github.com`:user/repo
- `https://github.com/user/repo`
- user/repo/some-template (subdirectories)
- user/repo#canary (branches)
- user/repo#1234abcd (commit hash)
- bitbucket:user/repo (Bitbucket)
- gitlab:user/repo (GitLab)

At a minimum, template folders must contain the following:

- `package.json`
- `wrangler.toml`
- `src/` containing a worker script referenced from `wrangler.toml`