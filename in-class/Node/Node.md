# Node and Friends

## What is Node?
Node is a *runtime*, not a language.  Javascript was originally intended to be run in the browser, but Node allows us to run javascript on a server.  Using Node, both our front end code and back end code can be written in the same language.  Very convenient!

## What is npm?
npm stands for Node Package Manager.  This tool allows javascript developers to share their javascript code with each other very easily.  These open source javascript files, or 'packages' can be quickly downloaded into your project using npm.  For a list of available packages, check out their [website](https://www.npmjs.com/)

## what is nvm?
nvm stands for Node Version Manager.  Node and npm are both extremely popular tools, and there are many versions in use.  In development, it's not uncommon for two related projects to use different versions of Node, so having the ability to easily switch between Node versions before running your JavaScript code can be a huge help.  nvm facilitates this, making the switch between Node versions as easy as one or two short commands.  

## Setting up a node project
1. Install Node
2. create a new folder where your node project will live
3. navigate to this new folder in the terminal
4. in the terminal, type `npm init`
   1. respond to the prompts
5. install any dependencies you want with `npm install <name>`.  ex:
   1. `npm install express`
   2. `npm install --save-dev nodemon`
   3. `npm install --save-dev dotenv`
6. check the package.json file to make sure anything you installed is correctly listed under the dependencies or devDependencies sections.
7. create a .gitignore file.  inside this file, put:
   1. node_modules
   2. .env
   3. any other folders or files that you don't want stored on github




[Your First Node.js Web Server](https://www.youtube.com/watch?v=VShtPwEkDD0&ab_channel=WebDevSimplified)
[Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/watch?v=fgTGADljAeg&ab_channel=WebDevSimplified)
[Node.js - build a Web Server - The beginners guide](https://www.youtube.com/watch?v=WRpfuKq-Am8&ab_channel=AtomicCode)