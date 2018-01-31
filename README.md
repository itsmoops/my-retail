# myRetail Target Case Study

This application was created for the Target Engineer interview. It uses React, Redux, Firebase and Webpack.

I used an existing boilerplate that I have been working on in my spare time. Some of this may be overkill, but I wanted to show some of the tools that I use in personal projects.

Unfortunately, the buzzer ran out and I was unable to get tests running in the time alotted. You can see the skeletons of the jest tests I was beginning to set up.

The case study is published on Firebase hosting here:
https://myretail-case-study.firebaseapp.com/

## Setup

#### Install:

```
yarn install
```

## Usage

### Develop

Webpack dev server running at <http://localhost:8080>.

```
yarn start
```

### Build

Outputs to `dist` folder.

```
yarn build-dev
yarn build-prod
```

### Deploy

(These commands will only work if you are Firebase authenticated)

```
yarn deploy-dev
yarn deploy-prod
yarn deploy-all
```
