![Logo](https://s3-eu-west-1.amazonaws.com/org.paraio/para.png)

# Angular 2 + Para

[![Join the chat at https://gitter.im/Erudika/para](https://badges.gitter.im/Erudika/para.svg)](https://gitter.im/Erudika/para?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is an example application based on [Angular 2 Seed](https://github.com/mgechev/angular-seed). 
It is part of a tutorial on [how to get started quickly with Angular 2](http://www.erudika.com/blog/2016/06/09/Building-the-stack-from-scratch-with-Angular-2/) 
and how to integrate your Angular frontend with a Para backend.
It's simple "Recipe manager" app with:

- CRUD functionality for recipes
- Full-text search
- Markdown support

## [Live DEMO](http://albogdano.github.io/angular2-para/)

Angular 2 Seed provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Out of the box ServiceWorkers and AppCache support thanks to the integration with [angular/mobile-toolkit](https://github.com/angular/mobile-toolkit).
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Has autoprefixer and css-lint support.

# How to start

**Note** that this seed project requires NodeJS v4.x.x or higher and npm 2.14.7+.

In order to start the seed use:

```bash
git clone --depth 1 https://github.com/albogdano/angular2-para.git
cd angular2-para
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
# npm run build.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
```
If your build is slowe on Windows, check out [how to speed-up the build on Windows](https://github.com/mgechev/angular-seed/wiki/Speed-up-the-build-on-Windows).

# License

MIT
