!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={header:document.querySelector(".header"),nav:document.querySelector(".nav"),ul:document.querySelector(".navList"),homeSection:document.querySelector(".home"),aboutSection:document.querySelector(".about"),contactsSection:document.querySelector(".contacts")};n.homeSection.insertAdjacentHTML("afterbegin",'<h2 class="homeTitle">Home</h2>');var o=document.createElement("p");o.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit.",document.querySelector(".homeTitle").appendChild(o);function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=n.aboutSection;var u=[{name:"Ferrari",picture:["https://mfair.ua/user/cars/51997/51997-kupit-kabriolet-ferrari-360-modena-spider-f1-odessa-2004-ukraina-20.jpg","https://cdn.motor1.com/images/mgl/0x6J3/s1/ferrari-sf90-stradale.jpg"],price:12e4},{name:"Lamborgini",picture:["https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/Aventador_SVJ_Verde_Compositing_4terzi_00.jpg","https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/Evo/restyle/3_RP---Huracan-Evo-88.jpg"],price:1e5},{name:"Bugatti",picture:["https://auto.24tv.ua/resources/photos/news/640_DIR/202002/1921322c16854-f7c4-4b89-9345-52a0f3ad69d0.jpg?1582197340000","https://topgearrussia.ru/data/topgear/preview/2019-03/06/image-1686-1551902273-1100x619.jpg"],price:2e5},{name:"Lanos",picture:["https://auto.24tv.ua/resources/photos/news/930x523_DIR/201910/1660652d065b5-eb24-44ef-aa68-be74996f3786.jpg?1571928446000","https://static.espreso.tv/uploads/article/2492503/images/im578x383-lanos_autocentre.jpg"],price:300}].map((function(e){var t=e.name,r=e.picture,n=e.price,o=document.createElement("h3");o.textContent=t;var i=document.createElement("div"),c=r.map((function(e){var r=document.createElement("img");return r.setAttribute("src",e),r.setAttribute("alt",t),r.setAttribute("width","200px"),r}));i.append.apply(i,a(c));var u=document.createElement("p");u.textContent=n;var s=document.createElement("li");return s.append(o,i,u),s})),s=document.createElement("ul");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}s.append.apply(s,a(u)),c.append(s);var p=n.contactsSection,m=["Rock","Paper","Scissors"];var f,d,y=function(e){return e.map((function(e){var t=document.createElement("button");return t.textContent=e,t.dataset.key=e,t}))}(m);p.append.apply(p,function(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(y));var b=document.createElement("p");p.append(b),p.addEventListener("click",(function(e){var t,r=Math.round(Math.random()*(m.length-1));console.log(r),f=e.target.dataset.key,d=m[r],console.log("user: ".concat(f," - computer: ").concat(d)),t=f===d?"Все красавчики":"Scissors"===f&&"Paper"===d||"Paper"===f&&"Rock"===d||"Rock"===f&&"Scissors"===d?"User  красавчик":"Computer  красавчик",b.textContent=t}))}]);
//# sourceMappingURL=main.bundle.js.map