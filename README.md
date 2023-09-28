# Restaurant Page

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

A mock website for the ice cream parlour "Scoops Ahoy" in Stranger Things. Check out the [live demo here](https://pa-aggarwal.github.io/restaurant-page/).

## Resources Used

* [Font Awesome](https://fontawesome.com/icons) V6.4
* [FontIcon](https://gauger.io/fonticon/) to create a favicon from font awesome icons
* [FontPair](https://www.fontpair.co/) to find fonts that pair well together for headings and regular text
* [Webpack Guides/Docs](https://webpack.js.org/guides/) for loading CSS, images, and fonts into source code files
* [Unsplash](https://unsplash.com/) and [Google Images](https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl) for images of Stranger Things characters/places and Scoops Ahoy images
* [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) for instructions on how to get started with creating a restaurant page

## Local Development

Run the `npm install` command after cloning this repository to your machine to install dependencies.

Scripts in the `package.json` file (run using `npm run <script name>`):

* `build` - runs webpack using the config file `webpack.config.js` to create a distribution bundle
* `watch` - runs webpack in watch mode to see changes to source code files (requires refreshing the browser to see changes)
* `server` - runs [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with live reloading for changes to source code files
* `deploy` - runs git command to update the project's live preview in github pages
