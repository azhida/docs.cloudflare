# Quickstarts

Quickstarts are GitHub repositories that are designed to be a starting point for building a new Cloudflare Workers project. To start any of the projects below, run:

```sh
npm create cloudflare@latest <NEW_PROJECT_NAME> -- --template <GITHUB_REPO_URL>
```

`new-project-name`
  
A folder with this name will be created with your new project inside, pre-configured to your Workers account.

`template`

This is the URL of the GitHub repo starter, as below. Refer to the create-cloudflare documentation for a full list of possible values.

::: tip Cloudflare templates repository
To access a full list of available Cloudflare templates, refer to the [Cloudflare templates repository](https://github.com/cloudflare/workers-sdk/tree/main/templates).
:::

## Example Projects

### Router

Run different logic based on the URL and request method. Use this starter to Build REST APIs or applications that require routing logic.

```sh
npm create cloudflare@latest my-app -- --template cloudflare/workers-sdk/templates/worker-router
```

### Speedtest

Measure download/upload connection speed from the client side, using the Performance Timing API.

```sh
npm create cloudflare@latest my-app -- --template cloudflare/workers-sdk/templates/worker-speedtest
```

### Sentry

Log exceptions and errors in your Workers application to Sentry.io - an error tracking tool.

```sh
npm create cloudflare@latest my-app -- --template mhart/cf-sentry
```

### Image Color

Retrieve the dominant color of a PNG or JPEG image.

```sh
npm create cloudflare@latest my-app -- --template xtuc/img-color-worker
```

### Cloud Storage

Serve private Amazon Web Services (AWS) bucket files from a Worker script.

```sh
npm create cloudflare@latest my-app -- --template conzorkingkong/cloud-storage
```

### BinAST

Serve a JavaScript Binary AST via a Cloudflare Worker.

```sh
npm create cloudflare@latest my-app -- --template xtuc/binast-cf-worker-template
```

### AWS DynamoDB SQS

Use AWS services such as DynamoDB and SQS from a Cloudflare Worker.

```sh
npm create cloudflare@latest my-app -- --template cloudflare/workers-sdk/templates/worker-aws
```

### Edge-Side Rendering - Vitedge

Use Vite to render pages on Cloudflare's global network with great DX. Includes i18n, markdown support and more.

```sh
npm create cloudflare@latest my-app -- --template frandiox/vitessedge-template
```

### REST API with Fauna

Build a fast, globally distributed REST API using Cloudflare Workers and Fauna, the data API for modern applications.

```sh
npm create cloudflare@latest my-app -- --template fauna-labs/fauna-workers
```

### Analytics Engine Forwarder

Use a Worker to capture analytics data with Analytics Engine.

```sh
npm create cloudflare@latest my-app -- --template cloudflare/workers-sdk/templates/worker-analytics-engine-forwarder
```

## Frameworks

### Hono

Hono is an ultrafast web framework built for Cloudflare Workers. This is a minimal project using Hono, TypeScript, esbuild, Miniflare, and Jest.

```sh
npm create cloudflare@latest my-app -- --template honojs/hono-minimal
```

### Apollo GraphQL Server

Lightning-fast, globally distributed Apollo GraphQL server, deployed on the Cloudflare global network using Cloudflare Workers.

```sh
npm create cloudflare@latest my-app -- --template cloudflare/workers-graphql-server
```

### GraphQL Yoga

The most flexible, fastest, and lightest GraphQL server for all environments, Cloudflare Workers included.

```sh
npm create cloudflare@latest my-app -- --template the-guild-org/yoga-cloudflare-workers-template
```

### Flareact

Flareact is an edge-rendered React framework built for Cloudflare Workers. It features file-based page routing with dynamic page paths and edge-side data fetching APIs.

```sh
npm create cloudflare@latest my-app -- --template flareact/flareact
```

### Sunder

Sunder is a minimal and unopinionated framework for Service Workers. This template uses Sunder, TypeScript, Miniflare, esbuild, Jest, and Sass, as well as Workers Sites for static assets.

```sh
npm create cloudflare@latest my-app -- --template sunderjs/sunder-worker-template
```

## Built with Workers

Get inspiration from other sites and projects out there that were built with Cloudflare Workers.

[Built with Workers](https://workers.cloudflare.com/built-with)