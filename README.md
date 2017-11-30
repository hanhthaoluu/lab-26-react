401 JS --  Lab 26 Cowsay
===

## My Notes & Instructions:

#Install Dependencies

npm i -S webpack webpack-dev-server html-webpack-plugin node-sass sass-loader resolve-url-loader css-loader extract-text-webpack-plugin babel-core babel-loader babel-preset-react babel-preset-env babel-plugin-transform-object-rest-spread react react-dom

npm init -y

https://www.npmjs.com/package/cowsay
https://www.npmjs.com/package/Faker
npm install --save cowsay Faker

*run this command in the terminal:*
npm run watch  

*open the web browser*
localhost:3000

*React App - Core dependencies*

webpack = the bundler
webpack-dev-server = similar to nodemon / reloads the browser
html-webpack-plugin = generates the right (dynamic and different) script and css tags for the index.html file
sass-loader = turns SASS into CSS   
resolve-url-loader = allows relative paths in the SASS code  

css-loader = turns CSS code into a JS object that webpack can understand
extract-text-webpack-plugin = takes CSS code and turns it into a separate css bundle  
babel-core = transforms ES6 code into ES5
babel-loader = hooks babel up to webpack
https://www.npmjs.com/package/babel-preset-react
babel-preset-react = babel preset for all React plugins.  This preset includes the following plugins/presets: preset-flow; syntax-jsx; transform-react-jsx; transform-react-display-name
https://www.npmjs.com/package/babel-preset-env
babel-preset-env = a babel preset that compiles ES2015 + down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments
https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread
babel-plugin-transform-object-rest-spread = this plugin allows Babel to transform rest properties for object destructuring assignment and spread properties for object literals.
react = front end magic; the only thing that will end up in the browser, besides assets
https://www.npmjs.com/package/react-dom
react-dom = turns react into a browser rendering engine. This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm





## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will be able to configure webpack to compile JS into a bundle
* Students will be able to configure webpack to compile sass into a bundle
* Students will be able to configure babel to transpile JSX and ES6 to ES5 javscript
* Students will be able to create and render react components to the DOM
* Students will be able to add event listeners to react components
* Students will be able to update react component state

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.babelrc** -- with all dependencies and dev-dependencies
* **package.json** -- with all dependencies and dev-dependencies
* **yarn.lock** -- with the yarn lockfile
* **webpack.config.js** -- with webpack config
* **src/** -- conating the froned code
* **src/main.js** -- containing the entire app
* **src/style** -- containing your sass
* **src/style/main.scss** -- containing the froned code

#### Feature Tasks  
Create the following component
###### App
* Should contain the entire application's view and state
* Should have a property on the state called content
* Should create a view with the following display
  * A heading with the title "Generate Cowsay Lorem"
  * A Button that displays "click me"
    * `onClick` the button should generate new content on the app state using cowsay and faker
  * A pre tag that displays the App's state's content

####  Documentation  
Write a description of the project in your README.md

#### Bonus 1pt
* add a select menu that enables you to change the type of cowfile currently being used
