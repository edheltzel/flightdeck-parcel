<div align="center">
<p><img src="https://d.pr/free/i/FDUErn+" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>A starter project for <a href="https://www.11ty.dev/">Eleventy</a> using a minimal and opinionated frontend workflow.</h4>

[![release](https://img.shields.io/github/release/ginfuru/Flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/ginfuru/Flightdeck-11ty/releases/latest) [![jekyll](https://img.shields.io/badge/Jekyll-v3.36+-373277.svg?style=for-the-badge&logo=jekyll&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/ginfuru/Flightdeck/blob/master/LICENSE)

</div>

This starter project is an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck) project that leverages [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all compiling and bundling of assets.

There is also a [ParcelJS version](https://github.com/flight-deck/flightdeck-jekyll-parcel), but this uses parcel v1.

## Inspiration and Folder Structure 🤔

Like pervious Flightdeck versions for [Jekyll](https://github.com/flight-deck/Flightdeck-Jekyll/) and [Hugo](https://github.com/flight-deck/Flightdeck-Hugo) each project's objective is to create consistent workflow and reusability of code from project to project. Which was described by Jérôme Coupé's article [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/). Over-time, this will shift as ideas change but 2022, we are shamelessly borrowing concept, structure, and conventions Jérôme Coupé outlines.

## Installation & Usage

#### Clone the repository

```shell
git clone https://github.com/ginfuru/Flightdeck-11ty.git
```

#### Install Dependencies

**Optional Opinion** – Personally, [I](https://github.cim/edheltzel) like having eleventy installed globally, only because I have traveled without a reliable data connection and had some unexpected results with dependencies, but the official docs suggest using `npx`

> You can swap `npm` in favor of `yarn`

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
