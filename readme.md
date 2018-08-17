# Canopy
Welcome to Canopy🌲! A project to support webapps at _alz

## Developing

### Prerequisites

```yarn``` is required for this project


### Setup

To build the project run the following steps

To install dependencies for the monorepo, run
```
yarn install
```

To clean all dependencies and generated files for all packages, run
```
yarn run clean
```

To install all dependencies for all packages, run
```
yarn run bootstrap
```

To build all packages, run
```
yarn run build
```

A shortcut for the 3 previous commands is
```
yarn run rebuild
```

### Making Changes

Steps to create a new package

1. add a new package directory to the most fitting directory listed in lerna.json
1. add package.json, gulpfile, tsconfig.json, tslint.json, and src code (Use Card package.json an example)
1. run ```npm run bootstrap``` (this installs all needed dependencies)
1. run ```npm run dev``` (this launches gulp watch on all src files and runs storybook locally)

## Testing

TODO make this a prepublish step

```
yarn test
```

## Linting

TODO make this a prepublish step

runs linting for all packages that support it
```
yarn run lint
```

same as above, but it will not exit early and it will always return a non zero error code
```
yarn run lint:dev
```

## Deployment

### Beta Release

```
yarn run publish:beta
```

### Release

Not implemented yet
```
yarn publish
```

## Built With

* [Typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript
* [Babel](http://babeljs.io/) - A JavaScript compiler
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Lerna](https://lernajs.io/) - A tool for managing JavaScript projects with multiple packages
* [Gulp](https://gulpjs.com/) - A streaming build system
* [Emotion](https://emotion.sh/) - A performant and flexible CSS-in-JS library
* [TSLint](https://palantir.github.io/tslint/) - An extensible linter for the TypeScript language.
* [FontAwesome](https://fontawesome.com/) - The iconic SVG, font, and CSS toolkit
* [Storybook](https://storybook.js.org/) - The UI Development Environment
* [Browserslist](https://github.com/browserslist/browserslist) - Library to share target browsers between different front-end tools

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://bitbucket._alz.net/plugins/servlet/view-tags?repo=canopy&projKey=NPM).
