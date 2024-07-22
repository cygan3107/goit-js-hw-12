var y=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(y(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},n=(t,e,s,c)=>(y(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s);import{a as w,S,s as E,i as h}from"./assets/vendor-d441b171.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const b=40,H="44883181-49eb7880702be53042c4f854e",I="https://pixabay.com/api/";var u,i,d;class A{constructor(){m(this,u,void 0);m(this,i,void 0);m(this,d,void 0);n(this,u,""),n(this,i,1),n(this,d,0)}addPage(){n(this,i,a(this,i)+1)}resetPage(){n(this,i,1)}isMorePage(){return b*(a(this,i)-1)<a(this,d)}get totalHits(){return a(this,d)}get currentPage(){return a(this,i)}set searchQuery(e){n(this,u,e)}async fetchImage(){const e=await w.get(`${I}?key=${H}&q=${a(this,u)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${b}&page=${a(this,i)}`);return n(this,d,e.data.totalHits),e.data}}u=new WeakMap,i=new WeakMap,d=new WeakMap;const g=document.getElementById("search-form"),p=document.querySelector(".gallery"),P=document.querySelector(".loader"),l=new A,M=new S(".gallery a"),O=E.create(p);P.remove("is-hidden");O.partiallyExitViewport(x);g.addEventListener("submit",q);function q(t){t.preventDefault(),p.innerHTML="",l.searchQuery=g.elements.searchQuery.value,g.reset(),$()}function x(){if(l.isMorePage()){P.add("is-hidden"),$();return}}async function $(){try{const t=await l.fetchImage();l.currentPage===1&&l.totalHits!==0&&h.success({message:`Hooray! We found ${l.totalHits} images.`}),R(t.hits)}catch{h.error({message:"Oops! Something went wrong! Try to reload the page!"})}}function R(t){if(!t.length){h.error({message:"Sorry, there are no images matching your search query. Please try again."});return}const e=t.map(({webformatURL:s,largeImageURL:c,tags:r,likes:o,views:f,comments:L,downloads:v})=>`<div class="photo-card">
        <a href="${c}">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${o}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${f}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${L}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${v}
              </p>
            </div></a>
          </div>`).join("");p.insertAdjacentHTML("beforeend",e),M.refresh(),l.addPage()}
//# sourceMappingURL=commonHelpers.js.map
