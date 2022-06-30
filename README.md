<div align="center">
<p><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>A starter project for <a href="https://www.11ty.dev/">Eleventy</a> using a minimal and opinionated frontend workflow.</h4>

[![release](https://img.shields.io/github/release/flight-deck/Flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/flight-deck/Flightdeck-11ty/releases/latest) [![jekyll](https://img.shields.io/badge/Eleventy-v0.12.1+-373277.svg?style=for-the-badge&logo=eleventy&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/flight-deck/Flightdeck/blob/master/LICENSE)

</div>

This starter project is an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck-Jekyll) project that leverages [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all compiling and bundling of assets.

There is also a [ParcelJS version](https://github.com/flight-deck/flightdeck-jekyll-parcel), if you're into that.

## Inspiration and Folder Structure 🤔

Like other version of Flightdeck, [Jekyll](https://github.com/flight-deck/Flightdeck-Jekyll/) and [Hugo](https://github.com/flight-deck/Flightdeck-Hugo), each project's objective is to create consistent workflow and reusability of code from project to project. Which was described by Jérôme Coupé's article [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/). Over-time, this will shift as ideas change but in 2022, we are shamelessly borrowing the concept, structure, and conventions Jérôme Coupé outlines.

## Installation & Usage

#### Clone the repository

```shell
git clone https://github.com/flight-deck/Flightdeck-11ty.git
```

#### Install Dependencies

> ~~You can swap `pnpm` in favor of `yarn` or `npm` - but I would suggest enabling Node's [corepack](https://nodejs.org/api/corepack.html) this way you do not need to manage or install a separate package manager for Node and all the `pnpm` commands work out-of-the-box~~
>
> `pnpm` brakes `parcel`

Read more about Corepack on Node's documentation site - [Node Docs](https://nodejs.org/api/corepack.html)

###### List all NPM packages

```shell
npm list
flightdeck-11ty@0.0.4 /Users/ed/Projects/oss/flightdeck/fd-11ty
├── @11ty/eleventy@1.0.1
├── @parcel/transformer-sass@2.6.2
├── browserlist@1.0.1
├── cross-env@7.0.3
├── eleventy-plugin-embed-everything@1.14.0
├── html-minifier@4.0.0
├── imagemin-cli@7.0.0
├── imagemin-webp@7.0.0
├── npm-run-all@4.1.5
├── parcel@2.6.2
├── sass@1.53.0
└── sharp@0.30.7
```

```shell
cd flightdeck
npm install
```

#### Available Scripts

**List all NPM Scripts**

```shell
npm run
Lifecycle scripts included in flightdeck-11ty@0.0.4:
  start
    npm-run-all -p dev:11ty dev:parcel

available via `npm run-script`:
  dev:11ty
    eleventy --serve
  dev:parcel
    npm-run-all -p  watch:assets
  watch:assets
    parcel watch './src/assets/images/*' ./src/assets/js/app.js ./src/assets/styles/app.scss --dist-dir ./dist/assets
  build
    npm-run-all -s clean build:parcel build:11ty
  build:11ty
    cross-env ELEVENTY_ENV=production eleventy
  build:parcel
    parcel build './src/assets/images/*' ./src/assets/js/app.js ./src/assets/styles/app.scss --dist-dir ./dist/assets
  clean:node
    (rm -rf node_modules package-lock.json pnpm-lock.yaml || del node_modules package-lock.json pnpm-lock.yaml)
  clean
    (rm -rf dist/ .parcel-cache/ || del dist/ .parcel-cache)
  purge
    npm run clean:node && npm run clean && echo "\033[32m🧹 All Clean ✨""\033[0m Run ""\033[33mnpm install""\033[0m to start fresh 🤩"
```

The `start` command executes npm scripts that include file watching, browser synchronisation, module hot reloading, CSS injecting etc.

```shell
npm start
```

#### Build

```shell
npm run build
```

#### Image and SVG processing

Lossless image compression is provided by [Parcel - Reference the docs](https://parceljs.org/recipes/image/)
