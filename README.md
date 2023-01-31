<div id="top" align="center">
<!-- PROJECT LOGO -->
  <a href="https://github.com/flight-deck"><img src="https://rdm.sfo2.digitaloceanspaces.com/flightdeck/v3-flightdeck__logo--purple-haze-600x528.png" alt="Flightdeck Logo" width="400"></a>
  <h1>Flightdeck 🚀</h1>
  <h4 style="padding-bottom: .5em">An opinionaated starter project for <a href="https://www.11ty.dev/">Eleventy 🎈</a></h4>
<!-- PROJECT SHIELDS -->

[![release](https://img.shields.io/github/release/flight-deck/flightdeck-for-eleventy.svg?style=for-the-badge&logo=github&logoColor=white&colorA=101119&colorB=6D57FF)](https://github.com/flight-deck/flightdeck-for-eleventy/releases/latest) [![eleventy](https://img.shields.io/badge/Eleventy-v1.0.0+-373277.svg?style=for-the-badge&logo=eleventy&logoColor=white&colorA=101119&colorB=7273D6)](https://github.com/11ty/eleventy/releases/latest) [![license](https://img.shields.io/badge/License-MIT-373277.svg?style=for-the-badge&l&logoColor=white&colorA=101119&colorB=42557B)](https://github.com/flight-deck/flightdeck-for-eleventy-and-parcel/blob/master/LICENSE)

</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>📔 Table of Contents</summary>

- [About the Project](#about-the-project)
  * [Screenshots](#screenshots)
  * [Tech Stack](#tech-stack)
  * [Features](#features)
  * [Color Reference](#reference)
  * [Environment Variables](#variables)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Running Tests](#running-tests)
  * [Run Locally](#run-locally)
  * [Deployment](#deployment)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
  * [Code of Conduct](#code-of-conduct)
- [FAQ](#faq)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

</details>

<!-- ABOUT THE PROJECT -->

## About The Project 🌟

The Flightdeck objective is to provide a unified starting point for all your Jamstack websites, by leveraging popular static-site-generators _(SSG)_.

This flavor of Flightdeck uses [Eleventy](https://www.11ty.dev/) with an opinionated workflow, keeping Eleventy in control of the entire development and build processes.

### Inspiration 💡

Like other versions of Flightdeck, this is just an adaptation of the original [Flightdeck](https://github.com/flight-deck/Flightdeck-Jekyll) project that uses [Jekyll](https://jekyllrb.com/) for its static site generation and [Gulp](https://gulpjs.com/) for all assets bundling. (The [Hugo](https://github.com/flight-deck/Flightdeck-Hugo) version, takes full advantage of Hugo's asset pipeline.)

Jérôme Coupé's post [Structuring Eleventy Projects](https://www.webstoemp.com/blog/eleventy-projects-structure/) served as inspiration for how this project is structured and over-time, things will shift as ideas change, but in 2022, we are shamelessly adopting the concept Jérôme Coupé outlines.

<p align="right">(<a href="#top">back to top</a>)</p>

### Tech Stack 👾

- [Eleventy](https://www.11ty.dev/)
- [Parcel](https://parceljs.org/)
- [Sass](https://sass-lang.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

<details>
  <summary>see all dependencies</summary>
  <pre>
    ❯ npm list
    flightdeck-for-eleventy-and-parcel@0.1.0
    ├── @11ty/eleventy-plugin-syntaxhighlight@4.1.0
    ├── @11ty/eleventy@1.0.2
    ├── @parcel/config-default@2.7.0
    ├── @parcel/core@2.7.0
    ├── @parcel/transformer-sass@2.7.0
    ├── browserlist@1.0.1
    ├── cross-env@7.0.3
    ├── eleventy-plugin-embed-everything@1.14.1
    ├── html-minifier@4.0.0
    ├── npm-run-all@4.1.5
    ├── parcel@2.7.0
    ├── sass@1.55.0
    └── sharp@0.29.3
  </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started 🧰

All version of Flightdeck use NodeJS. So a very minimal and basic knowledge of Node and Git should be had when using Flightdeck as your launchpad.

> In the future, we plan to include Docker and make all Flightdeck starters available as a Yeoman and/or NPM package.

### Prerequisites 🧯

We are assuming that you already have Node with NPM and Git installed on your system – it is also ideal that you have the latest [LTS](https://nodejs.org/en/download/) release of Node.
**As of this writing the current LTS release is `16.16.0`**

#### Dependencies 🤖

`pnpm` is our package manager of choice – we highly recommend you enable Node's [corepack](https://nodejs.org/api/corepack.html), this way all the `pnpm` commands work out-of-the-box, without having to install `pnpm` or `yarn` separately.

> **Note:** Currently Parcel has an issue performing **auto install** when using pnpm. So if you'd like for Parcel to handle installation of dependencies, we'd recommend that you **stick with NPM or Yarn**. If you'd rather handle the install of dependencies manually, the PNPM is a great option.

> Please be aware that `pnpm` will not be the most recent version and as of this writing, PNPM is at version [7.12.2](https://github.com/pnpm/pnpm/releases).

**Also, You can swap `pnpm` in favor of `yarn` or `npm` without any friction.**

- pnpm

  ```sh
  corepack enable

  corepack prepare pnpm@latest --activate
  ```

### Installation ⚙️

```shell
git clone https://github.com/flight-deck/flightdeck-for-eleventy.git
```

```shell
cd flightdeck-for-eleventy
pnpm install
```

<details>
	<summary>See all NPM packages</summary>
  <pre>pnpm list
    Legend: production dependency, optional only, dev only
    flightdeck-for-eleventy-and-parcel@0.1.8 /Users/ed/Projects/oss/flightdeck/for-eleventy
    devDependencies:
    @11ty/eleventy 2.0.0-beta.2                  eleventy-plugin-embed-everything 1.15.0
    @11ty/eleventy-plugin-syntaxhighlight 4.2.0  html-minifier 4.0.0
    @parcel/config-default 2.8.3                 markdown-it-attrs 4.1.6
    @parcel/core 2.8.3                           npm-run-all 4.1.5
    @parcel/transformer-sass 2.8.3               parcel 2.8.3
    browserlist 1.0.1                            sass 1.57.1
    cross-env 7.0.3                              sharp 0.31.3
  </pre>
</details>
<p align="right">(<a href="#top">back to top</a>)</p>

### Run Locally 🏃‍♂️

There are just a few npm scripts available, but the `start` command is where all the magic 🪄✨ happens – it will spin up the development server from Eleventy.

The focus here is to keep Eleventy in control of the entire development and build processes, to keep things simple.

```shell
pnpm start
```

<details>
  <summary>Available Run Commands</summary>
  <pre>Lifecycle scripts:
  start
    run-p dev:11ty dev:parcel
  Commands available via "pnpm run":
    dev:11ty
      eleventy --serve --config=_flightdeck/.manifest.js
    dev:parcel
      run-p  watch:assets
    watch:assets
      parcel watch './src/assets/images/**/*.*' ./src/assets/js/app.js ./src/assets/styles/style.scss --dist-dir ./dist/assets
    build
      run-s clean build:11ty build:parcel
    build:11ty
      cross-env ELEVENTY_ENV=production eleventy --config=_flightdeck/.manifest.js
    build:parcel
      parcel build './src/assets/images/**/*.*' ./src/assets/js/app.js ./src/assets/styles/style.scss --dist-dir ./dist/assets
    clean
      ./.scrub.sh site
    purge
      ./.scrub.sh purge
  </pre>

~~Notice the funky `||` ? This is an attempt to provide cross platform compatibility for Linux/Unix, and Windows. If your terminal doesn’t know what it is, it will skip over it.~~

  - `build` command - executes the production build of your site with Eleventy, includes HTML minification, compressed Sass, optimized images, and bundled javascript.
  - `clean` command - scrubs/removes the `dist/` and `.cache` directories
  - `purge` command - scrubs/removes the `dist/`, `.cache`, `node_modules`, and any lock files from npm, yarn, or pnpm.

  Both `clean` and `purge` are executed from a bash script keep the `package.json` as clean as possible.

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

### Deployment 🚀

Deployments for this project are completely up you and your needs.

We really like Netlify but also enjoy using CI/CD tools or even using our [Liftoff Deployment Script](https://github.com/flight-deck/Lifftoff-Deploy-Script)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- File Structure -->

### File Structure 📁

Flightdeck is a very opinionated starter kit, so the file structure is very specific to our needs. The Eleventy configuration file is located under `_flightdeck` and is called `.manifest.js`.

All the Eleventy configuration is done in this file, and it is broken down into sections for easier navigation and maintainability. The `.manifest.js` file is where you will find the `addPassthroughCopy` and `addWatchTarget` methods along with custom filters, shortcodes, and Eleventy Plugins. All Eleventy configuration options are available, see the [Eleventy Docs](https://www.11ty.dev/docs/config/) for more information.

<details>
  <summary>
    <pre> .
          ├──  components
          │  └──  blockquote.js
          ├──  components.js
          ├──  filters
          │  ├──  baseUrl.js
          │  ├──  dates.js
          │  ├──  excerpt.js
          │  └──  limit.js
          ├──  filters.js
          ├──  plugins.js
          ├──  shortcodes
          │  ├──  codepen.js
          │  ├──  copyright.js
          │  └──  version.js
          ├──  shortcodes.js
          ├──  transforms
          │  └──  minifyHtml.js
          ├──  transforms.js
          └──  workflow.js</pre>
  </summary>
</details>

<!-- USAGE -->

### Usage 👀

Flightdeck makes a lot of assumptions and is very opinionated - but having a good idea of how Eleventy's [data cascade](https://www.11ty.dev/docs/data-cascade/) works is always nice, as well as having some understanding on [template inherence](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) when working with Nunjucks will go a long way. **But is not needed**

**WIP** The Autopilot CSS System uses a modified version of the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern), but we combined a couple of concepts regarding naming conventions that fit our workflow. Autopilot is a classless CSS system that plays well with semantic markup. **Documentation coming soon**

If you're looking to extend your project with other NPM modules, Eleventy plugins, or Parcel Plugins, just reference the appropriate documentation.

- [Eleventy Docs](https://11ty.dev)
- [Parcel Plugins](https://parceljs.org/features/plugins/)
  - [Parcel Sass Docs](https://parceljs.org/languages/sass/)
  - [Parcel Javascript Docs](https://parceljs.org/languages/javascript/)
- [Nunjucks Docs](https://mozilla.github.io/nunjucks/templating.html)
- [NPM Package Docs](https://docs.npmjs.com/using-npm-packages-in-your-projects)
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap 🧭

- [x] Expand on using Eleventy Plugins
- [ ] Create a theme using Autopilot - Flightdeck's classless CSS system
- [ ] Improve documentation
- [ ] Add more examples
- [ ] Expand on using Parcel Plugins
- [ ] Add more filters and shortcodes
- [ ] Add Dockerfile
- [ ] Include in NPM package

See the [open issues](https://github.com/flight-deck/flightdeck-for-eleventy/issues) for a full list of proposed features (and known bugs/issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing 👋

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License ⚠️

Distributed under the WTFPL License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments 💎

There are a lot of starter projects for Eleventy which can be found at [Eleventy Starters](https://www.11ty.dev/docs/starter/). Filters and shortcode inspiration are from, [11ty.rocks](https://11ty.rocks), [Eleventy Recipes](https://11ty.recipes/), and [webstoemp.com](https://www.webstoemp.com/).

<p align="right">(<a href="#top">back to top</a>)</p>
