# [React-Redux Shopping Cart](https://rafgarciaa.github.io/react-redux-cart/)
This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

A shopping cart component that utilizes responsive design to provide seamless user-experience to all users across all devices.

## Features & Implementation
Instead of using regular css, I decided to use node-sass. The reasons why I went with node-sass are the following:
+ Scalable
+ Readable
+ Separation of concerns
+ Easier to maintain

### Breakpoints
| Breakpoints       | Width (in px)         | Screenshot   |
| ----------------- |:---------------------:| :------------: |
| Desktop/Laptop    | 1200+                 | <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/Desktop.png">  |
| Tablet            | 600 - 900             | <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/Tablet.png" width="100%" height="50%">   |
| Mobile            | 0 - 600               | <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/Mobile.png" width="40%" height="50%">   |



### Files Structure
Everything is written in a partial in their own respective files and folders. This makes it easier for the next developer to maintain, and to scale as this component/app gets bigger.

<p align="center">
    <img src="https://github.com/rafgarciaa/react-redux-cart/blob/master/assets/readme-img/files.png" height="60%">
</p>

### Cart Modal
The cart modal was implemented with pure CSS. This is achieved by making the element responsible for toggling the modal to be an anchor tag with it's target to be the modal element. See code below.

```html
<a href="#cart-modal" className="cart">
    <i className="fas fa-shopping-cart"></i>
    <h3>Your cart {cartQty > 0 ? `[${cartQty}]` : `is empty`}</h3>
</a>

<div id="cart-modal" className="cart-modal">
    .
    .
    .
    .
</div>
```

The trick is, to give the div element (cart-modal) an ```opacity: 0``` and ```visibility: hidden``` property as it's initial state. When it's clicked the ```&:target``` pseudo selector will activate the given properties inside it, making the modal visible to the end user.

```css
.cart-modal {
    .
    .
    .
    opacity: 0;
    visibility: hidden;
    transition: all .5s;

    &:target {
        opacity: 1;
        visibility: visible;
        z-index: 1;
    }
}
```

The close button for this modal was implemented similarly. The close button itself is an anchor tag with it's target to be the root element to return to the main page. In other cases, this may be changed to a different section of the page so that users are redirected accordingly.

```html
<a href="#root" className="cart-modal__close-button">
    <span className="cart-modal__close-icon cart-modal__close-icon-1">&nbsp;</span>
    <span className="cart-modal__close-icon cart-modal__close-icon-2">&nbsp;</span>
</a>
```

The reason why I went with two span elements here is because I wanted to make two lines diagonally cross each other which essentially makes for a custom close button. To make things fun, this can be animated to rotate in a different direction when the modal closes (see navigation button of my [Natours](https://rafgarciaa.github.io/Natours/) project to understand what I'm talking about).

```css
.cart-modal {
    .
    .

    &__close-icon {
        .
        .
        
        &-1 {
            transform: rotate(135deg);
        }

        &-2 {
            transform: rotate(-135deg);
        }
    }
}
```

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




