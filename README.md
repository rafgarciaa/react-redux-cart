# React-Redux Shopping Cart
This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

A shopping cart component that utilizes responsive design to provide seamless user-experience to all users across all devices.

## Features & Implementation
Instead of using regular css, I decided to use node-sass. The reasons why I went with node-sass are the following:
+ Scalable
+ Readable
+ Separation of concerns
+ Easier to maintain

### Breakpoints
| Breakpoints       | Width (in px)    | Screenshot   |
| ----------------- |:----------------:| ------------ |
| Desktop/Laptop    | 1200+            | <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/Desktop.png" width="40%" height="50%">  |
| Tablet            | 600 - 900        | <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/Tablet.png" width="40%" height="50%">   |
| Mobile            | 0 - 600          | <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/Mobile.png" width="40%" height="50%">   |



### Files Structure
Everything is written in a partial in their own respective files and folders. This makes it easier for the next developer to maintain, and to scale as this component/app gets bigger.

<p align="center">
    <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/files.png" height="60%">
</p>

## Setup
To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):
```
yarn
```

To start a development server, run command:
```
yarn start
```

To edit SASS files, please open a new terminal tab/window and run command
```
yarn compile:sass
```

## Technologies
+ React
+ Redux
+ node-sass




