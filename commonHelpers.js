var p=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var c=(t,e,s)=>(p(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},a=(t,e,s,n)=>(p(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);import{a as L,S as v,i as g}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const w=40,I="44883181-49eb7880702be53042c4f854e",S="https://pixabay.com/api/";var u,i,d;class E{constructor(){f(this,u,void 0);f(this,i,void 0);f(this,d,void 0);a(this,u,""),a(this,i,1),a(this,d,0)}addPage(){a(this,i,c(this,i)+1)}resetPage(){a(this,i,1)}get totalHits(){return c(this,d)}get currentPage(){return c(this,i)}set searchQuery(e){a(this,u,e)}async fetchImage(){const e=await L.get(`${S}?key=${I}&q=${c(this,u)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${w}&page=${c(this,i)}`);return a(this,d,e.data.totalHits),e.data}}u=new WeakMap,i=new WeakMap,d=new WeakMap;const H=document.querySelector(".load-more"),h=document.getElementById("search-form"),y=document.querySelector(".gallery"),l=new E,A=new v(".gallery a");h.addEventListener("submit",O);H.addEventListener("click",M);function O(t){t.preventDefault(),y.innerHTML="",l.searchQuery=h.elements.searchQuery.value,h.reset(),b()}async function b(){try{const t=await l.fetchImage();l.currentPage===1&&l.totalHits!==0&&g.success({message:`Hooray! We found ${l.totalHits} images.`}),q(t.hits)}catch{g.error({message:"Oops! Something went wrong! Try to reload the page!"})}}function q(t){if(!t.length){g.error({message:"Sorry, there are no images matching your search query. Please try again."});return}const e=t.map(({webformatURL:s,largeImageURL:n,tags:r,likes:o,views:m,comments:P,downloads:$})=>`<div class="photo-card">
        <a href="${n}">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${o}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${m}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${P}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${$}
              </p>
            </div></a>
          </div>`).join("");y.insertAdjacentHTML("beforeend",e),A.refresh(),l.addPage()}function M(){this.page+=1,b()}
//# sourceMappingURL=commonHelpers.js.map
