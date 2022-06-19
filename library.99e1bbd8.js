parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Z52Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderLibraryMarkup=c;const e=document.querySelector(".library"),t=document.querySelector(".watchet-btn"),a=document.querySelector(".queue-btn"),r=document.querySelector(".nav-op");let s=JSON.parse(localStorage.getItem("watched"))||[],n=JSON.parse(localStorage.getItem("queue"))||[];function c(){t.closest(".active-btn")?o(s):o(n)}function i(e){e.target===t&&(t.classList.add("active-btn"),a.classList.remove("active-btn"),o(s=JSON.parse(localStorage.getItem("watched"))||[])),e.target===a&&(a.classList.add("active-btn"),t.classList.remove("active-btn"),o(n=JSON.parse(localStorage.getItem("queue"))||[]))}function o(t){e.innerHTML="";let a=t.map(e=>{const t=e.genres.map(e=>e.name).join(", ");return`<div class="movie-card">\n      <img class="movie" src="https://image.tmdb.org/t/p/w500${e.poster_path}" data-id="${e.id}">\n      <p class="movie-card__title">\n        ${e.title}\n        <div class="movie-card__info-item">\n          <span class="genre">${t} | ${e.release_date.substr(0,4)}</span>\n        </div>\n      </p></div>`}).join("");e.innerHTML=a}r.addEventListener("click",i);
},{}],"nMoD":[function(require,module,exports) {
"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class t{constructor(){e(this,"BASE_URL","https://api.themoviedb.org/3"),e(this,"API_KEY","87f9885ae1efa5e26738121aab64796c"),this.searchQuery="",this.page=1,this.totalPages=null,this.totalResults=null,this.genres={},this.movieId=""}async getTrendMovies(){let e=this.searchQuery?`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${encodeURIComponent(this.searchQuery)}`:`${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}&page=${this.page}`;return await fetch(e).then(e=>{if(404===e.status)throw new Error;return e.json()}).then(e=>(this.totalPages=e.total_pages,this.totalResults=e.total_results,e)).catch(e=>console.log(e))}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get numOfPageGet(){this.page}set numOfPageSet(e){this.page=e}getGenres(){return fetch(`${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`).then(e=>e.ok?e.json():Promise.reject(new Error("Error"))).then(e=>{const t=e.genres.reduce((e,{id:t,name:s})=>({...e,[t]:s}),{});return this.genres=t,t}).catch(e=>console.log(e))}get genresValue(){return this.genres}getSingleMovie(){return fetch(`${this.BASE_URL}/movie/${this.movieId}?api_key=${this.API_KEY}`).then(e=>{if(404===e.status)throw new Error;return e.json()}).then(e=>e).catch(e=>console.log(e))}}const s=new t;var r=s;exports.default=r;
},{}],"KQvi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var t=e(require("./fetchApi"));function e(t){return t&&t.__esModule?t:{default:t}}const l=document.querySelector(".output-js");async function a(){return await t.default.getSingleMovie().then(t=>{const e=t.genres.map(t=>t.name).join(", ");i(t,e)})}function i(t,e){return l.innerHTML=`<img class="modal-content__img"\n\t\t\tsrc="${t.poster_path?"https://image.tmdb.org/t/p/w500"+t.poster_path:"https://expresspost.in///website/images/reporter_image/default.png"}" alt="${t.original_title}" />\n    <div class="wrap">\n      <h2 class="modal-content__title">${t.original_title}</h2>\n      <div class="info-wrap modal-content__info-wrap">\n        <ul class="category-list">\n          <li class="category-list__item">Vote / Votes</li>\n          <li class="category-list__item">Popularity</li>\n          <li class="category-list__item">Original Title</li>\n          <li class="category-list__item">Genre</li>\n        </ul>\n        <ul class="category-value-list modal-content__category-value-list">\n          <li class="category-value-list__item">\n\t\t\t\t\t\t<p class="category-value-list__item_bg-color">${t.vote_average} </p>\n\t\t\t\t\t\t<p class="category-value-list__item_font-color"> / ${t.vote_count} </p> </li>\n          <li class="category-value-list__item">${t.popularity}</li>\n          <li class="category-value-list__item">${t.title}</li>\n          <li class="category-value-list__item">${e}</li>\n        </ul>\n      </div>\n\t\t\t   <h3 class="modal-content__subtitle">About</h3>\n      <p class="modal-content__description">${t.overview}</p>\n      <div class="btn-wrap content__btn-wrap">\n          <button class="btn-wrap__btn active" data-action="watched">add to Watched</button>\n          <button class="btn-wrap__btn " data-action="queue">add to Queue</button>\n        </div>\n    `}
},{"./fetchApi":"nMoD"}],"yGjV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=t(require("./fetchApi"));function t(e){return e&&e.__esModule?e:{default:e}}function a(){let t=[],a=[];localStorage.getItem("watched")&&(t=JSON.parse(localStorage.getItem("watched"))),localStorage.getItem("queue")&&(a=JSON.parse(localStorage.getItem("queue"))),window.addEventListener("click",function(o){e.default.getSingleMovie().then(e=>{if(o.target.closest('[data-action="watched"]')){const a=t.find(t=>t.id===e.id);a||(t.push(e),localStorage.setItem("watched",JSON.stringify(t)))}if(o.target.closest('[data-action="queue"]')){const t=a.find(t=>t.id===e.id);t||(a.push(e),localStorage.setItem("queue",JSON.stringify(a)))}})})}
},{"./fetchApi":"nMoD"}],"I9BA":[function(require,module,exports) {
"use strict";var e=o(require("./js/markup-library")),t=o(require("./js/markup-modal")),r=o(require("./js/local-storage")),a=o(require("./js/fetchApi"));function o(e){return e&&e.__esModule?e:{default:e}}const d=document.querySelector(".library"),n=document.querySelector(".backdrop-modal");function l(e){if(window.addEventListener("keydown",c),e.target.closest(".movie-card")){let o=e.target.dataset.id;a.default.movieId=o,(0,t.default)(),n.style.display="block",(0,r.default)()}}function s(e){(e.target.closest(".modal-content__close-btn")||"backdrop-modal"===e.target.className)&&(n.style.display="none")}function c(e){"Escape"===e.code&&(n.style.display="none",window.removeEventListener("keydown",c))}d.addEventListener("click",l),n.addEventListener("click",s);
},{"./js/markup-library":"Z52Q","./js/markup-modal":"KQvi","./js/local-storage":"yGjV","./js/fetchApi":"nMoD"}]},{},["I9BA"], null)
//# sourceMappingURL=/filmoteka_v2/library.99e1bbd8.js.map