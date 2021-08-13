# alba
alba (moon flower) is a frontend repo that integrate the build tools and frontend stacks 

# prerequisite

1. install [node and npm](https://treehouse.github.io/installation-guides/mac/node-mac.html)
2. install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) (optional)

# tool chains

## build tool
[Snowpack](https://www.snowpack.dev/) is a fast frontend build tool, designed for the modern web. JavaScript's native ES Module (ESM [[1]](https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/)) syntax is the magic behind Snowpack's unbundled development. 

[Webpack](https://webpack.js.org/) and [Parcel](https://parceljs.org/) are other option for build/packaging tool, we may still need webpack to help do some packaging work.

run `npm install --save-dev snowpack` to install snowpack

## monorepo
A Monorepository is an architectural concept, which means, instead of managing multiple repositories, keep all isolated code parts inside one repository. Keep in mind the word `isolated` means that monorepo has nothing in common with monolithic apps. You can keep many kinds of logical apps inside one repo; for example, a website and its iOS app.

There are lots of monorepo tools in JS world which is not surprizing, [lerna](https://github.com/lerna/lerna) is the one we chose. Lerna (named after the home of Hydra, the multi-headed beast) is a “tool for managing JavaScript projects with multiple packages”.

Other tools like [nx](https://nx.dev/react), [rush](https://rushjs.io/) can also support monorepo development and more can refer to this article [[2]](https://blog.bitsrc.io/11-tools-to-build-a-monorepo-in-2021-7ce904821cc2).

## test
Unit test tool [Jest](https://jestjs.io/) is a JavaScript Testing Framework with a focus on simplicity.
For e2e test, [cypress.io](https://www.cypress.io/) is the one we chose.  

## lint
js lint are well sovled problems, [eslint](https://eslint.org/) is the one.

# architecture

## preference of typescript
As a best practic, we prefer all frontend code is written in [typescript](https://www.typescriptlang.org/). this article [[3]](https://serokell.io/blog/why-typescript) provides a good explaination about why and there are lots of others for sure.

## ui lib and framework
There are lots of debating in the community about which JS framework is the best, [react](https://reactjs.org/), [vue](https://cn.vuejs.org/index.html), and [angular](https://angularjs.org/) are the most popular and there are some new players like [Svelte](https://svelte.dev/) which has been used more and more in frontend development.  Some articles about comparison of these options can be found: [[4]](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/) [[5]](https://athemes.com/guides/angular-vs-react-vs-vue/) [[6]](https://blog.bitsrc.io/react-vs-sveltejs-the-war-between-virtual-and-real-dom-59cbebbab9e9)

These are all good choice for building frontend application, considering the maturity of community, we choise react, and due to the high cost to switch between UI framework, we should make this serious.


Based on react, we woiuld like to have a thin, flexible layer that support the quick, efficient development,  [Chakra](https://chakra-ui.com/) is a good choice based on our past experience. Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. With Chakara, we can easily develop new customized component, no need to include CSS to support style and theme.

## state management
State management is the most challenging work in react world.  There are lots of solutions as well. [Redux](https://redux.js.org/), [Recoil](https://recoiljs.org/) and [React hooks](https://reactjs.org/docs/hooks-intro.html) are most poluar. You can find the article [[7]](https://dev.to/workshub/state-management-battle-in-react-2021-hooks-redux-and-recoil-2am0) to explain the difference among these tools.

We choice Recoil as our state management solution.

## routing
Routing is the ability to move between different parts of an application when a user enters a URL or clicks an element (link, button, icon, image etc) within the application. [reactrouter](https://reactrouter.com/) is used to support flexible routing in web application.

## micro-frontend
micro-frontend are designed to works in micro-service architecture where the frontend app doesn't need to be physically bundled together and can dynamically load from remote site.  It will increase the overall complexity.  we dont prefer to introduce this at the initial phase of application deveopment, we may introduce it once the application has grown big enough.  [single spa](https://single-spa.js.org/) is the tool we want to use to support micro-frontend.

## comunication
In a simple web application, component can communicate with each other through state, while, after introducing micro-frontend, some more sophisticated mechanisim should be invovled such as in [rxjs](https://rxjs.dev/), we can use [observable](https://rxjs.dev/guide/observable) pattern to support communication between different remote comonents.

## css
With Chakra, there is no need to include CSS anymore.
[tailwind](https://tailwindcss.com/) is another option. (we dont need it in case Chakra is used.)

## charting and visualization
The most poluar frontend open source charting libraries are [echarts](https://echarts.apache.org/en/index.html), [highcharts](https://www.highcharts.com/), [ant g2](https://g2.antv.vision/en).  

we prefer ant g2 ([bizcharts](https://bizcharts.net/) is a react encapsulation building on ant g2) due to this rich functionality and flexible grammar driven rendering technology. While, g2/bizcharts has it's own problem, the code splitting and chart update are issues we found, we may consider wrap our own chart component based on g2 or using some low level tools such as airbnb [vizx](https://airbnb.io/visx/) to build our charting components.

Vizx is a collection of expressive, low-level visualization primitives for React, you can think it as [d3](https://d3js.org/) for react.

## table
we may need to build our own data table to meet the complex requirement for data analytic applications.

## i18n
[react-i18next](https://github.com/i18next/react-i18next) is a powerful internationalization framework for React / React Native which is based on [i18next](https://www.i18next.com/). Antoher option is react-intl provided by [formatjs](https://formatjs.io/)

## http call
With react, we usually use [Axios](https://github.com/axios/axios), [jQeury Ajax](https://api.jquery.com/jquery.ajax/) or `window.fetch` to send http request to backend, we prefer vanilla API over Axios [[8]](https://blog.logrocket.com/axios-or-fetch-api/).


## websocket
Web API does have [web socket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) support, while some other libraires are available as well, such as [sockio](https://socket.io/), [sockjs](https://github.com/sockjs), [react-use-websocket](https://github.com/robtaussig/react-use-websocket).  we prefer to use vanilla API provided by most of the morden browser.