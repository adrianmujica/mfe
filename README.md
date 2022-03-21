# Microfrontend project

On this workshop I'm expose an Angular app shell that loads:
  - HomeComponent from shell app.
  - MFE1 isolated angular app
  - MFE2 isolated react app

On each folder you will find a readme.md explained what I did to build each application and connect it with the shell application.

## Deployment:
  node version: 16.14.0

  - shell app (localhost:5000)
    - npm i
    - ng serve

  - mfe1 app (localhost:5001)
    - npm i
    - ng serve

  - mfe2 app (localhost:3000)
    I had to use yarn because with npm some webpack commands doens't work with the version 16.14.0 of node.
    yarn version: 1.22.18
    - yarn
    - yarn webpack serve 

