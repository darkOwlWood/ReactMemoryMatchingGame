# Memory Matching Game React
A memory matching game made with the React library with a Legend of Zelda thematic

## Demo
Link to the web page: https://pensive-mayer-d495eb.netlify.app/

## Getting Started

### Prerequisites
To install the project you should have :
* Nodejs 12.19.0 
* npm 6.14.8

### Start to use
First, change to the root directory of the project and install all the necessary dependencies and dev-dependencies with the command:
```
npm i
```

#### Development ambient
If you want to start a dev ambient you should be at the root directory and execute the the next command in the console:
```
npm run build:dev-dll
```
After executing the previous command you will notice a new directory called dist, this is where are the React bundles.
Now to run a dev server:
```
npm run build:dev-server
```
After that go head to your web browser and write `localhost:8080` the web page should be up and ready to use.


#### Production ambient
To build a production bundle you can run the next command:
```
npm run build:production
```
After run the previous command all the bundle generated will be in the dist directory, you can put all the content from dist in your web server ready to use.

## Built With
* React 17.0.1
* Babel 7.12.3
* Sass 1.29.0
* Webpack 5.4.0

## External resources
* Font: http://artsyomni.com/hyliaserif

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
