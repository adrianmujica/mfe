# Microfrontend project

On this workshop I'm expose an Angular app shell that loads:
  - HomeComponent from shell app.
  - MFE1 isolated angular app
  - MFE2 isolated react app

On each folder you will find a readme.md explained what I did to build each application and connect it with the shell application.

## Deployment:
  **node version: 16.14.0**
  </br>**angular version: 13.2.7**
  </br>**react version: 17.0.2**

  - shell app (localhost:5000)
    - npm i
    - ng serve

  - mfe1 app (localhost:5001)
    - npm i
    - ng serve

  - mfe2 app (localhost:3000)
  </br>I had to use yarn because with npm some webpack commands doens't work with the version 16.14.0 of node
  </br> **yarn version: 1.22.18**
    - yarn
    - yarn webpack serve 
    
   ## References
   - [Angular module federation](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/README.md)
   - [Webpack module federation](https://webpack.js.org/concepts/module-federation/)
   - [React Webpack5 module federation](https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71)
   - [Micro Frontends with Module Federation and Angular 12](https://www.youtube.com/watch?v=ZoLzWVi34GE&ab_channel=NG-Poland)
