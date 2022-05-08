<div align="center">
<p><img src="https://d.pr/free/i/FDUErn+" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>A starter project for <a href="https://www.11ty.dev/">Eleventy</a> using a minimal and opinionated frontend workflow.</h4>

[![release](https://img.shields.io/github/release/flight-deck/Flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/flight-deck/Flightdeck-11ty/releases/latest) [![jekyll](https://img.shields.io/badge/Eleventy-v0.12.1+-373277.svg?style=for-the-badge&logo=eleventy&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/flight-deck/Flightdeck/blob/master/LICENSE)

</div>

This starter project is an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck-Jekyll) project that leverages [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all compiling and bundling of assets.

There is also a [ParcelJS version](https://github.com/flight-deck/flightdeck-jekyll-parcel), if you're into that.

## Inspiration and Folder Structure 🤔

Like other version of Flightdeck, [Jekyll](https://github.com/flight-deck/Flightdeck-Jekyll/) and [Hugo](https://github.com/flight-deck/Flightdeck-Hugo), each project's objective is to create consistent workflow and reusability of code from project to project. Which was described by Jérôme Coupé's article [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/). Over-time, this will shift as ideas change but 2022, we are shamelessly borrowing concept, structure, and conventions Jérôme Coupé outlines.

## Installation & Usage

#### Clone the repository

```shell
git clone https://github.com/flight-deck/Flightdeck-11ty.git
```

#### Install Dependencies

> You can swap `pnpm` in favor of `yarn` or `npm` - but I would suggest enabling Node's corepack this way you do not need to manage your install a separate package manager for Node and all the `pnpm` commands work out-of-the-box.

Read more about Corepack on Node's documentation site - [Node Docs](https://nodejs.org/api/corepack.html)

###### List all NPM packages

```shell
npm list
Flightdeck-11ty@0.0.1 /Users/ed/Projects/oss/fd-11ty
├── @11ty/eleventy-img@1.0.0
├── @11ty/eleventy@1.0.0
├── npm-run-all@4.1.5
└── sass@1.49.7
```

```shell
cd flightdeck
npm install
```

#### Start

The start command executes npm scripts that include file watching, browser synchronisation, module hot reloading, CSS injecting etc.

```shell
npm start
```

#### Build

```shell
npm run build
```

#### Image and SVG processing

Lossless image compression is provided by [Imagemin](https://github.com/imagemin/imagemin), while sprite generation is performed by [SVG Sprite Generator](https://github.com/frexy/svg-sprite-generator)
