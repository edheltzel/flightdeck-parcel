<div align="center">
<p><img src="https://d.pr/free/i/FDUErn+" alt="Flightdeck Logo"></p>
<h1>Flightdeck</h1>
<h4>A starter project for <a href="https://www.11ty.dev/">Eleventy</a> using a minimal and opinionated frontend workflow.</h4>

[![release](https://img.shields.io/github/release/ginfuru/Flightdeck.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/ginfuru/Flightdeck-11ty/releases/latest) [![jekyll](https://img.shields.io/badge/Jekyll-v3.36+-373277.svg?style=for-the-badge&logo=jekyll&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/ginfuru/Flightdeck/blob/master/LICENSE)

</div>

This starter project is an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck) project that leverages [Jekyll](https://jekyllrb.com/) for its static site generation and [Parcel](https://parceljs.org/) for all compiling and bundling of assets.

## Installation & Usage

#### Clone the repository

```shell
git clone https://github.com/ginfuru/Flightdeck-11ty.git
```

#### Install Dependencies

> You can swap `npm` in favor of `yarn`

```shell
cd flightdeck
npm install
```

OR

```shell
cd flightdeck
yarn
```

#### Start

The start command executes npm scripts that include file watching, browser synchronisation, module hot reloading, CSS injecting etc.

```shell
npm start
```

OR

```shell
yarn start
```

#### Build

```shell
npm run build
```

OR

```shell
yarn run build
```

#### Image and SVG processing

Lossless image compression is provided by [Imagemin](https://github.com/imagemin/imagemin), while sprite generation is performed by [SVG Sprite Generator](https://github.com/frexy/svg-sprite-generator)
