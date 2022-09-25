## Changelog 📝

All notable changes to Flightdeck for 11ty will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2022-09-25

### Adds
- includes an early version of Airframe CSS system
- adds content to include sample collections
- adds `.scrub` script through npm scripts to clean and purge

### Removes
- removes most `.keep` files from empty directories. (except for `src/assets/fonts`)

### Changed
- migrates all Flightdeck configuration to `_flightdeck` and `.manifest.js`
   -  file splitting is more organized
- updates license to WTFPL


## [0.0.4] - 2022-06-30

### Adds

- **Re-adds Parcel2 as the primary asset bundler**
- Sharp handles image compression via Parcel

### Removes

- esbuild and esbuild-sass-plugin are removed - now use [Parcel 2](https://parceljs.org/)

### Changed

- Scss no lives at `assets/styles`
-

## [0.0.3] - 2022-06-22

### Adds

- adds better support for postcss using esbuild-sass-plugin
- adds transforms and workflow
  - workflows are items related to development and eleventy specific settings
    - ie: `addPassthroughCopy`
- shortcodes
  - adds codepen shortcode see `/src/__flightdeck/shortcodes/codepen.js` for usage
  - adds `.vscode/shortcode.code-snippets` to list out all available shortcodes for the project.
- plugins
  - adds [eleventy-plugin-embed-everything](https://github.com/gfscott/eleventy-plugin-embed-everything) plugin - instead of creating shortcodes for media embeds - use the URL instead
- filters
  - (ref: [11ty.rocks](https://11ty.rocks))

### Removes

- parcel2 is on a feature branch
- removed most npm scripts - plan to re-add based on esbuild workflow
- removes un-used files left over from Parcel2

### Changed

- project scaffold moves everything under `src` - in better attempts to keep the project root clean
- config is now working under `src/__flightdeck`

### Deprecated

- all browsersync options will be removed once eleventy's server plugin is released under eleventy `v2.0`

## [0.0.2] - 2022-05-17

### Adds

- organized project scaffolded based on [webstoemp- Structuring Eleventy projects](https://www.webstoemp.com/blog/eleventy-projects-structure/)
- adds esbuild for javascript and sass bundling/processing
- - adds "common" shortcodes
  - (ref: [11ty.rocks](https://11ty.rocks))

### Removes

- parcel2 is on a feature branch
- removed most npm scripts - plan to re-add based on esbuild workflow
- removes `youtube.js` under shortcodes in favor of `eleventy-plugin-embed-everything`

### Changed

- eleventy config is broken up into multiple files, that live under `__flightdeck`

### Deprecated

- all browsersync options will be removed once eleventy's server plugin is released under eleventy `v2.0`

## [0.0.2] - 2022-02-20

Checkout branch `feature/parcel2`

### Added

- includes Parcel2
- adds parcel sass transformer
  - adds sass, postcss, autoprefixer for added support for styles during dev and prod
- includes npm-run-all for better npm scripts
  - run `pnpm run` to see a full list
- includes `flightdeck.manifest.js` for project configuration
  - to prevent the `.eleventy.js` from getting too long

### Removes

- drops `yarn` in favor of `pnpm`

## [0.0.1] - 2020-10-24

### Init

- this is an init and left empty intentionally

Attempting keep a minimal configuration for 11ty while keeping the tools similar to [Flightdeck for Jekyll](https://github.com/flight-deck/Flightdeck-for-Jekyll) and [Flightdeck for Hugo](https://github.com/flight-deck/Flightdeck-for-Hugo)
