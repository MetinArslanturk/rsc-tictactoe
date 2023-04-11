# Simple RSC ⚛️

> A simple React Server Components tic-tac-toe implementation with fork of [bholmesdev/simple-rsc](https://github.com/bholmesdev/simple-rsc) that you can build yourself 🙌




## Getting started

First, install dependencies with "peer dependency" errors disabled:

```bash
npm i --legacy-peer-deps
```

_This is due to experimental version conflicts. React Server Components are still quite new!_

Then, start the Node development server:

```bash
npm run dev
```

This should trigger a build and start your server at http://localhost:3000 👀

Hint: Try editing the `app/page.jsx` file to see changes appear in your browser.

## Project structure

This project is broken up into the `app/` and `server/` directories. The most important entrypoints are listed below:

```sh
app/ # 🥞 your full-stack application
  page.jsx # server index route.
  _router.jsx # client script that requests your `page.jsx`.

server/ # 💿 your backend that builds and renders the `app/`
  index.js # server router for streaming React server components
  build.js # bundler to process server and client components
```

