(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(t,e,n){},190:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(87),o=n(13),u=n(22),i=(n(188),n(91)),d=n(14),l=n(21),s=n(93),m={addedIds:[],quantityById:{}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.addedIds,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":return-1!==t.indexOf(e.productId)?t:[].concat(Object(s.a)(t),[e.productId]);default:return t}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.quantityById,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_CART":var n=e.productId;return Object(d.a)({},t,Object(l.a)({},n,(t[n]||0)+1));default:return t}},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECKOUT_REQUEST":return m;case"CHECKOUT_FAILURE":return e.cart;default:return{addedIds:p(t.addedIds,e),quantityById:f(t.quantityById,e)}}},v=Object(o.c)({byId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RECEIVE_PRODUCTS":return Object(d.a)({},t,e.products.reduce(function(t,e){return t[e.id]=e,t},{}));default:var n=e.productId;return n?Object(d.a)({},t,Object(l.a)({},n,function(t,e){switch(e.type){case"ADD_TO_CART":return Object(d.a)({},t,{inventory:t.inventory-1});default:return t}}(t[n],e))):t}},visibleIds:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RECEIVE_PRODUCTS":return e.products.map(function(t){return t.id});default:return t}}}),_=function(t,e){return t.byId[e]},y=function(t){return t.visibleIds.map(function(e){return _(t,e)})},h=Object(o.c)({cart:E,products:v}),C=function(t){return function(t){return t.addedIds}(t.cart)},g=function(t,e){return function(t,e){return t.quantityById[e]||0}(t.cart,e)},b=function(t,e){return _(t.products,e)},O=function(t){return C(t).reduce(function(e,n){return e+b(t,n).price*g(t,n)},0).toFixed(2)},I=function(t){return C(t).map(function(e){return Object(d.a)({},b(t,e),{quantity:g(t,e)})})},T=n(92),N=function(t,e){return setTimeout(function(){return t(T)},e||100)},j=function(t,e,n){return setTimeout(function(){return e()},n||100)},A=function(t){var e=t.price,n=t.inventory,r=t.title;return a.a.createElement("div",null,a.a.createElement("div",{className:"product__heading"},a.a.createElement("h3",{className:"product__heading-title"},r),a.a.createElement("span",{className:"product__heading-price"},"$",e)),a.a.createElement("div",{className:"product__sub-heading"},n?"".concat(n," remaining"):"Sold Out"))},k=function(t){var e=t.product,n=t.onAddToCartClicked,r="./img/".concat(e.title.toLowerCase(),".png");return a.a.createElement("div",{className:"product",style:{marginBottom:20}},a.a.createElement("img",{className:"product__img",alt:"Product-Img",src:r}),a.a.createElement("div",{className:"product__column"},a.a.createElement(A,{title:e.title,price:e.price,inventory:e.inventory}),a.a.createElement("button",{className:"btn",onClick:n,disabled:e.inventory>0?"":"disabled"},e.inventory>0?"Add to cart":"Sold Out")))},w=function(t){t.title;var e=t.children;return a.a.createElement("div",null,a.a.createElement("div",null,e))},R=Object(u.b)(function(t){return{products:y(t.products)}},{addToCart:function(t){return function(e,n){n().products.byId[t].inventory>0&&e(function(t){return{type:"ADD_TO_CART",productId:t}}(t))}}})(function(t){var e=t.products,n=t.addToCart;return a.a.createElement(w,{title:"Acme Store"},e.map(function(t,e){return a.a.createElement(k,{key:t.id,product:t,onAddToCartClicked:function(){return n(t.id)}})}))}),S=function(t){var e=t.products,n=(t.total,t.onCheckoutClicked,e.length);return a.a.createElement("div",null,a.a.createElement("a",{href:"#cart-modal",className:"cart"},a.a.createElement("i",{className:"fas fa-shopping-cart"}),a.a.createElement("h3",null,"Your cart ",n>0?"[".concat(n,"]"):"is empty")),a.a.createElement("div",{id:"cart-modal",className:"cart-modal"},a.a.createElement("div",{className:"cart-modal__content"},a.a.createElement("a",{href:"#root",className:"cart-modal__close-button"},a.a.createElement("span",{className:"cart-modal__close-icon cart-modal__close-icon-1"},"\xa0"),a.a.createElement("span",{className:"cart-modal__close-icon cart-modal__close-icon-2"},"\xa0")),a.a.createElement("h3",{className:"cart-modal__content-heading"},"Your Cart"),a.a.createElement("img",{className:"cart-modal__content-img",src:"./img/cart.png",alt:"Cart Img"}),a.a.createElement("span",{className:"cart-modal__content-message"},"Please add some products to your cart."))))},D=Object(u.b)(function(t){return{products:I(t),total:O(t)}},{checkout:function(t){return function(e,n){var r=n().cart;e({type:"CHECKOUT_REQUEST"}),j(t,function(){e({type:"CHECKOUT_SUCCESS",cart:r})})}}})(function(t){var e=t.products,n=t.total,r=t.checkout;return a.a.createElement(S,{products:e,total:n,onCheckoutClicked:function(){return r(e)}})}),U=(n(189),function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"heading"},a.a.createElement("h2",{className:"heading__primary"},"Acme Store"),a.a.createElement(D,null)),a.a.createElement(R,null))}),B=[i.a];var q=Object(o.d)(h,o.a.apply(void 0,B));q.dispatch(function(t){N(function(e){t(function(t){return{type:"RECEIVE_PRODUCTS",products:t}}(e))})}),Object(c.render)(a.a.createElement(u.a,{store:q},a.a.createElement(U,null)),document.getElementById("root"))},92:function(t){t.exports=[{id:1,title:"Chronograph",price:500.01,inventory:2},{id:2,title:"Quartz",price:10.99,inventory:10},{id:3,title:"Weekender",price:19.99,inventory:5}]},94:function(t,e,n){t.exports=n(190)}},[[94,1,2]]]);
//# sourceMappingURL=main.25bcadef.chunk.js.map