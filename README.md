# alba
alba (moon flower) is a frontend repo that integrate the build tools and frontend stacks 

# prerequisite

1. install [node and npm](https://treehouse.github.io/installation-guides/mac/node-mac.html)
2. install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) (optional)

# tool chains
## build tool
[Snowpack](https://www.snowpack.dev/) is a fast frontend build tool, designed for the modern web. JavaScript's native ES Module ([ESM](https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/)) syntax is the magic behind Snowpack's unbundled development. 
[Webpack](https://webpack.js.org/) and [Parcel](https://parceljs.org/) are other option for build/packaging tool, we may still need webpack to help do some packaging work.

run `npm install --save-dev snowpack` to install snowpack

## monorepo
A Monorepository is an architectural concept, which means, instead of managing multiple repositories, keep all isolated code parts inside one repository. Keep in mind the word `isolated` means that monorepo has nothing in common with monolithic apps. You can keep many kinds of logical apps inside one repo; for example, a website and its iOS app.
There are lots of monorepo tools in JS world which is not surprizing, (lerna)[https://github.com/lerna/lerna] is the one we chose. Lerna (named after the home of Hydra, the multi-headed beast) is a “tool for managing JavaScript projects with multiple packages”.
Other tools like (nx)[https://nx.dev/react], (rush)[https://rushjs.io/] can also support monorepo development and more can refer to this (article)[https://blog.bitsrc.io/11-tools-to-build-a-monorepo-in-2021-7ce904821cc2].

## test

## lint

# architecture

## preference of typescript

## ui lib and framework

## state management

## comunication

## routing

## micro-frontend

## css

## charting and visualization

## table


